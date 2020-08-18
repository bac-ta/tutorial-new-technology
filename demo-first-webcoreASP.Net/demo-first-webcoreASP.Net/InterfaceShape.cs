namespace demo_first_webcoreASP.Net
{
    public interface InterfaceShape
    {
        int getArea();
    }

    abstract class Shape : InterfaceShape
    {
        public abstract int getArea();
    }

    class ShapeDo : Shape
    {
        public override int getArea()
        {
            throw new System.NotImplementedException();
        }
    }
}