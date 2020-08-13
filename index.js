const readline = require('readline');


const rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', (line) => {
    // Введенная строка в переменной line, тут можно написать решение
    console.log(String(result));
    rl.close();
    return;
}).on('close', () => process.exit(0));