import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Header, Footer, Quebra } from '../containers/global'
import { GlobalStyle } from '../styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Compre a sua bicicleta personalizada na Bikcraft. Possuímos modelos Passeio, Retrô e Esporte."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bikcraft - Conheça as linhas Passeio, Retrô e Esporte"
        />
        <meta
          property="og:description"
          content="Compre a sua bicicleta personalizada na Bikcraft. Possuímos modelos Passeio, Retrô e Esporte."
        />
        <meta
          property="og:url"
          content="https://origamid-web-design-completo.vercel.app/Produtos"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/giovanifranz/Origamid-Web-Design-Completo-React-NextJS/main/public/img/og-image.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Quebra />
      <Footer />
    </>
  )
}

export default MyApp
