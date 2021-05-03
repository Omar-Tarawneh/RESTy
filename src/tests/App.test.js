import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

describe('testing the App', () => {
  test('the header should be rendered', () => {
    render(<App />);
    const headerElement = screen.getByText(/RESTy/i);
    expect(headerElement).toBeInTheDocument();
  });
  test('the Footer should be rendered', () => {
    render(<App />);
    const footerElement = screen.getByText(/© 2021 Code Fellows/i);
    expect(footerElement).toBeInTheDocument();
  });
});
