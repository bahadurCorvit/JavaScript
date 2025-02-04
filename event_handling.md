
## **JavaScript Event Handling**

Event handling is a crucial part of making interactive web pages, where you can capture user actions like clicks, key presses, and mouse movements.

## 1. `onclick`

### Syntax:
```javascript
element.onclick = function() {
    // Code to execute 
};
```

```javascript
<!DOCTYPE html>
<html>
<head>
<title>Simple onclick Example</title>
</head>
<body>

<button onclick="myFunction()">Click me</button>

<script>
function myFunction() {
  alert("Hello!");
}
</script>

</body>
</html>
```

## 2. `onmouseover`

The `onmouseover` event is triggered when the mouse pointer enters the area of an element.

### Syntax:
```javascript
element.onmouseover = function() {
    // Code to execute when mouse enters the element
};
```

```javascript
<!DOCTYPE html>
<html>
<head>
<title>onmouseover Example</title>
</head>
<body>

<p onmouseover="showMessage()">Hover over me!</p>

<script>
function showMessage() {
  alert("Hello!");
}
</script>

</body>
</html>
```

## 3. `onmouseout`

The `onmouseout` event is triggered when the mouse pointer leaves the area of an element.

### Syntax:
```javascript
element.onmouseout = function() {
    // Code to execute when mouse leaves the element
};
```

```javascript
<!DOCTYPE html>
<html>
<head>
<title>onmouseover Example</title>
</head>
<body>

<p onmouseover="showMessage()" onmouseout="hideMessage()">Hover over me!</p>

<script>
function showMessage() {
  alert("Mouse is over!");
}

function hideMessage() {
  alert("Mouse is out!");
}
</script>

</body>
</html>
```

## 4. `onkeydown`

The `onkeydown` event occurs when a key is pressed down on the keyboard.

### Syntax:
```javascript
element.onkeydown = function(event) {
    // Code to execute on key press
};
```

```javascript
<!DOCTYPE html>
<html>
<head>
<title>onmouseover Example</title>
</head>
<body>

<input type="text" onkeydown="console.log('Key down!');">

</body>
</html>
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
<!DOCTYPE html>
<html>
<head>
<title>onmouseover Example</title>
</head>
<body>

<input type="text" onkeyup="console.log('Key up!');">

</body>
</html>
```

---
