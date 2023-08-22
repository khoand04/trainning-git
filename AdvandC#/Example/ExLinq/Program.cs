using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExLinq
{
    class Program
    {
        static void Main(string[] args)
        {
            var cars = Car.Cars;
            // query syntax 
            var list = from item in cars where item.YearOfManufacture >= 1990 select item;
            // method syntax
            // var list = cars.Where(f => f.YearOfManufacture >= 1990);
            foreach (var item in list)
            {
                Console.WriteLine(item);
            }
            Console.Read();
        }
    }
}
