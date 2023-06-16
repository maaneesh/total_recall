

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

/*
A. Talk about it:
What are the things in an array called?
Ans: Things in an array are called elements of the array.

Do Arrays guarantee those things will be in order?
Ans: Yes. Elements are saved in order in an array.

What real-life thing could you model with an array?
Ans: Days of the week can be modeled in an array of size 7.


*/


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





//E. Mix It Up

//Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// Ans: Yes the .reverse() method returns the array in reversed order.


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



   var1 = 7;

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


   const user = {
      name : "Manish",
      email: "chaudharimanish07@gmail.com",
      age:27,
      purchased: []


   }
   console.log('my user : \n\n', user);

   user.email = "newemail@yahoo.com";
   user.age++;
   user.location = "New York";




   user.purchased.push("carbohydrates");

   user.purchased.push("peace of mind");
   user.purchased.push("Merino jodhpurs");

   console.log(user);
   console.log(user.purchased[2]);

   user.friend = {
      name: "Jill Rossman",
      age: 27,
      location: "Kathmandu",
      purchased: [ ]
   }

   console.log(user.friend.name);
   console.log(user.friend.location);

   user.friend.purchased.push("The one ring");
   user.friend.purchased.push("A latte");

   console.log(user.friend.purchased[1]);

//F.

   console.log("\nUser purchased: ");
   for ( let i =0 ; i <user.purchased.length; i++){
      console.log(user.purchased[i]);
   }
   console.log("\nFriend purchased: ");
   for ( let i =0 ; i <user.friend.purchased.length; i++){
      console.log(user.friend.purchased[i]);
   }



//G

   function updateUser(){
      user.age++;
      user.name = user.name.toUpperCase();
   }

   updateUser();

   console.log(user);

   function oldAndLoud(person){
      person.age++;
      person.name.toUpperCase();

   }


   console.log(user);
   console.log("After old and new func");
   oldAndLoud(user);
   console.log(user);





