const accountId = 14453
let accountEmail = "sumit@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //it is allowed but not standard rules
let accountState;

// accountId = 2   //Not allowed
accountEmail = "Su@gmail.com"
accountPassword = "15452"
accountCity = "Akola"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])