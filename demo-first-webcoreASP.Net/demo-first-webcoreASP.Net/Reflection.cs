using System;
using System.Reflection;

namespace demo_first_webcoreASP.Net
{
    public class Reflection
    {
    }

    [AttributeUsage(AttributeTargets.All)]
    public class HelpAttribute : Attribute
    {
        public readonly string url;
        private string topic;

        public string Topic
        {
            get => topic;
            set => topic = value;
        }

        public HelpAttribute(string url)
        {
            this.url = url;
        }
    }

    [HelpAttribute("Information on the class MyClass")]
    class MyClass
    {
    }

    class Program
    {
        static void Main(string[] args)
        {
            MemberInfo info = typeof(MyClass);
            object[] attributes = info.GetCustomAttributes(true);
            foreach (var element in attributes)
            {
                Console.WriteLine(element);
            }

            Console.ReadKey();
        }
    }
}