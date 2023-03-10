import { Layout } from '@/components/layout'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
