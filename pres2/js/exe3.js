const getRandomQuote = async () => {
  try {
    console.log("Fetching quote...");
    const url = 'https://dummyjson.com/quotes/random';
    // const url = 'https://dummyjson.com/quotes/invalid';
    // Waiting for the network response
    const response = await fetch(url);
    // Manual check for 404/500 errors
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    // Parsing the JSON body
    const data = await response.json();
    // Output the specific fields
    console.log(`"${data.quote}" - ${data.author}`);
  } catch (error) {
    // Catching either network failure or the manually thrown error
    console.error("Failed to fetch quote:", error.message);
  }
};

getRandomQuote();
