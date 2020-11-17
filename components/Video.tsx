import ReactPlayer from 'react-player/lazy';

interface Props {
  src: string;
}

/**
 * Video player component.  Will Lazy-load the video
 * given via the src prop
 * @param {string} src The src of the video
 * @example <ReactPlayer url={src} />
 * @see https://github.com/CookPete/react-player
 */

export default function Video({ src }: Props): JSX.Element {
  return <ReactPlayer url={src} />;
}
