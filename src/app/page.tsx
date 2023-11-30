import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'See-Vie',
}

export default function Home() {
  return (
    <main>
      <Link href="/edit">Edit</Link>
      HOME
    </main>
  )
}
