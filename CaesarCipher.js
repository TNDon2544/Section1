function rot13(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // console.log("char: ", char);
    if (/[A-Z]/.test(char)) {
      let charCode = str.charCodeAt(i);
      //   console.log("charCode: ", charCode);
      let decryptedCharCode = ((charCode - 65 + 13) % 26) + 65;
      let decryptedChar = String.fromCharCode(decryptedCharCode);
      result += decryptedChar;
    } else {
      result += char;
    }
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
