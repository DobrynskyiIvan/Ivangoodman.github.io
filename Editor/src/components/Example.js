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



/// =================Class for pattern


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

  /// =======function  for pattern Editor
  EditorExp(prp) {
    let output={};
    if(prp.editor=="appearance"){
          
        output={
          appearance : "chromeless"
        }
      }
      // else if(prp.editor=="collabEditProvider"){
      //   output={
      //     collabEditProvider={this.collabProvider}
      //   }
      // }
 
    return (
      <React.Fragment>
        <Editor
        { ...output}
          //(prp.appearance) && (appearance = "chromeless")
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
        <input type="hidden" value={this.state.json} name={this.props.string} />
      </React.Fragment>
    );
  }
  renderBlock(obj) {

    if (obj.Resizable) {
      let classString = `form-control atlaskit-resizable atlaskit-resizable__${this.props.string}`;
      return (
        <Resizable className={classString}>
          <div className="wrap-editor">{this.EditorExp(this.props.editor)}</div>
        </Resizable>
      );
    } else {
      return (
        <div>
          {this.EditorExp(this.props.editor)}
          
        </div>
      );
    }
  }

  render() {
    return <React.Fragment> {this.renderBlock(this.props)}</React.Fragment>;
  }
}

class Devnotes extends React.PureComponent {
  render() {
    return <RPure string="dev_notes"> </RPure>;
  }
}

class Comment extends React.PureComponent {
  render() {
    return (
      <RPure
        button={true}
        string="message"
        editor="collabEditProvider"
      ></RPure>
    );
  }
}

class Qanotes extends React.PureComponent {
  render() {
    return <RPure string="qa_notes"></RPure>;
  }
}

class Allocation extends React.PureComponent {
  render() {
    return (
      <RPure string="allocation" editor="appearance" ></RPure>
    );
  }
}
class Hypothesis extends React.PureComponent {
  render() {
    return (
      <RPure string="hypothesis" editor="appearance"></RPure>
    );
  }
}

class PreviewLinks extends React.PureComponent {
  render() {
    return <RPure string="preview_links"> </RPure>;
  }
}

class Learnings extends React.PureComponent {
  render() {
    return (
      <RPure button={true} string="learnings" Resizable="true" editor="appearance" >
      </RPure>
    );
  }
}
  
class NextSteps extends React.PureComponent {
  render() {
    return (
      <RPure button={true} string="next_steps" Resizable="true" editor="appearance">
         
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
