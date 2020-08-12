import React from "react";
import User from "./User";

const UsersList = ({ users, status }) => (
    <div className="user-list">
      <h2>{status} users </h2>
      {users && users.map(user => <User key={user.name} {...user} />)}
    </div>
);

export default UsersList;
