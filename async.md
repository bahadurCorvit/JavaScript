## **Asynchronous JavaScript**

### 1. Synchronous Code
```javascript
const one = () => {
    console.log('one');
}

const two = () => {
        console.log('two');
}

const three = () => {
    console.log('three');
}
one();
two();
three();

```

### 2. Asynchronous Code
```javascript
const one = () => {
    console.log('one');
}

const two = () => {
    setTimeout(() => {
        console.log('two');
    }, 3000);
}

const three = () => {
    console.log('three');
}
one();
two();
three();
```
---

### **Callback (Managing Asynchronous Operations)**
```javascript
const one = (callback) => {
    setTimeout(() => {
        console.log('one');
        callback();
    }, 3000)
}

const two = (callback) => {
    setTimeout(() => {
        console.log('two');
        callback();
    }, 3000);
}

const three = (callback) => {
    console.log('three');
    callback();
}

one(
    () => {
        two(() => {
            three(() => {
                console.log("Done");
            })
        })
    }
)
```
---
### **Promises (A Cleaner Way)**
```javascript
const one = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("One");
            resolve();
        }, 5000)
    })
}

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Two");
            resolve();
        }, 1000)
    })
}

const three = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Three");
            resolve();
        }, 3000)
    })
}

one().then(() => {
    two().then(() => {
        three().then(() => {
            console.log('done');
        })
    })
})

```

```javascript
const one = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("One");
            reject();
        }, 5000)
    })
}

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Two");
            resolve();
        }, 1000)
    })
}

const three = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Three");
            resolve();
        }, 3000)
    })
}

one().then(() => {
    two().then(() => {
        three().then(() => {
            console.log('done');
        })
    })
})

```
---

### **Async/Await (The Modern Approach)**
```javascript
const one = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("One");
            resolve();
        }, 5000)
    })
}

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Two");
            resolve();
        }, 1000)
    })
}

const three = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Three");
            resolve();
        }, 3000)
    })
}

await one();
await two();
await three();
```

```javascript
const one = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("One");
            resolve();
        }, 5000)
    })
}

const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Two");
            resolve();
        }, 1000)
    })
}

const three = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Three");
            resolve();
        }, 3000)
    })
}

async function run(){
    await one();
    await two();
    await three();
}

run()
```
---

```javascript
const getData = async () => {
    const data = await fatch('https://api.github.com/users/data');
    console.log(data.length);
}
```

```javascript
const getData = () => {
    fatch('https://api.github.com/users/data').then((res => {
        console.log(data.length)l
    }))
}
---