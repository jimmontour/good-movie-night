import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Stream from "@components/Stream";


export default function Log() {
  return (
    <div className="container">
      <Head>
        <title>Bad Movie Night</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <h2>Watch Log</h2>
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTPUlelN4nPpNRzzSvd5wYftoEw6RpG6U4qVAL66lf_kU6AGfE7HRcrn10vzWrFxFEVxrWwT65nwVOi/pubhtml?widget=true&amp;headers=false"
        className="log"></iframe>


      </div>
      <Footer />
    </div>
  );
}
