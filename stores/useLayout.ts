import create from 'zustand';

type State = {
  searchIsOpen: boolean;
  toggleSearch: () => void;
  closeSearch: () => void;
};

/**
 * Store for all Layout related state.  Open modals, searches, etc.
 */

export default create<State>(set => ({
  searchIsOpen: false,
  toggleSearch: () => set(state => ({ searchIsOpen: !state.searchIsOpen })),
  closeSearch: () => set(() => ({ searchIsOpen: false })),
}));
