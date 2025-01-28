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
   - Symbol (ES6): `Symbol("id")`
   - BigInt (ES11): `123n`

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
let obj = { name: "JS" };
let arr = [1, 2, 3];
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

1. **Push and Pop**
   ```javascript
   let arr = [1, 2, 3];
   arr.push(4); // [1, 2, 3, 4]
   arr.pop();   // [1, 2, 3]
   ```

2. **Shift and Unshift**
   ```javascript
   let arr = [1, 2, 3];
   arr.shift();    // [2, 3]
   arr.unshift(0); // [0, 2, 3]
   ```

3. **Map**
   ```javascript
   const nums = [1, 2, 3];
   const squared = nums.map(num => num * num);
   console.log(squared); // [1, 4, 9]
   ```

4. **Filter**
   ```javascript
   const nums = [1, 2, 3, 4];
   const even = nums.filter(num => num % 2 === 0);
   console.log(even); // [2, 4]
   ```

5. **Reduce**
   ```javascript
   const nums = [1, 2, 3, 4];
   const sum = nums.reduce((acc, num) => acc + num, 0);
   console.log(sum); // 10
   ```

---

## String Methods

1. **Length**
   ```javascript
   let str = "Hello";
   console.log(str.length); // 5
   ```

2. **Substring**
   ```javascript
   let str = "JavaScript";
   console.log(str.substring(0, 4)); // "Java"
   ```

3. **Split**
   ```javascript
   let str = "a,b,c";
   console.log(str.split(",")); // ["a", "b", "c"]
   ```

4. **Replace**
   ```javascript
   let str = "Hello, World!";
   console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
   ```

5. **Trim**
   ```javascript
   let str = "   Hello   ";
   console.log(str.trim()); // "Hello"
   ```

