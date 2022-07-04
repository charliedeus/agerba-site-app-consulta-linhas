import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { EnvelopeSimple, MagnifyingGlass } from 'phosphor-react';

import { api } from '../../services/api';

import Layout from '../../components/Layout/Layout';

export default function Companies({ data }) {
  const companies = data;

  return (
    <section className="max-w-[1280px] w-full h-[calc(100vh-4.375rem)] flex flex-col m-auto">
      {/* <h1 className="text-[2rem] font-extrabold">Página em construção...</h1> */}

      <div
        className="w-full h-[15rem] max-h-[15rem] bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=60')",
        }}
      />

      <header className="flex justify-between mt-[3.6875rem]">
        <h1 className="text-[2rem] font-bold">Empresas</h1>

        <div className="flex items-center px-[1rem] rounded-2xl gap-4 bg-[#D9D9D9]">
          <MagnifyingGlass size={24} />
          <input
            className="bg-transparent border-none"
            type="text"
            placeholder="Busque a empresa"
          />
        </div>
      </header>

      <div id="content" className="mt-12 text-[1rem]">
        <header className="flex font-bold mb-4 text-[#343a40]">
          <div className="w-96 max-w-96 px-4">
            <span>Empresa</span>
          </div>
          <div className="w-96 max-w-96 px-4">
            <span>Nome Fantasia</span>
          </div>
          <div className="flex items-center justify-start gap-2 w-64 max-w-64 px-4">
            <EnvelopeSimple size={16} color="#AEB1B3" />
            <span>Email</span>
          </div>
          <div className="w-32 max-w-32 px-4">
            <span>CRC</span>
          </div>
          <div className="w-32 max-w-32 px-4" />
        </header>

        <section
          id="listCompanies"
          className="flex flex-col gap-4 text-[#4f565c]"
        >
          {companies.map(company => (
            <div
              key={company.cdlinha}
              id="row"
              className="flex bg-gray-200 rounded-lg py-2"
            >
              <div className="flex items-center justify-start gap-1 w-96 max-w-96 px-4">
                <span>{company.denomepermissionario}</span>
              </div>
              <div className="w-96 max-w-96 px-4">
                <span>Nome Fantasia</span>
              </div>
              <div className="flex items-center justify-start gap-2 w-64 max-w-64 px-4">
                <EnvelopeSimple size={16} color="#AEB1B3" />
                <span>Email</span>
              </div>
              <div className="w-32 max-w-32 px-4">
                <span>CRC</span>
              </div>
              <Link href="/" className="w-32 max-w-32 px-4">
                <a>
                  <span>Linhas</span>
                </a>
              </Link>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

Companies.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/companies');

  const companiesList = JSON.parse(JSON.stringify(data));

  const companiesListOrdered = companiesList.sort(function (a, b) {
    return (
      +(a.denomepermissionario > b.denomepermissionario) ||
      +(a.denomepermissionario === b.denomepermissionario) - 1
    );
  });

  return {
    props: {
      data: companiesListOrdered,
    },
  };
};
