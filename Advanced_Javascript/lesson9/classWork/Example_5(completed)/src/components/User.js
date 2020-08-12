import React from "react";

const User = ({ name, status }) => (
  <div className="user">
    {name} — {status}
  </div>
);

export default User;
