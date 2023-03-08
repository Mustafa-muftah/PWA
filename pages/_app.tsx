import { Layout } from '@/components/layout'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return(
  <>
  <main className={roboto.className}>
   <Layout>
  <Component {...pageProps} />
  </Layout>
  </main>
  </>
  )
}
