import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { TndevProvider } from "../contexts/TndevContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import arabic from "../locales/ar.json";
import english from "../locales/en.json";
import french from "../locales/fr.json";
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
              <title>UBEI</title>

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
