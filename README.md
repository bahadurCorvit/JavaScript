# JavaScript Readme File

## Introduction to JavaScript
JavaScript (JS) is a versatile and powerful programming language used to create dynamic and interactive content on websites. It is supported by all modern web browsers and is an essential technology alongside HTML and CSS for front-end development. Additionally, JavaScript can be used on the server-side with environments like Node.js.

---

## Two Ways to Use JavaScript

1. **Browser:**
   - JavaScript code can be embedded in HTML files using `<script>` tags.
   ```html
   <script>
     console.log("Hello from the browser!");
   </script>
   ```

2. **Node.js:**
   - JavaScript can run outside the browser using Node.js.
   ```javascript
   console.log("Hello from Node.js!");
   ```
   To execute, use the command:
   ```bash
   node filename.js
   ```

---

## Different Ways to Print in JavaScript

1. **Using `console.log()`**
   ```javascript
   console.log("Hello, World!");
   ```

2. **Using `alert()` (Browser only)**
   ```javascript
   alert("Hello, World!");
   ```

3. **Using `document.write()` (Browser only)**
   ```javascript
   document.write("Hello, World!");
   ```

---

## Variables

### Declaring Variables
- `var`: Global or function-scoped.
- `let`: Block-scoped.
- `const`: Block-scoped, value cannot be reassigned.

Example:
```javascript
var x = 10;
let y = 20;
const z = 30;
```

---

## Data Types
JavaScript provides the following data types:

1. **Primitive Types:**
   - String: `"Hello"`
   - Number: `42`
   - Boolean: `true` or `false`
   - Null: `null`
   - Undefined: `undefined`

2. **Non-Primitive Types:**
   - Object: `{ key: "value" }`
   - Array: `[1, 2, 3]`

Example:
```javascript
let str = "JavaScript";
let num = 100;
let isActive = true;
let nothing = null;
let notDefined;
let arr = [1, 2, 3];
let obj = { 
    name : "Corvit",
    no_of_courses : 3,
    courses_names : ["Full Stack", "Artifical Intelligent", "Cyber Security"],
    is_course_active : true,
    address: {
        road : "Bank Road",
        college : "Tech Era",
        university : "Virtual University",
        city : "Muzaffarabad"
    }
};
```

---

## Environment Setup

### Node.js Installation
1. Download Node.js from [nodejs.org](https://nodejs.org/).
2. Install using the downloaded executable.
3. Verify installation:
   ```bash
   node -v
   npm -v
   ```

### Setting up Nodemon
1. Install Nodemon globally:
   ```bash
   npm install -g nodemon
   ```
2. Run your script with Nodemon:
   ```bash
   nodemon filename.js
   ```

---

## Conditions

### Conditional Statements
1. **If-Else**
   ```javascript
   if (x > 10) {
     console.log("x is greater than 10");
   } else {
     console.log("x is less than or equal to 10");
   }
   ```

2. **Switch**
   ```javascript
   let color = "red";
   switch (color) {
     case "red":
       console.log("Color is red");
       break;
     case "blue":
       console.log("Color is blue");
       break;
     default:
       console.log("Color not recognized");
   }
   ```

---

## Loops

1. **For Loop**
   ```javascript
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

2. **While Loop**
   ```javascript
   let i = 0;
   while (i < 5) {
     console.log(i);
     i++;
   }
   ```

3. **Do-While Loop**
   ```javascript
   let i = 0;
   do {
     console.log(i);
     i++;
   } while (i < 5);
   ```

4. **ForEach Loop (Arrays)**
   ```javascript
   const arr = [1, 2, 3];
   arr.forEach(num => console.log(num));
   ```

---

## Serialization
Serialization refers to converting data into a format that can be easily stored or transferred.

1. **JSON.stringify()** (Serialize an object):
   ```javascript
   const obj = { name: "John", age: 30 };
   const jsonString = JSON.stringify(obj);
   console.log(jsonString);
   ```

2. **JSON.parse()** (Deserialize a JSON string):
   ```javascript
   const jsonString = '{"name":"John","age":30}';
   const obj = JSON.parse(jsonString);
   console.log(obj);
   ```

---

## Array Methods

1. **length**
   ```javascript
   const arr = [1, 2, 3];
   console.log(arr.length); // 3
   ```

2. **forEach**
   ```javascript
   const arr = [1, 2, 3];
   arr.forEach(num => console.log(num));
   ```

3. **map**
   ```javascript
   const nums = [1, 2, 3];
   const squared = nums.map(num => num * num);
   console.log(squared); // [1, 4, 9]
   ```

4. **filter**
   ```javascript
   const nums = [1, 2, 3, 4];
   const even = nums.filter(num => num % 2 === 0);
   console.log(even); // [2, 4]
   ```

5. **reduce**
   ```javascript
   const nums = [1, 2, 3, 4];
   const sum = nums.reduce((acc, num) => acc + num, 0);
   console.log(sum); // 10
   ```

6. **find**
   ```javascript
   const nums = [1, 2, 3, 4];
   const found = nums.find(num => num > 2);
   console.log(found); // 3
   ```

7. **findIndex**
   ```javascript
   const nums = [1, 2, 3, 4];
   const index = nums.findIndex(num => num > 2);
   console.log(index); // 2
   ```

8. **some**
   ```javascript
   const nums = [1, 2, 3, 4];
   const hasEven = nums.some(num => num % 2 === 0);
   console.log(hasEven); // true
   ```

9. **every**
   ```javascript
   const nums = [2, 4, 6];
   const allEven = nums.every(num => num % 2 === 0);
   console.log(allEven); // true
   ```

10. **sort**
    ```javascript
    const nums = [3, 1, 4, 2];
    nums.sort();
    console.log(nums); // [1, 2, 3, 4]
    ```

11. **reverse**
    ```javascript
    const nums = [1, 2, 3];
    nums.reverse();
    console.log(nums); // [3, 2, 1]
    ```

12. **join**
    ```javascript
    const arr = ["a", "b", "c"];
    console.log(arr.join("-")); // "a-b-c"
    ```

13. **slice**
    ```javascript
    const nums = [1, 2, 3, 4];
    console.log(nums.slice(1, 3)); // [2, 3]
    ```

14. **push**
    The `push()` adds elements to the end of an array and returns the new length of the array.
    ```javascript
    let arr = [1, 2, 3];
    arr.push(4);
    console.log(arr); // [1, 2, 3, 4]
    ```

15. **concat**
    The `concat()` method is used to merge arrays. Concat does not change the existing arrays, but instead returns a new array.
    ```javascript
    let arr1 = [1, 2];
    let arr2 = [3, 4];
    console.log(arr1.concat(arr2)); // [1, 2, 3, 4]
    ```

16. **pop**
    ```javascript
    let arr = [1, 2, 3];
    arr.pop();
    console.log(arr); // [1, 2]
    ```

17. **indexOf**
    ```javascript
    const arr = [1, 2, 3, 2];
    console.log(arr.indexOf(2)); // 1
    ```

18. **lastIndexOf**
    ```javascript
    const arr = [1, 2, 3, 2];
    console.log(arr.lastIndexOf(2)); // 3
    ```

19. **fill**
    ```javascript
    const arr = [1, 2, 3];
    console.log(arr.fill(0)); // [0, 

20. **Destructuring**
```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // Output: 1, 2, 3
```

---

## Number Methods

1. **toExponential**
   The `toExponential()` method formats a number to **exponential notation** (also called scientific notation). It returns a string representing the number in exponential form.

   ```javascript
   const num = 12345;
   console.log(num.toExponential(2)); // "1.23e+4"
   ```
   - The argument (`2` in this case) specifies the number of digits after the decimal point.

2. **toFixed**
   The `toFixed()` method formats a number to a **fixed number of decimal places** and returns it as a string.

   ```javascript
   const num = 123.456;
   console.log(num.toFixed(2)); // "123.46"
   ```
   - The argument (`2` in this case) specifies the number of decimal places to round the number to.

3. **toPrecision**
   The `toPrecision()` method formats a number to a **specified total number of significant digits** and returns it as a string.

   ```javascript
   const num = 123.456;
   console.log(num.toPrecision(4)); // "123.5"
   ```
   - The argument (`4` in this case) specifies the total number of significant digits, including digits before and after the decimal point.

4. **toString**
   The `toString()` method returns a **string** representing the specified number in a given base (default is base 10).

   ```javascript
   const num = 123;
   console.log(num.toString()); // "123"
   console.log(num.toString(2)); // "1111011" (binary representation)
   ```
   - The optional argument can specify the base (e.g., `2` for binary, `16` for hexadecimal, etc.). If no argument is provided, it defaults to base 10.