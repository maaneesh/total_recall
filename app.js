
/*
//1.
let myVar = "my strig value"; 
//2.
myVar = "my new value"; 

console.log(myVar); 
let var2 = 5; 
//3.
myVar = var2; 

console.log(myVar);


   let firstVariable = "Hello World";
   firstVariable = 56;

   let secondVariable = firstVariable;
   secondVariable ="Strawbery";

// firstVariable has the value 56


   let yourName = "Manish Chaudahri";
   let string1 = `Hello! my name is ${yourName}`;


const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';


console.log(a <= b);
console.log(c>= d);
console.log('Name' =='Name');




// FOR THE NEXT TWO, USE ONLY && OR ||
   console.log("OR or AND ");
  console.log(true || false);
  console.log(!false || false || false || false || false ||true);
  console.log(false ===false)
  console.log(e == 'Kevin');
  console.log(a < b && a< c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a ||a || d); // note: the answer is a simple arithmetic equation, not something "weird"`
  console.log(48 == '48');

let animal ="cow";
const moo = (_animal) =>{
   if (_animal == "cow"){
      console.log("moooo");
   }
   else console.log("Hey you are not a cow!");

}
moo("peanut");


let userAge =30;


function drive (userAge){
   if(userAge >= 16){
      console.log("Here are the keys!");
   }
   else console.log("Sorry you're too young.")

}

drive(16);
 



   for ( let i =0; i<11 ; i++){
      console.log(`i = ${i}`);
   }

   for ( let i =10; i<=400 ; i++){
      console.log(`i = ${i}`);
   }


for (let i =1; i <=100; ++i){
   if ( i%2 == 0){
      console.log(`${i} <-- is an even number`);
   }
   else console.log(`${i}`); 
}




for (let i =1; i <=100; ++i){
   if ( i%5 == 0){
      console.log(`I found a ${i}. High five!`);
   }

}


for (let i =1; i <=100; ++i){

   if ( i%3 == 0){
      console.log(`I found a ${i}. Three is a crowd`);
   }
   else if ( i%5 == 0){
      
      console.log(`I found a ${i}. High five!`);
   }

}



let bank_account =0 ;

for ( let i =1; i<=10; i++){
   bank_account += i;
}
console.log(`$${bank_account}`);

//DOUBLED 

bank_account =0 ;
for ( let i =1; i<=100; i++){
   bank_account += i*2; 
}
console.log(`After doubling: $${bank_account}`);

//III. Arrays & Control flow



/*A. Talk about it:
What are the things in an array called?

Things in an array are called elements of the array.

Do Arrays guarantee those things will be in order?

Yes. Elements are saved in order in an array.

What real-life thing could you model with an array?

Days of the week can be modeled in an array of size 7.




let quotes = [
   "Sometimes even to live is an act of courage.",
   "Luck is what happens when preparation meets opportunity.",
   "We suffer more often in imagination than in reality",

]

console.log(quotes);

//C.Accessing elements
const randomThings = [1, 10, "Hello", true];

randomThings[0];
randomThings[2]="World";

console.log(randomThings);

//D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

ourClass[2];
ourClass[4]= "Octocat";
ourClass.push("Cloud City");


console.log(ourClass);





### E. Mix It Up

Note: You don't really need `.splice()` for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: `const myArray = [5, 10, 500, 20]`

- Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
- Remove the 5 from the beginning of the array.
- Add the string "Bob Marley"to the beginning of the array.
- Remove the string of your choice from the end of the array.
- Reverse this array using `Array.prototype.reverse()`. 
- Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
   Ans : Yes the .reverse() method returns the array in reversed order.

//E. Mix It Up
   const myArray = [5, 10, 500, 20];

   myArray.push("Aegon");
   myArray.shift();
   myArray.unshift("Bob Marley");
   myArray.pop();
   myArray.reverse();


//F. Biggie Smalls


   let var1 = 134;

   if ( var1 <100){
      console.log("Little number");

   }
   else console.log("Big number");


//G. Monkey in the Middle



let var1 = 7;

if ( var1 <5){
   console.log("Little number");

}
else if(  var1 >=5 && var1 <=10){
   console.log("monkey");

} else console.log("Big number");


//. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
//1.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

//2.

let tempVar = kristynsCloset.pop();
kristynsCloset.push("raybans");
kristynsCloset.push(tempVar);
kristynsCloset[kristynsCloset.length-2] = "stained knit hat";



// Thom's closet is more complicated. Check out this nested data structure!!`

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log("Thom is wearing", thomsCloset[0][2], ",",thomsCloset[1][1],"and",thomsCloset[2][2], "today.");

thomsCloset[1][2] = "Footie Pajamas";

console.log(thomsCloset);


//IV. FUNCTIONS
//A. printGreeting  //SKIPPED

//B.

const printCool=(name)=>{
   console.log(name," is really cool!");

}

printCool("Manish");
//C.

const calculateCube = (num) => {
   return num*num*num;

}
console.log(`Calculate cube: `,calculateCube(3));

//D. 
      const isVowel= (aChar)=>{

         let vowels = ['a','A','e','E','i','I','o','O','u','U'];
         for ( let i= 0 ; i <vowels.length; i++){
            if (aChar ==vowels[i] ){
               return true;
            }
                
         }
         return false;
         
      }

      
      console.log(isVowel('U'));


      //E.

      function getTwoLengths(string1, string2){

         let val1 = string1.length;
         let val2 = string2.length;

         let myArr = [val1,val2];
         return myArr;

      }

      console.log( getTwoLengths("book","surprise"));
//F.


      const getMultipleLengths = (arrayIn) => {

         let answer = [];

         for ( let i = 0 ; i < arrayIn.length; i++){

            answer[i] = arrayIn[i].length;

         }
         return answer;

      }




console.log('multiple lengths ',getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//G.

      const maxOfThree = (num1, num2, num3) =>{

         let args = [num1,num2,num3];

         let max = num1;

         for (i = 0 ; i<3; i++ ){
            if (args[i]> max){
               max= args[i];

            }
         
         }
         return max;


      }


      console.log(`Max of three: `,maxOfThree(3,50,67));

//H.
      const printLongestWord = (arr)=>{ 

         let longestWord = arr[0];

         for ( let i=0; i <arr.length; i++){
            if (  arr[i].length > longestWord.length)
               longestWord = arr[i];

         }
         return longestWord;

      }

      console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
*/



/*







## Objects

Let's set up an object data structure. 

Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


### A. Make a user object

- Create an object called user.

Write in to the object the **key-value** pairs for name, email, age, and purchased. Set the value of purchased to an empty array `[]`. Set the other values to whatever you would like.



### B. Update the user

- Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.

- Our user has had a birthday! Without changing the original user object, increment the agevalue using the postfix operator. Hint: age++



### C. Adding keys and values

You have decided to add your user's location to the data that you want to collect.

- Without changing the original user object, add a new key locationto the object, and give it a value or some-or-other location (a string).



### D. Shopaholic!

1. Our user has purchased an item! They have purchased some "carbohydrates". Using `.push()`, add the string "carbohydrates" to the `purchasedarray`.

2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the `purchasedarray`.

3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using `.push()`, add the string "Merino jodhpurs" to the `purchasedarray`.
Console.log just the "Merino jodhpurs" from the `purchasedarray`.



### E. Object-within-object

Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

If we want to give our user a friendwith a nameand age, we could write:

```
user.friend = {
    name: "Grace Hopper",
    age: 85
}
```

When we console.log user, we would see the friend object added to our user object.

1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
2. Console.log just the friend's name
3. Console.log just the friend's location
4. CHANGE the friend's age to 55
The friend has purchased "The One Ring". Use `.push()` to add "The One Ring" to the friend's `purchasedarray`.
5. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's `purchasedarray`.
6. Console.log just "A latte" from the friend's `purchasedarray`.



### F. Loops

- Write a for loop that iterates over the User's `purchasedarray` (NOT the friend's purchased array), and prints each element to the console.
- Write a for loop that iterates over the Friend's `purchasedarray`, and prints each element to the console.



### G. Functions can operate on objects

Write a single function updateUserthat takes no parameters. When the function is run, it should:

1. it should increment the user's age by 1
2. make the user's name uppercase
3. The function does not need a return statement, it will merely modify the user object.

Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.






# Requirements Complete! Hungry for More?



## Cat Combinator



1. ### Mama cat

Define an object called `cat1that` contains the following properties:

name
breed
age (a number)
console.log the cat's age
console.log the cat's breed



2. ### Papa cat

Define an object called cat2that also contains the properties:

name
breed
age (a number)



3. ### Combine Cats!

The cats are multiplying!

Write a function `combineCats` that has two parameters `mama`, and `papa`. The function will take two arguments -- each a cat object.

Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.

**Example**:

```
combineCats(cat1, cat2)
{ name: "Joe", age: 19, breed: "Mog" }

{ name: "Jam", age: 45, breed: "Siamese" }
```

This is to demonstrate that functions can take objects as arguments.

You could also invoke the combineCats function by writing the objects straight into the parentheses:

```
combineCats({ 
  name: "Craig", 
  age: 20, 
  breed: "unknown" }, 
{ 
  name: "Linda", 
  age: 20, breed: 
  "undefined" 
  }
);
```

**Make it so the combineCats function will return a combination of the two incoming cats!**

- The result should be an object wherein the name is a concatenation of the parents' names, 
- the age is 1
- the breed is each of the parents' breeds with a hyphen in between


Example:

`console.log(combineCats(cat1, cat2));`

Result:

This is to demonstrate that a function can return an object



4. ### Cat brain bender

If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:

- catCombinatorcan use itself as its own argument.

Take a second to stew on that . . .

What is the result of:

`console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));`

Whoa . . .

The above console.log is two levels deep of combineCats.

- Write a console.log that is **three** levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.




*/


