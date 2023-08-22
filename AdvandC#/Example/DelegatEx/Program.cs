using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DelegatEx
{
    public delegate T Tranformer<T>(T arg);
    public class Util
    {
        // Generic Delegate Types
        /*public static void Tranform<T>(T[] values, Tranformer<T> t)
        {
            for (int i = 0; i < values.Length; i++)
            {
                values[i] = t(values[i]);
            }
        }*/
        //The Func and Action Delegates
        /*public static void Trans<T>(T[] values, Func<T, T> transformer)
        {
            for (int i = 0; i < values.Length; i++)
                values[i] = transformer(values[i]);
        }*/

        // Delegates Versus Interfaces
        public static void TransformAll(int[] values, ITranformer t)
        {
            for (int i = 0; i < values.Length; i++)
                values[i] = t.Transform(values[i]);
        }
        
    }
    class Squarer : ITranformer
    {
        public int Transform(int x) => x * x;
    }
    class Program
    {
        static void Main(string[] args)
        {
            int[] values = { 1, 2, 3 };
            int[] values1 = { 4, 5, 6 };
            /*Util.Tranform(values, Square);
            foreach (int i in values)
            {
                Console.WriteLine(i);
            }*/
            /*Util.Trans(values1, Square);
            foreach (int i in values1)
            {
                Console.WriteLine(i);
            }*/

            Util.TransformAll(values, new Squarer());
            foreach (int i in values)
                Console.WriteLine(i);
            Console.Read();
        }
        // static int Square(int x) => x * x;
    }
}
