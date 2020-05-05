import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    console.log("app is mounting");
    axios
      .get("https://api.github.com/users/nicholas-myers")
      .then((res) => {
        console.log(res.data);
        this.setState({
          users: [res.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log("app is rendering");
    return (
      <div className="App">
        <h1>Git User Cards</h1>
        <div className="users">
          {this.state.users.map((user) => (
            <div key={user.id} className="user">
              <h2>{user.login}</h2>
              <img src={user.avatar_url} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
