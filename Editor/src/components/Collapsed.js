import React, { Component } from "react";
import ReactDOM from "react-dom";

import { JiraTransformer } from "@atlaskit/editor-jira-transformer";
import { JiraSchema as schema } from "@atlaskit/editor-common";

class Hypothesiscollapsed extends React.Component {
  constructor(props) {
    super(props);
  }

  serializer = new JiraTransformer(schema);

  state = {
    isExpanded: false,
    output: this.serializer.encode(this.props.defaultValue),
  };

  render() {
    return <div>this.state.output</div>;
  }
}

class Devnotescollapsed extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { isExpanded: false };

  expandEditor = () => this.setState({ isExpanded: true });

  collapseEditor = () => this.setState({ isExpanded: false });

  render() {
    return (
      <CollapsedEditor
        placeholder="What would you like to say?"
        isExpanded={this.state.isExpanded}
      >
        <Editor
          appearance="comment"
          onSave={this.onSave}
          onCancel={this.collapseEditor}
          defaultValue={this.props.defaultValue}
        />
      </CollapsedEditor>
    );
  }
}

class Qanotescollapsed extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { isExpanded: false };

  expandEditor = () => this.setState({ isExpanded: true });

  collapseEditor = () => this.setState({ isExpanded: false });

  render() {
    return (
      <CollapsedEditor
        placeholder="What would you like to say?"
        isExpanded={this.state.isExpanded}
      >
        <Editor
          appearance="comment"
          onSave={this.onSave}
          onCancel={this.collapseEditor}
          defaultValue={this.props.defaultValue}
        />
      </CollapsedEditor>
    );
  }
}

export { Hypothesiscollapsed, Devnotescollapsed, Qanotescollapsed };
