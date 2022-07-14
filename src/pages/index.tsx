import Link from 'next/link';
import Layout from '../infrastructure/views/components/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Link href="/aboute">
      <a>About</a>
    </Link>
  </Layout>
);

export default IndexPage;
