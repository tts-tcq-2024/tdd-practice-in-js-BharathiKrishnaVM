function removeDelimiters(numbers) {
		let parts = [];
    if (numbers.startsWith("//")) {
       parts = numbers.split("\n");
    }
    return parts.length ?  {
            delimiter: parts[0].substring(2),
            numbers: parts[1]
        } :{
        delimiter: ",",
        numbers: numbers
    };
}

function convertNumbers(numbers, delimiter) {
  const numArray = numbers.split(new RegExp(`[${delimiter},\n]`));
 return numArray.flatMap((num)=>num.match(/\d+/g)?.map(Number))
}

function sumNumbers(numbers) {
   let sum = 0;
	  numbers.map((number)=>{
      sum += number
    })
  return sum<=1000 && sum >=0 ? sum : 'Negative numbers is not allowed';
}

function stringCalculator(numbers) {
    if (numbers === "") {
        return 0;
    }
    const { delimiter, numbers: nums } = removeDelimiters(numbers);
    const numberArray = convertNumbers(nums, delimiter);
    return sumNumbers(numberArray);
}

module.exports = {
    stringCalculator,
};
