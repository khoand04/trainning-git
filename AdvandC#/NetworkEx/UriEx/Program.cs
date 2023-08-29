using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;

namespace UriEx
{
    class Program
    {
        static void Main(string[] args)
        {
            Uri resource =new Uri("http://webcode.me:80/");
            Uri resource2 = new Uri("http://webcode.me/index.html");
            Console.WriteLine(resource.Port);
            Console.WriteLine(resource.Host);
            Console.WriteLine("-----------------------");
            
            Console.WriteLine(resource2.Port);
            Console.WriteLine(resource.IsBaseOf(resource2));
            Uri relative = resource.MakeRelativeUri(resource2);
            Console.WriteLine(relative.IsAbsoluteUri);
            Console.WriteLine(relative.ToString());
            Console.Read();
        }
    }
}
