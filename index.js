function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }
  const something = ['Mango', 'Poly', 'Ajax', 'Jojo'];
  logItems(something);

// 2

function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    const wordCount = words.length;
      const totalPrice = wordCount * pricePerWord;
    return totalPrice;
  }
  const message = "Ring book potato eat";
  const pricePerWord = 30;
  const engravingPrice = calculateEngravingPrice(message, pricePerWord);
  console.log(`Вартість гравіюваня: ${engravingPrice} грн`);
  
//   3

function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
const string = "hello hi happines"
const longestword = findLongestWord(string)
console.log(`Найдовше слово ${longestword}`)

// 4

function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 41) + '...';
    }
}
const inputString = "Привіт це я, я написав цей рядок для того щоб перевірити функцію";
const formatted = formatString(inputString);
console.log(formatted);

// 5

function checkForSpam(message) {
    const lcmessage = message.toLowerCase();
    return lcmessage.includes('spam') || lcmessage.includes('sale');
}
const message1 = "SPAM SPAM SPAM SPAM sale SPAM";
const message2 = "Hello";
console.log(checkForSpam(message1));
console.log(checkForSpam(message2)); 

// 6

let input;
const numbers = [];
let total = 0;

function calculate() {
    while (true) {
        let input = prompt("Введіть число");
        if (input === null) {
            break;
        }

        let number = parseInt(input);

        numbers.push(number);
    }

    for (const i of numbers) {
        total += i;
    }

    if (numbers.length > 0) {
        console.log('Сума ' + total);
    } else {
        console.log('Список порожный');
    }
}

calculate();