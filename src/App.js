import React from "react";
import { Comment } from "./containers/Comment";
import Clock from "./components/Clock";
import Toggle from "./components/Button";
import LoginControl from "./containers/LoginControl";
import Blog from "./components/Blog";

class App extends React.Component {
  render() {
    const comment = {
      date: new Date(),
      text: "I hope you enjoy learning React!",
      author: {
        name: "Hello Kitty",
        avatarUrl: "http://placekitten.com/g/64/64",
      },
    };
    const numbers = [1, 2, 3, 4, 5, 6];
    const listitems = numbers.map((number) => (
      <li key={number.toString()}>{number}</li>
    ));
    const posts = [
      { id: 1, title: "Hello World", content: "Welcome to learning React!" },
      {
        id: 2,
        title: "Installation",
        content: "You can install React from npm.",
      },
    ];
    return (
      <div className="app" data-testid="application_container">
        <h1 data-testid="app-heading">Hello, World</h1>
        <Clock />
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
        <Toggle />
        <LoginControl />
        <ul>{listitems}</ul>
        <Blog posts={posts} />
      </div>
    );
  }
}

export default App;
