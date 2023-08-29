using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Event
{
    public delegate void PrintDetails();
   
    class Program
    {
        public event PrintDetails Print;
        public void Show()
        {
            Console.WriteLine("Hay hien thi dong nay ra man hinh");
        }
        static void Main(string[] args)
        {
            Program p = new Program();
            p.Print += new PrintDetails(p.Show);
            p.Print();
            DbOperation db = new DbOperation();
            db.DataInserted += handleInserted;
            db.DataPrepared += handlePrepared;
            db.Insert();
            Console.Read();
        }

        static void handleInserted()
        {
            Console.WriteLine("Thank for your inserted data");
        }

        static void handlePrepared()
        {
            Console.WriteLine("Prepare data before inserting");
        }
        
    }
}
