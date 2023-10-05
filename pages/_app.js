import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Context from '../context/Context';

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  )
}

export default MyApp
