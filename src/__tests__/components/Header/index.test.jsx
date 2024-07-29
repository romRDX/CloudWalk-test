import React from 'react';
import Header from '../../../layout/Header';
import {render, screen} from '@testing-library/react';


describe('MyComponent', () => {
  it('should render correctly with provided text', async () => {
    render(<Header />)

    expect(screen.getByText('Star Wars Characters')).toBeTruthy();
  });
});