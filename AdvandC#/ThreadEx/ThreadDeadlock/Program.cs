using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;

namespace ThreadDeadlock
{
    class Program
    {
        static object syncObj1 = new object();
        static object syncObj2 = new object();
        static void Main(string[] args)
        {
            Thread t1 = new Thread(Foo);
            
            Thread t2 = new Thread(Bar);

            t1.Start();
            t2.Start();
        }
        static void Foo()
        {
            Console.WriteLine("Inside Foo method");
            lock (syncObj1)
            {
                Console.WriteLine("Foo: lock(syncObj1)");
                Thread.Sleep(100);
                lock (syncObj2)
                {
                    Console.WriteLine("Foo: lock(syncObj2)");
                }
            }

        }
        static void Bar()
        {
            Console.WriteLine("Inside Bar method");
            lock (syncObj2)
            {
                Console.WriteLine("Bar: lock(syncObj2)");
                Thread.Sleep(100);
                lock (syncObj1)
                {
                    Console.WriteLine("Bar: lock(syncObj1)");
                }
            }
        }
    }
}
