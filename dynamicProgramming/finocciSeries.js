/*
func to fast compute fibonacci series using dynamic programming
memoization
*/ 

const fib(n, memo={}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n];
}

console.log(fib(50)) //12586269025
