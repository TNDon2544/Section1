function telephoneCheck(phoneNumber) {
  // ตรวจสอบรูปแบบเบอร์โทรศัพท์ที่ถูกต้อง
  let phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  let match = phoneNumber.match(phoneRegex);

  if (match) {
    return true;
  }

  return false;
}

console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("1 555-555-5555"));
// console.log(telephoneCheck("1 (555) 555-5555"));
// console.log(telephoneCheck("5555555555"));
// console.log(telephoneCheck("(555)555-5555"));
// console.log(telephoneCheck("1(555)555-5555"));
// console.log(telephoneCheck("555-5555"));
// console.log(telephoneCheck("5555555"));
// console.log(telephoneCheck("1 555)555-5555"));
// console.log(telephoneCheck("1 555 555 5555"));
// console.log(telephoneCheck("1 456 789 4444"));
// console.log(telephoneCheck("123**&!!asdf#"));
// console.log(telephoneCheck("55555555"));
// console.log(telephoneCheck("(6054756961)"));
// console.log(telephoneCheck("2 (757) 622-7382"));
// console.log(telephoneCheck("0 (757) 622-7382"));
// console.log(telephoneCheck("-1 (757) 622-7382"));
// console.log(telephoneCheck("2 757 622-7382"));
// console.log(telephoneCheck("10 (757) 622-7382"));
// console.log(telephoneCheck("27576227382"));
// console.log(telephoneCheck("(275)76227382"));
// console.log(telephoneCheck("2(757)6227382"));
// console.log(telephoneCheck("2(757)622-7382"));
// console.log(telephoneCheck("555)-555-5555"));
// console.log(telephoneCheck("(555-555-5555"));
// console.log(telephoneCheck("(555)5(55?)-5555"));
// console.log(telephoneCheck("55 55-55-555-5"));
