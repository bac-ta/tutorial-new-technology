using System;

namespace demo_first_webcoreASP.Net
{
    public class InheritanceApplication
    {
        class Shape
        {
            protected int width;
            protected int heigh;

            public void setWidth(int width)
            {
                this.width = width;
            }

            public void setHeigh(int heigh)
            {
                this.heigh = heigh;
            }

            public Shape(int width, int heigh)
            {
                this.width = width;
                this.heigh = heigh;
            }

            public Shape()
            {
            }
        }

        class Rectange : Shape
        {
            public int getArea()
            {
                return width * heigh;
            }
        }

        class RectangeTester
        {
            static void Main(string[] args)
            {
                Rectange rectange = new Rectange();
                rectange.setWidth(5);
                rectange.setHeigh(7);
                // Print the area of the object.
                Console.WriteLine("Total area: {0}", rectange.getArea());
            }
        }
    }
}