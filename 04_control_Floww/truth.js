const userEmail ="man@.ai"

if (userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}

//falsy value

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// //"0", 'false', " ",[],{},function(){}

// if (userEmail.length ==0 ){
//     console.log("Array is empty");
// }

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//nullish coalescing operator(??):null undefined
let val1;
//val1 = 5?? 10
//val1= null ?? 10
//val1= undefined ?? 15
val1 = null?? 10?? 20


console.log(val1);

//terniary operator

//condition ? true: false
const iceTeaPrice = 100
iceTeaPrice>= 80 ? console.log("less than 80"): console.log("more than 80")