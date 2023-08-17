using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Product3._2
{
    class Product
    {
        public string IdProduct { get; set; }
        public string NameProduct { get; set; }
        public Producer producer { get; set; }

        public Product()
        {
        }

        public Product(string idProduct, string nameProduct, Producer producer)
        {
            IdProduct = idProduct;
            NameProduct = nameProduct;
            this.producer = producer;
        }
        Producer p = new Producer();
        public void Insert()
        {
            Console.Write("Nhap ma hang: ");
            IdProduct = Console.ReadLine();
            Console.Write("Nhap ten hang: ");
            NameProduct = Console.ReadLine();
            Console.WriteLine("Nhap nsx: ");
            p.Insert();
            producer = p;
        }

        public void Display()
        {
            Console.WriteLine("Ma hang: " + IdProduct);
            Console.WriteLine("Ten hang: " + NameProduct);
            Console.Write("Nha sx: ");
            producer.Diplay();
        }
    }
}
