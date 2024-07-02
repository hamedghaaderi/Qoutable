import useSearch from "../hook/Search";
import Button from "./button";

const ResultFor = () => {
  const { queryParam } = useSearch();

  return (
    <>
      <section className="px-10 py-7 bg-white rounded-2xl mb-9 flex flex-row justify-between items-center">
        <span className=" font-Poppins text-blue text-xl">
          Results for:{" "}
          <span className="text-hblue text-2xl ml-4">{queryParam}</span>
        </span>
        <Button href={"/authors"}>List Authors</Button>
      </section>
    </>
  );
};

export default ResultFor;
