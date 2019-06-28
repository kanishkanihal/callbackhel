const func1 = x => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("function 1");
      resolve(x);
    }, 3000);
  });
};

const func2 = async x => {
  let y = await func1(x);
  setTimeout(() => {
    console.log(`function 2: ${y}`);
  }, 1000);
};

func2(2);
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`used: ${used}`);
