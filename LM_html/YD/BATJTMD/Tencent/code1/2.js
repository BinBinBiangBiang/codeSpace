// hackthon 
function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx"; // 模板
  for (var i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]); // replace考点，常有,用numbers[i]去替换对应的x
  }
  return format;
}

let phoneNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(createPhoneNumber(phoneNumbers))