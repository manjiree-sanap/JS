const coding=["js","ruby","cpp"]
// coding.forEach(function (item){
//     console.log(val);
// })

//arrow function

// coding.forEach((item)=> {
//     console.log(item);
// })

// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe())

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr );
// })

const myCoding=[
    {
        languageName:"js",
        languageFileName:"py"
    },
    {
        languageName:"cpp",
        languageFileName:"py"
    },
    {
        languageName:"js",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"python"
    },
]
myCoding.forEach( (item)=>{
    console.log(item.languageName);
})