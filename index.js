

function add(numbers) {
    try {
        if (numbers === "") {
            return 0;
        }

        // handle multiple delimiters
        if (numbers.startsWith("//")) {
            const delimiterLineEnd = numbers.indexOf('\n');
            const delimiter = numbers[2];
            numbers = numbers.slice(delimiterLineEnd + 1);
            numbers = numbers.replace(new RegExp(delimiter, 'g'), ',');
        }
    
        //Replace new lines with commas
        const sanitizedNumbers = numbers.replace(/\n/g, ',');
        const negatives = [];

        const nums = sanitizedNumbers.split(',');
        const sumOfNumbers = nums.reduce((sum, num) => { 
            const parsedNum = parseInt(num, 10);
            if (parsedNum < 0) {
                negatives.push(parsedNum);
            }
            return sum + parsedNum;
        }, 0);
    
        if (negatives?.length) {
            throw new Error("Negative numbers not allowed: " + negatives.join(", "));
        }

        return sumOfNumbers;
    } catch (error) {
        throw new Error( error.message || "Invalid input");
    }
}

// test cases

// empty string
console.log(add(""));
// single numbers
console.log(add("1"));
// multiple numbers
console.log(add("1,5"));
// new lines between numbers
console.log(add("1\n2,3"));
// custom delimiters
console.log(add("//;\n1;2"));
// negative numbers
console.log(add("1,-5"));