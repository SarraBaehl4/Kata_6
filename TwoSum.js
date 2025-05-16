function towSum(numbers, target) {
    
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
console.log (towSum([2, 7, 11, 15],9))
console.log (towSum([3, 2, 4],6))
console.log (towSum([3, 3],6))