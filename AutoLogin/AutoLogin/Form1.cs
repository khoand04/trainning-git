using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AutoLogin
{
    public partial class Form1 : Form
    {
        HttpWebRequest httpWebRequest;
        public Form1()
        {
            InitializeComponent();
        }

        private void btnGetData_Click(object sender, EventArgs e)
        {
            // get login page
            var loginPage = Request("https://thepizzacompany.vn/login", "Get", null);
            
            // cat html to get __RequestVerificationToken
            string[] spl = loginPage.Split(new string[] { "__RequestVerificationToken" }, StringSplitOptions.RemoveEmptyEntries);

            string token = spl[1].Split(new string[] { "value=", "/>" }, StringSplitOptions.RemoveEmptyEntries)[1].Replace("\"", "").Trim();
            // https://analytics.tiktok.com/api/v2/pixel/act
            // 
            // { "message_id":"messageId-1693305715553-9911832003575","event_id":"","is_onsite":false,"timestamp":"2023-08-29T10:41:55.553Z","context":{ "ad":{ "sdk_env":"external","jsb_status":2},"user":{ "anonymous_id":"QcG8JMQWyovUPTj4VqUCMIMuRbU"},"pixel":{ "code":"C3LTV833G487IS978FKG","runtime":"1","codes":"C3LTV833G487IS978FKG|C2D2TAIQV140ORDIHT80"},"page":{ "url":"https://thepizzacompany.vn/login?returnUrl=%2F","referrer":"https://thepizzacompany.vn/"},"library":{ "name":"pixel.js","version":"2.1.33"},"device":{ "platform":"pc"},"session_id":"c29dc940-461d-11ee-99af-08c0eb1fcd16::JbVQ6pfP3oLscuKO2TSq","pageview_id":"pageId-1693305120048-6753124230490","variation_id":"test_3","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36","index":36},"_inspection":{ },"properties":{ },"action":"Click","auto_collected_properties":{ "trigger_element":{ "tag":"INPUT","attributes":{ "class":"mr-2","id":"accept-consent","name":"accept-consent","type":"checkbox"},"inner_text":"","xpath":"/HTML/body[1]/div[10]/div[4]/div[3]/div[1]/div[1]/div[1]/section[1]/div[1]/div[1]/form[1]/div[1]/div[6]/div[1]/div[1]/input[1]","num_child_buttons":0,"timestamp":"2023-08-29T10:41:55.553Z","position":{ "x":599,"y":570.638916015625} } } }
            httpWebRequest.ContentType = "text/plain;charset=UTF-8";
            Request("https://analytics.tiktok.com/api/v2/pixel/act", "POST", null);

            string Username = "0924463672";
            string Password = "HUU@YEJ5ehuR6D";
            string body = String.Format("Username={0}&Password={1}&accept-consent=on&buttonCheckoutLogin=&__RequestVerificationToken={2}", Username, WebUtility.UrlEncode(Password), token);
            httpWebRequest.ContentType = "application/x-www-form-urlencoded";
            var loggedPage = Request("https://thepizzacompany.vn/login?returnurl=%2F", "POST", body);
        }

        private string Request(string url, string method, string body)
        {
            httpWebRequest = (HttpWebRequest)WebRequest.Create(url);
            httpWebRequest.CookieContainer = new CookieContainer();
            httpWebRequest.CookieContainer.Add(new CookieCollection());
            // httpWebRequest.Headers.Add("Accept-Encoding", "gzip, deflate, br");
            httpWebRequest.Headers.Add("Accept-Language", "en-US,en;q=0.9,vi;q=0.8");
            httpWebRequest.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36";
            httpWebRequest.Method = method;
            httpWebRequest.KeepAlive = true;
            httpWebRequest.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7";

            if (httpWebRequest.Method == "POST")
            {


                byte[] byteArray = Encoding.UTF8.GetBytes(body);
                httpWebRequest.ContentLength = byteArray.Length;
                Stream newStream = httpWebRequest.GetRequestStream(); //open connection
                newStream.Write(byteArray, 0, byteArray.Length); // Send the data.
                newStream.Close();
            }
            HttpWebResponse response = (HttpWebResponse)httpWebRequest.GetResponse();
            using (StreamReader stream = new StreamReader(response.GetResponseStream()))
            {
                string responseString;
                responseString = stream.ReadToEnd();

                return responseString;
            }
        }

    }
}
