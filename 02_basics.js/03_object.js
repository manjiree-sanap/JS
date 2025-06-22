//singleton

//object literals

const mySym = Symbol("key1") //sym declare


const JsUser ={
    name:"Manjiree",
    "full name":"man sanap",
    age:18,
   [mySym]: "myKey1",
    location: "jaipur",
    email:"man@goggle.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email = "man@google.com"
// Object.freeze(JsUser)
JsUser.email = "man@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log('hello js user,${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());