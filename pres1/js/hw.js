// 1. Initial product state object
let productState = {
  title: "Wireless Headphones",
  stock: 4,
  itemsInCart: 0
};

// 2. DOM Elements tracking
const addToCartBtn = document.getElementById('add-to-cart-btn');
const stockDisplay = document.getElementById('stock-display');

// 3. Event listener utilizing an Arrow Function
addToCartBtn.addEventListener('click', () => {

  // 4. Immutable state update using the Spread Operator
  const nextState = {
    ...productState,
    stock: productState.stock - 1,
    itemsInCart: productState.itemsInCart + 1
  };

  // Mutating the reference variable to point to the new object state
  productState = nextState;

  // 5. Destructuring variables from the new state object
  const { stock, itemsInCart } = productState;

  // 6. Dynamically updating the DOM elements
  stockDisplay.innerText = `Items left in stock: ${stock}`;
  addToCartBtn.innerText = `Add to Cart (${itemsInCart})`;

  // 7. Handling edge case when stock drops to 0
  if (stock === 0) {
    addToCartBtn.innerText = "Out of Stock";
    addToCartBtn.disabled = true;
  }
});

/* ==========================================================================
   TASK 4: ANSWERS TO CODE UNDERSTANDING QUESTIONS
   ==========================================================================

   1. The 'const' Keyword:
   When an object is declared with const, it protects the memory reference of the
   variable itself from being reassigned to a completely new reference using '='.
   However, it does not freeze the inner properties of that object. In this solution,
   we changed our state tracker 'productState' to use 'let' instead of 'const' so
   we can safely update its reference pointing to the freshly created 'nextState'
   object during each runtime click operation.

   2. Arrow Functions Context:
   Arrow functions do not bind or create their own 'this' context. Instead, they
   inherit 'this' lexically from their enclosing parent scope. In this case,
   using 'this' inside the arrow function event listener would point to the global
   'window' object (or undefined in strict mode). This differs from traditional
   functions, where 'this' dynamically binds to the element that triggered the
   event (the button itself).

   3. Immutability Principle:
   Directly mutating objects via syntax like 'state.stock--' modifies existing data
   in-place. This makes state tracking hard to debug and break change logs.
   By using the Spread Operator to produce a new object clone, we maintain state
   history clean. Modern web libraries like React depend heavily on pure immutable
   updates, comparing shallow memory references to determine exactly when components
   require a UI re-render.
*/
