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
        first = true
        const actualView = View(counter);
        console.clear();
        console.log(actualView);
        let sign = prompt("que quiere hacer: \n\n(+)(-)\n(q)\n\n");
        if(sign == 'q'){
            break;
        }
        counter = update(sign,counter);
    }
}

(App(0));
//node lab4.js