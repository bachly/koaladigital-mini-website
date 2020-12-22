import Head from "next/head";

const BRAND_COLOR_HEX = '#f00'; // For meta tag 'theme-color'

export default function Layout({ pageName, pageImage, title, description, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>

                {/* Meta Tags */}
                <meta name="theme-color" content={BRAND_COLOR_HEX}></meta>
                <meta charSet="utf-8" />
                <meta
                    content={description}
                    name="description"
                />
                <meta content={title} property="og:title" />
                <meta content={description} property="og:description" />
                <meta content={`website`} property="og:type" />
                <meta content={pageImage || '/images/logo.png'} property="og:image" />

                <meta content={title} property="twitter:title" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />

                {/* CSS */}
                <link href="css/tailwind.css" rel="stylesheet" type="text/css" />
                <link href="css/custom.css" rel="stylesheet" type="text/css" />

                {/* Favicons from favicon.io */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
                <link rel="manifest" href="/favicon_io/site.webmanifest" />

                {/* Javascript */}
            </Head>
            <div id={`page-${pageName}`}>
                {children}
            </div>
            <style jsx>{`
     
             `}</style>
        </>
    )
}