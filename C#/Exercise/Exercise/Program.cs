using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HangHoa1_3

{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine("Nhap danh sach hang hoa");
            int n = int.Parse(Console.ReadLine());
            HangHoa[] hanghoa;
            hanghoa= new HangHoa[n];
            for(int i = 0; i < n; i++)
            {
                hanghoa[i] = new HangHoa();
                Console.WriteLine("Nhap thong tin hang hoa "+(i+1));
                hanghoa[i].Nhap();
            }
            Console.WriteLine("Danh sach hang hoa");
            for (int j = 0; j < n; j++)
            {
                Console.WriteLine("Thong tin hang hoa " + (j + 1));
                hanghoa[j].Xuat();
            }

            Console.Read();

        }
    }
}
