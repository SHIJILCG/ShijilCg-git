function repeatingcharacters(str) {
    let maxLength = 0; // To store the maximum length of substring without repeating characters
    let currentLength = 0; // To store the current length of the substring without repeating characters
    let visited = {}; // To keep track of the most recent index of each character

    for (let start = 0, end = 0; end < str.length; end++) {
        let currentChar = str[end];
        
        if (visited[currentChar] !== undefined && visited[currentChar] >= start) {
            // If the current character is already in the substring
            start = visited[currentChar] + 1; // Move the start pointer to one past the last occurrence of currentChar
            currentLength = end - start; // Update currentLength
        }
        
        visited[currentChar] = end; // Update the most recent index of currentChar
        currentLength++; // Increment currentLength
        
        maxLength = Math.max(maxLength, currentLength); // Update maxLength
    }
    
    return maxLength;
}

// Test cases
const testCase = [
    { input: "abcabcbb", result: 3 },
    { input: "abcabcbbfghijklo", result: 8 },
    { input: "aaaabbb", result: 1 }
];

function testRepeatingCharacters() {
    testCase.forEach((test, index) => {
        const result = repeatingcharacters(test.input);
        console.log(`Test ${index + 1}`);
        console.log("Input:", test.input);
        console.log("Expected:", test.result);
        console.log("Output:", result);
        console.log(result === test.result ? "Passed" : "Failed");
        console.log(".........................................................");
    });
}

testRepeatingCharacters();
