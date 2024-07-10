import Footer from "../components/footer";
import Header from "../components/header";
import ButtonInput from "../components/button.input";
import ResultContainer from "../components/result.container";

const SearchPage = () => {
  scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <Header
        btn={<ButtonInput />}
        link={"/random"}
        innerText={"Random Qoute"}
      />
      <ResultContainer />
      <Footer />
    </>
  );
};

export default SearchPage;
