import { mapProps } from "recompose";

const filterByStatus = status => mapProps(
    ({ users }) => ({
        status,
        users: users.filter(u => u.status === status)
    }));

export default filterByStatus;
