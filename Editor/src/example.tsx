import * as React from 'react';
import Editor from './packages/editor/editor-core/src/labs/EditorWithActions';
import { EditorContext } from '@atlaskit/editor-core';

export default function Example() {
  return (
    <EditorContext>
      <Editor
        appearance="comment"
        quickInsert={true}
        onSave={actions =>
          actions
            .getValue()
            .then(value => alert(JSON.stringify(value, null, 2)))
        }
        onCancel={actions => actions.clear()}
      />
    </EditorContext>
  );
}
