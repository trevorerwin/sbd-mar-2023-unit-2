const readline = require('readline');

const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

async function start() {
  console.log('This works!!!!');
  let firstName = await ask('What is your name?');
  computerResponse(`Good Morning, ${firstName}`);
}

start();

function computerResponse(str) {
  let white = '\033[0;39m';
  let yellow = '\033[0;33m';

  console.log(`${yellow} ${str} ${white}`);
}

/*
  How to get program to start
    1. Right click the file > Open Integrated Terminal
    2. Type in terminal "node [name of file]"
    3. To exit the program, hit CTRL+C

  End the process with a process.exit() in your code

  If you make changes to your file and would like to see the changes, you must CTRL+C or exit the program and restart the program by node [name of file]
*/
