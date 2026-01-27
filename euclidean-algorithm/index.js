function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

console.log(gcd(48, 18));
