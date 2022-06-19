import { ReactElement } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <section className="heroSection max-w-[1280px] w-full h-[calc(100vh-4.375rem)] m-auto">
      <header className="flex flex-col items-center justify-center py-12">
        <div className="w-[64px] h-[4px] bg-[#3F3F95] rounded-[2px]" />
        <h3 className="font-bold text-center text-[2rem] pt-16">
          Serviços relacionados à Consulta de
        </h3>
        <h1 className="font-bold text-center text-[3rem] pt-10">Linhas</h1>
      </header>

      <main className="flex flex-wrap justify-center w-full min-h-[19.375rem] gap-4 pb-[6rem]">
        <Link href="/services">
          <a className="w-[12.9375rem] min-w-[12.9375rem] h-[19.375rem] rounded-[0.5rem]">
            <div className="serviceCard relative flex items-end min-w-full h-full object-cover object-center rounded-[0.5rem] p-[1.5rem] bg-cover bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60')]">
              <h2 className="text-white font-bold text-[1.5rem] z-10">
                Empresas
              </h2>
            </div>
          </a>
        </Link>
        <Link href="/services">
          <a className="w-[12.9375rem] min-w-[12.9375rem] h-[19.375rem] rounded-[0.5rem]">
            <div className="serviceCard relative flex items-end min-w-full h-full object-cover object-center rounded-[0.5rem] p-[1.5rem] bg-cover bg-[url('https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60')]">
              <h2 className="text-white font-bold text-[1.5rem] z-10">
                Por Localidade
              </h2>
            </div>
          </a>
        </Link>
        <Link href="/services">
          <a className="w-[12.9375rem] min-w-[12.9375rem] h-[19.375rem] rounded-[0.5rem]">
            <div className="serviceCard relative flex items-end min-w-full h-full object-cover object-center rounded-[0.5rem] p-[1.5rem] bg-cover bg-[url('https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60')]">
              <h2 className="text-white font-bold text-[1.5rem] z-10">
                Por Municípios
              </h2>
            </div>
          </a>
        </Link>
        <Link href="/services">
          <a className="w-[12.9375rem] min-w-[12.9375rem] h-[19.375rem] rounded-[0.5rem]">
            <div className="serviceCard relative flex items-end min-w-full h-full object-cover object-center rounded-[0.5rem] p-[1.5rem] bg-cover bg-[url('https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=60')]">
              <h2 className="text-white font-bold text-[1.5rem] z-10">
                Entre Municípios
              </h2>
            </div>
          </a>
        </Link>
      </main>
    </section>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
