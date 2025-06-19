'use client';

import * as React from 'react';
import { useEffect } from 'react';

import { Plate, usePlateEditor } from 'platejs/react';

import { EditorKit } from '@/components/editor/editor-kit';
import { SettingsDialog } from '@/components/editor/settings-dialog';
import { Editor, EditorContainer } from '@/components/ui/editor';

export function PlateEditor() {
  const editor = usePlateEditor({
    plugins: EditorKit,
    value: [
      {
        type: 'p',
        children: [{ text: '' }],
      },
    ],
  });

  useEffect(() => {
    if (editor && editor.children.length === 1 && editor.children[0].children[0].text === '') {
      editor.tf.focus();
    }
  }, [editor]);

  return (
    <Plate editor={editor}>
      <EditorContainer className="mt-24">
        <Editor variant="demo" />
      </EditorContainer>

      <SettingsDialog />
    </Plate>
  );
}
