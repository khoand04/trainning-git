using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RECTANGLE1_2
{
    class HCN
    {
        public int D { get; set; }
        public int R { get; set; }

        public void Nhap()
        {
            Console.Write("Nhap chiều dài: ");
            D = int.Parse(Console.ReadLine());
            Console.Write("Nhap chiều rộng: ");
            R = int.Parse(Console.ReadLine());
        }
        public void Ve()
        {
            for (int i = 1; i <= R; i++)
            {
                // In canh dai
                for (int j = 1; j <= D; j++)
                {
                    if ((j == 1) || (j == D) || (i == 1) || (i == R))
                    {
                        Console.Write('*');
                    }
                    else
                    {
                        Console.Write(' ');
                    }
                }
                Console.WriteLine();
            }
            Console.ReadLine();
        }
    }
}
        