
// ----------- COINS TO CASH -----------
// Define an object and store it in a variable named piggyBank. The object should have the following keys defined.
// quarters, nickels, dimes, pennies
// For each coin type, give yourself as many as you like.

// Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named dollarAmount.

// When done, output the value to the browser console.

// For example, if my piggy bank only held those pennies from above, when I type the variable name of dollarAmount into the console, the output would be.

const piggyBank = {
    quarters: 7,
    dimes: 13,
    nickels: 9,
    pennies: 12
};

const coinsToCash = () => {

    let dollarAmount = 0;

    Object.keys(piggyBank).forEach(key => {
        if (key === "quarters") {
            dollarAmount += (piggyBank[key] * 0.25);
        } else if (key === "dimes") {
            dollarAmount += (piggyBank[key] * 0.10);
        } else if (key === "nickels") {
            dollarAmount += (piggyBank[key] * 0.05);
        } else {
            dollarAmount += (piggyBank[key] * 0.01);
        }
    });

    return dollarAmount;
}; 

// console.log(coinsToCash);

// ----------- CASH TO COINS -----------
// Now do the reverse. Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies.

const cashToCoins = (amount) => {
    let piggyBank = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    };

    let numQuarters = Math.floor(amount / 0.25);
    let remainder = amount % 0.25;
    piggyBank["quarters"] = numQuarters;
    
    let numDimes = Math.floor(remainder / 0.10);
    remainder = remainder % 0.10;
    piggyBank["dimes"] = numDimes;

    let numNickels = Math.floor(remainder / 0.05);
    remainder = remainder % 0.05;
    piggyBank["nickels"] = numNickels;

    let numPennies = Math.floor(remainder / 0.01);
    remainder = remainder % 0.01;
    piggyBank["pennies"] = numPennies;

    if ((numQuarters * 0.25) + (numDimes * 0.10) + (numNickels * 0.05) + (numPennies * 0.01) !== amount) {
        piggyBank["pennies"] = numPennies + 1;
    }

    return piggyBank;
};

// console.log(cashToCoins(1.94));
// console.log(cashToCoins(4.33));


















