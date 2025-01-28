### **Spread Operator (`...`)**
The **spread operator** expands elements of an array or object into individual elements. It is commonly used with arrays, objects, and function arguments.


### **Examples of Spread Operator**

1. **Function with Rest Parameters**  
   Allows collecting all remaining arguments into an array:
   ```javascript
   function test(firstName, lastName, ...otherInfo) {
       console.log("First Name:", firstName);
       console.log("Last Name:", lastName);
       console.log("Other Info:", otherInfo); // Captures the remaining arguments
   }
   test("Mansoor", "Nasir", 30, "Pakistan", "Developer");
   // Output:
   // First Name: Mansoor
   // Last Name: Nasir
   // Other Info: [30, "Pakistan", "Developer"]
   ```

2. **Spread in Arrays**
   Expands array elements:
   ```javascript
   const test = ["test", ...more, "test"];
   console.log(test);
   ```
   Here, `...more` would expand the values of the `more` array into the `test` array.

3. **Spread with Strings**
   Expands a string into an array of individual characters:
   ```javascript
   const name = "Mansoor";
   console.log([...name]); // Output: ["M", "a", "n", "s", "o", "o", "r"]
   ```

4. **Passing Array Elements to a Function**
   Expands array elements as arguments:
   ```javascript
   const numbers = [5, 10, 15];
   function add(a, b, c) {
       return a + b + c;
   }
   console.log(add(...numbers)); // Output: 30
   ```

### **Spread in Objects**

1. **Adding Properties to an Object**
   Creates a new object by combining properties of another object:
   ```javascript
   const myName = { firstName: "mansoor", lastName: "nasir" };
   const bio = { ...myName, website: "mansoornasir.com" };
   console.log(bio);
   // Output: { firstName: "mansoor", lastName: "nasir", website: "mansoornasir.com" }
   ```

2. **Combining Arrays into an Object**
   Converts arrays into object-like structures:
   ```javascript
   const myNames = ["Test1", "Test2"];
   const test = { ...myNames, runs: "test" };
   console.log(test);
   // Output: { 0: "Test1", 1: "Test2", runs: "test" }
   ```

### **Combining Spread with Rest**
You can combine spread and rest effectively in the same context. For example:
```javascript
function test(firstName, ...rest) {
    console.log("First Name:", firstName);
    console.log("Rest:", rest); // All remaining arguments as an array
}

test("Mansoor", "Nasir", "Pakistan", 30);
// Output:
// First Name: Mansoor
// Rest: ["Nasir", "Pakistan", 30]
```

### **Use Cases of Spread and Rest**

1. **Cloning Objects and Arrays**
   ```javascript
   const original = { a: 1, b: 2 };
   const copy = { ...original };
   console.log(copy); // Output: { a: 1, b: 2 }
   ```

2. **Merging Objects**
   ```javascript
   const obj1 = { x: 1 };
   const obj2 = { y: 2 };
   const merged = { ...obj1, ...obj2 };
   console.log(merged); // Output: { x: 1, y: 2 }
   ```

3. **Appending to Arrays**
   ```javascript
   const arr1 = [1, 2];
   const arr2 = [...arr1, 3, 4];
   console.log(arr2); // Output: [1, 2, 3, 4]
   ```

4. **Destructuring and Rest**
   ```javascript
   const [first, ...rest] = [10, 20, 30];
   console.log(first); // Output: 10
   console.log(rest); // Output: [20, 30]
   ```

---