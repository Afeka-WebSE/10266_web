const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

// 1. Data Layer: Function responsible ONLY for fetching
const getUserData = async (url) => {
  const response = await fetch(url);

  // If status is not 2xx, we throw an error for the caller to handle
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // Returns a Promise that resolves with the parsed JSON
  return await response.json();
};

// 2. UI/Consumer Layer: Function responsible for execution and handling errors
const displayUser = async () => {
  try {
    // We wait for the fetcher function. If it throws, we jump to catch.
    const userData = await getUserData(apiUrl);
    console.log("User details:", userData);

  } catch (error) {
    // Here we catch both Network errors AND the manual Error we threw
    console.error("Failed to load user info:", error.message);
  }
};

// Execute the flow
displayUser();
