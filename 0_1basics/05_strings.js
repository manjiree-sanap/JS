const name ="manjiree"
const repoCount = 50

//consolelog(name+ repoCount+"Value);

console.log('hello my name is ${name}my repo count is ${repoCount}');

const gameName = new String('hitesh_hc')

// console.log(gameName[0]);
// console.log(gameName._proto_);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString= gameName.slice(-8,4)
console.log(anotherString);

const newStringOne ="   manjiree   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://manju.com/manju%20sanap"
console.log(url.replace('%20', '-'))

console.log(url.includes(url.includes('sunder'))
