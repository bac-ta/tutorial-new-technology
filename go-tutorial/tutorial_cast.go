package main

import "fmt"

func main() {
	var sum = 17
	var count = 5
	var mean float64

	mean = float64(sum) / float64(count)
	fmt.Printf("Value of mean : %f\n", mean)
}
