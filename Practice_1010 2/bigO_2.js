function logAtLeast5(n)
{
  for (let i = 1; i <= Math.max(5, n); i++)
  {    console.log(i);
  }
}

console.log(logAtLeast5(13))

// let t1 = performance.now();
// logAtLeast5(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
