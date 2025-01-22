/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */

//1
function sleep_in(weekday, vacation) {
    // We sleep in if it is not a weekday or if we are on vacation
    return !weekday || vacation;
}

//2
function monkey_trouble(a_smile, b_smile) {
    // We are in trouble if both monkeys are smiling or neither is smiling
    return a_smile === b_smile;
}

//3
function string_times(string, n) {
    // Create an empty string to store the result
    var answer = "";
    // Use a loop to append the string n times
    for (var i = 0; i < n; i++) {
        answer += string;
    }
    return answer;
}

//4
function front_times(string, n) {
    // Get the first 3 characters of the string (or the entire string if less than 3 characters)
    var front = string.length < 3 ? string : string.substring(0, 3);
    // Create an empty string to build the result
    var result = "";
    // Append the front of the string n times
    for (var i = 0; i < n; i++) {
        result += front;
    }
    return result;
}

//5
function string_bits(string) {
    // Initialize an empty string to store the result
    var result = "";
    // Loop through the string, taking every other character
    for (var i = 0; i < string.length; i += 2) {
        result += string[i];
    }
    return result;
}

//6
function caughtSpeeding(speed, isBirthday) {
    // Adjust the speed limit if it's your birthday
    var adjustedSpeed = isBirthday ? speed - 5 : speed;

    // Determine the ticket based on the adjusted speed
    if (adjustedSpeed <= 60) {
        return 0; // No ticket
    } else if (adjustedSpeed <= 80) {
        return 1; // Small ticket
    } else {
        return 2; // Big ticket
    }
}

//7
function fizzBuzz(num) {
    // Check divisibility by 3 and 5
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz!";
    } else if (num % 3 === 0) {
        return "Fizz!";
    } else if (num % 5 === 0) {
        return "Buzz!";
    } else {
        return num + "!";
    }
}

//8
function specialEleven(num) {
    // Check if the number is a multiple of 11 or one more than a multiple of 11
    return num % 11 === 0 || num % 11 === 1;
}

//9
function withoutDoubles(die1, die2, noDoubles) {
    // Check if noDoubles is true and the dice values are the same
    if (noDoubles && die1 === die2) {
        // Increment one die and wrap around to 1 if it reaches 7
        die1 = die1 === 6 ? 1 : die1 + 1;
    }
    // Return the sum of the two dice
    return die1 + die2;
}

//10
function left2(str) {
    // Extract the first two characters and the rest of the string
    let firstTwo = str.substring(0, 2);
    let rest = str.substring(2);
    // Concatenate the rest with the first two characters
    return rest + firstTwo;
}


