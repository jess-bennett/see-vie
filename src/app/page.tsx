import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'See-Vie',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/edit">Edit</Link>
      HOME
    </main>
  )
}
