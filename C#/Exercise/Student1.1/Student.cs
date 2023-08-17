using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student1._1
{
    class Student
    {
        string id, name;
        int age;
        float mark;
        public string Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public int Mark { get; set; }
        public Student()
        {
        }

        public Student(string id, string name, int age, int mark)
        {
            this.id = id;
            this.name = name;
            this.age = age;
            this.mark = mark;
        }


        public void Nhap()
        {
            Console.Write("Nhap id sinh vien: ");
            id = Console.ReadLine();
            Console.Write("Nhap ten sinh vien: ");
            name = Console.ReadLine();
            Console.Write("Nhap tuoi sinh vien: ");
            age = int.Parse(Console.ReadLine());
            Console.Write("Nhap diem sinh vien: ");
            mark = int.Parse(Console.ReadLine());
            Console.WriteLine("------------");
        }

        public void Xuat()
        {
            Console.WriteLine("Ma so: " + id);
            Console.WriteLine("Ho va ten:" + name);
            Console.WriteLine("Tuoi:" + age);
            Console.WriteLine("Diem:" + mark);

        }
    }
}
