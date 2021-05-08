Stacks

1. google
2. udemy
3. youtube

Queues
Always build with linked lists because shifting indexes in a queue is expensive

How does Javascript actually works
Explain the difference between async vs sync code
We don't need to know Javascript works, but it helps.

What is a program?

- allocate memory
- parse and execute scripts (read and run commands)

Engine has two parts
Memory heap
Callstack

How to allocate memory
const a = 1;

How to build a Callstack

```

console.log("one");
console.log("two");

```

```
const one = () => {
const two = () => {
console.log("four");
};
two();
};

```

the stack would work like this:

```

console.log;
two;
one;


```

Single threaded
Whatever is on top of the call stack gets run first
Why was it designed to be single threaded? its less complicated
Deadlocks - complicated senario
Sync programming means lines get executed one after the other.
Stackoverflow = when a stack overflows (it can only contain so many calls at one time).

```
function foo() {
foo();
}
```

# Async Code

Image process or api requests that take an unknown period of time

```
  console.log('one')
setTimeout(()=>{
  console.log('done waiting')
}, 2000)
  console.log('three')
```
