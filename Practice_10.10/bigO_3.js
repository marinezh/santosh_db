
//O(1)

function logAtMost5(n)
{
  for (let i = 1; i <= Math.min(5, n); i++)
  {    console.log(i);
  }
}

logAtMost5(10)