// This file is where you should write your code. 

function countClumps(xs) {
  let clumps = 0;
  for (let i = 0; i < xs.length;) {
    let s = i + 1;
    while (s < xs.length && xs[i] == xs[s]) s++;
    if (s - i > 1) clumps++;
    i = s;
  }
  return clumps;
}


function fib(n) {
  if (n == 0 || n == 1) {
    return 1
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}