import { useRouter } from 'next/router';

export default function Search(): JSX.Element {
  const {
    query: { query },
  } = useRouter();

  return (
    <div>
      <p>hello from search</p>
      <p>your query is: {query}</p>
    </div>
  );
}
