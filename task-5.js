const checkForSpam = function (message) {
  let arrayString = message.toLowerCase().split(" ");

  for (let i = 0; i < arrayString.length; i += 1) {
    const word = arrayString[i];

    if (word.includes("spam") || word.includes("sale")) {
      return true;
    }
  }

  return false;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
