using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileStreamEx
{
    class Program
    {
        static void Main(string[] args)
        {
            // Namespace System.IO có nhiều lớp khác nhau, được sử dụng để thực hiện những thao tác với file,
            // như tạo và xóa file, đọc và ghi một file, đóng một file
            //StreamWriter: Ghi văn bản
            FileStream fs = new FileStream("data1.txt", FileMode.Create, FileAccess.ReadWrite);
            //Dùng để ghi các ký tự tới một stream
            StreamWriter sWriter = new StreamWriter(fs);
            sWriter.Write("Hello World");
            sWriter.Flush();
            fs.Close();
            //StreamReader: Đọc văn bản
            fs = new FileStream("data1.txt", FileMode.OpenOrCreate, FileAccess.Read);
            // Dùng để đọc các ký tự từ một byte stream
            StreamReader sReader = new StreamReader(fs);
            var str = sReader.ReadToEnd();
            Console.WriteLine(str);
            fs.Close();
            //BinaryWriter
            using (FileStream fs2 = new FileStream("data2.txt", FileMode.Create, FileAccess.ReadWrite))
            {
                // Ghi dữ liệu gốc trong định dạng nhị phân
                BinaryWriter bWriter = new BinaryWriter(fs2);
                bWriter.Write(309);
                bWriter.Flush();
            }


            //BinaryReader dùng using block
            using (var fs2 = new FileStream("data2.txt", FileMode.Open, FileAccess.Read))
            {
                //Đọc dữ liệu gốc (primitive data) từ một luồng nhị phân (binary stream)
                BinaryReader bReader = new BinaryReader(fs2);
                var i = bReader.ReadInt32();
                Console.WriteLine(i);
            }

            // File.WriteAllText
            string newfile = "newfile.txt";
            string content = "Hello everyone, have a good day";
            File.WriteAllText(newfile, content);
            // File.ReadAllText
            string readcontent = File.ReadAllText(newfile);
            Console.WriteLine(readcontent);
            // File.AppendAllLines
            string newfile1 = "newfile1.txt";
            string[] content1 = { "Hi line 1", "line 2", "line 3", "line 4" };
            File.AppendAllLines(newfile1,content1);
            //
            string[] arrContent = File.ReadAllLines(newfile1);
            Console.WriteLine("Content follow line: ");
            foreach(string str1 in arrContent)
            {
                Console.WriteLine(str1);
            }
            // File Move
            string path1 = "newfile.txt";
            string path2 = @"newfolder\movefile.txt";
            // File.Move(path1, path2);

            // File Copy
            string path3 = @"newfolder\movefile.txt";
            string path4 = @"newfolder\movefile_copy.txt";
            // File.Copy(path3, path4);
            // File Delete
            // File.Delete(path4);
            Console.Read();
        }
    }
}
