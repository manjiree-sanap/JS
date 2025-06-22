const accountId = 144523
let accountEmail ="manji@google.com"
var accountCity ="Jaipur"

//accountId = 2//not allowed

accountEmail ="h@hc.com"
accountPassword ="21212121"
accountCity ="Bengalur"
let accountState;

console.log(accountId);

/*
prefer not to use var
bacause of issue  in block scope and functional scope
*/

console.table([accountId, accountEmail, accountCity, accountPassword, accountState])