# 🧠 JavaScript Memory Leak Demo

This is a simple interactive demo that shows how JavaScript memory leaks can occur — and how to prevent them — using the difference between `Set` and `WeakSet`.

---

## 🧪 What This Demo Shows

- How keeping references to DOM elements can **prevent garbage collection (GC)**.
- How using a `Set` to store DOM elements after removal causes a **memory leak**.
- How using a `WeakSet` instead allows **automatic memory cleanup**.

---

## 🚀 How to Use It

### 1. Open `index.html` in a browser (preferably Chrome).
You’ll see two buttons:
- **Add Element**: Adds a `<div>` to the DOM and stores a reference in a `Set`.
- **Remove Elements**: Removes the `<div>`s from the page — but not from memory (they’re still in the `Set`).

---

## 🕵️‍♀️ How to Inspect the Memory Leak

1. Open **DevTools** → **Memory** tab.
2. Click "Add Element" a few times.
3. Click "Remove Elements".
4. Take a **Heap Snapshot**.
5. Look for retained `<div>` elements — these are **still in memory** even though they’re removed from the page.

> Why? Because the `Set` is holding a **strong reference**, preventing GC.

---

## 🛠️ Fixing the Leak

To fix the leak, change `Set` to `WeakSet` in the script:

```js
// Change this:
const trackedElements = new Set();

// To this:
const trackedElements = new WeakSet();
