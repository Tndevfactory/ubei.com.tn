import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { TndevProvider } from "../src/contexts/TndevContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import arabic from "../src/locales/Ar";
import english from "../src/locales/En";
import french from "../src/locales/Fr";
import Script from "next/script";
import "../styles/globals.css";

const queryClient = new QueryClient();

const messages = {
  en: english,
  fr: french,
  ar: arabic,
};

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const { locale } = useRouter();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale="en"
      >
        <QueryClientProvider client={queryClient}>
          <TndevProvider>
            <Head>
              <title>Tndev Art</title>
              <link
                rel="apple-touch-icon"
                sizes="57x57"
                href="/apple-icon-57x57.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="60x60"
                href="/apple-icon-60x60.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="72x72"
                href="/apple-icon-72x72.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="76x76"
                href="/apple-icon-76x76.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="114x114"
                href="/apple-icon-114x114.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/apple-icon-120x120.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="144x144"
                href="/apple-icon-144x144.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="152x152"
                href="/apple-icon-152x152.png"
              />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-icon-180x180.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/android-icon-192x192.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="96x96"
                href="/favicon-96x96.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/manifest.json" />

              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
              />
              <meta name="msapplication-TileColor" content="#ffffff" />
              <meta
                name="msapplication-TileImage"
                content="/ms-icon-144x144.png"
              />
              <meta name="theme-color" content="#ffffff" />
            </Head>
            <ThemeProvider theme={theme}>
              <div dir={locale === "ar" ? "rtl" : "ltr"}>
                <Script
                  id="g-analytics1"
                  strategy="lazyOnload"
                  src={`https://www.googletagmanager.com/gtag/js?id=G-JRNMEC13N9`}
                />
                <Script id="g-analytics2" strategy="lazyOnload">
                  {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-JRNMEC13N9');
                      `}
                </Script>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
              </div>
            </ThemeProvider>
          </TndevProvider>
        </QueryClientProvider>
      </IntlProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
