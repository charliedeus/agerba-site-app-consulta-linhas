import { ReactElement } from 'react';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return <h1>Hello World!</h1>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
