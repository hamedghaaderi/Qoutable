import Input from "./input";
import LinkTo from "./link.to";

const Section3Home = () => {
  return (
    <>
      <section className="bg-back pb-20">
        <h2 className="font-Agbalumo text-blue text-center text-2xl pb-10">
          Search in authors manually
        </h2>
        <Input button={<LinkTo />} />
      </section>
    </>
  );
};

export default Section3Home;
