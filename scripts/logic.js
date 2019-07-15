
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

    let dollarAmt = 0;

    for (let key in piggyBank) {

        console.log(piggyBank[key]);
    }
}; 