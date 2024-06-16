import { useQuery } from "@tanstack/react-query";
import documentCount from "../api/ducument.count";

const Section2Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["document-count"],
    queryFn: documentCount,
    gcTime: Infinity
  });

  return (
    <>
      <section className="bg-back pt-8 pb-20">
        <h2 className="font-Agbalumo text-blue text-center text-2xl pb-10">
          Our Qoutable document stats
        </h2>
        <div className="grid grid-cols-3 grid-rows-1 w-9/12 gap-x-11 m-auto">
          <div className="h-32 rounded-xl bg-yellow flex flex-col justify-evenly items-center">
            <span className="text-blue font-Poppins text-lg">Qoutes</span>
            <span className="text-hblue font-Poppins text-base">
              {isLoading ? "Loading..." :data?.data.quotes}
            </span>
          </div>
          <div className="h-32 rounded-xl bg-yellow flex flex-col justify-evenly items-center">
            <span className="text-blue font-Poppins text-lg">Authors</span>
            <span className="text-hblue font-Poppins text-base">
              {isLoading ? "Loading..." :data?.data.authors}
            </span>
          </div>
          <div className="h-32 rounded-xl bg-yellow flex flex-col justify-evenly items-center">
            <span className="text-blue font-Poppins text-lg">Tags</span>
            <span className="text-hblue font-Poppins text-base">
              {isLoading ? "Loading..." :data?.data.tags}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2Home;
