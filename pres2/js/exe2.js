// 1. Defining the wrapper function
const delay = (ms) => {
  // 2. Returning a new Promise object
  return new Promise((resolve, reject) => {
    // 3. Using the legacy setTimeout internally
    setTimeout(() => {
      // 4. Resolving the promise after the delay
      resolve(`Timer Finished after ${ms}ms!`);
    }, ms);
  });
};

// 5. Execution and Chaining
console.log("Starting timer...");
delay(2000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => console.error(error));
