import Footer from "../components/footer";
import Section1Home from "../components/section1.home";
import Section2Home from "../components/section2.home";
import Section3Home from "../components/section3.home";
import Section4Home from "../components/section4.home";

const Homepage = () => {
  return (
    <>
      <main>
        <Section1Home />
        <Section2Home />
        <Section3Home />
        <Section4Home />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
