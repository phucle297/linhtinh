import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/dashboard')
  }, [])

  return (
    <>
      <Head>
        <title>Job Recommendation</title>
        <meta name="description" content="Job Recommendation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1>
    </>
  )
}

export default Home
