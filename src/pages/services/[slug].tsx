import { ReactElement } from 'react';

import Layout from '../../components/Layout/Layout';

export default function Service() {
  return (
    <section className="w-full h-[calc(100vh-4.375rem)] flex items-center justify-center">
      <h1 className="text-[2rem] font-extrabold">Página em construção...</h1>
    </section>
  );
}

Service.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
