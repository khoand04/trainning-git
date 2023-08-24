using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;


namespace ThreadEx
{
    class Program
    {
        static object object1 = new object();
        static object object2 = new object();
        class SoNguyenTo
        {
            public bool CheckSNT(int n)
            {
                if (n < 2)
                {
                    return false;
                }
                for (int i = 2; i <= Math.Sqrt(n); i++)
                {
                    if (n % i == 0)
                    {
                        return false;
                    }

                }
                return true;
            }
            public void ShowSNT()
            {
                for (int i = 1; i <= 1000; i++)
                {
                    if (CheckSNT(i))
                    {
                        Console.Write("{0,5}N", i);
                        Thread.Sleep(100);
                    }
                }
            }
        }
        class SoChinhPhuong
        {
            public bool CheckSCP(int n)
            {
                for (int i = 1; i <= Math.Sqrt(n); i++)
                {
                    if (i * i == n)
                    {
                        return true;
                    }

                }
                return false;
            }
            public void ShowSCP()
            {
                for (int i = 1; i <= 1000; i++)
                {
                    if (CheckSCP(i))
                    {
                        Console.Write("{0,5}P", i);
                        Thread.Sleep(100);
                    }
                }
            }
        }
        static void Main(string[] args)
        {
            
            SoNguyenTo n = new SoNguyenTo();
            Thread t1 = new Thread(n.ShowSNT);
            t1.Start();
            t1.Join();
            SoChinhPhuong p = new SoChinhPhuong();
            Thread t2 = new Thread(p.ShowSCP);
            t2.Start();
            Console.Read();
        }
    }
}
