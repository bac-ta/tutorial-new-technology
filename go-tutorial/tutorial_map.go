package main

import "fmt"

func handleMap() {
	//Tạo một map
	countryCapitalMap := make(map[string]string)
	countryCapitalMap["VietNam"] = "HaNoi"
	countryCapitalMap["Lao"] = "Vienchan"
	countryCapitalMap["Phap"] = "Paris"


	fmt.Println(countryCapitalMap)
	fmt.Println(countryCapitalMap["VietNam"])

}
func main() {
	handleMap()
}
