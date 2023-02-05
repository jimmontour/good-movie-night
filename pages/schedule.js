import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Stream from "@components/Stream";


export default function Schedule() {
  return (
    <div className="container">
      <Head>
        <title>Bad Movie Night</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <h2>Upcoming Schedule</h2>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23D50000&ctz=America%2FNew_York&showNav=0&showTitle=0&showPrint=0&showTabs=0&showTz=1&showCalendars=0&mode=WEEK&src=OTNmMzNkN2UyNTI3MmUzMGNiYTM5ZWI1OWQxNGEzZmY0MTFjMmU0MmY5MWFkOTQ5MzViZjU3NzMzZGVhMjc0MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161"
          frameborder="0"
          scrolling="no"
          className="schedule"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
