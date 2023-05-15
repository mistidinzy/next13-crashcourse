import Link from 'next/link';

async function fetchRepoContents(name) {
  const response = await fetch(
    'https://api.github.com/repos/mistidinzy/${name}/contents',
    { next: { revalidate: 60 } }
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const values = Object.values(contents);
  const dirs = values.filter((content) => content.type === 'dir');

  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
