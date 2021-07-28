import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from '../styles/global';

import { ActivityProvider } from '../hooks/useActivities';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActivityProvider>
      <Component {...pageProps} />
      <GlobalStyle />
      <Toaster />
    </ActivityProvider>
  );
}

export default MyApp;