# About the App

This app is meant to test React/Redux JavaScripts frameworks skills from complete beginner to intermediate React programmer and ensure a solid understanding of React JavaScript Library based off the React Official documentary

## Components & Props

- The first session in the App was to understand how to pass on props from the parent to the child and it was abit tricky in the innitialy but later I extracted various components from one extremely nested component and I managed to pass on the props from parents to children untill the expected Comment output rendered successfully.

- The other task was to write tests and ensure they all pass successfully basing on the simple tests of wheater they are renderd on screen or not.

## State & Lifecycle Methods

- The second task was to cover lifecylce methods and handling state in a react App and my major take away from this exercise was that state can not be manupilated directed e.g "this.state.posts = posts.response" but we use a known method called setState() to modify the innitial state and and this method accepts either an object that modifies state or a callback function that modifies state.

- About the Lifecycle methods, U need to be consious about what lifecycle method you need for a particular task forexample when the you want a method to do something after the component has been rendered first to the DOM node which techinically is known as mounting. You may need the componentDidMount() method and other appropriate methods for corresponding roles.

## Handling Events

- The third task was to learn how to handle events in react and away from Html where we always use lower case for events in react since it's more closely related to javascript than html we use camelCase eg onClick={} rather than onclick='';

- Then the callback function we always pass to an element that will be triggered in the occurance of an event when fired say like "a click", It's this keyword is not bind to the function so you must either bind the this keyword manually or u can use an arrow function in the function declaration e.g handleClick = () => {}; or to use an arrow function while passing the callback to the attribute say onClick={ () =>{ handleClick() } }
