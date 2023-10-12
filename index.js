function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/
function hasTargetSum(arr, target) {
  // Initialize a Set to store numbers seen so far
  const numSet = new Set();

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Calculate the complement needed to reach the target
    const complement = target - arr[i];

    // If the complement exists in the Set, return true
    if (numSet.has(complement)) {
      return true;
    }

    // Add the current element to the Set
    numSet.add(arr[i]);
  }

  // If no pair is found, return false
  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Should return true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // Should return true
console.log(hasTargetSum([1, 2, 5], 4)); // Should return false

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
