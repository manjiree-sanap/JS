const user ={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log('${this.username} , welcome to website');
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()



const chai = () => {
    let username="man"
    console.log(this);
}
chai()


//arrow function
//const addTwo =(num1, num2) => num1+num2
//const addTwo =(num1, num2)=>( num1+num2 )

const addTwo =(num1, num2) => ({username:"man"})

console.log(addTwo(3,4))

//const myArray =[2,3,4,5,7]
//myArray.forEach()