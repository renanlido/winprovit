import type { AppProps } from 'next/app';
import { global } from '../styles/globalCSS';

const App = ({ Component, pageProps }: AppProps) => {
  global();
  return <Component {...pageProps} />;
};

export default App;
