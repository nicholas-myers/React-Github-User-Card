import React, { Component } from "react";

class UserCard extends Component {
  render() {
      const user = this.props.user
    return (
      <div key={user.id} className="user">
        <h2>{user.name}</h2>
        <img src={user.avatar_url} alt="profile" />
        <p>{user.bio}</p>
        <button onClick={this.props.toggleFollowers}>Followers</button>
        {this.props.display &&
          this.props.followers.map((follower) => (
            <div key={follower.id} className="followers">
              <h3>{follower.login}</h3>
            </div>
          ))}
      </div>
    );
  }
}

export default UserCard