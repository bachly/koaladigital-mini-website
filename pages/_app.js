import App from "next/app";

/**
 * Custom `App`. Read more here: https://nextjs.org/docs/advanced-features/custom-app
 */
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />
  }
}

export default MyApp;
