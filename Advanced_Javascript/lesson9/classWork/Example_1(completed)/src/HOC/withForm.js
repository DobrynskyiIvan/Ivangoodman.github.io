import React, { Component } from "react";
import { getComponentName } from "../utils";

function withForm(BaseComponent) {
    class WithFormClass extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: { ...props.initState }
            };
        }

        handleChange = ({ target }) =>
            this.setState({
                data: { ...this.state.data, [target.name]: target.value }
            });

        handleSubmit = e => {
            e.preventDefault();
            console.log(this.state);
            this.setState({ data: this.props.initState });
        };

        render() {
            return (
                <BaseComponent
                    {...this.props}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
            );
        }
    }

    WithFormClass.displayName = `WithFormClass(${getComponentName(
        BaseComponent
    )})`;

    return WithFormClass;
}

export default withForm;
