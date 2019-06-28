//Assume the output of the func1 is needed to be pass to the func2
const func1 = (x, callback) => {
  setTimeout(() => {
    console.log(`function 1`);
    callback(x); //CPS
  }, 3000);
};

const func2 = x => {
  setTimeout(() => {
    console.log(`function 2: ${x}`);
  }, 1000);
};

func1(2, func2);
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`used: ${used}`);
