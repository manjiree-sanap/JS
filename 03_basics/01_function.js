function sayMyName(){
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("j");
    console.log("u");
    console.log("s");
}

//sayMyName()

// function addTwoNumbers(number1, number2){//number 1 is parameter
//     console.log(number1+number2);
//}

function addTwoNumbers(number1, number2){//number 1 is parameter
    //let result = number1 +number2
   // //return result //first result nothing will come as output
   // console.log("man");
   // return result
   return number1+ number2
}


const result= addTwoNumbers(3, null) //3 is arguments

//console.log("result:", result);


function loginUserMessage(username ="sam"){
  if (username=== undefined){
    console.log("please enter a username");
    return

  }
    return '${username} just logged in'
}
//console.log(loginUserMessage("man"))
console.log(loginUserMessage("man"))