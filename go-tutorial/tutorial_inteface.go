package main

import (
	"fmt"
	"math"
)

type Shape interface {
	area() float64
}

type Circle struct {
	radius float64
}

type Rectangle struct {
	width, height float64
}

func (rect Rectangle) area() float64 {
	return rect.width * rect.height
}

func (circle Circle) area() float64 {
	return math.Pi * circle.radius * circle.radius
}

func getArea(shape Shape) float64 {
	return shape.area()
}

func main() {
	circle := Circle{radius: 5}
	rectangle := Rectangle{width: 10, height: 5}

	fmt.Printf("Circle area: %f\n", getArea(circle))
	fmt.Printf("Rectangle area: %f\n", getArea(rectangle))
}
