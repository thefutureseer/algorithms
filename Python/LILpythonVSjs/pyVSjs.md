# Comparing Python vs JavaScript

## 1. Outputting Data
- **Python**: 
  ```python
  print(data)
- **JavaScript**: 
  ```javaScript
  console.log(data)

## 2. Declaring variables
- **Python**:
  ```python
  variable_name = value
- **JavaScript**: 
  ```javaScript
  let variableName = value;  // Mutable variable
  const variableName = value; // Immutable variable
  var variableName = value;  // Deprecated

## 3. Conditional statements
- **Python**:
```python
  if condition:
      # code block
  elif another_condition:
      # another code block
  else:
      # else block
```

- **JavaScript**:
```javaScript
if (condition) {
    // code block
} else if (anotherCondition) {
    // another code block
} else {
    // else block
}
```

## 4. Literals 
(similarities between python f-string & temperal literal)
- **Python**:
```python

variable = "strings"
return f"hello, {variable} world !"
```
- **JavaScript**
```javaScript
const variable = "strings"
return `hello, ${variable} world !`
```
## 5. Functions
## **Python** function syntax
#
```python
def functionName(args):
# run logic 
return f"hello, {args}!"
# print to screen
print(functionName("Dude, its me!!"))
```  
Function Default parameters inside function:
```python 
def functionName(args="Dude its John!"):
return f"Hello, {args}!"
```

A Functions Arbitrary arguaments (*args and **kwargs).
Python provides two special kinds of parameters to handle a variable number of arguments:
1.  *args: Accepts a variable number of positional arguments.
```python
def add_numbers(*args):
  # using the built in function sum()
    return sum(args)

print(add_numbers(1, 2, 3))  # Output: 6

```


2. **kwargs: Accepts a variable number of keyword arguments (name-value pairs).
```python
def describe_person(**kwargs):
    return f"Name: {kwargs.get('name')}, Age: {kwargs.get('age')}"

print(describe_person(name="Alice", age=30))  # Output: Name: Alice, Age: 30
```
#
## **JavaScript** function syntax
1. rest operator (it looks like these 3 dots) " ... " for positional arguments
```javaScript
function addNumbers(...args) {
    return args.reduce((a, b) => a + b, 0);
}

console.log(addNumbers(1, 2, 3)); // Output: 6

// Handling keyword arguments with an object
function describePerson({ name, age }) {
    return `Name: ${name}, Age: ${age}`;
}

console.log(describePerson({ name: "Alice", age: 30 })); // Output: Name: Alice, Age: 30
```


### Python: 
Built-in Functions and Attributes for Function Arguments

#### Key Features:
1. **Positional Arguments**: Standard arguments.
2. **Keyword Arguments**: Name-value pairs.
3. **Default Arguments**: Arguments with default values.
4. **Variable-length Arguments**:
   - `*args`: For multiple positional arguments.
   - `**kwargs`: For multiple keyword arguments.

#### Built-in Functions/Attributes:
- **`args` and `kwargs`:**
  - `*args`: Captures additional positional arguments as a tuple.
  - `**kwargs`: Captures additional keyword arguments as a dictionary.
  
- **`locals()`**:
  Returns a dictionary of the current local symbol table (useful for inspecting arguments).

- **`globals()`**:
  Accesses the global namespace, which can be used to see global argument defaults.

- **`inspect` Module**:
  - `inspect.signature(func)`: Retrieves the signature of a function.
  - `inspect.getargspec(func)`: Provides details about a function's arguments (deprecated in Python 3.0+).

---

### JavaScript: 
Built-in Features for Function Arguments

#### Key Features:
1. **`arguments` Object**:
   - A built-in object available within every function (except arrow functions).
   - Contains an array-like object of all arguments passed to the function.

2. **Default Parameters**:
   - Allows you to specify default values for arguments.

3. **Rest Parameters (`...args`)**:
   - Captures remaining arguments into an array.

#### Built-in Properties:
- **`arguments.length`**:
  The number of arguments passed to the function.

- **`Function.length`**:
  The number of declared parameters in the function.

- **`Function.prototype.apply()` and `Function.prototype.call()`**:
  To explicitly set the arguments.

---

### Key Comparison:

| Feature                       | Python                     | JavaScript               |
|-------------------------------|----------------------------|--------------------------|
| Default Parameters            | Yes                        | Yes                      |
| Variable-length Positional    | `*args`                    | `...args`                |
| Variable-length Keyword       | `**kwargs`                 | Object parameters        |
| Arguments Object              | `locals()`, `globals()`    | `arguments` (non-arrow)  |
| Argument Inspection           | `inspect` module           | `Function.length`        |
| Usage in Arrow Functions      | N/A                        | `arguments` not supported|