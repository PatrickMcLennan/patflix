import styled from 'styled-components';
import Text from './Text';

/**
 * Global Footer component.
 */

const FooterStyles = styled.footer`
  grid-area: 'footer';
`;
export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <FooterStyles>
      <Text data-testid="copyright" as="span">
        Patrick McLennan&#169; {year}
      </Text>
    </FooterStyles>
  );
}
