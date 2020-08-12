import React from "react";
import UsersList from "./components/UsersList";
import filterByStatus from "./hoc/filterByStatus";
import users from "./data";

const ActiveUsers = filterByStatus("active")(UsersList);
const InactiveUsers = filterByStatus("inactive")(UsersList);
const PendingUsers = filterByStatus("pending")(UsersList);

const App = props => (
    <div className="container">
        <ActiveUsers users={users} />
        <InactiveUsers users={users} />
        <PendingUsers users={users} />
    </div>
);

export default App;
