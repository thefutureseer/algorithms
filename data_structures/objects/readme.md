# 📦 Understanding JavaScript Object Data Structures

In JavaScript, objects are one of the fundamental data structures used to store and manipulate data in a key-value pair format. They are incredibly flexible and widely used in almost every part of JavaScript development, from storing configurations to managing state in applications.

## 🧱 What Is an Object?

An object in JavaScript is a collection of properties, where each property is defined as a key-value pair.

```js
const person = {
  name: "Alice",
  age: 30,
  isStudent: false
};
```

In the example above:

* `name`, `age`, and `isStudent` are **keys** (also called property names)
* `"Alice"`, `30`, and `false` are the **values** associated with those keys

## 🛠 Common Operations

### Accessing Values

```js
console.log(person.name);      // Alice
console.log(person["age"]);    // 30
```

### Adding or Updating Values

```js
person.city = "New York";
person.age = 31;
```

### Deleting Properties

```js
delete person.isStudent;
```

### Checking if a Property Exists

```js
console.log("name" in person); // true
```

## 🖁 Looping Over an Object

```js
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

## 📚 When to Use Objects

* When you need to group related data using descriptive keys
* When order of elements is not important
* When fast property lookups are needed

## 🧠 Objects vs. Arrays

| Feature  | Object             | Array                      |
| -------- | ------------------ | -------------------------- |
| Key type | Strings or Symbols | Numeric indices (0, 1, 2…) |
| Ordering | Not guaranteed     | Ordered                    |
| Best for | Named data         | Lists and collections      |

## 🚀 Advanced: Nested Objects

Objects can contain other objects:

```js
const user = {
  id: 1,
  profile: {
    username: "coder123",
    email: "coder@example.com"
  }
};
console.log(user.profile.username); // coder123
```

## 📌 Summary

* Objects are key-value data structures
* Great for modeling real-world entities
* Easy to create, update, and iterate over
