import React, { Component } from "react";
import ReactDOM from "react-dom";
import { IntlProvider, FormattedMessage } from "react-intl";
import {
  Hypothesis,
  Devnotes,
  Qanotes,
  Allocation,
  Learnings,
  NextSteps,
  PreviewLinks,
  Comment,
} from "./components/Example.js";

import { ReactRenderer } from "@atlaskit/renderer";

window.initHypo = function () {
  var objectHypothesis = document.getElementById("hypothesis-value");
  var hypothesisValue = objectHypothesis.value;
  ReactDOM.render(
    <Hypothesis defaultValue={hypothesisValue} />,
    document.getElementById("hypothesis-edit")
  );
};

window.initDev = function () {
  var objectDevnotes = document.getElementById("devnotes-value");
  if (objectDevnotes) {
    var devnotesValue = objectDevnotes.value;
    ReactDOM.render(
      <Devnotes defaultValue={devnotesValue} />,
      document.getElementById("devnotes-edit")
    );
  }
};

window.initPreview = function () {
  var objectPreviewLinks = document.getElementById("preview_links-value");
  if (objectPreviewLinks) {
    var previewLinksValue = objectPreviewLinks.value;
    ReactDOM.render(
      <PreviewLinks defaultValue={previewLinksValue} />,
      document.getElementById("preview_links-edit")
    );
  }
};

window.initQa = function () {
  var objectQanotes = document.getElementById("qanotes-value");
  if (objectQanotes) {
    var qanotesValue = objectQanotes.value;
    ReactDOM.render(
      <Qanotes defaultValue={qanotesValue} />,
      document.getElementById("qanotes-edit")
    );
  }
};

window.initComment = function () {
  var objectComment = document.getElementById("comment-value");
  if (objectComment) {
    var commentValue = objectComment.value;
    ReactDOM.render(
      <Comment defaultValue={commentValue} />,
      document.getElementById("comment-edit")
    );
  }
};

window.initAlloc = function () {
  var objectAlloc = document.getElementById("allocation-value");
  var allocationValue = objectAlloc.value;
  ReactDOM.render(
    <Allocation defaultValue={allocationValue} />,
    document.getElementById("allocation-edit")
  );
};

window.initLearning = function () {
  var objectLearningEdit = document.getElementById("learning-edit");
  if (objectLearningEdit) {
    var objectLearning = document.getElementById("learning-value");
    var learningValue = objectLearning.value;
    ReactDOM.render(
      <Learnings defaultValue={learningValue} />,
      document.getElementById("learning-edit")
    );
  }
};

window.initNextSteps = function () {
  var objectNextStepsEdit = document.getElementById("next_steps-edit");
  if (objectNextStepsEdit) {
    var objectNextSteps = document.getElementById("next_steps-value");
    var nextStepsValue = objectNextSteps.value;
    ReactDOM.render(
      <NextSteps defaultValue={nextStepsValue} />,
      document.getElementById("next_steps-edit")
    );
  }
};

window.initEditTest = function () {
  window.initHypo();
  window.initDev();
  window.initPreview();
  window.initQa();
  window.initAlloc();
};

window.initShowTest = function () {
  window.initHypoView();
  window.initLearning();
  window.initLearningView();
  window.initNextSteps();
  window.initNextStepsView();
  window.initPreviewView();
};

window.initShowApproval = function () {
  window.initHypoView();
  window.initDevView();
  window.initPreviewView();
};

var defaultObject = '{"version":1,"type":"doc","content":[]}';

var getDefault = function (value) {
  if (!value || value == "null") {
    return defaultObject;
  } else {
    value = Buffer.from(value, "base64").toString("utf8");
    if (value == "null" || !IsJsonString(value)) {
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

window.initHypoView = function () {
  var objectHypothesis = document.getElementById("hypothesis-value");
  if (objectHypothesis) {
    var hypothesisValue = getDefault(objectHypothesis.value);
    ReactDOM.render(
      <IntlProvider locale="en">
        <ReactRenderer document={JSON.parse(hypothesisValue)} />
      </IntlProvider>,
      document.getElementById("hypothesis-view")
    );
  }
};

window.initDevView = function () {
  var objectDev = document.getElementById("devnotes-value");
  if (objectDev) {
    var devValue = getDefault(objectDev.value);
    ReactDOM.render(
      <IntlProvider locale="en">
        <ReactRenderer document={JSON.parse(devValue)} />
      </IntlProvider>,

      document.getElementById("devnotes-view")
    );
  }
};

window.initPreviewView = function () {
  var objectPreviewLinks = document.getElementById("preview_links-value-show");
  if (objectPreviewLinks) {
    var previewLinksValue = getDefault(objectPreviewLinks.value);
    ReactDOM.render(
      <IntlProvider locale="en">
        <ReactRenderer document={JSON.parse(previewLinksValue)} />
      </IntlProvider>,
      document.getElementById("preview_links-view-show")
    );
  }
};

window.initQaView = function () {
  var objectQa = document.getElementById("qanotes-value");
  if (objectQa) {
    var qaValue = getDefault(objectQa.value);
    ReactDOM.render(
      <IntlProvider locale="en">
        <ReactRenderer document={JSON.parse(qaValue)} />
      </IntlProvider>,

      document.getElementById("qanotes-view")
    );
  }
};

window.initAllocView = function () {
  var objectAllocation = document.getElementById("allocation-value");
  if (objectAllocation) {
    var allocationValue = getDefault(objectAllocation.value);
    ReactDOM.render(
      <IntlProvider locale="en">
        <ReactRenderer document={JSON.parse(allocationValue)} />
      </IntlProvider>,
      document.getElementById("allocation-view")
    );
  }
};

window.initLearningView = function () {
  var objectLearningView = document.getElementById("learning-view");
  if (objectLearningView) {
    var objectLearning = document.getElementById("learning-value");
    var learningValue = getDefault(objectLearning.value);
    ReactDOM.render(
      <IntlProvider locale="en">
        <ReactRenderer document={JSON.parse(learningValue)} />
      </IntlProvider>,
      document.getElementById("learning-view")
    );
  }
};

window.initNextStepsView = function () {
  var objectNextStepsView = document.getElementById("next_steps-view");
  if (objectNextStepsView) {
    var objectNextSteps = document.getElementById("next_steps-value");
    var nextStepsValue = getDefault(objectNextSteps.value);
    ReactDOM.render(
      <IntlProvider locale="en">
        <ReactRenderer document={JSON.parse(nextStepsValue)} />
      </IntlProvider>,
      document.getElementById("next_steps-view")
    );
  }
};

window.initDashboardFields = function () {
  $(".atlaskit-editor-view").each(function () {
    var json = getDefault($(this).prev().val());
    ReactDOM.render(
      <IntlProvider locale="en">
        <ReactRenderer document={JSON.parse(json)} />
      </IntlProvider>,
      document.getElementById($(this).attr("id"))
    );
  });
};

window.initCommentView = function () {
  var objectCommentView = document.getElementById("comment-value");
  if (objectCommentView) {
    var commentValue = getDefault(objectCommentView.value);
    ReactDOM.render(
      <IntlProvider locale="en">
        <ReactRenderer document={JSON.parse(commentValue)} />
      </IntlProvider>,
      document.getElementById("comment-view")
    );
  }
};
