
// Creating a function that returns a Promise
const fetchRemoteData = () => {
  return new Promise((resolve, reject) => {

    // Simulating a network delay of 2 seconds
    setTimeout(() => {
      // Simulating a 50% chance of success or failure
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        resolve({ status: 200, data: "Here is your data!" });
      } else {
        reject({ status: 500, error: "Internal Server Error" });
      }
    }, 2000);

  });
};

console.log("--- Starting Network Request ---");
// Activating the function and storing the returned Promise
const myPromise = fetchRemoteData();

// 1. STATE: PENDING
// This logs immediately because the 2 seconds haven't passed yet.
console.log("1. Immediate Check:", myPromise);

// Handling the future result
myPromise
  .then((result) => {
    // 2. STATE: FULFILLED
    // This runs after 2 seconds if Math.random() > 0.5
    console.log("2. Async Check (Success):", myPromise);
    console.log("Data received:", result.data);
  })
  .catch((err) => {
    // 3. STATE: REJECTED
    // This runs after 2 seconds if Math.random() <= 0.5
    console.log("3. Async Check (Failed):", myPromise);
    console.error("Error occurred:", err.error);
  });


// checkServerStatus
//   .then((response) => {
//     console.log("Success:", response.message);
//     // We can return a new value to the next .then()
//     return response.status;
//   })
//   .then((statusCode) => {
//     console.log("HTTP Code is:", statusCode);
//   })
//   .catch((error) => {
//     console.error("Error occurred:", error);
//   })
//   .finally(() => {
//     console.log("Network check sequence finished.");
//   });
//
//
// function getUserOldWay() {
//   fetchUserData(1)
//     .then(user => console.log(user));
// }
//
// // Using Async/Await
// async function getUserModernWay() {
//   const user = await fetchUserData(1);
//   console.log(user);
// }
//

async function startDownloadSequence() {
  try {
    console.log("Initiating download...");
    const result = await simulateDownload("data.json");
    console.log("Success:", result);
  } catch (error) {
    // This block catches the 'reject' or any regular JS errors
    console.error("Sequence aborted due to error:", error);
  } finally {
    console.log("Cleaning up resources.");
  }
}

