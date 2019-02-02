const myTest = [1, 2, 3, 4, 5];

function sumFor(num) {
  let total = 0;
  for (const i of num) {
    total += i;
  }
  return total;
}
console.log(sumFor(myTest));

function sumWhile(num) {
  let total = 0;
  let count = 0;
  while (count < num.length) {
    total += num[count];
    count++;
  }
  return total;
}
console.log(sumWhile(myTest));

function sumRecursion(num){
  if (num.length === 0) {
    return 0;
  }
  return num[0] + sumRecursion(num.slice(1, num.length))
}
console.log(sumRecursion(myTest));

function sumTheSimpleWay(num) {
  return _.reduce(num, function (memo, nums) { return memo + nums; }, 0);
}
console.log(sumTheSimpleWay(myTest));
