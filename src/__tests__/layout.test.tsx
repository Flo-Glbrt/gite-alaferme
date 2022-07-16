/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { render, within } from '@testing-library/react';
import Layout from '../infrastructure/views/components/Layout';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

const title = 'test title';
describe('Layout', () => {
  it('renders a layout with the page title', () => {
    render(<Layout title={title} />);

    expect(document.title).toEqual(title);
  });
});
