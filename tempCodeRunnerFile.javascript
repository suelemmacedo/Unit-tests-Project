const sayHello = () => "hello trybers";
const printGreeting = (callback) => {
  console.log(callback());
};

console.log(printGreeting(sayHello));
