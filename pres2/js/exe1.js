console.log('1. Sync Start');

setTimeout(() => {
  console.log('2. Task Queue (setTimeout)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Microtask Queue (Promise)');
});

console.log('4. Sync End');
