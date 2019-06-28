//Javascript is non blocking. Thats why it prints "function 2" insted of "function 1"
const func1 = () => {
  setTimeout(() => {
    console.log("function 1");
  }, 3000);
};

const func2 = x => {
  setTimeout(() => {
    console.log(`function 2: ${x}`);
  }, 1000);
};

func1();
func2(2);
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`used: ${used}`);
