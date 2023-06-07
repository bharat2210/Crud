import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store'
import {Provider} from 'react-redux'
import Layout from '../Components/Layout'

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
