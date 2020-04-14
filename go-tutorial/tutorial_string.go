package main

import (
	"fmt"
	"strings"
)

func stringDo() {
	var a = "bbbchbdhfhgjjgj"
	fmt.Printf("String Length is: ")
	fmt.Println(len(a))
	fmt.Println("Hexa is: ")
	for i := 0; i < len(a); i++ {
		fmt.Println("%x ", a[i])
	}
}

func stringJoin() {
	//Khai bao mang string
	var strArr = []string{"Duy", "Bac"}
	var str = strings.Join(strArr, " ")
	fmt.Println(str)

}
func main() {
	stringDo()
	stringJoin()
}
