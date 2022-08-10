import React from "react";
import { Comment } from "./containers/Comment";
import Clock from "./components/Clock";

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
    return (
      <div className="app" data-testid="application_container">
        <h1 data-testid="app-heading">Hello, World</h1>
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />

        <Clock />
      </div>
    );
  }
}

export default App;
