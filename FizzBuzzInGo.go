package main

//Programmer: Cody Griffin
//Date: 4/29/2017
//Program: FizzBuzz in Go

import (
	"fmt"
)

//Main function
func main() {
	for i := 1; i <= 100; i++ {
		if i%15 == 0 {
			fmt.Println("FizzBuzz")
		} else if i%3 == 0 {
			fmt.Println("Fizz")
		} else if i%5 == 0 {
			fmt.Println("Buzz")
		} else {
			fmt.Println(i)
		}

	}
}
