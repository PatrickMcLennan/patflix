import { css, createGlobalStyle, FlattenSimpleInterpolation } from 'styled-components';
import reset from 'styled-reset';

type CSS = FlattenSimpleInterpolation;

/**
 * Global stles & resets.
 */
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
   * Layout
   */
  flex: (jc = `center`, ai = `center`, fd = `row`, fw = `nowrap`): CSS => css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${fd};
    flex-wrap: ${fw};
  `,

  /**
   * Typography
   */
  fontLine: (fs: string, lh?: string): CSS => css`
    font-size: ${fs}rem;
    line-height: ${lh ? `${lh}rem` : `normal`};
  `,
};
