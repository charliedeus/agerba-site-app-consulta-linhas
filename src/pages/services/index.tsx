import { ReactElement } from 'react';

import Layout from '../../components/Layout/Layout';

export default function Services() {
  return <h1>Services</h1>;
}

Services.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
