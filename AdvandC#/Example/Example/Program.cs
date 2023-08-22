using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace Delegate
{
    public delegate void ShowLog(string message);
    class Program
    {
        static void Info(string s)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(s);
            Console.ResetColor();
        }
        static void Warning(string s)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine(s);
            Console.ResetColor();
        }
        static void CallBackMethod(string message, ShowLog callback)
        {
            Console.WriteLine("Call back method: " + message);
            callback(message);
        }
        static void DisplayMessage(string message)
        {
            Console.WriteLine("Display Message: " + message);
        }

        static void Tong(int a, int b, ShowLog log)
        {
            int kq = a + b;
            log?.Invoke("Tong la " + kq);
        }
        static int Hieu(int a, int b) => a - b;
        static void Main(string[] args)
        {
            // Sử dụng delegate gọi tới các hàm khác nhau
            ShowLog log = null;
            log = Info;
            log += Warning;
            log?.Invoke("Xin chao by Invoke");
            // Sử dung delegate tạo ra 1 call back
            CallBackMethod("Hello", DisplayMessage);
            // Acction
            Action action; //tương đương kbao 1 delegate void Kieu();
            Action<int, string> action1;//tương đương kbao 1 delegate void Kieu(string s);
            Action<string> action2;//tương đương kbao 1 delegate void Kieu(string s);
            action2 = Info;
            action2.Invoke("Xin chao from Action");
            // Sử dụng delegate trong Lamba Expresstion
            Func<int> f1;
            Func<int, int,int> tinhtoan;
            int a = 10;
            int b = 1;
            tinhtoan = Hieu;
            Console.WriteLine("Hieu la " + tinhtoan(a,b));
            Tong(10, 1, Warning);
            Console.Read();


        }
    }
}
