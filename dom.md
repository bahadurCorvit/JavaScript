## **DOM Methods**

These methods are essential for accessing and interacting with HTML elements on a web page.

## 1. `getElementById`

The `getElementById()` method returns the element that has the ID attribute with the specified value. If no elements with the specified ID exists, `null` is returned.

### Syntax:
```javascript
let element = document.getElementById("elementID");
```

```javascript
let header = document.getElementById("main-header");
header.style.color = "blue";  // Changes the color of the element with id 'main-header' to blue.
```

## 2. `getElementsByClassName`

The `getElementsByClassName()` method returns a live HTMLCollection of all elements with the specified class name. The collection is updated automatically when the document structure changes.

### Syntax:
```javascript
let elements = document.getElementsByClassName("className");
```

```javascript
let buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "green";  // Changes the background color of all elements with the class 'btn' to green.
}
```

## 3. `getElementsByTagName`

The `getElementsByTagName()` method returns a live HTMLCollection of all elements with the specified tag name.

### Syntax:
```javascript
let elements = document.getElementsByTagName("tagName");
```

```javascript
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = "16px";  // Changes the font size of all <p> elements to 16px.
}
```

## 4. `querySelector`

The `querySelector()` method returns the first element that matches a specified CSS selector(s). If no matching elements are found, `null` is returned.

### Syntax:
```javascript
let element = document.querySelector("selector");
```

```javascript
let mainContent = document.querySelector(".content");
mainContent.style.border = "2px solid black";  // Adds a border to the first element with the class 'content'.
```

## 5. `querySelectorAll`

The `querySelectorAll()` method returns a static NodeList representing a list of all the elements matching the specified CSS selector(s).

### Syntax:
```javascript
let elements = document.querySelectorAll("selector");
```

```javascript
let listItems = document.querySelectorAll("ul li");
listItems.forEach(item => {
    item.style.color = "red";  // Changes the text color of all <li> elements inside <ul> to red.
});
```
---