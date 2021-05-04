const ps = require("prompt-sync");
const prompt = ps();

let name = prompt("Enter your name: ");
console.log(`Hello ${name}`)
function View(counter){
    return ('Contador: '+counter+' \n (+)(-)\n(q)');
}
function update(sign,counter){
    if(sign == '+'){
        return counter+1;
    }
    if(sign == '-'){
        return counter-1;
    }
    else{
        return counter;
    }
}
function App(counter){



}
//node lab4.js