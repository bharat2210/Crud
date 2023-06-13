import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store'
import {Provider} from 'react-redux'
import Layout from '../Components/Layout'
import 'aos/dist/aos.css';
import AOS from 'aos';
 

// Initialize AOS on client-side only
if (typeof window !== 'undefined') {
  AOS.init({ duration: 1000 });
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <Layout>
    <Component {...pageProps} />
    </Layout>

  </Provider>
  
  )
}

export default MyApp
