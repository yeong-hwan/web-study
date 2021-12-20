function isPalindrome(word) {
  for (let i=1; i<=word.length; i++) {
    if (word[i] !== word[word.length - i -1]) {
      return false;
    }
  };
  return true;
};
// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));