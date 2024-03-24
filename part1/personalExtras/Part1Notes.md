# Part 1: React

npm run dev

## A. Intro to React
Link: https://fullstackopen.com/en/part1/introduction_to_react
### Set Up Steps 
- Ran Vite instead of create-react-app 
- Arrow functions were introduced in ECMAScript6, ES6 
- JSX returned by react components is compiled into JavaScript
- Compiling is handled by Babel. Thank you CRA or Vite for handling this
- JSX is XML "like", every tag needs to be closed (<br> isnt good enough, "</br>" is better)
- Root component named App at the top of the component tree, or in a utility function
### Props 
- Pass data through props 
- ESLint 
### Best Practices/Enforced Rules 
- First Letters of Components must be capitalized 
- Content of a react component needs to have one top level DIV, root element. OR array, but really you want a root
- Can use a fragment instead too so not too many divs 
- Cannot display objects: can only display strings or numbers. CAN display arrays if the arrays have valid values. For example: arr ["a","b"] good, arr2 [{name:"a"}, {name:"b"}] bad. 

## B. JavaScript
- Name of the standard is EXMAScript. June 2023 is latest, ES14
- "Transpiling" = revert new JS to run as old JS 
- Babel is a transpiler 
- Node.js is JS runtime environment. Latest Node understands latest JS, so no transilation needed there. 
### Variables 
- const(immutable) vs let (mutable) vs var. ES6 introduced const and let
- In Let, a daa type can change during execution (string can be int etc) 
- IIFE = Immediately Invoced Function Expression
- Let is better than var vecause it restricts variable to blocked scope 
### Arrays 
- Contents of an array can be modified even if it is declared as const. Variable always points to the same objec, but object content can change 
- const t = [1,1,1], t.push(5), t.length=4. t[1] 
- Zero indexed 
- Iterate through array with forEach(value=> { console.log(value)})
- Instead of push, use t.concat(newItem) instead for React 
- MAP array function = const m1 = t.map(value => value*2) Makes a second array which has *2*of the first one 
- Destructuring assignment is useful [first, second, ...rest] = t. first = 1, second = 1, rest = [3, 4, 5]
### Objects 
- Object literals = make objects and list their properties in brackets 
    ```
    const object3 = {
        name: {
            first: 'Dan',
            last: 'Abramov',
        },
        grades: [2, 3, 5, 3],
        department: 'Stanford University',
    }
    ```
- Two ways of accessing data from objects. Dot notation, or []
- Can add properties to object with dot operator or brackets too 
- JS doesnt exactly have classes, but Class syntax was added in ES6
### Functions 
- If only one parameter is passed in, then the parens are optional 
- If the function is a single line, then the curly braces are not needed 
- Arrow function introduced in ES6, more react-y to use the arrow functions
```
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}
```
### Using "This" in older versions of React 
- Hooks make this section obsolete 
- this = the object itself 
- Can assign methods to an object by passing in a function as a prop. Can also be added later with the dot operator
- Can use bind so that you don't lose the reference to the original "this"
```
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}
arto.greet()  // "hello, my name is Arto Hellas" gets printed
```
### Classes 
- Can simulate a class  (also added in ES6)
- Using Hooks and objects is better practice 
- LIST OF GREAT JAVASCRIPT MATERIALS 


## C. Component State, Event Handlers 

### Component Helper Functions

### Page Re-Rendering 

### Stateful Component 

### Event Handling 

### An Event Handler is a function 

### Passing State to Child components 

### Changes in state cause re-rendering 

### Refactoriing the components 


## D. A More complex state, debugging React Apps 


## Questions:
- Vite vs Create React App: Name of the application startup file switched startup file (index.js), vite also runs with npm run dev 
- History on ES6 
- How exactly does babel work 
- Mentions examples of ThymeLeaf and Java Spring Templating languages 
- JSBin as a tool 
- Let vs var vs const = https://www.youtube.com/watch?v=sjyJBL5fkp8 
- "React uses techniques from functional programming"= use immutable data structures 
- So JS doesnt have classes exactly like OOP languages, but dig more into this 


# Exercise Notes







## Credit to Course Creators 
This repo is a collection of notes and exercises form the University of Helsinki Full Stack Open course (https://fullstackopen.com/en/). 