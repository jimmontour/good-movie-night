import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Stream from '@components/Stream'
import Updates from '@components/Updates'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Good Movie Night</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <div className="container">
        <Header />
        <Stream />
        <Footer />

      </div>
    </div>
  );
}
