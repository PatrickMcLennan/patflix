import { cleanup, render } from '@testing-library/react';
import Footer from '../components/Footer';

afterEach(cleanup);

test(`Footer shows correct year`, () => {
  const { queryByTestId } = render(<Footer />);
  const copyright = queryByTestId(`copyright`);
  const year = new Date().getFullYear().toString();

  return expect(copyright.textContent.includes(year)).toBeTruthy();
});
