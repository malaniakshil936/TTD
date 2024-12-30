

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

        const nums = sanitizedNumbers.split(',');
        return nums.reduce((sum, num) => sum + parseInt(num, 10), 0);        
    } catch (error) {
        throw new Error( error.message || "Invalid input");
    }
}


console.log(add(""));
console.log(add("1"));
console.log(add("1,5"));
console.log(add("1\n2,3"));
console.log(add("//;\n1;2"));