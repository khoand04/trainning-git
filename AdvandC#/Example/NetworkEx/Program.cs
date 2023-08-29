using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;

namespace NetworkEx
{
    class Program
    {
        static void Main(string[] args)
        {
            // C# Uri
            string url = "https://xuanthulab.net/lap-trinh/csharp/?page=3#acff";
            var uri = new Uri(url);
            var uritype = typeof(Uri);
            uritype.GetProperties().ToList().ForEach(property => {
                Console.WriteLine($"{property.Name,15} {property.GetValue(uri)}");
            });
            Console.WriteLine($"Segments: {string.Join(",", uri.Segments)}");
            

            var hostName = Dns.GetHostName();
            Console.WriteLine($"Hostname: {hostName}");
            Console.Read();
        }
    }
}
