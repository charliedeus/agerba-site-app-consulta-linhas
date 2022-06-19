import { url } from 'inspector';
import { ReactElement } from 'react';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <section className="heroSection max-w-[1280px] w-full h-[calc(100vh-4.375rem)] m-auto">
      <header className="flex flex-col items-center justify-center py-[6.25rem]">
        <div className="w-[64px] h-[4px] bg-[#3F3F95] rounded-[2px]" />
        <h3 className="font-bold text-[2rem] pt-16">
          Serviços relacionados à Consulta de
        </h3>
        <h1 className="font-bold text-[3rem] pt-6">Linhas</h1>
      </header>

      <main className="flex justify-center gap-4">
        <div className="w-[12.9375rem] h-[19.375rem] rounded-[0.5rem]">
          <img
            className="w-full h-full object-cover rounded-[0.5rem]"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
            alt="Imagem do escritório da empresa"
          />
        </div>
        <div className="w-[12.9375rem] h-[19.375rem] rounded-[0.5rem]">
          <img
            className="w-full h-full object-cover rounded-[0.5rem]"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
            alt="Imagem do escritório da empresa"
          />
        </div>
        <div className="w-[12.9375rem] h-[19.375rem] rounded-[0.5rem]">
          <img
            className="w-full h-full object-cover rounded-[0.5rem]"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
            alt="Imagem do escritório da empresa"
          />
        </div>
        <div className="w-[12.9375rem] h-[19.375rem] rounded-[0.5rem]">
          <img
            className="w-full h-full object-cover rounded-[0.5rem]"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60"
            alt="Imagem do escritório da empresa"
          />
        </div>
      </main>
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
