
## **JavaScript Event Handling**

Event handling is a crucial part of making interactive web pages, where you can capture user actions like clicks, key presses, and mouse movements.

## 1. `addEventListener`

The `addEventListener()` method attaches an event handler to a specific element without overwriting any existing event handlers. This method is preferred over using inline event attributes and the `onclick`/`onmouseover` attributes.

### Syntax:
```javascript
element.addEventListener("event", function, useCapture);
```

```javascript
let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});
```

## 2. `removeEventListener`

The `removeEventListener()` method removes an event handler that was previously added using `addEventListener()`. Both the event type and the function must match.

### Syntax:
```javascript
element.removeEventListener("event", function, useCapture);
```

```javascript
let button = document.getElementById("myButton");
function handleClick() {
    alert("Button clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick); // Removes the click event listener
```

## 3. `onclick`

The `onclick` property is used to assign an event handler for the "click" event. This method is not recommended when dealing with multiple event listeners, as it overrides previous ones.

### Syntax:
```javascript
element.onclick = function() {
    // Code to execute
};
```

```javascript
let button = document.getElementById("myButton");
button.onclick = function() {
    alert("Button clicked!");
};
```

## 4. `onmouseover`

The `onmouseover` event is triggered when the mouse pointer enters the area of an element.

### Syntax:
```javascript
element.onmouseover = function() {
    // Code to execute when mouse enters the element
};
```

```javascript
let div = document.getElementById("myDiv");
div.onmouseover = function() {
    div.style.backgroundColor = "yellow";
};
```

## 5. `onmouseout`

The `onmouseout` event is triggered when the mouse pointer leaves the area of an element.

### Syntax:
```javascript
element.onmouseout = function() {
    // Code to execute when mouse leaves the element
};
```

```javascript
let div = document.getElementById("myDiv");
div.onmouseout = function() {
    div.style.backgroundColor = "";
};
```

## 6. `onkeydown`

The `onkeydown` event occurs when a key is pressed down on the keyboard.

### Syntax:
```javascript
element.onkeydown = function(event) {
    // Code to execute on key press
};
```

```javascript
let input = document.getElementById("myInput");
input.onkeydown = function(event) {
    alert("Key pressed: " + event.key);
};
```

## 7. `onkeyup`

The `onkeyup` event is triggered when a key is released after being pressed.

### Syntax:
```javascript
element.onkeyup = function(event) {
    // Code to execute on key release
};
```

```javascript
let input = document.getElementById("myInput");
input.onkeyup = function(event) {
    alert("Key released: " + event.key);
};
```

## 8. `onchange`

The `onchange` event occurs when the value of an element has changed (typically used for `<input>`, `<textarea>`, or `<select>` elements).

### Syntax:
```javascript
element.onchange = function() {
    // Code to execute when value changes
};
```

```javascript
let select = document.getElementById("mySelect");
select.onchange = function() {
    alert("You selected: " + select.value);
};
```

## 9. `onsubmit`

The `onsubmit` event is triggered when a form is submitted. It can be used to validate a form or prevent its submission.

### Syntax:
```javascript
form.onsubmit = function(event) {
    // Code to execute on form submission
};
```

```javascript
let form = document.getElementById("myForm");
form.onsubmit = function(event) {
    event.preventDefault(); // Prevents form submission
    alert("Form submitted!");
};
```

## 10. `onfocus`

The `onfocus` event occurs when an element gains focus, typically used for form elements like input fields or text areas.

### Syntax:
```javascript
element.onfocus = function() {
    // Code to execute when the element gains focus
};
```

```javascript
let input = document.getElementById("myInput");
input.onfocus = function() {
    input.style.backgroundColor = "lightblue";
};
```

---
