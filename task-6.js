let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (input === null) {
    break;
  }

  input = Number(input);
  const notNumber = Number.isNaN(input);
  numbers.push(input);

  if (notNumber) {
    alert("Было введено не число, попробуйте еще раз!");
    continue;
  }

  total += input;
} while (true);

for (const number of numbers) {
  total += input;
  break;
}

total = `Общая сумма чисел равна ${total}`;
console.log(total);
