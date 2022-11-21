function logAtLeast5(n)
{
  for (let i = 1; i <= Math.max(n, 5); i++)
  {
    console.log(i);
   
  }
}

logAtLeast5(3)
logAtLeast5(6)
logAtLeast5(10)

// let t1 = performance.now();
// logAtLeast5(25);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
