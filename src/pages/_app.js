import store from '@/redux/store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ScreenLoader from '@/Component/Generic/ScreenLoader';
import PrivateRoutes from '@/Component/PrivateRoutes';
import ToastNotify from '@/Component/Generic/ToastNotify';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading ? <ScreenLoader loading={loading} /> : (
        <Provider store={store}>
          <PrivateRoutes>
            <ToastNotify />
            <Component {...pageProps} />
          </PrivateRoutes>
        </Provider>
      )}
    </>
  );
}

export default MyApp;
