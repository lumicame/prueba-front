import { render } from '@testing-library/react';
import Badge from '../components/Badge';

test('Renders Badge', async () => {
  render(<Badge />);
  expect(true).toBeTruthy();
});