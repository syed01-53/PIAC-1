// - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
let  take_array=(  my_array:string[], number:number):string[]=>{
      //splice(start, deleteCount, item0, item1)
my_array.splice(1,1,"hello","eyeu");
return my_array;
}

let my_array:string[]=["yey", "yeue"];
take_array(my_array, 1);
console.log(take_array);

//- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

let carts:any=[
    { "name": "carrots", "id": 1, count: 3 },
    { "name": "spinach", "id": 2, count: 4 },
    { "name": "cookies", "id": 3, count: 5 },
    { "name": "lettuce", "id": 4, count: 6 },
    { "name": "avocado", "id": 5, count: 4}
];
let cartsUpdates =(carts:any):any=>{
      //deleting from array
      carts.splice(0,1);
      // updating 

      // carts.splice(0,0,"ali")
      console.log(carts);
}
cartsUpdates(carts)


// Assignment for the week is:

//  - Write a program that uses a while loop to print the first 25 integers.
for (let index = 0; index <= 25; index++) {
   console.log(index);
   
      
}
//  - Write a program that uses a while loop to print the first 10 even numbers.
let index:number=0
while ( index<=10) {
      if(index%2==0)
      {
            console.log(index);
            index++;  
      }
      else{
            index++;   
      }

}
//  - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

let factorial =(number:number):number=>{
      let fac:number=1;
      for (let index = 1; index <=number; index++) {
      fac*=index;               
      }
      return fac;
 }
 let number:number=5;
 let result:number=factorial(number);
console.log(result);





//  - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

let myNumberArray:number[]=[23,3,4,-1,1, 1,-43];
let myarray=(myNumberArray:number[]):any=>{
      for (let index = 0; index < myNumberArray.length; index++) {
            if(myNumberArray[index]<0)
            {
                  myNumberArray.splice(index,index)
            }
           
            
      }
      return  myNumberArray;
}
let result1=myarray(myNumberArray);
console.log(result1);

//  - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
let sum =(arr:number[]):number=>{
      let sum =0;
      let index:number =0;

      while (index<arr.length) {
           sum+= arr[index];  
           index++;  
      }
      return sum ;
}
let arr:number[]=[1,2,3,4];
let answer=sum(arr);
console.log(answer);

//  - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.