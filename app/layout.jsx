import './globals.css';
import { Poppins } from 'next/font/google';
import Header from './components/Header';

//anything that you want on every page, you bring into here and embed into this layout component

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next13 Crash',
  description: 'Web development tutorial',
  keywords:
    'web development, web design, nextjs, react, tutorial, brad traversy, crash course',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
