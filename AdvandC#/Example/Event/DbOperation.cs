using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Event
{
    delegate void DBOptDelegate();
    class DbOperation
    {
        public event DBOptDelegate DataInserted;
        public event DBOptDelegate DataPrepared;
        
        public void Insert()
        {
            if (DataPrepared != null) DataPrepared();
            Console.WriteLine("Insert data into database");
            if (DataInserted != null) DataInserted();
        }
    }
}
