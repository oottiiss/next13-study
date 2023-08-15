import './globals.css';
import { Nanum_Gothic, Open_Sans } from '@next/font/google';
import { Metadata } from 'next';
import styles from './layout.module.css';
import RootStyleRegistry from '@/lib/RootStyleRegistry';

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({
  weight: '700',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'next 13 스터디',
  description: '공부 합시다',
  icons: {
    icon: '/favicon.ico',
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={sans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <RootStyleRegistry>
          <header className={styles.header}>
            <h1 className={gothic.className}>Demo Note App</h1>
          </header>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}
