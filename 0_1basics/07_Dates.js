//Dates  date is object

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2023,0,23)// month is strat from 0 in js
//let myCreatedDate = new Date(2023, 0, 23, 5 ,3)
let myCreatedDate = new Date("21-14-2023")

// console.log(myCreatedDate.toLocalString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//'${newDate.getDay()} and the time'

newDate.toLocaleString('deafult',{
    weekday:"long",
})



