package main

import "fmt"

func handlePointer() {
	var a = 10
	//& là con trỏ
	fmt.Print(&a)
}

func handlePointer2() {
	var a = 20  /* actual variable declaration */
	var ip *int /* pointer variable declaration */

	ip = &a /* store address of a in pointer variable*/

	fmt.Printf("Address of a variable: %x\n", &a)

	/* address stored in pointer variable */
	fmt.Printf("Address stored in ip variable: %x\n", ip)

	/* access the value using the pointer */
	fmt.Printf("Value of *ip variable: %d\n", *ip)
}
func main() {
	handlePointer()
	handlePointer2()
}
