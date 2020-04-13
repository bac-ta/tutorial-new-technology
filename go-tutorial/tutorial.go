package main

import "fmt"

func main() {
	//var x float64
	//x = 20.1
	var x float64 = 20.0
	y := 42
	fmt.Println(x)                     //=20
	fmt.Println(y)                     //=42
	fmt.Printf("x is of type %T\n", x) //x is of type float64
	fmt.Printf("y is of type %T\n", y) //y is of type int

	for true  {
		fmt.Printf("This loop will run forever.\n");
	}
}
