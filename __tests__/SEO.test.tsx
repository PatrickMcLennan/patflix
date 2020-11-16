import { cleanup, render } from '@testing-library/react';
import SEO from '../components/SEO';

afterEach(cleanup);
const titleText = `Hello World!`;

test(`Head element working correctly`, () => {
  const { queryByTestId } = render(<SEO title={titleText} />);
  const title = queryByTestId(`head_title`);

  console.log(title);

  expect(title).toBeInTheDocument();
  expect(title.textContent).toBe(title);
});
