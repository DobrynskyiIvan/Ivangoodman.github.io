import React from "react";
import withPermissions from "../HOC/withPermissions";

const Message2 = () => <p>Hello User</p>;

export default withPermissions(Message2, "user");
