# Learning Objec Oriented JavaScript

## Chap 1
___
### Section 1.2
* How to know a document is loaded.  
* What a call back is, especially the onLoad callback.

How to know a document is loaded.
---------------------------------------
```
function onReady() {
  console.log("Hey Buddy");
}

window.onload = onReady;
```
___
### Section 1.3
* The many uses of objects
* What objects do
* How to instantiate and crate a new objects

How to instantiate and create a new objects
--------------------------------------------
```
var date = new Date()
console.log(date);
```
Get Properties  
```
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
```

### Section 1.4
* Working w the built-in functions and methodes
* How to select element from HTML page using Get element
* How to change the content of our page using innerHTML

### Section 1.5
* Create the clock: make it work
___

## Chap 2
Make it more efficient.  
Building w Objects
* Creating our own Objects
* How creating objects are similar to creating functions

What if we want to create multiple clocks?
