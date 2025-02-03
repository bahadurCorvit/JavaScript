## **DOM Methods**

These methods are essential for accessing and interacting with HTML elements on a web page.

## 1. `getElementById`

The `getElementById()` method returns the element that has the ID attribute with the specified value. If no elements with the specified ID exists, `null` is returned.

### Syntax:
```javascript
let element = document.getElementById("elementID");
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="changeDM()">Click</button>
    <h1 id="head1">This is a heading</h1>

    <script>
        const changeDM = () => {
            document.getElementById("head1").innerHTML = 
            "Pakistan";
        }
    </script>
</body>
</html>
```

## 2. `getElementsByClassName`

The `getElementsByClassName()` method returns a live HTMLCollection of all elements with the specified class name. The collection is updated automatically when the document structure changes.

### Syntax:
```javascript
let elements = document.getElementsByClassName("className");
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="changeDM()">Click</button>
    <h1 class="head1">This is a heading</h1>

    <script>
        const changeDM = () => {
            document.getElementByClass("head1").innerHTML = 
            "Pakistan";
        }
    </script>
</body>
</html>

```

## 3. `getElementsByTagName`

The `getElementsByTagName()` method returns a live HTMLCollection of all elements with the specified tag name.

### Syntax:
```javascript
let elements = document.getElementsByTagName("tagName");
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="changeDM()">Click</button>
    <h1>This is a heading</h1>


    <script>
        const changeDM = () => {
            document.getElementsByTagName("p").innerHTML = 
            "Pakistan";
        }
    </script>
</body>
</html>
```

## 4. `querySelector`

The `querySelector()` method returns the first element that matches a specified CSS selector(s). If no matching elements are found, `null` is returned.

### Syntax:
```javascript
let element = document.querySelector("selector");
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="changeDM()">Click</button>
    <h1>This is a heading</h1>

    <script>
        const changeDM = () => {
            document.querySelector("hi").innerHTML = 
            "Pakistan";
        }
    </script>
</body>
</html>
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="changeDM()">Click</button>
    <h1 id="head1">This is a heading</h1>


    <script>
        const changeDM = () => {
            document.querySelector("#head1").innerHTML = 
            "Pakistan";
        }
    </script>
</body>
</html>
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="changeDM()">Click</button>
    <h1 class="head1">This is a heading</h1>


    <script>
        const changeDM = () => {
            document.querySelector(".head1").innerHTML = 
            "Pakistan";
        }
    </script>
</body>
</html>
```


## 5. `querySelectorAll`

The `querySelectorAll()` method returns a static NodeList representing a list of all the elements matching the specified CSS selector(s).

### Syntax:
```javascript
let elements = document.querySelectorAll("selector");
```
---