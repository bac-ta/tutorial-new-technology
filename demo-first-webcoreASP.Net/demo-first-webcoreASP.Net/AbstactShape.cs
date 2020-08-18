using System;

namespace demo_first_webcoreASP.Net
{
    public abstract class AbstactShape
    {
        public abstract int GetArea();
    }

    class Square : AbstactShape
    {
        private int side;

        public Square(int side)
        {
            this.side = side;
        }

        public override int GetArea()
        {
            return side * side;
        }

        static void Main(string[] args)
        {
            var sq = new Square(24);
            Console.WriteLine("Area of the square {0} ", sq.GetArea());
        }
    }

    abstract class DemoVirtual
    {
        public void StartEngine()
        {
        }

        public virtual int Drive(int miles, int speed)
        {
            return 0;
        }

        public virtual int Drive(TimeSpan timeSpan, int speed)
        {
            return 1;
        }
    }

    class DemoVirtualImpl : DemoVirtual

    {
        public string FirstName { get; set; }

        public override int Drive(int miles, int speed)
        {
            return 100;
        }

        public override int Drive(TimeSpan timeSpan, int speed)
        {
            return 200;
        }

        static void Main(string[] args)
        {
            DemoVirtualImpl impl = new DemoVirtualImpl();
        }
    }
}