A promise is an object that may produce a single value some time in the future: 
either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). 
A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

then() always returns a Promise, which enables you to chain method calls:

asyncFunc1()
.then(result1 => {
    // Use result1
    return asyncFunction2(); // (A)
})
.then(result2 => { // (B)
    // Use result2
})
.catch(error => {
    // Handle errors of asyncFunc1() and asyncFunc2()
});

Asynchronus execution:
asyncFunc1()
.then(() => asyncFunc2());

Synchronus execution:
asyncFunc1();
asyncFunc2()';