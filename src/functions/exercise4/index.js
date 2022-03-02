const numbers = [11, 12, 13, 14];
console.log(numbers);
function swap(number1, number2) {
  let temp = numbers[number2];
  numbers[number2] = numbers[number1];
  console.log(numbers[0]);
  numbers[number1] = temp;
}

swap(0, 3, numbers);
console.log(numbers);

swap(1, 2, numbers);
console.log(numbers);
