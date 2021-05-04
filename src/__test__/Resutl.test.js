import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Result from '../components/Result';

describe('Testing the result', () => {
  test('should successfuly render the data', () => {
    const mockData = { test: 'hello' };
    render(<Result data={mockData} />);
  });
});
