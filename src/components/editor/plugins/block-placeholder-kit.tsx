'use client';

import { KEYS } from 'platejs';
import { BlockPlaceholderPlugin } from 'platejs/react';

export const BlockPlaceholderKit = [
  BlockPlaceholderPlugin.configure({
    options: {
      className:
        'before:absolute before:cursor-text before:opacity-30 before:content-[attr(placeholder)]',
      placeholders: {
        [KEYS.p]: 'Type something...',
      },
      query: ({ path, editor }) => {
        const isFirstLevel = path.length === 1;
        if (!isFirstLevel) return false;
        const { selection } = editor;
        if (!selection) return false;
        // Get the element node from the editor
        const element = editor.api.node(path)?.[0];
        if (!element) return false;
        // Check if the block is empty
        const isEmpty = Array.isArray(element.children) && element.children.length === 1 && element.children[0].text === '';
        // Show placeholder if the block is empty and selection is inside this block
        return isEmpty && selection.anchor.path.slice(0, path.length).join() === path.join();
      },
    },
  }),
];
