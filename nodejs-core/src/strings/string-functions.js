class StringFunctions {
  static reverse(value) {
    if (value === null || typeof value !== "string")
      throw new Error("Value is not valid");

    return value.split("").reverse().join("");
  }

  static reverseWithReduce(value) {
    return value.split("").reduce((acc, cur) => cur + acc, "");
  }

  static isPalindrome(value) {
    const reversedValue = this.reverseWithReduce(value);

    return value === reversedValue;
  }
}

export const Main = () => {
  console.log("For alberto:", StringFunctions.reverse("alberto"));
  console.log("For arroyo raygada:", StringFunctions.reverse("arroyo raygada"));

  console.log("For alberto:", StringFunctions.reverseWithReduce("alberto"));
  console.log(
    "For arroyo raygada:",
    StringFunctions.reverseWithReduce("arroyo raygada")
  );

  console.log("Is Palindrome(abba)", StringFunctions.isPalindrome("abba"));
};
