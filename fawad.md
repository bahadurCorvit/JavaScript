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