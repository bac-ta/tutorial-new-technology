package main

import "fmt"

func handleRange() {
	numbers := []int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	//Sử dụng từ khóa range
	for i := range numbers {
		fmt.Println(i)
	}
}
func main() {
	handleRange()
}
