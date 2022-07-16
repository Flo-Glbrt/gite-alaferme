import React, { ReactNode } from 'react';
// import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode
  title?: string
};

const Layout = ({ children, title = 'Gite à la ferme' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Location meublée pour vacances, déplacement professionnel, venez découvrir ce charmant gîte situé dans la campagne Normande, à quelques minutes de la plage de Dieppe"
      />
      <meta property="og:title" content={title} />
      <meta property="og: description" content="Location meublée pour vacances, déplacement professionnel, venez découvrir ce charmant gîte situé dans la campagne Normande, à quelques minutes de la plage de Dieppe" />
      <meta property="og:url" content="https://gitealaferme.com/" />
    </Head>
    {/* <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' '}
        |
        {' '}
        <Link href="/about">
          <a>About</a>
        </Link>
        {' '}
        |
        {' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>
        {' '}
        |
        <a href="/api/users">Users API</a>
      </nav>
    </header> */}
    {children}
    {/* <footer>
      <hr />
      <span>L&apos;appareil (Footer)</span>
    </footer> */}
  </div>
);

export default Layout;
