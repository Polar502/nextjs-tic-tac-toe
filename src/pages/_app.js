import '../styles/globals.css' //Need to include to use @apply

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>ToTiTo - jmaritar</title>
        <link rel="shortcut icon" href="/fav.png" />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
