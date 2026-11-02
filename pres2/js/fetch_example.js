
// The generic URL for fetching fake data
const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

fetch(apiUrl)
  .then((response) => {
    // Checking if HTTP status is OK (200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parsing the stream into a JSON object (returns a Promise!)
    return response.json();
  })
  .then((userData) => {
    console.log("User details:", userData);
  })
  .catch((error) => console.error("Network error:", error));
