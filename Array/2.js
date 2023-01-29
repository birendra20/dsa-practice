/*
You are given a string s. You need to reverse the string.

Example 1:

Input:
s = Geeks
Output: skeeG

*/
let s = "Geeks";
//first solution

/* 
function reverse(str) {
  let reverseStr = "";

  for (i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
  }
  return reverseStr;
}
console.log(reverse(s));
*/

// second solution

// function reverse(str) {
//   let reverseStr = str.split("").reverse().join("");
//   return reverseStr;
// }
// console.log(reverse(s));

// 3rd solution

function reverse(str) {
  if (str === "") {
    return str;
  }
  return reverse(str.substr(1)) + str.charAt(0);
}
console.log(reverse(s));
