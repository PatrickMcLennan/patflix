import { act, cleanup, fireEvent, render, wait, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Nav, { links } from '../components/Nav';
import { theme } from '../styles/Theme';

afterEach(cleanup);

test(`Nav links`, () => {
  const { queryAllByTestId } = render(
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  );
  const anchors = queryAllByTestId(`nav_a`);
  expect(anchors.length).toBe(5);
  anchors.forEach((element, i) => {
    expect(element.textContent).toBe(links[i].text);
    expect(element.getAttribute(`aria-label`)).toBe(links[i].aria);
    expect(element.getAttribute(`title`)).toBe(links[i].aria);
    expect(element.getAttribute(`href`)).toBe(links[i].href);
  });
});

/**
 * TODO: Finish form submission testing.
 *
 * Lots of weird bugs.
 *
 * @see https://react-hook-form.com/advanced-usage/#TestingForm
 */

test(`Search overlay`, async () => {
  const { queryByTestId } = render(
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  );
  const [toggle, form, input] = [
    queryByTestId(`nav_toggle`),
    queryByTestId(`nav_form`),
    queryByTestId(`nav_input`),
  ];

  [form, input].forEach(element => expect(element).not.toBeInTheDocument());
  fireEvent.click(toggle);

  const [newForm, newInput] = [queryByTestId(`nav_form`), queryByTestId(`nav_input`)];

  expect(newForm).toBeInTheDocument();
  expect(newForm).toContainElement(newInput);

  fireEvent.change(newInput, { target: { value: `testing` } });

  await act(async () => {
    fireEvent.submit(newForm);
  });
});
