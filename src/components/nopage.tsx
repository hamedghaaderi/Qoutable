import Button from "./button";
import Footer from "./footer";
import Header from "./header";
import LinkTo from "./link.to";

const NoPage = () => {
  return (
    <>
      <Header btn={<LinkTo />} innerText={"Random Qoute"} link={"/random"} />
      <main className="bg-back px-20 py-12">
        <section className="bg-back p-16 py-20 flex flex-col items-center justify-between h-100">
          <h5 className="font-Poppins mt-5 text-center text-blue text-4xl">
            The requested page could not be found.
          </h5>
          <h6 className="font-Poppins my-5 text-center text-hblue text-2xl">
            You can use the top part of the page or the button below to find the
            desired page.
          </h6>
          <Button href={"/authors"}>List Authors</Button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NoPage;
