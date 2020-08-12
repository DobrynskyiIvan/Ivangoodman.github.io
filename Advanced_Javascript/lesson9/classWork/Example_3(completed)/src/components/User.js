import React from "react";
import { compose, setDisplayName, setPropTypes } from "recompose";
import PropTypes from "prop-types";
import Redux from "../fakeRedux";
import "./user.css";

const { connect } = Redux();

const enhance = compose(
    setDisplayName("User"),
    setPropTypes({
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    }),
    connect()
);

const User = ({ name, status, dispatch }) => (
    <div className="user" onClick={() => dispatch({ type: "TEST" })}>
        {name}: {status}
    </div>
);

export default enhance(User);
