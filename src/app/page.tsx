import Head from 'next/head'
import Input from '@/components/Input/Input'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'See-Vie',
}

export default function Home() {
  return (
    <main>
      <h1 className='landing__title'>Bye Bye Curriculum Vitae...</h1>
      <h1 className='landing__title'>...Hello See-Vie!</h1>
      <Input placeholder='name'></Input>
      <Input placeholder='phone number'></Input>
      <Input placeholder='email'></Input>
      <Input placeholder='LinkedIn handle'></Input>
      <Link className='landing__link' href="/edit">See Results</Link>
    </main>
  )
}
