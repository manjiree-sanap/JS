//Immediately invoked function expression(TTFE)
//global scope ke pollution se problem hoti hai kai bar so us time global scope ke pollution ko hatane ke liye iife ka use kiya jata hai
(function chai(){
    //named iife
    console.log('DB CONNECTED');
}) ();

((name)=>{
    console.log('DB CONNECTED TWO ${name}');
})('man')