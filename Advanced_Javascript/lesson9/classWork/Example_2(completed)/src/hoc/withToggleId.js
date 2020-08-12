import React from "react";

export default Component =>
    class WithToggleId extends React.Component {
        state = {
            openId: false,
            openTeachers:false
        };

        toggle = id =>
            this.setState(({ openId }) => ({
                openId: openId === id ? null : id
            }));
            toggleTeachers = date =>
            this.setState(({ openTeachers }) => ({
                openTeachers: openTeachers === date ? null : date
            }));

        render() {
            return <Component {...this.props} {...this.state} toggle={this.toggle} toggleTeachers={this.toggleTeachers}/>;
        }
    };
