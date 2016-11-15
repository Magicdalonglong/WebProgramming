const app= require("./cal_module");

console.log(`description is ${app.description}`)
console.log("app is "+app);
//console.log(" "+app.description);
let res_of_add=app.add(12,4);
console.log(`res of add is ${res_of_add}`);

let res_of_div=app.div(12,4);
console.log("res of div is "+res_of_div);

let res_of_mul=app.mul(12,4);
console.log("res of mul is "+res_of_mul);

let res_of_sub=app.sub(12,4);
console.log("res of sub is "+res_of_sub);