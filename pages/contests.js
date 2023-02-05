import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Stream from "@components/Stream";


export default function Contests() {
  return (
    <div className="container">
      <Head>
        <title>Bad Movie Night</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <h2>No contests at this time...</h2>
        <p>
          In the meantime, visit the
          <a href="https://discord.gg/gmrmfKcFaP"> Bad Movie Night Discord </a>
          to see whats on the schedule.
        </p>
      </div>
      <Footer />
    </div>
  );
}
