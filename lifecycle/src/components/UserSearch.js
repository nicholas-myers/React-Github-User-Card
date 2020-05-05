import React, { Component } from "react";

class UserSearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.addUser} className="search">
        <label>Search Users:</label>
        <input
          name="findUser"
          type="text"
          value={this.props.value}
          onChange={this.props.captureUser}
        />
        <button>Add User</button>
      </form>
    );
  }
}

export default UserSearch
