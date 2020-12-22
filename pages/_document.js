import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * Custom `Document`. Read more here: https://nextjs.org/docs/advanced-features/custom-document
 */
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument