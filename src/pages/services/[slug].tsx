import { ReactElement } from 'react';

import Layout from '../../components/Layout/Layout';

export default function Service() {
  return (
    <section className="max-w-[1280px] w-full h-[calc(100vh-4.375rem)] flex m-auto">
      {/* <h1 className="text-[2rem] font-extrabold">Página em construção...</h1> */}

      <div className="w-full h-[15rem] max-h-[15rem] bg-cover bg-no-repeat">
        Teste
      </div>
    </section>
  );
}

Service.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
