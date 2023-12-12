import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-4xl text-center text-blue-500 my-5">Hello Next.js 👋</h1>
    <p className="text-center">
      <Link href="/about" className="text-red-500 hover:underline">About</Link>
    </p>
  </Layout>
)

export default IndexPage
