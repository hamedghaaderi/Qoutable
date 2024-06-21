import HomeParagraph from "./home.paragraph";

const Section4Home = () => {
  const pAuthors: string = "See the list of all the authors of the website.";
  const pRandom: string = "A random quote with just one click.";

  return (
    <>
      <section className="bg-back pb-20">
        <h2 className="font-Agbalumo text-blue text-center text-2xl pb-10">
          Explore our website differently
        </h2>
        <div className="grid grid-cols-2 grid-rows-1 m-auto w-9/12 gap-x-28">
          <HomeParagraph link={"/authors"} p={pAuthors} text={"List Authors"} />
          <HomeParagraph link={"/random"} p={pRandom} text={"Random Qoute"} />
        </div>
      </section>
    </>
  );
};

export default Section4Home;
