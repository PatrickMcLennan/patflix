import Link from 'next/link';
import styled, { css } from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import Text from './Text';
import useLayout from '../stores/useLayout';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { popUp } from '../styles/animations';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Box from './Box';

/**
 * Needed information for each link
 */
export type NavData = {
  href: string;
  aria: string;
  text: string;
};

/**
 * An ordered array of the links to be rendered.
 */
export const links: NavData[] = [
  {
    aria: 'Home Page',
    href: '/',
    text: 'Home',
  },
  {
    aria: 'TV Shows',
    href: '/tv',
    text: 'TV Shows',
  },
  {
    aria: 'Movies',
    href: '/movies',
    text: 'Movies',
  },
  {
    aria: 'Latest',
    href: '/latest',
    text: 'Latest',
  },
  {
    aria: 'My List',
    href: '/my-list',
    text: 'My List',
  },
];

/**
 * Link component
 */
function NavLink({ href, aria, text }: NavData): JSX.Element {
  return (
    <li className="li" key={aria}>
      <Link href={href} passHref>
        <Text aria-label={aria} className="a" data-testid="nav_a" as="a" title={aria}>
          {text}
        </Text>
      </Link>
    </li>
  );
}

/**
 * Global Navigation component.
 */
const HeaderStyles = styled.header`
  ${({ theme: { pagePadding } }) => pagePadding()}
  grid-area: 'nav';
  display: grid;
  grid-template-areas:
    'h1'
    'nav'
    'search';
  grid-template-columns: max-content 1fr max-content;
  align-items: center;

  .h1 {
    grid-area: 'h1';
    margin-right: 2.5rem;
  }

  .nav {
    grid-area: 'nav';
    align-self: stretch;

    .ul {
      ${({ theme: { flex } }) => flex(`flex-start`)};

      ${({ theme: { tablet } }) =>
        tablet(css`
          display: none;
        `)}
    }

    .li {
      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }

    .a {
      ${({ theme: { fontLine } }) => fontLine(1.6, 2)};
    }

    .hamburger {
      display: none;
      margin-left: auto;
      min-height: 100%;

      ${({ theme: { tablet } }) =>
        tablet(css`
          display: block;
        `)}

      span {
        display: block;
        height: 2px;
        width: 25px;
        border-radius: 1px;
        background-color: white;
      }

      &-middle {
        margin: 8px 0;
      }
    }
  }

  .search {
    grid-area: 'search';
    position: relative;
  }
`;

const FormStyles = styled(motion.form)`
  position: absolute;
  top: 100%;
  right: 0;
  bottom: 0;
`;

export default function Nav(): JSX.Element {
  const { searchIsOpen, toggleSearch } = useLayout(({ searchIsOpen, toggleSearch }) => ({
    searchIsOpen,
    toggleSearch,
  }));
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const form = useRef(null);
  const onSubmit = ({ query }) =>
    router.push({
      pathname: `search/[query]`,
      query: { query },
    });

  return (
    <HeaderStyles>
      <Text as="h1" className="h1">
        Patflix
      </Text>
      <nav className="nav">
        <ul className="ul">{links.map(NavLink)}</ul>
        <button aria-label="Open the Nav menu" className="hamburger" title="Open the Nav menu">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </nav>
      <div className="search">
        <button
          aria-label="Open the Search bar"
          data-testid="nav_toggle"
          onClick={toggleSearch}
          title="Open the Search bar"
          type="button"
        >
          <CgSearch />
        </button>
        <AnimatePresence>
          {searchIsOpen && (
            <FormStyles
              data-testid="nav_form"
              initial={popUp.initial}
              animate={popUp.animate}
              exit={popUp.exit}
              onSubmit={handleSubmit(onSubmit)}
              ref={form}
            >
              <input
                aria-label="Type your search in"
                autoComplete="off"
                data-testid="nav_input"
                ref={register}
                name="query"
                placeholder="What are you looking for..."
                title="Type your search in"
                type="search"
              />
              <button data-testid="nav_submit" type="submit">
                <CgSearch />
              </button>
            </FormStyles>
          )}
        </AnimatePresence>
      </div>
    </HeaderStyles>
  );
}
