import create from 'zustand';

/**
 * Store for all Layout related state.  Open modals, searches, etc.
 */

export default create(set => ({
  searchIsOpen: false,
  toggleSearch: () => set(state => ({ searchIsOpen: !state.searchIsOpen })),
  closeSearch: () => set(() => ({ searchIsOpen: false })),
}));
