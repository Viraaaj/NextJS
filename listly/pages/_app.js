import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  )
}

export default MyApp

// component here is content of all pages and we are wrapping it in Layout so that
// footer and navbar will be shown in each and every page.