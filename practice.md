## 1. **onclick**

The `onclick` event is triggered when a user clicks on an element. This event can be used to execute a JavaScript function when the element is clicked.


```html
<button id="myButton">Click Me!</button>

<script>
    document.getElementById("myButton").onclick = function() {
        alert("Button was clicked!");
    };
</script>
```

### Example 1: Changing Text on Click

```html
<p id="demo">Click the button to change this text.</p>
<button onclick="changeText()">Click Me!</button>

<script>
    function changeText() {
        document.getElementById("demo").innerHTML = "Text changed!";
    }
</script>
```

### Example 2: Toggle Visibility

```html
<p id="toggleText">This text can be toggled.</p>
<button onclick="toggleVisibility()">Toggle Visibility</button>

<script>
    function toggleVisibility() {
        var text = document.getElementById("toggleText");
        if (text.style.display === "none") {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
</script>
```

### Example 3: Adding Event Listener

```html
<button id="myButton">Click Me!</button>

<script>
    document.getElementById("myButton").addEventListener("click", function() {
        alert("Button was clicked using addEventListener!");
    });
</script>
```