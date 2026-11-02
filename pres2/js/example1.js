console.log("1. Starting application...");

// Simulating a long-running server request (e.g., fetching user data)
setTimeout(() => {
  console.log("2. Data received from server!");
}, 2000); // Wait for 2000 milliseconds (2 seconds)

console.log("3. Doing other UI tasks...");
console.log("4. Application ready.");

/*
Expected Output in Java/C (Mental Model):
1. Starting application...
2. Data received from server! (after 2 seconds)
3. Doing other UI tasks...
4. Application ready.

Actual Output in JavaScript:
1. Starting application...
3. Doing other UI tasks...
4. Application ready.
2. Data received from server! (appears 2 seconds later)
*/
