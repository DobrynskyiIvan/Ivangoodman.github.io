import React from "react";
import { compose } from "recompose";
import withUserData from "../hoc/withUserData";
import withSpinnerLoader from "../hoc/withSpinnerLoader";

const User = ({ name, status }) => (
    <div className="user">
        {name} — {status}
    </div>
);

const enhance = compose(
    withUserData,
    withSpinnerLoader
);

export default enhance(User);
