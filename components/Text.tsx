import styled from 'styled-components';

/**
 * A reusable Text component.  All text elements should use this in
 * order to be responsive to the color scheme.
 */

interface Props {
  //   children: unknown;
  as: string;
  props?: React.HTMLAttributes<HTMLElement>[];
  className?: string;
  children: string | JSX.Element;
}

const TextStyles = styled.span`
  color: white;
`;

export default function Text({ as, children, ...props }: Props): JSX.Element {
  return (
    <TextStyles as={as} {...props}>
      {children}
    </TextStyles>
  );
}
