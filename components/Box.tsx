import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: ReactNode;
};

const BoxStyles = styled.div`
  padding: 0 10%;

  ${({ theme: { tablet } }) =>
    tablet(css`
      padding: 0 5%;
    `)}

  ${({ theme: { mobile } }) =>
    mobile(css`
      padding: 0 15px;
    `)}
`;

/**
 * A wrapper div to set the base handle Horizontal padding
 */

export default function Box({ children }: Props): JSX.Element {
  return <BoxStyles>{children}</BoxStyles>;
}
