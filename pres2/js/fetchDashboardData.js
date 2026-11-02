const fetchUserDashboard = async (userId) => {
  // 1. Real valid endpoints from JSONPlaceholder
  const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  // 2. Intentionally broken endpoint to simulate a server crash or network error
  const badUrl = `https://invalid-domain.typicode.com/data`;

  console.log("Starting concurrent network requests...");

  try {
    // 3. Firing all requests at the same time using Promise.allSettled.
    // It will NOT crash if one of them fails. It waits for all to finish.
    const results = await Promise.allSettled([
      fetch(userUrl),
      fetch(postsUrl),
      fetch(badUrl)
    ]);

    // results is an array of objects describing the outcome of each Promise.

    // --- Process User Data (Index 0) ---
    if (results[0].status === "fulfilled" && results[0].value.ok) {
      // Parsing the JSON only if the request was successful
      const userData = await results[0].value.json();
      console.log("✅ User loaded successfully:", userData.name);
    } else {
      console.error("❌ Failed to load user data.");
    }

    // --- Process Posts Data (Index 1) ---
    if (results[1].status === "fulfilled" && results[1].value.ok) {
      const postsData = await results[1].value.json();
      console.log(`✅ Loaded ${postsData.length} posts for the user.`);
    } else {
      console.error("❌ Failed to load posts.");
    }

    // --- Process the Broken Endpoint (Index 2) ---
    if (results[2].status === "rejected") {
      // This captures the network error gracefully without crashing the app
      console.warn("⚠️ Third request failed as expected. Reason:", results[2].reason.message);
    }

  } catch (error) {
    // This catch block will only trigger if there is a critical syntax error
    // in the JS code itself, not from the network requests failing.
    console.error("Critical execution error:", error);
  }
};

// Execute the function with User ID 1
fetchUserDashboard(1);
