//var c = 300

let a = 300
if (true){
    let a= 10
    const b= 20
    console.log("INNER:" ,a);

}

//console.log(a);
//console.log(b);
//console.log(c);

//nested scope
function one(){
    const username="man"
    function two(){
        const website ="youtube"
        console.log(username);
    }
   // console.log(website);

    two()
}
//one()

if(true){
    const username = "man"
    if(username ==="man"){
        const website = "youtube"
        console.log(username+ website);
    }
    
}

///++++intersting++++

function addone(value){
    return num +1

}
addone(5)

const addTwo = function(num){
    return num+2
}

addTwo(5)