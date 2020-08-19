using System;

namespace demo_first_webcoreASP.Net
{
    public class IndexClass
    {
        private static int size = 10;
        private string[] nameList = new string[size];

        public IndexClass()
        {
            for (int i = 0; i < size; i++)
                nameList[i] = "N.A.";
        }

        //This is index
        public string this[int index]
        {
            get
            {
                string tmp = (index >= 0 && index <= size - 1) ? nameList[index] : "";
                Console.WriteLine("tmp la: " + tmp);
                return tmp;
            }
            set
            {
                if (index >= 0 && index <= size - 1)
                    nameList[index] = value;
            }
        }

        //Overload index
        public int this[string name]
        {
            get
            {
                int index = 0;

                while (index < size)
                {
                    if (nameList[index] == name)
                    {
                        return index;
                    }

                    index++;
                }

                return index;
            }
        }

        static void Main(string[] args)
        {
            IndexClass indexClass = new IndexClass();
            indexClass[0] = "Bac";
            indexClass[1] = "Phuong";
            indexClass[2] = "Be Mo";
            indexClass[3] = "Be Sua";
            for (int i = 0; i < size; i++)
                Console.WriteLine(indexClass[i]);
            Console.WriteLine(indexClass["Be Mo"]);
            Console.WriteLine(indexClass["Be Sua"]);
        }
    }
}