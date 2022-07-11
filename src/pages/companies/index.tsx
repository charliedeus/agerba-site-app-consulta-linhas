import { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { EnvelopeSimple, MagnifyingGlass } from 'phosphor-react';

import { api } from '../../services/api';

import Layout from '../../components/Layout/Layout';

// eslint-disable-next-line react/prop-types
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
          {companies.map((company, index) => (
            <div
              key={index}
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
  // const { data } = await api.get('/companies');

  // const companiesList = JSON.parse(JSON.stringify(data));

  // const companiesListOrdered = companiesList.sort(function (a, b) {
  //   return (
  //     +(a.denomepermissionario > b.denomepermissionario) ||
  //     +(a.denomepermissionario === b.denomepermissionario) - 1
  //   );
  // });

  const data = [
    {
      cdlinha: 1841,
      denomepermissionario: 'RAFAEL PIERRE DOS SANTOS SILVA',
      decpfcnpj: '29323731000150',
    },
    {
      cdlinha: 1803,
      denomepermissionario: 'ADEMIR MACHADO DE ARAÚJO',
      decpfcnpj: '18431201000109',
    },
    {
      cdlinha: 1803,
      denomepermissionario: 'NIVALDO GOMES MARINHO',
      decpfcnpj: '18391141000148',
    },
    {
      cdlinha: 1804,
      denomepermissionario: 'HONEY BARRETO DO SACRAMENTO',
      decpfcnpj: '18732801000107',
    },
    {
      cdlinha: 1805,
      denomepermissionario: 'JONAS OLIVEIRA DE ARAÚJO SANTOS',
      decpfcnpj: '18513425000160',
    },
    {
      cdlinha: 1805,
      denomepermissionario: 'ROQUE PEREIRA GOMES',
      decpfcnpj: '18732663000166',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'JESSÉ PEREIRA GOMES',
      decpfcnpj: '18732816000175',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'MARIONALDO AMARAL BEZERRA - ME',
      decpfcnpj: '26306899000159',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'CELSO ALEX DA SILVA CERQUEIRA',
      decpfcnpj: '18432082000109',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'JOSÉ DE JESUS SANTOS FILHO',
      decpfcnpj: '18465953000190',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'LUIZ CARLOS SILVA DE SOUZA',
      decpfcnpj: '18732515000141',
    },
    {
      cdlinha: 1824,
      denomepermissionario: 'JOSÉ ROBERTO DA CRUZ TRANSPORTES',
      decpfcnpj: '30593120000100',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'ALEXANDRE NASCIMENTO DIAS - ME',
      decpfcnpj: '26513811000180',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'EDMUNDO PIRES DE ARAÚJO',
      decpfcnpj: '18512857000156',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'CARLOS ALBERTO SANTOS SILVA',
      decpfcnpj: '18456656000189',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'TEÓDULO BORGES DE SOUZA FILHO',
      decpfcnpj: '18732689000104',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'JUSTINO CONCEIÇÃO DOS SANTOS',
      decpfcnpj: '18456744000180',
    },
    {
      cdlinha: 1807,
      denomepermissionario: 'LINÉSIO DE SOUZA NEVES',
      decpfcnpj: '19180602000104',
    },
    {
      cdlinha: 1809,
      denomepermissionario: 'ROQUE DOS SANTOS CONCEIÇÃO',
      decpfcnpj: '00108325000192',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'ALEX MACHADO DE ARAUJO',
      decpfcnpj: '18732749000199',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'LAUDILSON PEREIRA SOUZA',
      decpfcnpj: '18732044000171',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'LUIZ CARLOS SANTANA DOS SANTOS',
      decpfcnpj: '18732597000124',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'DANIEL DOS SANTOS AZEVEDO',
      decpfcnpj: '18456693000197',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'ANTÔNIO DIAS DA SILVA',
      decpfcnpj: '19126938000180',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'RANULFO MOREIRA DE SENA FILHO',
      decpfcnpj: '18732623000114',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'JAILSON CERQUEIRA DE ALMEIDA',
      decpfcnpj: '18431217000111',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'ESTEVÃO FERREIRA MACHADO',
      decpfcnpj: '14651145000167',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'JOSÉ ALBERTO FIGUEREDO DA SILVA',
      decpfcnpj: '18390853000142',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'ELISAFÃ SANTOS SALOMÃO MACHADO',
      decpfcnpj: '18732490000186',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'JOSELITO DE OLIVEIRA SOUZA',
      decpfcnpj: '18732363000187',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'JURACI PEREIRA GOMES',
      decpfcnpj: '18456725000154',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'EDMUNDO PEREIRA GOMES',
      decpfcnpj: '18208774000178',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'ALÍCIO SILVA DO SACRAMENTO',
      decpfcnpj: '18456870000135',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'EVALDO CARMO SANTANA',
      decpfcnpj: '18456776000186',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'EDSON DOS SANTOS COSTA',
      decpfcnpj: '18732773000128',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'NATALINO SILVA DO SACRAMENTO',
      decpfcnpj: '18456893000140',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'CARLITO DE SALES NOGUEIRA',
      decpfcnpj: '18891113000190',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'CALIXTO RODRIGUES SANTIAGO',
      decpfcnpj: '18431240000106',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'ERIVALDO GOMES  DA CONCEIÇÃO',
      decpfcnpj: '18440523000114',
    },
    {
      cdlinha: 1806,
      denomepermissionario: 'CARLOS ALVES NOGUEIRA',
      decpfcnpj: '18732528000110',
    },
    {
      cdlinha: 1818,
      denomepermissionario: 'ANTONIO HAMILTON DOS SANTOS',
      decpfcnpj: '24601301000139',
    },
    {
      cdlinha: 1818,
      denomepermissionario: 'CRISTIANO FREIRE DE SOUZA',
      decpfcnpj: '24549561000102',
    },
    {
      cdlinha: 1818,
      denomepermissionario: 'JOAREZ JOSÉ DA SILVA',
      decpfcnpj: '24593962000160',
    },
    {
      cdlinha: 1818,
      denomepermissionario: 'OSVALDO CARDOSO DOS SANTOS',
      decpfcnpj: '24144876000170',
    },
    {
      cdlinha: 1818,
      denomepermissionario: 'VALDICK COSTA DE SOUZA',
      decpfcnpj: '24594975000153',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'AELDO SANTOS NOVAIS',
      decpfcnpj: '25190320000182',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'ANTONIO AGNELO DE OLIVEIRA',
      decpfcnpj: '25246327000179',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'ANTONIO TEIXEIRA PRIMO FILHO',
      decpfcnpj: '25174951000108',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'ELIZEU MARCHI TAVARES',
      decpfcnpj: '25179976000102',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'EVERALDO SILVA REIS',
      decpfcnpj: '25225504000130',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'ISAQUE ROCHA DE OLIVEIRA',
      decpfcnpj: '25245965000175',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'JAIR SOUZA JUNIOR',
      decpfcnpj: '25185586000137',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'JOAQUIM TEIXEIRA PRIMO',
      decpfcnpj: '25179340000152',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'JOSÉ DE OLIVEIRA SOARES',
      decpfcnpj: '25255463000125',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'OLAVO JOSÉ SOARES',
      decpfcnpj: '25255656000186',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'OSNIR JOSÉ DE BRITO',
      decpfcnpj: '25241725000100',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'RONALDO ALMEIDA NOVAIS',
      decpfcnpj: '25205272000159',
    },
    {
      cdlinha: 1846,
      denomepermissionario: 'WADSON ROCHA OLIVEIRA',
      decpfcnpj: '25231404000117',
    },
    {
      cdlinha: 1800,
      denomepermissionario: 'JOSÉ NILTON GOMES CARNEIRO',
      decpfcnpj: '27751349000111',
    },
    {
      cdlinha: 1800,
      denomepermissionario: 'OVIVALDO GOMES CARNEIRO',
      decpfcnpj: '27836546000133',
    },
    {
      cdlinha: 1817,
      denomepermissionario: 'LOURIVAL PEREIRA DE MELO',
      decpfcnpj: '26666605000100',
    },
    {
      cdlinha: 1820,
      denomepermissionario: 'JOSELITO FERREIRA DE OLIVEIRA',
      decpfcnpj: '26224192000103',
    },
    {
      cdlinha: 1817,
      denomepermissionario: 'ALISON DE OLIVEIRA SILVA',
      decpfcnpj: '27777852000146',
    },
    {
      cdlinha: 1816,
      denomepermissionario: 'LOURIVAL ALVES FEITOSA',
      decpfcnpj: '26173065000122',
    },
    {
      cdlinha: 1816,
      denomepermissionario: 'ADAILTON RODRIGUES MENDONÇA',
      decpfcnpj: '26137345000185',
    },
    {
      cdlinha: 1810,
      denomepermissionario: 'ELIMÁRIO DE OLIVEIRA E SOUZA',
      decpfcnpj: '26132229000173',
    },
    {
      cdlinha: 1810,
      denomepermissionario: 'JOSÉ DE ARAÚJO SILVA',
      decpfcnpj: '26269595000179',
    },
    {
      cdlinha: 1810,
      denomepermissionario: 'JULIO CEZAR BATISTA RIBEIRO DE MATTOS',
      decpfcnpj: '26132215000150',
    },
    {
      cdlinha: 1810,
      denomepermissionario: 'OESIO NUNES DE SOUZA',
      decpfcnpj: '26118238000100',
    },
    {
      cdlinha: 1810,
      denomepermissionario: 'OSORIO DE OLIVEIRA SOUZA NETO',
      decpfcnpj: '26118227000120',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'PAULO DE SOUZA BARBOSA',
      decpfcnpj: '27412473000152',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'POLIANO ROCHA BARBOSA',
      decpfcnpj: '27412482000143',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'SAMUEL ROBERTO DE JESUS',
      decpfcnpj: '27455453000169',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'ANTONIO CARLOS DO BOMFIM PACHECO',
      decpfcnpj: '27492988000100',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'CICERO JUSTINO FERREIRA LACERDA',
      decpfcnpj: '27504611000123',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'CLERISTON ALECRIM PEREIRA',
      decpfcnpj: '27504632000149',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'DENILSON FERNANDES SODRÉ',
      decpfcnpj: '27492970000108',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'EDEL TAVARES DA SILVA',
      decpfcnpj: '27504605000176',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'FABRICIO DA ROCHA CRUZ',
      decpfcnpj: '27540239000100',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'OSIMARIO DE OLIVEIRA SOUZA FILHO',
      decpfcnpj: '27520133000145',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'MAURO SANTOS DA PAIXÃO',
      decpfcnpj: '27492979000119',
    },
    {
      cdlinha: 1827,
      denomepermissionario: 'JACKSON ALVES PEREIRA',
      decpfcnpj: '27836385000188',
    },
    {
      cdlinha: 1826,
      denomepermissionario: 'ANDERSON DE SOUZA SILVA TRANSPORTE',
      decpfcnpj: '27914843000150',
    },
    {
      cdlinha: 1826,
      denomepermissionario: 'JOVINIANO INACIO DE OLIVEIRA NETO EIRELI',
      decpfcnpj: '27881505000169',
    },
    {
      cdlinha: 1826,
      denomepermissionario: 'TRANSOESTE SERVIÇOS DE TRANSPORTE EIRELI',
      decpfcnpj: '27964605000159',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'ANTONIO GONÇALVES DAMASCENO FILHO - ME',
      decpfcnpj: '26225329000144',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'ANTONIO LUCIO TORRES DOS SANTOS - ME',
      decpfcnpj: '26213309000153',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'CLAUDEMIR PEREIRA DE CARVALHO - ME',
      decpfcnpj: '26225343000148',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'CLOVES SANTANA DIAS - ME',
      decpfcnpj: '26288440000180',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'DIEGO SOUZA DOS SANTOS - ME',
      decpfcnpj: '26362994000180',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'EDMILSON PASCOAL DOS SANTOS - ME',
      decpfcnpj: '26881497000198',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'EDMUNDO MOREIRA DA SILVA - ME',
      decpfcnpj: '26288448000146',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'EDSON DA SILVA SANTANA - ME',
      decpfcnpj: '26213320000113',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'EDVALDO AUGUSTO DE ALMEIDA MASCARENHAS - ME',
      decpfcnpj: '26213307000164',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'FERNANDO FERNANDES DA SILVA - ME',
      decpfcnpj: '26362990000100',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'JAILSON DA SILVA CONCEIÇÃO TRANSPORTES - ME',
      decpfcnpj: '26439896000101',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'JAILTON CONCEIÇÃO REIS - ME',
      decpfcnpj: '26225331000113',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'JOILSON CARLOS DE MATOS CAZAES - ME',
      decpfcnpj: '26213338000115',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'JONAS ALVES CASAES JUNIOR - ME',
      decpfcnpj: '26322851000144',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'JORGE LUIS PEREIRA DOS SANTOS TRANSPORTES - ME',
      decpfcnpj: '26225325000166',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'JOSMAN SANTOS DA SILVA - ME',
      decpfcnpj: '26213287000121',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'LEONARDO LEITE DA SILVA - ME',
      decpfcnpj: '26288694000106',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'LUCIANO SANTANA DOS SANTOS - ME',
      decpfcnpj: '26213331000101',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'LUIZ AUGUSTO PEREIRA ALMEIDA - ME',
      decpfcnpj: '26362983000108',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'LUIZ CARLOS GOMES DA SILVA - ME',
      decpfcnpj: '26306905000188',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'MARIO SERGIO MARQUES FERNANDES - ME',
      decpfcnpj: '26213284000198',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'PABLO ROGERIO DE SANTANA PEREIRA -ME',
      decpfcnpj: '26229594000109',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'RICARDO SOUZA VIEIRA - ME',
      decpfcnpj: '26288707000139',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'ROQUE GONÇALVES DE AZEVEDO - ME',
      decpfcnpj: '26288458000181',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'RUÃ OLIVEIRA DOS SANTOS - ME',
      decpfcnpj: '26213300000142',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'UBIRAJARA SOBREIRA GUIMARÃES FILHO - ME',
      decpfcnpj: '26288718000119',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'UBIRATAN BULHOSA GUIMARÃES - ME',
      decpfcnpj: '26306911000135',
    },
    {
      cdlinha: 1830,
      denomepermissionario: 'UITAJARA BULHOSA GUIMARÃES - ME',
      decpfcnpj: '26306913000124',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'ADAILTON DOS SANTOS DE CORAÇÃO DE MARIA - ME',
      decpfcnpj: '26514397000123',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'ALAN CERQUEIRA DE OLIVEIRA - ME',
      decpfcnpj: '26446462000120',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'ALVARO LUIZ DA SILVA SOUZA - ME',
      decpfcnpj: '26472540000161',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'AMERICO DA CONCEIÇÃO SOUZA - ME',
      decpfcnpj: '26446506000112',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'DIEGO MULLER DA SILVA SANTOS - ME',
      decpfcnpj: '26874638000145',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'EDIVALDO OLIVEIRA CRUZ - ME',
      decpfcnpj: '26446503000189',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'EDVALDO CERQUEIRA DE JESUS SILVA - ME',
      decpfcnpj: '26475837000180',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'ERIVALDO CHAGAS COSTA - ME',
      decpfcnpj: '27140783000165',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'FRANCINETE PEREIRA DE SOUZA DE JESUS - ME',
      decpfcnpj: '28056087000138',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'GILSON CARVALHO DOS SANTOS - ME',
      decpfcnpj: '26472568000107',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'JOSAFA DOS SANTOS ALVES - ME',
      decpfcnpj: '26472558000163',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'JOSE BORGES DOS SANTOS - ME',
      decpfcnpj: '26514401000153',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'JOSENILSON PEREIRA DA SILVA - ME',
      decpfcnpj: '26446499000159',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'LEONCIO MARTINS GOMES FILHO - ME',
      decpfcnpj: '26472551000141',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'MAGNO BISPO DE CASTRO - ME',
      decpfcnpj: '26472549000172',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'MARIO DE FREITAS BRANDÃO JUNIOR - ME',
      decpfcnpj: '26472554000185',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'PEDRO JOSE SILVA EVANGELISTA - ME',
      decpfcnpj: '26472545000194',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'RAFAEL DAMASCENO OLIVEIRA - ME',
      decpfcnpj: '26537104000123',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'SALES OSNY DE OLIVEIRA BORGES - ME',
      decpfcnpj: '26446458000162',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'VALDIR FERREIRA DA SILVA TRANSPORTES - ME',
      decpfcnpj: '26752869000186',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'VIVALDO FERREIRA DA SILVA - ME',
      decpfcnpj: '26629895000111',
    },
    {
      cdlinha: 1814,
      denomepermissionario: 'UALLAS FREITAS BRITO - ME',
      decpfcnpj: '26472565000165',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'ADAILTO JOSAFA SOUZA CERQUEIRA - ME',
      decpfcnpj: '28336552000194',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'ADILSON OLIVEIRA DA SILVA - ME',
      decpfcnpj: '28355057000122',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'AMADEU SOARES DOS SANTOS - ME',
      decpfcnpj: '28357822000143',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'CARLOS ADALBERTO OLIVEIRA DE SANTANA - ME',
      decpfcnpj: '28388937000103',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'CARLOS ALBERTO DANTAS DE JESUS - ME',
      decpfcnpj: '28336561000185',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'CARLOS DA SILVA LACERDA - ME',
      decpfcnpj: '28357859000171',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'CARLOS PEREIRA MAIA - ME',
      decpfcnpj: '28354962000168',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'CLEMENTINO ALVES CARVALHO - ME',
      decpfcnpj: '28357962000111',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'DANILO TAVARES DO SACRAMENTO - ME',
      decpfcnpj: '28345703000170',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'DERMERVAL DOS SANTOS CERQUEIRA - ME',
      decpfcnpj: '28357949000162',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'DENIVALDO DOS SANTOS CERQUEIRA - ME',
      decpfcnpj: '28336613000113',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'DILSON GOMES DA SILVA - ME',
      decpfcnpj: '28355019000170',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'EDI CARLOS MACHADO LEAL - ME',
      decpfcnpj: '28357869000107',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'EVERALDO DE OLIVEIRA RODRIGUES - ME',
      decpfcnpj: '28357908000176',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'EZEQUIAS CORREIA DE JESUS - ME',
      decpfcnpj: '28355058000177',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'GEORGE PEDREIRA FERNANDES - ME',
      decpfcnpj: '28357925000103',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'GILVAN GARCIA DA SILVA - ME',
      decpfcnpj: '28465756000125',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'GRACILIANO MACHADO DA SILVA - ME',
      decpfcnpj: '28345710000172',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'HERVAL QUEIROZ DE CASTRO - ME',
      decpfcnpj: '28336648000152',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'ISABELLA VIEIRA DE LIMA PRADO - ME',
      decpfcnpj: '28355051000155',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'JAILTON GARCIA DA SILVA - ME',
      decpfcnpj: '28342127000108',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'JORZENILDO AGDO LIMA CERQUEIRA - ME',
      decpfcnpj: '28355028000160',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'JOÃO DOS SANTOS SILVA TRANSPORTES - ME',
      decpfcnpj: '26306882000101',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'JAILSON DOS SANTOS SOUZA - ME',
      decpfcnpj: '25322841000109',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'JOSE ANTONIO ARAUJO DA SILVA - ME',
      decpfcnpj: '28357816000196',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'JOSE ATAIDE CORREA LOPES - ME',
      decpfcnpj: '28336657000143',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'JOSE CARLOS BATISTA DOS SANTOS - ME',
      decpfcnpj: '28354984000128',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'JOSE CARLOS FALCAO DA SILVA - ME',
      decpfcnpj: '28336582000109',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'LEANDRO G DA SILVA - ME',
      decpfcnpj: '28355025000127',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'LEONIDIO MAIA LIMA - ME',
      decpfcnpj: '28355069000157',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'LUIZ ALBERTO PEREIRA CONCEICAO - ME',
      decpfcnpj: '28355015000191',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'LUIS CLAUDIO RODRIGUES DE OLIVEIRA - ME',
      decpfcnpj: '28388931000128',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'MARCELO MAGALHAES TORRES - ME',
      decpfcnpj: '28355018000125',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'MARCUS TULLIUS MIRANDA MORGADO - ME',
      decpfcnpj: '28591927000162',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'MARIVALDO MACHADO LOPES - ME',
      decpfcnpj: '28357913000189',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'MARIVELTON DA PAIXAO DOS SANTOS - ME',
      decpfcnpj: '28357940000151',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'NEMEZIO CAZUMBA DA SILVA FILHO - ME',
      decpfcnpj: '28336637000172',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'NILSON ARAUJO AMORIM - ME',
      decpfcnpj: '28357843000169',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'NILTON CERQUEIRA DA SILVA - ME',
      decpfcnpj: '28355075000104',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'PEDRO CORREIA SANTIAGO - ME',
      decpfcnpj: '28357688000180',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'PEDRO BISPO RAMOS JUNIOR - ME',
      decpfcnpj: '28336599000158',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'RAIMUNDO GOMES BARBOSA - ME',
      decpfcnpj: '28357834000178',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'REGIVALDO SOUZA COSTA - ME',
      decpfcnpj: '28357900000100',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'ROBERTO DOS SANTOS MAIA - ME',
      decpfcnpj: '28345678000125',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'SANDRO TOURINHO FALCAO - ME',
      decpfcnpj: '28336866000197',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'SUSIANE TOURINHO DA SILVA SODRE - ME',
      decpfcnpj: '28357877000153',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'TOMAZ PEREIRA DE CARVALHO NETO - ME',
      decpfcnpj: '28345698000104',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'VALDIR QUEIROZ DE CASTRO - ME',
      decpfcnpj: '28336569000141',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'VALMIR QUEIROZ DE CASTRO - ME',
      decpfcnpj: '28336594000125',
    },
    {
      cdlinha: 1832,
      denomepermissionario: 'VALTER DA CONCEIÇÃO TRANSPORTES - ME',
      decpfcnpj: '27895215000174',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'ADAILTON PEREIRA DA CRUZ - ME',
      decpfcnpj: '26288743000100',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'ADALBERTO MARINHO DOS SANTOS - ME',
      decpfcnpj: '26288725000110',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'ADILSON FERREIRA DOS SANTOS - ME',
      decpfcnpj: '26306895000180',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'ALFREDO BISPO DOS SANTOS TRANSPORTES - ME',
      decpfcnpj: '26439887000102',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'ANDERSON SANTANA MARQUES TRANSPORTES - ME',
      decpfcnpj: '26322873000104',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'ANTONIEL DIAS DA CRUZ - ME',
      decpfcnpj: '26288685000107',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'ANTONIO FABIO DA CONCEIÇÃO BRANDÃO - ME',
      decpfcnpj: '26288394000119',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'CARLOS SANTA RITA DE ALMEIDA - ME',
      decpfcnpj: '26439849000150',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'DANIEL OLIVEIRA BASTOS - ME',
      decpfcnpj: '26288638000163',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'DENRIVALDO TEXEIRA MATOS - ME',
      decpfcnpj: '26288745000191',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'DIOCESAR DOS SANTOS - ME',
      decpfcnpj: '26306867000163',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'EDERSON DE JESUS CONZAGA - ME',
      decpfcnpj: '26288722000187',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'EDVALDO DE SOUZA MATTOS - ME',
      decpfcnpj: '26288668000170',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'GERALDO MARTINS FILHO TRANSPORTES - ME',
      decpfcnpj: '26288735000156',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'IVANILDO DA GLORIA ARAUJO - ME',
      decpfcnpj: '26288674000127',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'JORGE ANTONIO FERNANDES GENTIL - ME',
      decpfcnpj: '26288465000183',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'JORGIVAN DOS SANTOS - ME',
      decpfcnpj: '26288371000104',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'JOSE PAULO CARDOZO DE CARVALHO - ME',
      decpfcnpj: '26288422000106',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'JOSE RAMOS DE SANTANA - ME',
      decpfcnpj: '26439837000125',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'JOSEMIR DA GLORIA ARAUJO - ME',
      decpfcnpj: '26306875000100',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'MARCIO VELOSO DA SILVA - ME',
      decpfcnpj: '26192504000144',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'JOSEVAL SANTANA MAIA - ME',
      decpfcnpj: '26288531000115',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'JUSTO CONCEIÇÃO DOS SANTOS - ME',
      decpfcnpj: '26288731000178',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'LUIZ CLAUDIO FERREIRA DA CONCEIÇÃO - ME',
      decpfcnpj: '26288659000189',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'MARCIO ROGÉRIO RIBEIRO SODRÉ - ME',
      decpfcnpj: '26288382000194',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'OSVALDO MARINHO DOS SANTOS - ME',
      decpfcnpj: '26322849000175',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'RAIMUNDO ALVES DOS SANTOS TRANSPORTES - ME',
      decpfcnpj: '26288430000144',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'RAIMUNDO DIAS DOS SANTOS - ME',
      decpfcnpj: '26439864000106',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'ROBSON CERQUEIRA DOS SANTOS - ME',
      decpfcnpj: '26288749000170',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'RONALDO LESSA SANTOS - ME',
      decpfcnpj: '26306891000100',
    },
    {
      cdlinha: 1828,
      denomepermissionario: 'WAGNER LEITE DA SILVA - ME',
      decpfcnpj: '26306864000120',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'ALEX SANDRO LINO DA SILVA - ME',
      decpfcnpj: '28439303000124',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'ANTONIO SILVA DOS SANTOS - ME',
      decpfcnpj: '28402376000141',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'BRAZ ALVES DA CONCEIÇÃO FILHO - ME',
      decpfcnpj: '28436573000181',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'CREUNICE DE SOUZA LIMA - ME',
      decpfcnpj: '28440638000162',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'EDMILSON DA CONCEIÇÃO SOARES - ME',
      decpfcnpj: '28427662000161',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'ELISIO MARCELINO PEREIRA MARTINS - ME',
      decpfcnpj: '28404610000170',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'GISONILDO DE OLIVEIRA SILVA - ME',
      decpfcnpj: '28470509000117',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'GIVALDO EVANGELISTA DA SILVA - ME',
      decpfcnpj: '28439031000162',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'JARDEL FREIRE CANDIDO - ME',
      decpfcnpj: '28404587000113',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'JOÃO DIAS FEITOSA - ME',
      decpfcnpj: '28488612000194',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'JOSÉ AUGUSTO NUNES DE CARVALHO - ME',
      decpfcnpj: '28404597000159',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'JOSÉ FLÁVIO DE FARIAS - ME',
      decpfcnpj: '28470614000156',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'JOSÉ INALDO DA COSTA',
      decpfcnpj: '28804919000157',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'JOSÉ NOVAIS DE SOUZA NETO - ME',
      decpfcnpj: '28526985000102',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'JOSÉ RAIMUNDO DOS SANTOS - ME',
      decpfcnpj: '28381022000168',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'JOSEVALTER TORRES DOS SANTOS - ME',
      decpfcnpj: '28404601000189',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'MANOEL REIS DE ANDRADE - ME',
      decpfcnpj: '28402125000167',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'MARIA HELENA DE CARVALHO PEREIRA - ME',
      decpfcnpj: '28329666000107',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'SEBASTIÃO BELARMINO DO NASCIMENTO - ME',
      decpfcnpj: '28507378000103',
    },
    {
      cdlinha: 1835,
      denomepermissionario: 'WANDERLEY TORRES DOS SANTOS - ME',
      decpfcnpj: '28403708000102',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'ADENILSON BARREIROS DAS NEVES - ME',
      decpfcnpj: '26192512000190',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'ALEXSANDRO CORREIA DOS SANTOS - ME',
      decpfcnpj: '26213270000117',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'ANTONIO SENA PINTO - ME',
      decpfcnpj: '26192527000159',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'COSME RIBEIRO DE SOUZA',
      decpfcnpj: '29589759000133',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'CARLITO MOREIRA DE FREITAS - ME',
      decpfcnpj: '26192495000191',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'EDVALDO SOUZA DA SILVA - ME',
      decpfcnpj: '26192509000117',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'EMERSON SUZART SANTOS - ME',
      decpfcnpj: '26192519000102',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'GILMAR FERREIRA DE FREITAS - ME',
      decpfcnpj: '26213279000185',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'JOSENALDO DE FREITAS SANTOS - ME',
      decpfcnpj: '26192548000174',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'MARCOS BORGES DE SENA - ME',
      decpfcnpj: '26231344000103',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'MARINALDO FERNANDES GENTIL - ME',
      decpfcnpj: '26192538000139',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'RAIMUNDO LEME MARQUES DE SANT ANNA - ME',
      decpfcnpj: '26192525000160',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'ULISSES CONCEIÇÃO PEREIRA - ME',
      decpfcnpj: '26225322000122',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'VALDEMIR GOMES FERREIRA - ME',
      decpfcnpj: '26192531000117',
    },
    {
      cdlinha: 1829,
      denomepermissionario: 'VALDIR BEZERRA MARQUES - ME',
      decpfcnpj: '26192508000122',
    },
    {
      cdlinha: 1811,
      denomepermissionario: 'JADER DINIZ BRITO',
      decpfcnpj: '26329491000102',
    },
    {
      cdlinha: 1821,
      denomepermissionario: 'JULIO SOARES NASCIMENTO',
      decpfcnpj: '26216075000106',
    },
    {
      cdlinha: 1834,
      denomepermissionario: 'ALMIR DIAS RODRIGUES',
      decpfcnpj: '63227630001142',
    },
    {
      cdlinha: 1840,
      denomepermissionario: 'RAIMUNDO DA SILVA E CASTRO',
      decpfcnpj: '28420728000191',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'ADEILSON SILVA DOS SANTOS',
      decpfcnpj: '29224734000136',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'ANGELUCIA NUNES DA SILVA',
      decpfcnpj: '29215957000137',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'ANTONIO DA COSTA E SILVA',
      decpfcnpj: '29588211000179',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'BARTOLOMEU GOMES NASCIMENTO',
      decpfcnpj: '29224819000114',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'DENILSON MOREIRA NOGUEIRA',
      decpfcnpj: '29590880000185',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'ERNILDO DE SOUZA SANTANA',
      decpfcnpj: '29218284000179',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'EUDENIS FERNANDES RODRIGUES DE MELLO',
      decpfcnpj: '29222282000153',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'FLORISBERTO CAVALCANTI DOS SANTOS',
      decpfcnpj: '29588687000100',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'HELCIO DE CARVALHO OLIVEIRA',
      decpfcnpj: '29588439000169',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'JOÃO DOS SANTOS COSTA',
      decpfcnpj: '29588838000120',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'JOSÉ ALDENIZIO DA SILVA',
      decpfcnpj: '29365077000147',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'JOSE BORGES DE OLIVEIRA',
      decpfcnpj: '29319596000179',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'MARLINE DE OLIVEIRA SILVA',
      decpfcnpj: '29199322000193',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'NILO MORENO DE SOUZA',
      decpfcnpj: '29207455000164',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'NIVALDO DIAS DE OLIVEIRA',
      decpfcnpj: '30197138000193',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'OSMAR TARGINO GRANJA',
      decpfcnpj: '29591212000172',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'VALDEMAR DIAS FERREIRA',
      decpfcnpj: '29206634000187',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'VINICIUS PATRICK TELES DE SOUZA',
      decpfcnpj: '29387369000180',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'ZE GALEGO TRANSPORTES EIRELI',
      decpfcnpj: '29726550000174',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'MARCOS ANTÔNIO DOS ANJOS RODRIGUES',
      decpfcnpj: '29590634000123',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'ADALBERTO CASTRO DOS SANTOS SILVA',
      decpfcnpj: '28335763000102',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'ALECSANDRO PEREIRA DA SILVA',
      decpfcnpj: '29720053000169',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'AROLDO CASTRO DOS SANTOS SILVA',
      decpfcnpj: '29499220000193',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'BARTOLOMEU PESQUEIRA DOS SANTOS',
      decpfcnpj: '29266845000105',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'CRISTIANO HILDEBERTO SAMPAIO TELES',
      decpfcnpj: '29279653000133',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'DIOGO ALMEIDA RIOS DO NASCIMENTO',
      decpfcnpj: '29588964000184',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'DURVAL RIBEIRO LIMA',
      decpfcnpj: '29221922000100',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'EUDIMAS RODRIGUES DE MELO',
      decpfcnpj: '29590516000115',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'GILMAR JOSÉ DA SILVA',
      decpfcnpj: '29590746000184',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'HELIO GIL DO NASCIMENTO',
      decpfcnpj: '29591089000190',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'HUGO DA SILVA COSTA',
      decpfcnpj: '29455831000130',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'IVANI DE AMORIM ARAÚJO',
      decpfcnpj: '29589924000157',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'JOCIRLEY DIAS DOS ANJOS',
      decpfcnpj: '29414716000117',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'JOSÉ ELIAS DOS SANTOS',
      decpfcnpj: '29359489000174',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'JULINHO NUNES DA SILVA',
      decpfcnpj: '29220516000123',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'LAURINDO ARAUJO DOS SANTOS',
      decpfcnpj: '29244898000163',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'LEUILTON SOARES SOUZA',
      decpfcnpj: '29247634000125',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'MANOEL DIAS FERREIRA',
      decpfcnpj: '29266985000183',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'MARCONIO DA SILVA MARQUES',
      decpfcnpj: '29279648000120',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'MARIA JOSÉ DA SILVA PASSOS',
      decpfcnpj: '29315707000179',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'MURILO RIBEIRO DE SOUZA',
      decpfcnpj: '29187773000100',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'ORLANDO DE SOUZA ARAUJO',
      decpfcnpj: '29192230000181',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'OSTEVALDO RIBEIRO LIMA',
      decpfcnpj: '29589142000118',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'OSVALDO DIAS DA SILVA',
      decpfcnpj: '29590204000101',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'PETRUS JUNIOR GALINDO DA SILVA',
      decpfcnpj: '29315844000103',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'RIVALDO DOS SANTOS CASTRO',
      decpfcnpj: '29416931000157',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'UBIRAJARA DOS SANTOS RIBEIRO',
      decpfcnpj: '29197669000105',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'VALFREDO OLIVEIRA DA SILVA',
      decpfcnpj: '29589477000136',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'VALMIR DIAS COSTA',
      decpfcnpj: '29589339000157',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'WASHINGTON HIPOLITO DA FONSECA',
      decpfcnpj: '29420654000156',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'ZEFERINO DE OLIVEIRA SEIXAS',
      decpfcnpj: '29590363000106',
    },
    {
      cdlinha: 1839,
      denomepermissionario: 'ADEMAR GOMES MORAIS JUNIOR',
      decpfcnpj: '30229966000166',
    },
    {
      cdlinha: 1839,
      denomepermissionario: 'ANTONIO FILHO TEIXEIRA BRITO',
      decpfcnpj: '30099039000179',
    },
    {
      cdlinha: 1839,
      denomepermissionario: 'CARLOS ALBERTO DE OLIVEIRA TRANSPORTES',
      decpfcnpj: '30179555000103',
    },
    {
      cdlinha: 1839,
      denomepermissionario: 'EDUARDO MAIKO LIMA MORAES',
      decpfcnpj: '30229362000110',
    },
    {
      cdlinha: 1839,
      denomepermissionario: 'FRANCISCO FARIAS MARTINS',
      decpfcnpj: '30198869000153',
    },
    {
      cdlinha: 1839,
      denomepermissionario: 'NELSON ALMEIDA DE AQUINO',
      decpfcnpj: '30179605000152',
    },
    {
      cdlinha: 1839,
      denomepermissionario: 'PEDRO MOURA',
      decpfcnpj: '29948230000169',
    },
    {
      cdlinha: 1839,
      denomepermissionario: 'PEDRO PEREIRA CASTRO FILHO',
      decpfcnpj: '30314709000122',
    },
    {
      cdlinha: 1839,
      denomepermissionario: 'ROGERIO DA SILVA FREITAS',
      decpfcnpj: '29944871000145',
    },
    {
      cdlinha: 1839,
      denomepermissionario: 'ROBERTO DE SOUZA NASCIMENTO',
      decpfcnpj: '29943437000140',
    },
    {
      cdlinha: 1839,
      denomepermissionario: 'VALMIR GUERRA FILHO',
      decpfcnpj: '30185785000185',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'ADIJAIR REMIGIO DA SILVA',
      decpfcnpj: '29672601000122',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'AMARANTE AMORIM DE ARAÚJO',
      decpfcnpj: '29633600000179',
    },
    {
      cdlinha: 1824,
      denomepermissionario: 'EDMUNDO ANTONIO DA CRUZ',
      decpfcnpj: '30591418000181',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'CARLOS MAGNO DA CONCEIÇÃO',
      decpfcnpj: '29398866000184',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'CICERO AMERICO DA SILVA',
      decpfcnpj: '29364336000115',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'FABIO NUNES DE CARVALHO',
      decpfcnpj: '29392906000180',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'FRANCINEUDO HOLANDA DA LUZ',
      decpfcnpj: '29324689000191',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'GRIGORIO AGOSTINHO RODRIGUES',
      decpfcnpj: '29398224000185',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'JOÃO NOGUEIRA DE OLIVEIRA',
      decpfcnpj: '29277139000169',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'JOSÉ DIAS FERREIRA',
      decpfcnpj: '29323686000133',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'LAVIO MACIEL SOARES DA SILVA',
      decpfcnpj: '29416945000170',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'MACIEL BERNARDINO VIANA LEITE',
      decpfcnpj: '29327284000107',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'MICHEL PLATINI DOS SANTOS SILVA',
      decpfcnpj: '29326975000196',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'REGINALDO ADAUTO DOS SANTOS',
      decpfcnpj: '20155448000191',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'VALDIVINO MIGUEL DA SILVA',
      decpfcnpj: '29383342000110',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'VALDOMIRO GUEDES CARDOSO DE MELO',
      decpfcnpj: '29324572000108',
    },
    {
      cdlinha: 1841,
      denomepermissionario: 'WILTON BERG FONSECA TORRES',
      decpfcnpj: '29316359000154',
    },
    {
      cdlinha: 1823,
      denomepermissionario: 'ANTONIO RIBEIRO DE ALMEIDA - ME',
      decpfcnpj: '26402161000103',
    },
    {
      cdlinha: 1823,
      denomepermissionario: 'NERY DE SOUZA BARBOSA - ME',
      decpfcnpj: '26305161000187',
    },
    {
      cdlinha: 1823,
      denomepermissionario: 'PEDRO GOMES NETO - ME',
      decpfcnpj: '26287210000104',
    },
    {
      cdlinha: 1813,
      denomepermissionario: 'AGENOR JOSÉ DOS SANTOS FILHO',
      decpfcnpj: '26216014000130',
    },
    {
      cdlinha: 1813,
      denomepermissionario: 'ARISTON ARAÚJO DOS SANTOS',
      decpfcnpj: '26390349000170',
    },
    {
      cdlinha: 1822,
      denomepermissionario: 'MARCO ANTONIO SILVA DA CAMARA - ME',
      decpfcnpj: '26234185000192',
    },
    {
      cdlinha: 1812,
      denomepermissionario: 'JOSÉ DOS SANTOS DE CARIPARE -ME',
      decpfcnpj: '26436234000170',
    },
    {
      cdlinha: 1825,
      denomepermissionario: 'ELIOMAR ANDRADE DE SOUZA - ME',
      decpfcnpj: '29289044000165',
    },
    {
      cdlinha: 1825,
      denomepermissionario: 'JOSÉ CARLOS DE SOUZA TRANSPORTES',
      decpfcnpj: '29658847000140',
    },
    {
      cdlinha: 1825,
      denomepermissionario: 'LINDBERG DA COSTA MENDES - ME',
      decpfcnpj: '29234001000182',
    },
    {
      cdlinha: 1825,
      denomepermissionario: 'RONALDO BRANDÃO TONHA - ME',
      decpfcnpj: '29281480000198',
    },
    {
      cdlinha: 1825,
      denomepermissionario: 'WELLINGTON SANTANA DOS SANTOS TRANSPORTES - ME',
      decpfcnpj: '29311150000106',
    },
    {
      cdlinha: 1836,
      denomepermissionario: 'VANDEWILSON OLIVEIRA BRAGA',
      decpfcnpj: '29499053000180',
    },
    {
      cdlinha: 1819,
      denomepermissionario: 'ADAILTON ALVES DA SILVA',
      decpfcnpj: '27870819000166',
    },
    {
      cdlinha: 1819,
      denomepermissionario: 'ANTONIO ANDEANDERSON DIAS DA FONSECA',
      decpfcnpj: '27964621000141',
    },
    {
      cdlinha: 1819,
      denomepermissionario: 'ALAIM DE SOUZA BORGES',
      decpfcnpj: '27964625000120',
    },
    {
      cdlinha: 1819,
      denomepermissionario: 'DINALVO FERREIRA DIAS',
      decpfcnpj: '27964648000134',
    },
    {
      cdlinha: 1819,
      denomepermissionario: 'EDIVALDO DA SILVA CUNHA',
      decpfcnpj: '27964633000176',
    },
    {
      cdlinha: 1819,
      denomepermissionario: 'FORTUNATO MANOEL DA SILVA',
      decpfcnpj: '27946327000107',
    },
    {
      cdlinha: 1819,
      denomepermissionario: 'LUCIANO DOS SANTOS CRISOSTOMO',
      decpfcnpj: '27946317000171',
    },
    {
      cdlinha: 1819,
      denomepermissionario: 'MARCOS DIAS DOS SANTOS FILHO',
      decpfcnpj: '27946308000180',
    },
    {
      cdlinha: 1819,
      denomepermissionario: 'MARCOS DIAS DOS SANTOS',
      decpfcnpj: '27996398000114',
    },
    {
      cdlinha: 1815,
      denomepermissionario: 'ELICARLOS ALECRIM PEREIRA',
      decpfcnpj: '27777833000110',
    },
    {
      cdlinha: 1824,
      denomepermissionario: 'ANTONIO AGRIPINO DE SOUZA',
      decpfcnpj: '30591492000106',
    },
    {
      cdlinha: 1824,
      denomepermissionario: 'ANTONIO PEREIRA DE OLIVEIRA',
      decpfcnpj: '30591427000172',
    },
    {
      cdlinha: 1824,
      denomepermissionario: 'EDISON PEREIRA DOS SANTOS',
      decpfcnpj: '30591452000156',
    },
    {
      cdlinha: 1824,
      denomepermissionario: 'ERNILTON ALECRIM PEREIRA',
      decpfcnpj: '30712809000107',
    },
    {
      cdlinha: 1824,
      denomepermissionario: 'FIDELIS EMANUEL DA ROCHA CRUZ',
      decpfcnpj: '30591500000106',
    },
    {
      cdlinha: 1824,
      denomepermissionario: 'GEOVANE GONÇALVES DA SILVA',
      decpfcnpj: '30591391000127',
    },
    {
      cdlinha: 1824,
      denomepermissionario: 'JOSÉ PEREIRA DE OLIVEIRA TRANSPORTES',
      decpfcnpj: '30591435000119',
    },
    {
      cdlinha: 1824,
      denomepermissionario: 'NIZALDO DA ROCHA MENEZES',
      decpfcnpj: '30591474000116',
    },
    {
      cdlinha: 1824,
      denomepermissionario: 'PAULO AGRIPINO DE SOUSA',
      decpfcnpj: '30591512000130',
    },
    {
      cdlinha: 1831,
      denomepermissionario: 'ADEMIR COSTA CERQUEIRA - ME',
      decpfcnpj: '28276532000175',
    },
    {
      cdlinha: 1831,
      denomepermissionario: 'ANDERSON CERQUEIRA DOS SANTOS - ME',
      decpfcnpj: '28256107000114',
    },
    {
      cdlinha: 1831,
      denomepermissionario: 'ANDRE MACHADO DOS SANTOS - ME',
      decpfcnpj: '28268358000119',
    },
    {
      cdlinha: 1831,
      denomepermissionario: 'JADILSON CERQUEIRA DOS SANTOS - ME',
      decpfcnpj: '28256146000111',
    },
    {
      cdlinha: 1831,
      denomepermissionario: 'JUTAI SOARES DO COUTO SILVA - ME',
      decpfcnpj: '28276755000132',
    },
    {
      cdlinha: 1831,
      denomepermissionario: 'LUIS ROGERIO SANTOS ARAUJO - ME',
      decpfcnpj: '28256103000136',
    },
    {
      cdlinha: 1831,
      denomepermissionario: 'MANOEL MACHADO FERREIRA - ME',
      decpfcnpj: '28276808000115',
    },
    {
      cdlinha: 1831,
      denomepermissionario: 'REINALDO DE ALMEIDA REIS - ME',
      decpfcnpj: '28256099000106',
    },
    {
      cdlinha: 1831,
      denomepermissionario: 'VALDECI DA CRUZ - ME',
      decpfcnpj: '28276765000178',
    },
    {
      cdlinha: 1831,
      denomepermissionario: 'WELLINGTON ESTRELA COUTO - ME',
      decpfcnpj: '28276812000183',
    },
    {
      cdlinha: 1844,
      denomepermissionario: 'JOSEVALDO DO NASCIMENTO ALVES',
      decpfcnpj: '27098542000103',
    },
    {
      cdlinha: 1844,
      denomepermissionario: 'RILDO DE LIMA OLIVEIRA',
      decpfcnpj: '31584925000150',
    },
    {
      cdlinha: 1844,
      denomepermissionario: 'SEBASTIÃO BANDEIRA DE ALENCAR',
      decpfcnpj: '15547277000106',
    },
    {
      cdlinha: 1801,
      denomepermissionario: 'GEORGETON LUIS MENDES DE SOUZA',
      decpfcnpj: '32008770000177',
    },
    {
      cdlinha: 1837,
      denomepermissionario: 'ALUIZIO MARQUES DA SILVA',
      decpfcnpj: '30705617000173',
    },
    {
      cdlinha: 1837,
      denomepermissionario: 'FRANSCISCO LAERCIO SANTOS OLIVEIRA',
      decpfcnpj: '30024005000115',
    },
    {
      cdlinha: 1837,
      denomepermissionario: 'HELIO RODRIGUES DA SILVA',
      decpfcnpj: '30219045000112',
    },
    {
      cdlinha: 1837,
      denomepermissionario: 'IATA ANDERSON ALMEIDA DA SILVA',
      decpfcnpj: '30468651000171',
    },
    {
      cdlinha: 1837,
      denomepermissionario: 'MARCONES ANTUNES DE QUEIROZ',
      decpfcnpj: '30883296000105',
    },
    {
      cdlinha: 1837,
      denomepermissionario: 'MARCIO RODRIGUES DOS SANTOS',
      decpfcnpj: '30899995000135',
    },
    {
      cdlinha: 1802,
      denomepermissionario: 'EDVALDO CARVALHO PAOLILO',
      decpfcnpj: '32092175000162',
    },
    {
      cdlinha: 1838,
      denomepermissionario: 'JENEBALDO DA SILVA',
      decpfcnpj: 'an',
    },
    {
      cdlinha: 1838,
      denomepermissionario: 'MARIANO AVELINO DA SILVA SANTOS',
      decpfcnpj: '31713338000114',
    },
    {
      cdlinha: 1842,
      denomepermissionario: 'ADRIANO DUARTE VILAS BOAS',
      decpfcnpj: '31448105000131',
    },
    {
      cdlinha: 1845,
      denomepermissionario: 'ACM DE LIMA TRANSPORTES',
      decpfcnpj: '30812897000119',
    },
    {
      cdlinha: 1833,
      denomepermissionario: 'DEIVED DA SILVA BARRETO',
      decpfcnpj: '26322681000106',
    },
    {
      cdlinha: 1833,
      denomepermissionario: 'ISAAC ALVES BARRETO',
      decpfcnpj: '26322723000109',
    },
    {
      cdlinha: 1845,
      denomepermissionario: 'JOSÉ MILTON NEVES DE OLIVEIRA',
      decpfcnpj: '30704553000196',
    },
    {
      cdlinha: 1843,
      denomepermissionario: 'EVANILTO DAS NEVES CARDOSO',
      decpfcnpj: '31713320000112',
    },
    {
      cdlinha: 1843,
      denomepermissionario: 'JAILTON SILVA DE SOUZA',
      decpfcnpj: '31713376000177',
    },
    {
      cdlinha: 1843,
      denomepermissionario: 'JOSÉ FRANCISCO MACÊDO ANACLETO',
      decpfcnpj: '31713401000112',
    },
    {
      cdlinha: 1843,
      denomepermissionario: 'TANIA MARIA SILVA LIMA',
      decpfcnpj: '31906002000178',
    },
  ];

  const companiesListOrdered = data.sort(function (a, b) {
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
