const args = process.argv.slice(2);
console.log(process.argv);

var operacao = args[0];
var resultado = parseInt(args[1]);

for (let index = 2; index < args.length; index++) {

    if (isNaN(args[index])) {
        console.log(`${args[index]} is not a number`);
    }else if (operacao == "+") {
        resultado += parseInt(args[index]);
    }else if (operacao == "-") {
        resultado -= parseInt(args[index]);
    }
}

console.log(`Result is ${resultado}`);