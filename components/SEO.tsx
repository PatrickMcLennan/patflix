import Head from 'next/head';

interface Props {
  title: string;
}

/**
 * The Head element of the application.
 * Use this to edit any metadata or SEO information per page.
 *
 * @param {string} title The Title tag contents.
 * @example
 *  <Head>
 *      <title>{title}</title>
 *  </Head>
 * @see https://nextjs.org/docs/api-reference/next/head
 */
export default function SEO({ title }: Props): JSX.Element {
  return (
    <Head>
      <title data-testid="head_title">{title}</title>
    </Head>
  );
}
