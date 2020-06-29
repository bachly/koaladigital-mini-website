import App from "next/app";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <title>
            KoalaDigital | Web, Shopify and Designer service in Ryde Sydney 🐨
          </title>
          <meta
            content="Create new or improve existing websites, Shopify stores or online portals • Custom digital design, banners, themes, flyers and videos • Webmaster service available"
            name="description"
          />
          <meta
            content="KoalaDigital | Web, Shopify and Designer service in Ryde Sydney 🐨"
            property="og:title"
          />
          <meta
            content="KoalaDigital | Web, Shopify and Designer service in Ryde Sydney 🐨"
            property="twitter:title"
          />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/css/tailwind.css" rel="stylesheet" type="text/css" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
