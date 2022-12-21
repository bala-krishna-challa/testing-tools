function add(a: number, b: number) {
  return a + b;
}

try {
  console.log(add(1, 2));
} catch (e) {
  //e = 10; // won't allow it get committed
  console.log(e);
}
