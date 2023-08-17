using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee3._1
{
    class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Date dateNS { get; set; }

        public Employee()
        {
        }

        public Employee(int id, string name, Date dateNS)
        {
            Id = id;
            Name = name;
            this.dateNS = dateNS;
        }
        Date d = new Date();
        public void InsertEmployee()
        {
            Console.Write("Nhap thong tin nhan su: ");
            Console.Write("Nhap ma nhan su: ");
            Id = int.Parse(Console.ReadLine());
            Console.Write("Nhap ten nhan su: ");
            Name =Console.ReadLine();
            Console.Write("Nhap ngay vao lam cua nhan su: ");
            d.InsertDate();
            dateNS = d;
            Console.WriteLine("------------");
        }
        
        public void DisplayEmployee()
        {
            Console.WriteLine("Ma Ns: " + Id);
            Console.WriteLine("Ten NS: "+Name);
            Console.Write("Ngay vao lam: ");
            dateNS.DisplayDate();
            Console.Read();
        }
    }
}
