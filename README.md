# ComplexJS
A Javascript library that supports Complex Numbers.

## Installation
To add it to your project just download the file and place it in or near the directory that has your "html" file. Then you can include it into your project like this:

```html
<!--  Make sure to include this file before other script(s) earlier otherwise it/they won't have the ComplexJS library -->
<script src="/path/to/file/complex.js"></script>
```

Or you can just add it from the url like this:

```html
<!--  Make sure to include this file before other script(s) earlier otherwise it/they won't have the ComplexJS library -->
<script src="https://cdn.jsdelivr.net/gh/HotdoGuy90/ComplexJS/main/complex.js"></script>
```

## Usage
You can create a complex number easily just by creating a new "Complex" object:

```javascript
var z = new Complex(1, 2); // Equivalent to 1+2i
```

To make the complex number's value able to be outputed use the `show()` method:

```javascript
console.log(z.show()) // Outputs "(1+2i)"
```

To do arithmetic (since operators don't work), use the `add()`, `subract()`, `multiply()`, or `divide()` method:

```javascript
/* They can't input regular numbers */
var sum = z.add(new Complex(3, 4)) // Outputs 4+6i
var dif = z.subtract(new Complex(3, 4)) // Outputs -2-2i
var pro = z.multiply(new Complex(3, 4)) // Outputs 3+8i
var quo = z.divide(new Complex(3, 4)) // Outputs 0.333+0.5i
```

To raise an exponent don't use Math.pow(), instead use the `exponent()` method:

```javascript
/* This can input regular numbers */
var pow = z.exponent(2) // Outputs -3+4i
```

To find the modulus/absolute value, use the `abs()` method:

```javascript
console.log(z.abs()) // Outputs √5
```

That is pretty much all, enjoy!
