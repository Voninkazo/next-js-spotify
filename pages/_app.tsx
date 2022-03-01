import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { SongProvider } from '../context/context';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SongProvider>
      <Component {...pageProps} />
    </SongProvider>
 )
}

export default MyApp


