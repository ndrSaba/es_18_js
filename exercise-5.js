function memoize(fn) {
  let cache = {};
  return (x) => {
    if (x in cache) {
      return `Fetching from cache for ${cache[x]}`;
    }
    let result = fn(x);
    cache[x] = result;
    console.log(cache)
    return result;
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));