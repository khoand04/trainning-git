using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SquareDelegate
{
   public delegate void HCN(int a, int b);
    public delegate void  ShowMessage(string s);
    class Match
    {
        public  void Dientich(int a, int b)
        {
            Console.WriteLine("Dien tich hinh chu nhat x = {0}", a * b);
        }
        public  void Chuvi(int a, int b)
        {
            Console.WriteLine("Chu vi hinh chu nhat x = {0}", (a+b)* 2);
        }
    }
    class Program
    {
        static void Message(string s)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(s);
            Console.ResetColor();
        }
        static int Acreage(int a, int b)
        {
          return a*b;
        }
        static int Perimeter(int a, int b)
        {
            return (a+b)*2;
        }
        
        static void HCN(int a, int b , ShowMessage show)
        {
            int cv = (a + b)*2;
            show.Invoke("Chu vi hinh chu nhat la: " + cv);
        }
        //Writing Plug-in Methods with Delegates
        //Multicast delegate
        static void SampleMethod(HCN hcn, int a, int b) { hcn(a, b); }
        static void Main(string[] args)
        {
            Match match = new Match();
            ShowMessage show = new ShowMessage(match.Chuvi);
            SampleMethod(match.Chuvi, 5, 4);
            SampleMethod(match.Dientich, 5, 4);
            Func<int, int,int> tinhtoan;

           tinhtoan = Acreage;
           Console.WriteLine("Dien tich cua hinh chu nhat la: " + tinhtoan(6, 5));
           tinhtoan +=Perimeter;
           Console.WriteLine("Chu vi cua hinh chu nhat la: " + tinhtoan(6, 5));
           HCN(6, 2, Message);
           Console.Read();
        }
    }
}
