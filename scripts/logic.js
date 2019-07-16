
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

// ---------------- STUDENT GRADES ------------------
// Loop over an array of student grades (values from 50-100) and keep track of how many students get each grade in an object named grades.

// A score of 50 - 60 is an F
// A score of 61 - 70 is a D
// A score of 71 - 80 is a C
// A score of 81 - 90 is a B
// A score of 91 - 100 is an A

// Use console.info() to output the following criteria to the browser console.

// How many of each grade ? Accomplish this with a for..in loop.
// What is the lowest score ? Sort the array and find out.
// What is the highest score ?
// Which grade had the most students achieve it ? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.
// Which grade had the fewest students achieve it ?

const tallyGrades = (array) => {
    const grades = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        F: 0
    };

    array.forEach(grade => {
        if (grade <= 60) {
            grades["F"] += 1;
        } else if (grade <= 70) {
            grades["D"] += 1;
        } else if (grade <= 80) {
            grades["C"] += 1;
        } else if (grade <= 90) {
            grades["B"] += 1;
        } else {
            grades["A"] += 1;
        }

    });

    // Sort array and console.info min and max scores

    let sortedGrades = array.sort();
    console.info(`Lowest Grade: ${sortedGrades[0]}`);
    console.info(`Highest Grade: ${sortedGrades[sortedGrades.length - 1]}`);

    // Find most common grade and display in console

    let mostCommon = '';
    let numberMost = 0;

    for (const key in grades) {
        if (grades[key] > numberMost) {
            mostCommon = key;
            numberMost = grades[key];
        }
    }

    console.info(`Most Common Grade: ${mostCommon}`);

    // Find least common grade and desplay in console

    let leastCommon = '';
    let numberLeast = 1000000

    for (const key in grades) {
        if (grades[key] < numberLeast) {
            leastCommon = key;
            numberLeast = grades[key];
        }
    }

    console.info(`Least Common Grade: ${leastCommon}`);

    return grades;
};

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];

console.log(tallyGrades(scores));















