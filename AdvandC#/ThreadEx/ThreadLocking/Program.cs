using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace ThreadLocking
{
    class Program
    {
        static int amount = 0;
        static object syncObj = new object();
        static void Main(string[] args)
        {
            Thread t1 = new Thread(IncreaseAmount);
            Thread t2 = new Thread(DecreaseAmount);

            t1.Start();
            t2.Start();
            Console.Read();
        }
        static void IncreaseAmount()
        {
            for (int i = 0; i < 100; i++)
            {
                lock (syncObj)
                {
                    amount++;
                    if (amount > 0)
                    {
                        Thread.Sleep(1);
                        Console.Write(amount + "\t");
                    }
                }
            }
        }
        static void DecreaseAmount()
        {
            for (int i = 0; i < 100; i++)
            {
                lock (syncObj)
                {
                    amount--;
                }
            }
        }
    }
}
