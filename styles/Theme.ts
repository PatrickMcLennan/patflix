import { css, createGlobalStyle, FlattenSimpleInterpolation } from 'styled-components';
import reset from 'styled-reset';
import { CSS } from '../types/utils';

/**
 * Global stles & resets.
 */

export const TABLET_BREAKPOINT = 1000;
export const MOBILE_BREAKPOINT = 600;
export const GlobalStyles = createGlobalStyle`
    ${reset}

    html {
        font-size: 62.5%;
    }

    body,
    #__next {
        min-height: 100vh;
        min-width: 100vw;
        position: relative;
        overflow-x: hidden;
        background-color: black;
    }

    #__next {
        display: grid;
        grid-template-areas:
            "nav"
            "main"
            "footer";
        grid-template-rows: max-content 1fr max-content;
    }

    button {
        border: none;
        background-color: rgba(0,0,0,0);
    }

    button:hover {
        cursor: pointer;
    }
`;

/**
 * Theme of variables and functions.
 * Variables work the same as sass, and functions work the same as mixins.
 */

export const theme = {
  /**
   * Breakpoints
   */

  tablet: (content: CSS): CSS => css`
    @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
      ${content}
    }
  `,

  mobile: (content: CSS): CSS => css`
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      ${content}
    }
  `,
  /**
   * Layout
   */
  flex: (jc = `center`, ai = `center`, fd = `row`, fw = `nowrap`): CSS => css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${fd};
    flex-wrap: ${fw};
  `,

  pagePadding: () => css`
    padding: 0 10%;

    @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
      padding: 0 5%;
    }

    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      padding: 0 5%;
    }
  `,

  /**
   * Typography
   */
  fontLine: (fs: string, lh?: string): CSS => css`
    font-size: ${fs}rem;
    line-height: ${lh ? `${lh}rem` : `normal`};
  `,
};
