// DOM Element References
const idInput = document.getElementById('server-id');
const checkBtn = document.getElementById('check-btn');
const statusDiv = document.getElementById('server-status');

// Main Asynchronous Function
const checkServer = async (id) => {
  // 1. Loading State: Displaying initial message before the network request
  statusDiv.textContent = "Loading server data...";
  statusDiv.className = "status-loading";

  try {
    // 2. Network Request: Fetching data from the API
    setTimeout(async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

        // 3. Error Handling: Manually checking if the HTTP status is not OK (e.g., 404)
        if (!response.ok) {
          throw new Error(`Server not found (HTTP Status: ${response.status})`);
        }

        // 4. Parsing the JSON response
        const data = await response.json();

        // 5. Destructuring: Extracting specific fields from the response object
        const {title, completed} = data;

        // 6. UI Update: Rendering the result based on the boolean value
        statusDiv.textContent = `Task: ${title}`;
        statusDiv.className = completed ? 'status-success' : 'status-error';
      }
, 20000);
  } catch (error) {
    // Catching network failures or the manual error thrown above
    statusDiv.textContent = `Error: ${error.message}`;
    statusDiv.className = 'status-error';

  } finally {
    // This block executes regardless of success or failure
    console.log(`Network sequence for ID ${id} has finished.`);
    idInput.value = ""; // Optional: Clear the input field
  }
};

// Event Listener for the button
checkBtn.addEventListener('click', () => {
  const serverId = idInput.value;

  // Basic validation to ensure the input is not empty
  if (!serverId) {
    statusDiv.textContent = "Please enter a valid ID.";
    statusDiv.className = "status-error";
    return;
  }

  // Triggering the async logic
  checkServer(serverId);
});
