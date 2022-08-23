# About the App

This app is meant to test React/Redux JavaScripts frameworks skills from complete beginner to intermediate React programmer and ensure a solid understanding of React JavaScript Library based off the React Official documention

## Components & Props

- The first session in the App was to understand how to pass on props from the parent to the child and it was abit tricky innitialy but later I extracted various components from one extremely nested component and I managed to pass on the props from parents to children untill the expected Comment output rendered successfully.

- The other task was to write tests and ensure they all pass successfully basing on the simple tests of wheater they are renderd on screen or not.

## State & Lifecycle Methods

- The second task was to cover lifecylce methods and handling state in a react App and my major take away from this exercise was that state can not be manupilated directly e.g "this.state.posts = posts.response" but we use a known method called setState() to modify the innitial state and and this method accepts either an object that modifies state or a callback function that modifies state.

- About the Lifecycle methods, U need to be consious about what lifecycle method you need for a particular task forexample when you want a method to do something after the component has been rendered first to the DOM node which techinically is known as mounting. You may need the componentDidMount() method and other appropriate methods for corresponding roles.

## Handling Events

- The third task was to learn how to handle events in react and away from Html where we always use lower case for events in react since it's more closely related to javascript than html we use camelCase eg onClick={} rather than onclick='';

- Then the callback function we always pass to an element that will be triggered in the occurance of an event when fired say like "a click", It's this keyword is not bind to the function so you must either bind the this keyword manually or u can use an arrow function in the function declaration e.g handleClick = () => {}; or to use an arrow function while passing the callback to the attribute say onClick={ () =>{ handleClick() } }

## Conditional Rendering

- Basically conditional rendering is very similar to JavaScript conditional statements and my main take away from this topic was that in JS logical operators, mostly the && operator. An Evaluation of true and an expression returns an expression and Evaluation of a false statement and an Expression returns false.

## Lists and Keys

- Here whenever we are given an array and we want to display it in our app as a list we are gona probably do the same thing everytime. All we want to do is to map an array and in each iteration we pass the value of the array item into a listitem tag of a list eg const listItems = numbers.map((number) => <li>{number}<l1/>).
- Hmm Finally then we must give unique keys to each list item. Now my take away in this topic was that we serve keys only and only where the map method is being used and we pass the key as an attr of the listitem e.g const listItems = numbers.map( (number) => <li key={number.toString()}>{number}</li>)

## Forms

- Here we hv looked at the use of forms in a react App and what i noticed is that we must first prevent the default form behavior of openning a new window when the submit button is placed.
- Then next we want to control the submit form behaviour by declaring a submitForm handler function and passing it to the form onSubmit attribute.
- We would also want to track changes in the form input using <b>"Controlled Componets"</b>. We make each component to house it's own state and only use the setState method to change the input value declared in the state to event.target.value that is passed in the handlechange function that is passed in the onChange attribute in the form element.
- Finally I hv noticed that 'text', 'textarea' & 'select' input types are handled similar and in React they all depend on the value attribute.
