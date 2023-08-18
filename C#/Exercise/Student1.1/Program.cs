using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student1._1
{
    class Program
    {
        static void Main(string[] args)
        {
            Student a = new Student();
            Console.WriteLine("Nhap thông tin sinh viên ");
            a.Nhap();
            a.Xuat();
            Student b = new Student();
            Console.WriteLine("Nhap thông tin sinh viên ");
            b.Nhap();
            b.Xuat();
            Console.Read();
        }
    }
}
