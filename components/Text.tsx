import styled from 'styled-components';
/**
 * A reusable Text component.  All text elements should use this in
 * order to be responsive to the color scheme.
 */

interface Props {
  children: unknown;
  as: string;
}

const TextStyles = styled.span`
  color: white;
`;

export default function Text({ as, children }: Props, ...props: unknown[]): JSX.Element {
  return (
    <TextStyles as={as} {...props}>
      {children}
    </TextStyles>
  );
}
