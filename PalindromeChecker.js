function palindrome(str) {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // console.log("cleanedStr: ", cleanedStr);
  let reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

console.log("palindrome: ", palindrome("e y e e y e "));
