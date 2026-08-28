import React from 'react';
import { render, screen } from '@testing-library/react';
import Editor from './Editor';

jest.mock('markmap-view', () => ({
  Markmap: {
    create: () => ({
      setData: jest.fn().mockResolvedValue(undefined),
      fit: jest.fn().mockResolvedValue(undefined),
      rescale: jest.fn().mockResolvedValue(undefined),
      destroy: jest.fn(),
    }),
  },
}));

jest.mock('@uiw/react-markdown-editor', () => ({
  __esModule: true,
  default: () => <textarea aria-label="markdown editor" />,
}));

test('renders the markdown editor and preview controls', () => {
  render(<Editor />);
  expect(
    screen.getByRole('textbox', { name: /markdown editor/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/build a mind map from markdown/i)
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /fit map to view/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('slider', { name: /editor pane width/i })
  ).toBeInTheDocument();
});
