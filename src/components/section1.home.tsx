import logo from "../assets/images/logo-quotable.png";

const Section1Home = () => {
  return (
    <>
      <section className="h-screen bg-section-1-bg bg-cover flex items-center justify-center">
        <div className="w-120 h-100">
          <img width="600" src={logo} alt="Logo" />
        </div>
        <p className="w-80 font-Poppins text-hblue text-xl">
          Serach in the words of elders and take advantage of their knowledge
          and experience.
        </p>
      </section>
    </>
  );
};

export default Section1Home;
