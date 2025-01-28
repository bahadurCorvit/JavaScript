## **Regular Expressions (RegEx)**

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are created using either **RegExp constructor** or **literal syntax**.

```javascript
const pattern = /[A-Z]+/g;
const text = "Hello World!";
console.log(text.match(pattern)); // Output: ["H", "W"]
```

### **1. Pattern Basics**

#### **Special Characters:**
- **Escape Special Characters:** Use backslashes (`\`) to match special characters literally.
  ```javascript
  const pattern = /hello\?\*\\/;
  console.log("hello?*\\ world".match(pattern)); // Output: ["hello?*\\"]
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
