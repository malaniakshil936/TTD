

function add(numbers) {
    try {
        if (numbers === "") {
            return 0;
        }
        const nums = numbers.split(',');
        return nums.reduce((sum, num) => sum + parseInt(num, 10), 0);        
    } catch (error) {
        throw new Error( error.message || "Invalid input");
    }
}


console.log(add(""));
console.log(add("1"));
console.log(add("1,5"));
