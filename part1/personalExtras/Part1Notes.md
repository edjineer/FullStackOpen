# Part 1: React

npm run dev

## A. Intro to React
Link: https://fullstackopen.com/en/part1/introduction_to_react
Set Up Steps 
- Ran Vite instead of create-react-app 
- Arrow functions were introduced in ECMAScript6, ES6 
- JSX returned by react components is compiled into JavaScript
- Compiling is handled by Babel. Thank you CRA or Vite for handling this
- JSX is XML "like", every tag needs to be closed (<br> isnt good enough, "</br>" is better)
- Root component named App at the top of the component tree, or in a utility function
Props 
- Pass data through props 
- ESLint 
Best Practices/Enforced Rules 
- First Letters of Components must be capitalized 
- Content of a react component needs to have one top level DIV, root element. OR array, but really you want a root
- Can use a fragment instead too so not too many divs 
- Cannot display objects: can only display strings or numbers. CAN display arrays if the arrays have valid values. For example: arr ["a","b"] good, arr2 [{name:"a"}, {name:"b"}] bad. 

## B. JavaScript

## C. Component State, Event Handlers 

## D. A More complex state, debugging React Apps 


## Questions:
- Vite vs Create React App: Name of the application startup file switched startup file (index.js), vite also runs with npm run dev 
- History on ES6 
- How exactly does babel work 









## Credit to Course Creators 
This repo is a collection of notes and exercises form the University of Helsinki Full Stack Open course (https://fullstackopen.com/en/). 