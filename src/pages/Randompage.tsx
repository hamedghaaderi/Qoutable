import Footer from "../components/footer";
import Header from "../components/header";
import LinkTo from "../components/link.to";
import RandomQoute from "../components/randomqoute";

const RandomPage = () => {
  return (
    <>
      <Header btn={<LinkTo />} innerText={"List Authors"} link={"/authors"} />
      <main className="bg-back px-20 py-12">
        <RandomQoute />
      </main>
      <Footer />
    </>
  );
};

export default RandomPage;
