function lengthOfLongestSubstring(s) {
    let left = 0; // Start of the window
    let maxLength = 0;
    let currentChars = new Set(); // Set to track characters in the window

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If the character already exists in the set, move the left pointer
        while (currentChars.has(char)) {
            currentChars.delete(s[left]); // Remove the leftmost character
            left++; // Shrink the window from the left
        }

        // Add the current character to the set
        currentChars.add(char);

        // Update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb"));