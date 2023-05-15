// 'use client';
// import { useState } from 'react'

import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <h1>Next13 Crash Course Tutorial</h1>
        <div className='logo'>
          <Link href='/'>Traversy Media</Link>
        </div>
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
