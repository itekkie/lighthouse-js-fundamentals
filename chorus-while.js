const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 5) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 5) {
  if (repeat === 2) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");