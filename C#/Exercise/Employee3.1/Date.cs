using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Employee3._1
{
    class Date
    {
        public int Day { get; set; }
        public int Month{get;set;}
        public int Year { get; set; }

        public Date()
        {
        }

        public Date(int day, int month, int year)
        {
            Day = day;
            Month = month;
            Year = year;
        }
        public void InsertDate()
        {
            Console.Write("Nhap ngay: ");
            Day = int.Parse(Console.ReadLine());
            Console.Write("Nhap thang: ");
            Month = int.Parse(Console.ReadLine());
            Console.Write("Nhap nam: ");
            Year = int.Parse(Console.ReadLine());
        }
        public void DisplayDate()
        {
            Console.WriteLine("{0:D2}/{1:D2}/{2:D4}", Day, Month, Year);
        }
    }
}
