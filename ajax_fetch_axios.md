```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Using Ajax</title>
</head>
<body>

    <button type="button" onclick="loadData1()">Load Data</button>
    <div class="load">

    </div>
    <script>
        const loadData = () => {
            document.querySelector(".load").innerHTML = "Data Loading ..."
        }

        const loadData1 = () => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if(this.readyState === 4 & this.status === 200){
                    const data = this.responseText;
                    console.log(data)
                }
            }
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
            xhr.send();
        }
    </script>
</body>
</html>
```
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Using Ajax</title>
</head>
<body>

    <button type="button" onclick="loadData1()">Load Data</button>
    <div class="load"></div>
    <script>
        const loadData = () => {
            document.querySelector(".load").innerHTML = "Data Loading ..."
        }

        const loadData1 = () => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if(this.readyState === 4 & this.status === 200){
                    const data = this.responseText;
                    document.querySelector(".load").innerHTML = data;
                }
            }
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
            xhr.send();
        }
    </script>
</body>
</html>
```
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Using Ajax</title>
</head>
<body>

    <button type="button" onclick="loadData1()">Load Data</button>
    <ul id="titles">

    </ul>
    <script>
        const loadData = () => {
            document.querySelector(".load").innerHTML = "Data Loading ..."
        }

        const loadData1 = () => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if(this.readyState === 4 & this.status === 200){
                    const todos = this.responseText;
                    const title = todos.map(todo => {
                        todo.title
                    })
                    console.log(title);
                    
                }
            }
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
            xhr.send();
        }
    </script>
</body>
</html>
```
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Using Ajax</title>
</head>
<body>

    <button type="button" onclick="loadData1()">Load Data</button>
    <ul id="titles">

    </ul>
    <script>
        const loadData = () => {
            document.querySelector(".load").innerHTML = "Data Loading ..."
        }

        const loadData1 = () => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if(this.readyState === 4 & this.status === 200){
                    const todos = JSON.parse(this.responseText);

                    const title = todos.map(todo => todo.title)
                        console.log(title);
                    
                    
                }
            }
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
            xhr.send();
        }
    </script>
</body>
</html>
```
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Using Ajax</title>
</head>
<body>

    <button type="button" onclick="loadData1()">Load Data</button>
    <ul id="titles">

    </ul>
    <script>
        const loadData = () => {
            document.querySelector(".load").innerHTML = "Data Loading ..."
        }

        const loadData1 = () => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if(this.readyState === 4 & this.status === 200){
                    const todos = JSON.parse(this.responseText);

                    const title = todos.map(todo => {
                        const li = document.createElement('li');
                        li.textContent = todo.title;

                        document.getElementById('titles').appendChild(li);
                    })               
                }
            }
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
            xhr.send();
        }
    </script>
</body>
</html>
```
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>using Fetch</title>
</head>
<body>
    <script>
        fetch ('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json()).then(data => {
                    console.log(data);
        })
    </script>
</body>
</html>
```
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>using Fetch</title>
</head>
<body>
    <script>
        fetch ('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
            })
    </script>
</body>
</html>
```
---

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>using Fetch</title>
</head>
<body>
    <script>
        const run = async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos')
            const response = await data.json()
            console.log(response)
        }

        run(); // Call the function to execute it
    </script>
</body>
</html>
```
---
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>using Fetch</title>
</head>
<body>
    <script>
        const axios = require('axios');
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    </script>
</body>
</html>
```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---
```html

```
---