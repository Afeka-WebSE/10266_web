const lecturer = {
  name: "John Doe",
  courses: ["C", "Java", "Python"],

  printCourses: function() {
    this.courses.forEach(function(course) {
      // BUG: 'this' here points to the global object (window) or is undefined,
      // because a regular function creates its own 'this' context.
      console.log(this.name + " teaches " + course);
    });
  }
};

lecturer.printCourses();

/*
Output:
undefined teaches C
undefined teaches Java
undefined teaches Python
*/


const lecturer = {
  name: "John Doe",
  courses: ["C", "Java", "Python"],

  printCourses: function() {
    this.courses.forEach((course) => {
      // SUCCESS: Arrow functions do not create their own 'this'.
      // They inherit 'this' from the parent scope (lexical scoping).
      console.log(this.name + " teaches " + course);
    });
  }
};

lecturer.printCourses();

/*
Output:
John Doe teaches C
John Doe teaches Java
John Doe teaches Python
*/


// 1. Spreading Arrays
const numbers = [1, 2, 3];

// Creates a NEW array in memory containing 1, 2, 3, and then 4, 5
// This replaces the need for push() which mutates the original array
const newNumbers = [...numbers, 4, 5];

// 2. Spreading Objects
const baseConfig = { host: "localhost", port: 8080 };

// Creates a new object, copies baseConfig, and overwrites the port
const devConfig = { ...baseConfig, port: 3000 };
// devConfig is now: { host: "localhost", port: 3000 }

// The original object remains completely untouched
console.log(baseConfig.port); // Outputs: 8080
