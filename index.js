function hasTargetSum(array, target) {
  // Write your algorithm here

  //declare the FUNCTION WITH array variable
  //iterate through each index to find the sums
  //compare the target to the individual sums
  //return true or false

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      } 
      }
    } 
  return false;
}

/* 
  Write the Big O time complexity of your function here

*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target){
    
    for(let i = 0; i < array.length; i++){
      for(let j = i+1; j < array.length; j++){
        if (arr[i] + arr[j] === target){
          return true
        } else {
          return false;
        }
      }
    }
  }
*/

/*
  Add written explanation of your solution here
  the code iterates through the array adding each to one other to compare the sum to the target value
  if the value is equal it returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  arr[0] + arr[1] === target;
  arr[0] + arr[2] === target;
  arr[0];
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
