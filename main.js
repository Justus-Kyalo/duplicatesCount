function duplicateCount(string) {
  // Return 0 if the input string is empty
  if (string.length === 0) {
    return 0;
  }

  // Create a dictionary to store the count of each character
  const charCount = {};

  // Iterate through the string and count the occurrence of each character
  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();
    if (char in charCount) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  // Initialize a count to store the number of characters that occur more than once
  let count = 0;

  // Iterate through the dictionary and count the number of characters that occur more than once
  for (const char in charCount) {
    if (charCount[char] > 1) {
      count += 1;
    }
  }

  return count;
}
