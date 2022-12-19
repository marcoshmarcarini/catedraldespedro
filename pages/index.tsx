import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Cards from '../components/Cards'
import Revista from '../components/Revista'
import Youtube from '../components/Youtube'
import Social from '../components/Social'
import Rodape from '../components/Rodape'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Paróquia São Pedro</title>
        <meta name="description" content="Site criado pelo Next JS. Habilite o Javascript em seu navegador para funcionar." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Marcos Henrique Marcarini Junior" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContent}>
        <Cards />
        <Revista />
        <Youtube />
        <Social />
        <Rodape />
      </div>
    </>
  )
}
