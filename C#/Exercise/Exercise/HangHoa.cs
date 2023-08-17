using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HangHoa1_3
{
    class HangHoa
    {
        public string Mahang { get; set; }
        public string Tenhang { get; set; }
        public float Dongia { get; set; }
        public int Soluong { get; set; }

        public HangHoa()
        {
        }

        public HangHoa(string mahang, string tenhang, float dongia, int soluong)
        {
            Mahang = mahang;
            Tenhang = tenhang;
            Dongia = dongia;
            Soluong = soluong;
        }

        public void Nhap()
        {
            Console.Write("Nhap ma hang: ");
            Mahang = Console.ReadLine();
            Console.Write("Nhap ten hang: ");
            Tenhang = Console.ReadLine();
            Console.Write("Nhap don gia: ");
            Dongia = float.Parse(Console.ReadLine());
            Console.Write("Nhap so luong: ");
            Soluong = int.Parse(Console.ReadLine());
            Console.WriteLine("------------");
        }

        public void Xuat()
        {
            Console.WriteLine("Ma hang: {0}, ten hang: {1}, don gia: {2},so luong: {3} ", Mahang, Tenhang, Dongia, Soluong);
        }
    }
}
