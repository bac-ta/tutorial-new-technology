using System;
using System.Collections.Generic;

namespace demo_first_webcoreASP.Net
{
    class Rectangle
    {
        private double length;
        private double width;

        public void Acceptdetails()
        {
            length = 4.5;
            width = 3.5;
        }

        public double GetArea()
        {
            return length * width;
        }

        public void Display()
        {
            Console.WriteLine("Length: {0}", length);
            Console.WriteLine("Width: {0}", width);
            Console.WriteLine("Area: {0}", GetArea());
            var listDemo = new List<int>();
            listDemo.Add(12);
            var map = new Dictionary<string, int>();
            map["bac"] = 1;
            map["phuong"] = 2;
            Console.WriteLine(map["phuong"]);
        }
    }

    class ExecuteRectangle
    {
        static void Main(string[] args)
        {
            Rectangle rectangle = new Rectangle();
            rectangle.Acceptdetails();
            rectangle.Display();
            String demo = "demo";
            string demo2 = "demo2";
            Console.WriteLine(demo);
            Console.WriteLine(demo2);
            Console.WriteLine("Entropy");
            Console.WriteLine("Entropy 2");
            Console.WriteLine("Entropy 3");
            Console.WriteLine("Entropy 4");
            Console.ReadLine();
        }
    }
}