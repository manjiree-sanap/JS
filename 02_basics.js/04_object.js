//const tinderUser = new Object() //singlton object
const tinderUser={} //non singlton object

tinderUser.id ="123abc"
tinderUser.name ="man"
tinderUser.isLoggedIn =false
//console.log(tinderUser);

const reglarUser ={
    email:"some@gmail.com",
    fullname: {
userfullname:{
    firstname: "man",
    lastname: "sanap"
}
    }
}

//console.log(reglarUser,fullname.userfullname.firstname);

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}

//const obj3=  {obj1, obj2}
//const obj3=Object.assign({}, obj1, obj2)

const obj3 ={...obj1, ...obj2}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"man@gmil.com"
    },
    {
        id:1,
        email:"man@gmil.com"
    },
    {
        id:1,
        email:"man@gmil.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

//destructuring of object
const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor: "manjiree"

}
//course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);


const navbar = ({company})=>{ //this code will come in react and that we have undeerstand that it is destructured object.

}
navbar(company ="manjiree")

//api json

