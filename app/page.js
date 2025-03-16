import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <ContactMe />
      <MyWork />
      <Footer />
    </>
  );
}
