import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Editor, CollapsedEditor } from "@atlaskit/editor-core";
import { EditorContext, WithEditorActions } from "@atlaskit/editor-core";
//import { CollapsibleEditor } from './components/CollapsibleEditor.js';

class CollapsibleEditor extends React.Component {
  state = { isExpanded: false };

  propTypes = { actions: PropTypes.object };

  expandEditor = () => this.setState({ isExpanded: true });
  collapseEditor = () => this.setState({ isExpanded: false });

  onSave = () => {
    this.props.actions.getValue().then((value) => {
      if (value != null) {
        dispatch({ type: "SAVE_COMMENT", payload: value });
      }
    });
  };

  render() {
    return (
      <CollapsedEditor
        placeholder="What would you like to say?"
        isExpanded={this.state.isExpanded}
        onFocus={this.expandEditor}
      >
        <Editor
          appearance="comment"
          onSave={this.onSave}
          onCancel={this.collapseEditor}
        />
      </CollapsedEditor>
    );
  }
}

ReactDOM.render(<CollapsibleEditor />, document.getElementById("root"));
