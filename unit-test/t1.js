f1();

function f1() {
  return new Promise(async (resolve, reject) => {
    console.log('A');
    f2();
    console.log('B');
    return resolve();
  });
}

function f2() {
  return new Promise(async (resolve, reject) => {
    console.log('C');
    resolve();
    console.log('D');
    await f3();
    return;
  });
}

function f3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('E');
      return resolve();
    }, 100);
  });
}
