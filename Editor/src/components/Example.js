import * as React from "react";
//import styled from 'styled-components';

import { EditorView } from "prosemirror-view";
import { Editor } from "@atlaskit/editor-core";

import { JSONTransformer } from "@atlaskit/editor-json-transformer";
import { Resizable } from "re-resizable";

var defaultObject = '{"version":1,"type":"doc","content":[]}';

var getDefault = function (value) {
  if (!value) {
    return defaultObject;
  } else {
    value = Buffer.from(value, "base64").toString("utf8");
    if (!IsJsonString(value)) {
      return defaultObject;
    }
  }
  return value;
};

var IsJsonString = function (str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

class Hypothesis extends React.PureComponent {
  render() {
    return (
      <RPure string="hypothesis">
        <div>
          <EditorExp appearance="chromeless" />
        </div>
      </RPure>
    );
  }
}

/// =======function  for pattern
function EditorExp(prp) {
  return (
    <Editor
      {...(prp.appearance) & (appearance = "chromeless")}
      allowBlockType={true}
      allowTasksAndDecisions={true}
      allowBreakout={true}
      allowRule={true}
      allowCodeBlocks={true}
      allowLists={true}
      allowTextColor={true}
      allowTables={true}
      allowHelpDialog={true}
      allowQuote={true}
      allowPanel={true}
      // {...prp.collabEditProvider &( collabEditProvider={this.collabProvider})}
      onChange={this.handleChangeInTheEditor}
      defaultValue={this.defaultValue}
    />
  );
}

/// =======Class for pattern
class RPure extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  defaultValue = getDefault(this.props.defaultValue);

  state = { output: "", json: this.defaultValue };

  transformer = new JSONTransformer();

  handleChangeInTheEditor(editorView) {
    if (this.props.button) {
      let button = document.getElementById("all-save-btn");
      button.removeAttribute("disabled");
    }

    const json = this.transformer.encode(editorView.state.doc);

    const output = JSON.stringify(json, null, 2);

    this.setState({
      output: output,
      json: JSON.stringify(json),
    });
  }

  render() {
    return (
      <div>
        {" "}
        {this.props.children}
        <input type="hidden" value={this.state.json} name={this.props.string} />
      </div>
    );
  }
}

class Devnotes extends React.PureComponent {
  render() {
    return (
      <RPure string="dev_notes">
        {" "}
        <div>
          <EditorExp />
        </div>
      </RPure>
    );
  }
}

class Comment extends React.PureComponent {
  render() {
    return (
      <RPure button={true}>
        {" "}
        <div>
          <Editor
            allowBlockType={true}
            allowTasksAndDecisions={true}
            allowBreakout={true}
            allowRule={true}
            allowCodeBlocks={true}
            allowLists={true}
            allowTextColor={true}
            allowTables={true}
            allowHelpDialog={true}
            allowQuote={true}
            allowPanel={true}
            onChange={this.handleChangeInTheEditor}
            defaultValue={this.defaultValue}
            collabEditProvider={this.collabProvider}
          />
          <input type="hidden" value={this.state.json} name="message" />
        </div>
      </RPure>
    );
  }
}

class Qanotes extends React.PureComponent {
  render() {
    return (
      <RPure string="qa_notes">
        {" "}
        <div>
          <EditorExp />
        </div>
      </RPure>
    );
  }
}

class Allocation extends React.PureComponent {
  render() {
    return (
      <RPure string="allocation">
        {" "}
        <div>
          <EditorExp appearance="chromeless" />
        </div>
      </RPure>
    );
  }
}

class Learnings extends React.PureComponent {
  render() {
    return (
      <RPure button={true} string="learnings">
        <Resizable class="form-control atlaskit-resizable atlaskit-resizable__learning">
          <div class="wrap-editor">
            <EditorExp appearance="chromeless" />
          </div>
        </Resizable>
      </RPure>
    );
  }
}

class NextSteps extends React.PureComponent {
  render() {
    return (
      <RPure button={true} string="next_steps">
        <Resizable class="form-control atlaskit-resizable atlaskit-resizable__next_steps">
          <div class="wrap-editor">
            <EditorExp appearance="chromeless" />
          </div>
        </Resizable>
      </RPure>
    );
  }
}

class PreviewLinks extends React.PureComponent {
  render() {
    return (
      <RPure string="preview_links">
        {" "}
        <div>
          <EditorExp />
        </div>
      </RPure>
    );
  }
}

export {
  Hypothesis,
  Devnotes,
  Qanotes,
  Allocation,
  Learnings,
  NextSteps,
  PreviewLinks,
  Comment,
};
