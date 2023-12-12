import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import MainHeader from './MainHeader'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Gutiérrez, Víctor' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="logo.ico" type="image/x-icon"></link>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <MainHeader />
    {children}
    {/* componente footer */}
  </div>
)

export default Layout
