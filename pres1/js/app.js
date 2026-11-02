// 1. Initial state object using const
const profileStats = {
  views: 150,
  likes: 0
};

// 2. Grabbing the button from the DOM
const likeBtn = document.getElementById('like-btn');

// 3. Adding an event listener using an Arrow Function
likeBtn.addEventListener('click', () => {

  // 4. Using the Spread Operator to create a new updated object
  const updatedStats = {
    ...profileStats,
    likes: profileStats.likes + 1
  };

  // Updating the reference of the original object's values
  profileStats.likes = updatedStats.likes;

  // 5. Using Destructuring to extract the new likes value
  const { likes } = updatedStats;

  // 6. Updating the DOM
  likeBtn.innerText = `Like Profile (${likes})`;
});
