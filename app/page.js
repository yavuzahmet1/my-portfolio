import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Privacy from "./components/Privacy";
import Navbar from "./components/Navbar";
import MyProjects from "./components/MyProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <MyProjects />
      <ContactMe />
      <Privacy />
      <Footer />
    </>
  );
}
