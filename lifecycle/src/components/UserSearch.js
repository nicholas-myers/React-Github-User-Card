import React, { Component } from "react";
import styled from "styled-components";

const SearchBar = styled.form`


  width: 100%;
  margin: 3% 0;
  border: 1px solid black;
  padding: 1%;
  background-color: lightblue;


`

class UserSearch extends Component {
  render() {
    return (
      <SearchBar onSubmit={this.props.addUser} className="search">
        <label>Search Users:</label>
        <input
          name="findUser"
          type="text"
          value={this.props.value}
          onChange={this.props.captureUser}
        />
        <button>Add User</button>
      </SearchBar>
    );
  }
}

export default UserSearch
