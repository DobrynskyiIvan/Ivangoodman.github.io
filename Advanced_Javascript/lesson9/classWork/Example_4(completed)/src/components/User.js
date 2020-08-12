import React from "react";
import withConfig from "../hoc/withConfig";

const User = ({ name, status, config }) => (
    <div className="user">
        {name}
        {config.showStatus && "—" + status}
        {config.canDeleteUsers && <button>X</button>}
    </div>
);

export default withConfig(User);
