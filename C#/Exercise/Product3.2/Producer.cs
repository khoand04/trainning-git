using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Product3._2
{
    class Producer
    {
        public string IdProducer { get; set; }
        public string NameProducer { get; set; }
        public string Address { get; set; }

        public void Insert()
        {
            Console.Write("Nhap ma nsx: ");
            IdProducer = Console.ReadLine();
            Console.Write("Nhap ten nsx: ");
            NameProducer = Console.ReadLine();
            Console.Write("Nhap dia chi: ");
            Address = Console.ReadLine();
        }

        public void Diplay()
        {
            Console.WriteLine("{0}, {1}, {2}",IdProducer,NameProducer,Address);
        }
    }
}
