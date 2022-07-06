import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '@/components/Layouts/Layout'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps}: AppPropsWithLayout) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
    return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )

}

export default MyApp
