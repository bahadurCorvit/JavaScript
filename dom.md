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


## **.innerHTML**

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
    <h2 id="head2"></h2>

    <script>
        const changeDM = () => {
            document.getElementById("head1").innerHTML = 
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
        const t = document.getElementById("head1").innerHTML
            const cap = t.toUpperCase()
            document.getElementById("head1").innerHTML = cap;
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
    <h2 id="head2"></h2>

    <script>
        const changeDM = () => {
            document.getElementById("head1").innerHTML = 
            "<u>Pakistan<u>";
        }
    </script>
</body>
</html>
```
---

## **.innerText**

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
    <h2 id="head2"></h2>

    <script>
        const changeDM = () => {
            document.getElementById("head1").innerText = 
            "<u>Pakistan<u>";
        }
    </script>
</body>
</html>
```
---

## **Attribute**

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="images.png"  alt="this is image." id="img1" width="100" height="100">
    <button onclick="changeDM()">Click</button>
    

    <script>
        const changeDM = () => {
            document.getElementById("img1").width = "200";
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
    <form id="form1">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required><br><br>

        <button type="button" onclick="get_username_password()">Submit</button>
    </form>
    <p id="p1"></p>
    <p id="p2"></p>

    <script>
        function get_username_password() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            console.log("Username:", username);
            console.log("Password:", password); // Log separately for clarity

            document.getElementById("p1").textContent = "Username: " + username; // Use textContent
            document.getElementById("p2").textContent = "Password: " + password; // Use textContent
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

    <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt et sequi saepe quae! Delectus facere ut laudantium repellendus tempore illum quisquam nihil numquam placeat tempora. Voluptates tempora dolor animi.</p>
    <button type="button" onclick="color_change()">Color Change</button>

    <script>
        const color_change = () => {
            document.getElementById("p1").style.color = "Red";
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

    <p id="p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt et sequi saepe quae! Delectus facere ut laudantium repellendus tempore illum quisquam nihil numquam placeat tempora. Voluptates tempora dolor animi.</p>
    <button type="button" onclick="color_change()">Color Change</button>

    <script>
        const color_change = () => {
            document.getElementById("p1").style.color = "Red";
            document.getElementById("p1").style.backgroundColor = "gray";
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

    <p id="p1" onclick="para_fun(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt et sequi saepe quae! Delectus facere ut laudantium repellendus tempore illum quisquam nihil numquam placeat tempora. Voluptates tempora dolor animi.</p>

    <p id="p2" onclick="para_fun(this)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita incidunt et sequi saepe quae! Delectus facere ut laudantium repellendus tempore illum quisquam nihil numquam placeat tempora. Voluptates tempora dolor animi.</p>

    <script>
        const para_fun = (para) => {
            console.log(para)
        }
    </script>
</body>
</html>
```
---

## **createElement**
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas consequuntur veniam esse aliquam dicta nesciunt, sequi laboriosam dolore ab eligendi optio nulla ipsum iste doloremque blanditiis soluta reprehenderit temporibus. Alias?</p>
    <button type="button" onclick="create_p()">This is Button</button>
    

    <script>
        const create_p = () => {
            const p = document.createElement("p");
            p.id = "abc";
            p.innerHTML = "this is a new paragraph";
            document.body.appendChild(p);
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
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas consequuntur veniam esse aliquam dicta nesciunt, sequi laboriosam dolore ab eligendi optio nulla ipsum iste doloremque blanditiis soluta reprehenderit temporibus. Alias?</p>
    <button type="button" onclick="create_p()">This is Button</button>

    <div id="new"></div>
    

    <script>
        const create_p = () => {
            const p = document.createElement("p");
            p.id = "abc";
            p.innerHTML = "this is a new paragraph";
            document.getElementById("new").appendChild(p);
        }
    </script>
</body>
</html>
```
---

## **form**

The `forms` property returns a collection of all `<form>` elements within a document. It can be used to access, manipulate, or validate forms.

### Syntax:
```javascript
document.forms
```

### Access form by index:
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="form1" onsubmit="get_username_password(event)">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required><br><br>

        <button type="submit">Submit</button>
    </form>
    <p id="p1"></p>
    <p id="p2"></p>

    <script>
        function get_username_password(event) {
            event.preventDefault();

            const form = document.getElementById("form1");

            // Accessing by index:
            const username = form.elements[0].value; // Index 0 for the first input (username)
            const password = form.elements[1].value; // Index 1 for the second input (password)

            console.log("Username:", username);
            console.log("Password:", password);

            document.getElementById("p1").textContent = "Username: " + username;
            document.getElementById("p2").textContent = "Password: " + password;
        }
    </script>
</body>
</html>
```

### Access form by name:
```javascript
<form id="myForm" onsubmit="handleSubmit(event)">
  <input type="text" name="username" required>
  <input type="password" name="password" required>
  <button type="submit">Submit</button>
</form>

<script>
function handleSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const form = document.getElementById("myForm");
  const username = form.elements["username"].value;  // Access by name
  const password = form.elements["password"].value;  // Access by name

  console.log("Username:", username);
  console.log("Password:", password);
}
</script>
```

### Access form by ID:
```javascript
<form id="myForm" onsubmit="handleSubmit(event)">
  <input type="text" id="username" required>
  <input type="password" id="password" required>
  <button type="submit">Submit</button>
</form>

<script>
function handleSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value; // Access by ID
  const password = document.getElementById("password").value; // Access by ID

  console.log("Username:", username);
  console.log("Password:", password);

  // ... process username and password ...
}
</script>

```

### Access form elements:
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="myForm">
  <input type="text" name="username" value="Initial Value">
  <input type="password" name="password">
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById("myForm");
  const username = form.elements["username"].value; // Get the value
  form.elements["username"].value = "New Value"; // Set the value

  console.log(username); // Output: Initial Value
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
    <form id="myForm">
  <input type="text" name="username" value="Initial Value">
  <input type="password" name="password">
  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById("myForm");
  const username = form.elements["username"].value; // Get the value
  form.elements["username"].value = "New Value"; // Set the value

  console.log(username); // Output: Initial Value
</script>

</body>
</html>
```

```javascript

```


