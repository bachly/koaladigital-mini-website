import App from "next/app";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const title = `KoalaDigital 🐨 | Custom Web, Shopify and Webmaster Service in Ryde
    Sydney, Australia`;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta
            content="Professional Service to build new or extend your Web Applications and Shopify stores • First consultation free • Affordable Webmaster Service also available"
            name="description"
          />
          <meta content={title} property="og:title" />
          <meta content={title} property="twitter:title" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/css/tailwind.css" rel="stylesheet" type="text/css" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
