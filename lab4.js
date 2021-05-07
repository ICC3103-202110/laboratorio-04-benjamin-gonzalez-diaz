//const ps = require("prompt-sync");
//const prompt = ps();
const prompt = require('prompt-sync')();
function View(counter){
    return ('Contador: '+counter);
}
function update(sign,counter){
    if(sign === '+'){
        return counter += 1;
    }
    if(sign === '-'){
        return counter -= 1;
    }
    else{
        return counter;
    }
}
function App(counter){
    while(true){
        const actualView = View(counter);
        console.clear();
        console.log(actualView);
        console.log(" \n\n(+)(-)\n(q) para salir \n\n")
        let sign = prompt("que quiere hacer: ");
        if(sign == 'q'){
            break;
        }
        counter = update(sign,counter);
    }
}
console.log(App(0));
//node lab4.js