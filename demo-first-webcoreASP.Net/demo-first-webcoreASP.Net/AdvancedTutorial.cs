using System;
using System.Diagnostics;
using demo_first_webcoreASP.Net;

namespace demo_first_webcoreASP.Net
{
    public class AdvancedTutorial
    {
        [Conditional("DEBUG")]
        public static void Message(string msg)
        {
            Console.WriteLine("Vao day");
            Console.WriteLine(msg);
        }
    }
}

class Test1
{
    static void function1()
    {
        AdvancedTutorial.Message("In function 1.");
        function2();
    }

    static void function2()
    {
        AdvancedTutorial.Message("In function 2.");
    }

    public static void Main()
    {
        AdvancedTutorial.Message("In main function. ");
        function1();
        Console.ReadKey();
    }
}

//Create custome attribute bug fix
[AttributeUsage(AttributeTargets.Class |
                AttributeTargets.Constructor |
                AttributeTargets.Field |
                AttributeTargets.Method |
                AttributeTargets.Property, AllowMultiple = true)]
public class DebugInfo : Attribute
{
    private int bugNo;
    private string developer;
    private string lastReview;
    public string message;

    public DebugInfo(int bugNo, string developer, string lastReview)
    {
        this.bugNo = bugNo;
        this.developer = developer;
        this.lastReview = lastReview;
    }

    public int BugNo
    {
        get => bugNo;
        set => bugNo = value;
    }

    public string Developer
    {
        get => developer;
        set => developer = value;
    }

    public string LastReview
    {
        get => lastReview;
        set => lastReview = value;
    }

    public string Message
    {
        get => message;
        set => message = value;
    }
}

[DebugInfo(45, "Zara Ali", "12/8/2012", Message = "Return type mismatch")]
[DebugInfo(49, "Nuha Ali", "10/10/2012", Message = "Unused variable")]
class RectangleApply
{
    protected double length;
    protected double width;

    public RectangleApply(double length, double width)
    {
        this.length = length;
        this.width = width;
    }

    [DebugInfo(55, "Zara Ali", "19/10/2012", Message = "Return type mismatch")]
    public double GetArea()
    {
        return length * width;
    }

    [DebugInfo(56, "Zara Ali", "19/10/2012")]
    public void Display()
    {
        Console.WriteLine("Length : {0}", length);
    }
}