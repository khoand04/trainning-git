using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

namespace TcpClientEx
{
    class Program
    {
        static void Main(string[] args)
        {
            new Thread(Server).Start(); 
            Thread.Sleep(200);
            Client();
            Console.Read();
        }
        static void Client()
        {
            using (TcpClient client = new TcpClient("localhost", 51111))
            using (NetworkStream n = client.GetStream())
            {
                BinaryWriter w = new BinaryWriter(n);
                Console.WriteLine("Say Hi to Server");
                string say2 = Console.ReadLine();
                w.Write(say2);
                w.Flush();
                Console.WriteLine(new BinaryReader(n).ReadString());
            }
        }
        static void Server() 
        {
            TcpListener listener = new TcpListener(IPAddress.Any, 51111);
            listener.Start();
            using (TcpClient c = listener.AcceptTcpClient())
            using (NetworkStream n = c.GetStream())
            {
                string msg = new BinaryReader(n).ReadString();
                BinaryWriter w = new BinaryWriter(n);
                w.Write("Client say: "+msg);
                w.Flush(); 
            } 
            listener.Stop();
        }

    }
}
