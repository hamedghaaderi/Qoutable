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
      <main className="bg-back px-20 py-12">
        <ResultContainer />
      </main>
      <Footer />
    </>
  );
};

export default SearchPage;
