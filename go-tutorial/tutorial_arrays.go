package main

import "fmt"

func handleArrays() {
	//Khoi tao mang
	var arr = []int64{12, 14, 55, 888, 999, 444, 8836}
	for i := 0; i < len(arr); i++ {
		fmt.Println(arr[i])
	}

	//Remove element in index 4 (999)
	i := 4
	arr[i] = arr[len(arr)-1]

	//Push new elements
	arr= append(arr, 10000);

	fmt.Println(arr)

	//Create by make
	k := make([]int, 5, 5)

	fmt.Println(k)
}
func main() {
	handleArrays()
}
