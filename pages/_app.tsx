import SiteLayout from '@/components/common/SiteLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <SiteLayout>
      <Component {...pageProps} /> {/*This component will be the children of SiteLayout */}
    </SiteLayout>
  
  )
}
