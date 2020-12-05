import { ReactChildren, ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  as: React.ElementType | keyof JSX.IntrinsicElements;
  props?: React.HTMLAttributes<unknown>;
  className?: string;
  children: string | ReactNode;
  title?: string;
}
/**
 * A reusable Text component.  All text elements should use this in
 * order to be responsive to the color scheme.
 *
 * @param {string} as The Element you want to render (styled-components API)
 * @param {React.HTMLAttributes<HTMLElement>} props Any additional HTML attributes you want to assign (optional)
 * @param {string} className A class (optional)
 * @param {string | JSX.Element} children The contents of the element
 *
 * @example
 * const as = "a"
 * const props = {
 *  href: `/hello`
 * }
 * const className = `a className`
 * const children = `lorem ipsum`
 *
 * return (
 *  <a class="a className" href="/hello">lorem ipsum</a>
 * )
 */

const TextStyles = styled.span`
  color: white;
`;

export default function Text({ as, children, title, ...props }: Props): JSX.Element {
  return (
    <TextStyles as={as} {...props} title={title ?? ``}>
      {children}
    </TextStyles>
  );
}
