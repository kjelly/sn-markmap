import React from 'react';
import { render, screen } from '@testing-library/react';
import Editor from './Editor';

jest.mock('markmap-view', () => ({
  Markmap: {
    create: () => ({
      setData: jest.fn(),
      fit: jest.fn(),
    }),
  },
}));

jest.mock('@uiw/react-markdown-editor', () => ({
  __esModule: true,
  default: () => <textarea aria-label="markdown editor" />,
}));

test('renders the markdown editor', () => {
  render(<Editor />);
  expect(
    screen.getByRole('textbox', { name: /markdown editor/i })
  ).toBeInTheDocument();
});
