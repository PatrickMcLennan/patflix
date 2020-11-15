import Link from 'next/link';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import Text from './Text';
import useLayout from '../stores/useLayout';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { popUp } from '../styles/animations';
import { useRef } from 'react';

type NavData = {
  href: string;
  aria: string;
  text: string;
};

/**
 * An ordered array of the links to be rendered.
 */
const links: NavData[] = [
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
const LinkStyles = styled(Link)`
  ${({ theme: { fontLine } }) => fontLine(1.4, 1.6)}
`;
function NavLink({ href, aria, text }: NavData): JSX.Element {
  return (
    <li key={aria}>
      <LinkStyles href={href} passHref>
        <Text aria-label={aria} as="a" title={aria}>
          {text}
        </Text>
      </LinkStyles>
    </li>
  );
}

/**
 * Global Navigation component.
 */
const HeaderStyles = styled.header`
  grid-area: 'nav';
  display: grid;
  grid-template-areas:
    'h1'
    'nav'
    'search';
  grid-template-columns: max-content 1fr max-content;

  .h1 {
    grid-area: 'h1';
    margin-right: 2.5rem;
  }

  .nav {
    grid-area: 'nav';
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
  const form = useRef(null);
  const onSubmit = values => console.log(values);

  return (
    <HeaderStyles>
      <Text as="h1" className="h1">
        Patflix
      </Text>
      <nav className="nav">
        <ul className="ul">{links.map(NavLink)}</ul>
      </nav>
      <div className="search">
        <button aria-label="Open the Search bar" onClick={toggleSearch} title="Open the Search bar">
          <CgSearch />
        </button>
        <AnimatePresence>
          {searchIsOpen && (
            <FormStyles
              initial={popUp.initial}
              animate={popUp.animate}
              exit={popUp.exit}
              onSubmit={handleSubmit(onSubmit)}
              ref={form}
            >
              <input
                aria-label="Type your search in"
                autoComplete="off"
                ref={register}
                name="searchQuery"
                placeholder="What are you looking for..."
                title="Type your search in"
                type="search"
              />
            </FormStyles>
          )}
        </AnimatePresence>
      </div>
    </HeaderStyles>
  );
}
