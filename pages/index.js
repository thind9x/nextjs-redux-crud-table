import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UserManger from './components/UserManger'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextjs Redux Crud React App</title>
        <meta name="description" content="Nextjs Redux Crud React App Simple Using React-Redux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
       <UserManger/>
      </main>

      <footer className={styles.footer}>
       
          Powered by{' '}
          <span className={styles.logo}>
            thind9x
          </span>
     
      </footer>
    </div>
  )
}
