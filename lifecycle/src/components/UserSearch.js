import React, { Component } from "react";
import styled from "styled-components";
// import { Button } from '@material-ui/core';

const SearchBar = styled.form`


  width: 100%;
  margin: 3% 0;
  border: 1px solid black;
  padding: 1%;
  background-color: lightblue;


`
const AddUserButton = styled.button`

    padding: 1%;
    border: 1px solid black;
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 black;
    &:hover {
        background-color: dodgerblue;
        color: white;
        cursor: pointer;
    }

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
        <AddUserButton>Add User</AddUserButton>
      </SearchBar>
    );
  }
}

export default UserSearch
