using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Product3._2
{
    class Program
    {
        static void Main(string[] args)
        {
            Product p = new Product();
            Console.Write("Nhap thong tin hang: ");
            p.Insert();
            Console.WriteLine("-------------------------------------");
            Console.Write("Danh sach hang: ");
            p.Display();
            Console.Read();
        }
    }
}
