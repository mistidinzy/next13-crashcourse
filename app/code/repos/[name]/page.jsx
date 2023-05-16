import { Suspense } from 'react';
import Link from 'next/link';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';

export const metadata = {
  title: 'mDnzy | Repo Page',
};

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back to Repositories
      </Link>
      <h2>Repo Name: {name}</h2>
      <Repo name={name} />
      <Suspense fallback={<div>Loading repo...</div>}></Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
