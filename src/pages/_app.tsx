import type { AppProps } from "next/app";
import { GlobalStyles } from "@/lib/GlobalStyles";
import { appWithTranslation } from "next-i18next";
import { Layout } from "@/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp);
