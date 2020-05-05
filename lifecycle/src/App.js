import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    followers: []
  };

  componentDidMount() {
    console.log("app is mounting");
    axios
      .get("https://api.github.com/users/nicholas-myers")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          users: [res.data],
          
        });
        // console.log(this.state.users)
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get("https://api.github.com/users/nicholas-myers/followers")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          followers: res.data
        })
        // console.log(this.state.followers)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  toggleFollowers = (event) => {
    event.preventDefault()
    
  }

  render() {
    console.log("app is rendering");
    // debugger
    return (
      <div className="App">
        <h1>Git User Cards</h1>
        <div className="users">
          {this.state.users.map((user) => (
            <div key={user.id} className="user">
              <h2>{user.name}</h2>
              <img src={user.avatar_url} alt="profile" />
              <p>{user.bio}</p>
              <button>Followers</button>
              {this.state.followers.map(follower => (
              <div key={follower.id} className="followers">
                <h3>{follower.login}</h3>
              </div>))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
