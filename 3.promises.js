const func1 = x => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("function 1");
      resolve(x);
    }, 3000);
  });
};

const func2 = x => {
  setTimeout(() => {
    console.log(`function 2: ${x}`);
  }, 1000);
};

func1(2).then(x => {
  func2(x);
});
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`used: ${used}`);
