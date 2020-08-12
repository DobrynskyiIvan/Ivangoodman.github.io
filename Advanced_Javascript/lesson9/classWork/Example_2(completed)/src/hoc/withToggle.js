import React from "react";

export default Component =>
    class WithToggle extends React.Component {
        state = {
            isOpen: false
        };

        toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

        render() {
            return <Component {...this.props} {...this.state} toggle={this.toggle} />;
        }
    };
