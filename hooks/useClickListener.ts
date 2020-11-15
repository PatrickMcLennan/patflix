import { __IS_SERVER__ } from '../constants';
/**
 * A hook to listen for clicks or keyboard events outside of a component.
 *
 * Ex. -- close a modal when a user clicks outside of it, etc.
 */

export default function useClickListener(element, callback, condition): void {
  if (__IS_SERVER__) return;
  const click = ({ target }) => () => {
    console.log(target);
    if (target.includes(element.current)) callback();
    else return;
  };

  const escapeKey = ({ target }) => {
    if (target.includes(element.current)) callback();
    else return;
  };

  if (condition) {
    window.addEventListener(`click`, click);
    window.addEventListener(`keydown`, escapeKey);
  } else {
    window.removeEventListener(`click`, click);
    window.removeEventListener(`keydown`, escapeKey);
  }
}
