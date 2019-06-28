const myFirstGenerator = function*() {
  const one = yield setTimeout(function() {
    return 1;
  }, 3000);
  const two = yield 2;
  const three = yield 3;
  console.log(one, two, three);
  return "Finished!";
};

const gen = myFirstGenerator();
let one = gen.next().value;
let two = gen.next(one).value;
let three = gen.next(two).value;
let four = gen.next(three).value;
//console.log(one);
//console.log(two);
//console.log(three);
//console.log(gen.next());
