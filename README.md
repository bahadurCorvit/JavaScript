## Introduction to JavaScript
JavaScript (JS) is a versatile and powerful programming language used to create dynamic and interactive content on websites. It is supported by all modern web browsers and is an essential technology alongside HTML and CSS for front-end development. Additionally, JavaScript can be used on the server-side with environments like Node.js.

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
## **Functions**

Functions in JavaScript are reusable blocks of code that perform a specific task. They can accept parameters, return values, and be written in different styles.

1. **Functions with Arguments**

```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Mansoor"); // Output: Hello, Mansoor!
```

2. **Functions Without Arguments**

```javascript
function sayHello() {
    console.log("Hello, World!");
}
sayHello(); // Output: Hello, World!
```

3. **Returning a Value (`return`)**

```javascript
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log(sum); // Output: 15
```

4. **Default Parameters**

```javascript
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5));  // Output: 10 (b defaults to 2)
console.log(multiply(5, 3)); // Output: 15
```

5. **Rest Parameters (`...`)**

```javascript
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
```
6. **Arrow Functions (`=>`)**

```javascript
const square = (x) => x * x;
console.log(square(4)); // Output: 16
```

**Multi-line Arrow Function**
```javascript
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(3, 4)); // Output: 12
```

**Arrow Function Without Parameters**
```javascript
const greet = () => console.log("Hello, World!");
greet(); // Output: Hello, World!
```
<!-- 7. **Function Binding (For React Event Handling)**
Function binding ensures that `this` refers to the correct context, especially in **React components**.

**Without Binding (`this` is undefined in event handlers)**
```javascript
class Button extends React.Component {
    handleClick() {
        console.log(this); // 'this' is undefined
    }

    render() {
        return <button onClick={this.handleClick}>Click Me</button>;
    }
}
```

**With Binding (`this` is correctly set)**
```javascript
class Button extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this); // 'this' refers to the component instance
    }

    render() {
        return <button onClick={this.handleClick}>Click Me</button>;
    }
}
```

**Using Arrow Function to Avoid Binding**
```javascript
class Button extends React.Component {
    handleClick = () => {
        console.log(this); // 'this' refers to the component instance
    };

    render() {
        return <button onClick={this.handleClick}>Click Me</button>;
    }
}
``` -->
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
## **String**

A **string** is a sequence of characters used to represent text in JavaScript. Strings are enclosed in either single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).


### **1. Concatenation**
```javascript
const firstName = "Mansoor";
const lastName = "Nasir";

// Using + operator
const fullName = firstName + " " + lastName;
console.log(fullName); // Output: Mansoor Nasir
```


### **2. Escape Characters**
Escape characters are used to include special characters in a string.

| Escape Sequence | Meaning         |
|------------------|-----------------|
| `\'`            | Single Quote    |
| `\"`            | Double Quote    |
| `\\`            | Backslash       |
| `\n`            | New Line        |
| `\t`            | Tab             |


```javascript
const text = "He said, \"Hello!\"";
console.log(text); // Output: He said, "Hello!"
```

### **3. Template Literals**
Template literals allow embedding expressions inside strings using backticks (`` ` ``) and `${}`.

```javascript
const name = "Mansoor";
const age = 25;
const bio = `My name is ${name} and I am ${age} years old.`;
console.log(bio);
// Output: My name is Mansoor and I am 25 years old.
```

### **4. String Methods**

#### **4.1 `concat()`**
Joins two or more strings.
```javascript
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // Output: Hello World
```

#### **4.2 `indexOf()`**
Returns the index of the first occurrence of a substring.
```javascript
const text = "Hello World";
console.log(text.indexOf("World")); // Output: 6
```

#### **4.3 `lastIndexOf()`**
Returns the index of the last occurrence of a substring.
```javascript
const text = "Hello World World";
console.log(text.lastIndexOf("World")); // Output: 12
```

#### **4.4 `replace()`**
Replaces a specified value with another value in a string.
```javascript
const text = "Hello World";
console.log(text.replace("World", "Everyone")); // Output: Hello Everyone
```

#### **4.5 `slice()`**
Extracts part of a string and returns it as a new string.
```javascript
const text = "JavaScript";
console.log(text.slice(0, 4)); // Output: Java
```

#### **4.6 `split()`**
Splits a string into an array based on a delimiter.
```javascript
const text = "a,b,c,d";
console.log(text.split(",")); // Output: ["a", "b", "c", "d"]
```

#### **4.7 `substring()`**
Extracts characters between two indices.
```javascript
const text = "JavaScript";
console.log(text.substring(0, 4)); // Output: Java
```

#### **4.8 `toLowerCase()`**
Converts a string to lowercase.
```javascript
const text = "Hello World";
console.log(text.toLowerCase()); // Output: hello world
```

#### **4.9 `toUpperCase()`**
Converts a string to uppercase.
```javascript
const text = "Hello World";
console.log(text.toUpperCase()); // Output: HELLO WORLD
```

#### **4.10 `trim()`**
Removes whitespace from both ends of a string.
```javascript
const text = "   Hello World   ";
console.log(text.trim()); // Output: Hello World
```

#### **4.11 `trimLeft()`**
Removes whitespace from the start of a string.
```javascript
const text = "   Hello World   ";
console.log(text.trimLeft()); // Output: Hello World   
```

#### **4.12 `trimRight()`**
Removes whitespace from the end of a string.
```javascript
const text = "   Hello World   ";
console.log(text.trimRight()); // Output:    Hello World
```

#### **4.13 `valueOf()`**
Returns the primitive value of a string.
```javascript
const text = new String("Hello World");
console.log(text.valueOf()); // Output: Hello World
```

#### **Combining Methods:**
```javascript
const text = "   JavaScript is awesome!   ";
const trimmedUpperCase = text.trim().toUpperCase();
console.log(trimmedUpperCase); // Output: JAVASCRIPT IS AWESOME!
```

#### **Using `split()` and `join()` for Replacement:**
```javascript
const sentence = "I love JavaScript!";
const replaced = sentence.split(" ").join("-");
console.log(replaced); // Output: I-love-JavaScript!
```
---

## Number Methods

1. **toExponential**

   ```javascript
   const num = 12345;
   console.log(num.toExponential(2)); // "1.23e+4"
   ```

2. **toFixed**

   ```javascript
   const num = 123.456;
   console.log(num.toFixed(2)); // "123.46"
   ```

3. **toPrecision**

   ```javascript
   const num = 123.456;
   console.log(num.toPrecision(4)); // "123.5"
   ```

4. **toString**

   ```javascript
   const num = 123;
   console.log(num.toString()); // "123"
   console.log(num.toString(2)); // "1111011" (binary representation)
   ```
---

## Date

1. **`getDate()`**
   - Returns the day of the month (1–31).
   ```javascript
   const date = new Date();
   console.log(date.getDate()); // e.g., 28
   ```

2. **`getDay()`**
   - Returns the day of the week (0–6), where 0 is Sunday and 6 is Saturday.
   ```javascript
   console.log(date.getDay()); // e.g., 1 (Monday)
   ```

3. **`getFullYear()`**
   - Returns the full year (e.g., 2025).
   ```javascript
   console.log(date.getFullYear()); // e.g., 2025
   ```

4. **`getHours()`**
   - Returns the hour (0–23).
   ```javascript
   console.log(date.getHours()); // e.g., 14 (2 PM)
   ```

5. **`getMilliseconds()`**
   - Returns the milliseconds (0–999).
   ```javascript
   console.log(date.getMilliseconds()); // e.g., 123
   ```

6. **`getMinutes()`**
   - Returns the minutes (0–59).
   ```javascript
   console.log(date.getMinutes()); // e.g., 45
   ```

7. **`getMonth()`**
   - Returns the month (0–11), where 0 is January and 11 is December.
   ```javascript
   console.log(date.getMonth()); // e.g., 0 (January)
   ```

8. **`getSeconds()`**
   - Returns the seconds (0–59).
   ```javascript
   console.log(date.getSeconds()); // e.g., 30
   ```

9. **`getTime()`**
   - Returns the number of milliseconds since January 1, 1970.
   ```javascript
   console.log(date.getTime()); // e.g., 1738078823000
   ```

10. **`toDateString()`**
   - Returns the date as a readable string.
   ```javascript
   console.log(date.toDateString()); // e.g., "Mon Jan 28 2025"
   ```

11. **`toJSON()`**
   - Converts the date to a JSON string (ISO format).
   ```javascript
   console.log(date.toJSON()); // e.g., "2025-01-28T14:45:30.123Z"
   ```

12. **`toLocaleDateString()`**
   - Returns the date in the local format.
   ```javascript
   console.log(date.toLocaleDateString()); // e.g., "1/28/2025" (US)
   ```

13. **`toLocaleString()`**
   - Returns the date and time in the local format.
   ```javascript
   console.log(date.toLocaleString()); // e.g., "1/28/2025, 2:45:30 PM"
   ```

14. **`toLocaleTimeString()`**
   - Returns the time in the local format.
   ```javascript
   console.log(date.toLocaleTimeString()); // e.g., "2:45:30 PM"
   ```

15. **`toTimeString()`**
   - Returns the time as a readable string.
   ```javascript
   console.log(date.toTimeString()); // e.g., "14:45:30 GMT+0530 (India Standard Time)"
   ```

16. **`toUTCString()`**
   - Returns the date in UTC format.
   ```javascript
   console.log(date.toUTCString()); // e.g., "Mon, 28 Jan 2025 09:15:30 GMT"
   ```

---

## Math Object Methods

1. **`Math.abs()`**
   ```javascript
   console.log(Math.abs(-5)); // 5
   console.log(Math.abs(10)); // 10
   ```

2. **`Math.ceil()`**
   ```javascript
   console.log(Math.ceil(4.2)); // 5
   console.log(Math.ceil(-4.8)); // -4
   ```

3. **`Math.floor()`**
   ```javascript
   console.log(Math.floor(4.8)); // 4
   console.log(Math.floor(-4.2)); // -5
   ```

4. **`Math.max()`**
   ```javascript
   console.log(Math.max(10, 20, 30)); // 30
   console.log(Math.max(-10, -20, -5)); // -5
   ```

5. **`Math.min()`**
   ```javascript
   console.log(Math.min(10, 20, 30)); // 10
   console.log(Math.min(-10, -20, -5)); // -20
   ```

6. **`Math.pow()`**
   ```javascript
   console.log(Math.pow(2, 3)); // 8 (2³)
   console.log(Math.pow(5, 2)); // 25
   ```

7. **`Math.random()`**
   ```javascript
   console.log(Math.random()); // e.g., 0.754321
   console.log(Math.random() * 10); // Random number between 0 and 10
   ```

8. **`Math.round()`**
   ```javascript
   console.log(Math.round(4.5)); // 5
   console.log(Math.round(4.4)); // 4
   ```

9. **`Math.sqrt()`**
   ```javascript
   console.log(Math.sqrt(16)); // 4
   console.log(Math.sqrt(25)); // 5
   ```
<!-- 
10. **`Math.trunc()`**
   ```javascript
   console.log(Math.trunc(4.9)); // 4
   console.log(Math.trunc(-4.9)); // -4
   ``` -->

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


## Set
- A `Set` is a collection of **unique values**, meaning it cannot contain duplicate items.
- A `Set` can store any type of values, including primitive types and object references.


### Creating a Set
```javascript
const letters = new Set(["a", "b", "c"]); // Initialize with an array
console.log(letters); // Output: Set(3) { 'a', 'b', 'c' }
```

### Common Set Methods
1. **`add(value)`**
   ```javascript
   const numbers = new Set();
   numbers.add(1);
   numbers.add(2);
   numbers.add(1); // Duplicate, will be ignored
   console.log(numbers); // Output: Set(2) { 1, 2 }
   ```

2. **`delete(value)`**
   ```javascript
   const letters = new Set(["a", "b", "c"]);
   letters.delete("b");
   console.log(letters); // Output: Set(2) { 'a', 'c' }
   ```

3. **`has(value)`**
   ```javascript
   const letters = new Set(["a", "b", "c"]);
   console.log(letters.has("a")); // true
   console.log(letters.has("d")); // false
   ```

4. **`clear()`**
   ```javascript
   const letters = new Set(["a", "b", "c"]);
   letters.clear();
   console.log(letters); // Output: Set(0) {}
   ```

5. **`size`**.
   ```javascript
   const letters = new Set(["a", "b", "c"]);
   console.log(letters.size); // Output: 3
   ```


### Iterating Over a Set
1. **Using `forEach`**
   ```javascript
   const letters = new Set(["a", "b", "c"]);
   let text = "";
   letters.forEach(function (value) {
       text += value;
   });
   console.log(text); // Output: "abc"
   ```

2. **Using `for..of`**
   ```javascript
   const letters = new Set(["a", "b", "c"]);
   for (const letter of letters) {
       console.log(letter);
   }
   // Output:
   // a
   // b
   // c
   ```

3. **Using `Array.from()` to Convert a Set**
   ```javascript
   const letters = new Set(["a", "b", "c"]);
   const array = Array.from(letters);
   console.log(array); // Output: [ 'a', 'b', 'c' ]
   ```


### Removing Duplicates from an Array
```javascript
const array = [1, 2, 3, 4, 1, 2, 5];
const uniqueArray = Array.from(new Set(array));
console.log(uniqueArray); // Output: [ 1, 2, 3, 4, 5 ]
```


### Combining Multiple Sets
```javascript
const setA = new Set(["a", "b"]);
const setB = new Set(["b", "c", "d"]);

// Union
const union = new Set([...setA, ...setB]);
console.log(union); // Output: Set(4) { 'a', 'b', 'c', 'd' }

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // Output: Set(1) { 'b' }

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // Output: Set(1) { 'a' }
```

---

## **Regular Expressions (RegEx)**

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are created using either **RegExp constructor** or **literal syntax**.

```javascript
const pattern = /[A-Z]+/g;
const text = "Hello World!";
console.log(text.match(pattern)); // Output: ["H", "W"]
```

```javascript
const pattern = /[a-z]+/g;
const text = "Hello World!";
console.log(text.match(pattern)); // Output: ["ello", "orld"]
```

```javascript
const pattern = /[A-Z][a-z]*/g;
const text = "Hello World!";
console.log(text.match(pattern)); // Output: ["Hello", "World"]
```

### **1. Pattern Basics**

#### **Special Characters:**
- **Escape Special Characters:** Use backslashes (`\`) to match special characters literally.
```javascript
const vari = "\"hello"; 
console.log(vari)

const pattern = /\"hello/;
console.log("\"hello world".match(pattern)); // Output: ['"hello"']
```

#### **Grouping:**
- **Parentheses `()`**: Group expressions together.
  ```javascript
  const pattern = /(ab)+/;
  console.log("ababab".match(pattern)); // Output: ["ababab"]
  ```

#### **Match Literally:**
- **Backslash `\`**: Matches the preceding character literally.
- **Forward Slash `/`**: Indicates the start and end of the regex.
- **Logical OR `|`**: Acts as an "OR" operator.
  ```javascript
  const pattern = /cat|dog/;
  console.log("I have a cat and a dog".match(pattern)); // Output: ["cat"]
  ```

### **2. Character Classes**

- **`\w`**: Matches any word character (letters, digits, underscores).
- **`\d`**: Matches any digit.
- **`\s`**: Matches whitespace (spaces, tabs, line breaks).
- **`\W`**: Matches any NON-word character.
- **`\D`**: Matches any NON-digit.
- **`\S`**: Matches any NON-whitespace character.
- **`\t`**: Matches a tab.
- **`\n`**: Matches a new line.

```javascript
const pattern = /\w+\s\d+/;
console.log("Order 123".match(pattern)); // Output: ["Order 123"]
```

### **3. Brackets**

- **`[xyz]`**: Matches any character inside the brackets (e.g., `x`, `y`, or `z`).
- **`[J-Z]`**: Matches any uppercase letter from `J` to `Z`.
- **`[^xyz]`**: Matches any character NOT inside the brackets.

```javascript
const pattern = /[A-C]/;
console.log("XYZABC".match(pattern)); // Output: ["A"]

const notPattern = /[^A-C]/;
console.log("XYZABC".match(notPattern)); // Output: ["X"]
```

### **4. Quantifiers**

- **`z?`**: Matches zero or one occurrence of `z`.
- **`z*`**: Matches zero or more occurrences of `z`.
- **`z+`**: Matches one or more occurrences of `z`.
- **`z{n}`**: Matches exactly `n` occurrences of `z`.
- **`z{n,}`**: Matches at least `n` occurrences of `z`.
- **`z{n,m}`**: Matches between `n` and `m` occurrences of `z`.

```javascript
const pattern = /a{2,4}/;
console.log("aaa".match(pattern)); // Output: ["aaa"]

const zeroOrMore = /z*/;
console.log("zzzzz".match(zeroOrMore)); // Output: ["zzzzz"]
```

### **5. Anchors**

- **`^`**: Matches the start of a string.
- **`$`**: Matches the end of a string.
- **`\b`**: Matches word boundaries.
- **`\B`**: Matches NON-word boundaries.

```javascript
const pattern = /^Hello/;
console.log("Hello World!".match(pattern)); // Output: ["Hello"]

const wordBoundary = /\bcat\b/;
console.log("The word cat is here.".match(wordBoundary)); // Output: ["cat"]
```

### **6. Modifiers**

- **`i`**: Case-insensitive.
- **`g`**: Global match.
- **`m`**: Multiline.

```javascript
const pattern = /hello/i; // Case-insensitive
console.log("Hello".match(pattern)); // Output: ["Hello"]

const globalPattern = /world/g; // Global match
console.log("world world".match(globalPattern)); // Output: ["world", "world"]
```


### **7. Methods**

#### **7.1 `exec()`**
Returns an array of matched results or `null` if no match is found.
```javascript
const pattern = /\d+/;
const result = pattern.exec("Order 123");
console.log(result); // Output: ["123"]
```

#### **7.2 `test()`**
Tests if a pattern exists in a string (returns `true` or `false`).
```javascript
const pattern = /\d+/;
console.log(pattern.test("Order 123")); // Output: true
```

#### **7.3 `match()`**
Returns an array of matches or `null`.
```javascript
const pattern = /\d+/g;
console.log("123 456".match(pattern)); // Output: ["123", "456"]
```

#### **7.4 `search()`**
Returns the index of the first match or `-1` if no match is found.
```javascript
const text = "Hello World!";
const index = text.search(/world/i);
console.log(index); // Output: 6
```

#### **7.5 `replace()`**
Replaces matches in a string with a new value.
```javascript
const text = "Hello World!";
const replaced = text.replace(/World/, "Everyone");
console.log(replaced); // Output: Hello Everyone!
```

---


## **Spread Operator (`...`)**
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

