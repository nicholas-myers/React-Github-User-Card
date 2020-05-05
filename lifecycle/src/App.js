import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import UserSearch from "./components/UserSearch"
import UserCard from "./components/UserCard"

class App extends Component {
  state = {
    users: [],
    followers: [],
    display: false,
    findUser: "",
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
          followers: res.data,
        });
        // console.log(this.state.followers)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.users !== prevState.users) {
      console.log("I updated")
      this.setState({
        display: false,
        findUser: ""
      })
    }
  }
  captureUser = (e) => {
    this.setState({
      findUser: e.target.value,
    });
    // console.log(this.state.findUser)
  };

  addUser = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.findUser}`)
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
      .get(`https://api.github.com/users/${this.state.findUser}/followers`)
      .then((res) => {
        // console.log(res.data);
        this.setState({
          followers: res.data,
        });
        // console.log(this.state.users)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toggleFollowers = (event) => {
    event.preventDefault();
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    // console.log("app is rendering");
    // debugger
    return (
      <div className="App">
        <h1>Git User Cards</h1>
        <UserSearch 
        addUser={this.addUser} 
        value={this.state.findUser} 
        captureUser={this.captureUser}
        />
          {this.state.users.map((user) => (
            <UserCard 
            user={user} 
            display={this.state.display} 
            toggleFollowers={this.toggleFollowers} 
            followers={this.state.followers}/>
          ))}
      </div>
    );
  }
}

export default App;
