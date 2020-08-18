using System;

namespace demo_first_webcoreASP.Net
{
    public class Obsolete
    {
        [Obsolete("Dont use old method")]
        static void OldMethod()
        {
            Console.WriteLine("It's the old method");
        }

        static void NewMethod()
        {
            Console.WriteLine("It's the new method");
        }

        public static void Main()
        {
            OldMethod();
        }
    }
}