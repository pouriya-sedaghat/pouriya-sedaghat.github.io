import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import LayOut from '/layout';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </CookiesProvider>
  )
}

export default MyApp
