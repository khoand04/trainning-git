using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee3._1
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee e = new Employee();
            e.InsertEmployee();
            e.DisplayEmployee();
            Console.Read();
        }
    }
}
