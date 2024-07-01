import useSearch from "../hook/Search";

const ResultFor = () => {
  const { queryParam } = useSearch()

  return (
    <>
      <section className="px-10 py-9 bg-white rounded-2xl mb-9">
        <span className=" font-Poppins text-blue text-xl">
          Results for: <span className="text-hblue text-2xl ml-4">{queryParam}</span>
        </span>
      </section>
    </>
  );
};

export default ResultFor;
