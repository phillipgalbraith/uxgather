import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import teamPic from '../public/images/team-win.jpg'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>UX Gather</title>
        <meta name="description" content="User experience gather phase accellerating app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      
      <nav>
        <h1>UX Gather</h1>      
        <button className=''>
          <Link href="/login">Login</Link>
        </button> 
      </nav>
      
      <Image src={teamPic} className="img-rounded" alt="silhouette of a team" />

    </div>
  )
}
