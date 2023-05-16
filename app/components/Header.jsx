import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <h1>Next.js 13</h1>
        <h2>Crash Course Project</h2>
        <div className='links'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Team</Link>
          <Link href='/code/repos'>Code Repos</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
