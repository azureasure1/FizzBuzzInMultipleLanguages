/*
Programmer: Cody Griffin
Date: 9/26/2019
*/

//Goes through the first 100 positive integers
for(i = 1; i <= 100; i++){
  //Prints FizzBuzz if the current integer is evenly divisible by 15
  if(i % 15 == 0){
    console.log("FizzBuzz");
  }
  //Prints Fizz if the current integer is evenly divisible by 3
  else if(i % 3 == 0){
    console.log("Fizz");
  }
  //Prints Buzz if the current integer is evenly divisible by 5
  else if(i % 5 == 0){
    console.log("Buzz");  
  } 
  //Prints the current integer if it is not evenly divisible by 3, 5, or 15
  else{
    console.log(i);
  }
}//end for loop
