import useSearch from "../hook/Search";
import IsLoading from "./isloading";
import NoResult from "./noresult";
import Pagination from "./pagination";
import ResultItem from "./result.item";
import ResultFor from "./resultfor";

const ResultContainer = () => {
  const { data, isLoading, isError } = useSearch();

  return (
    <>
      <main className="bg-back px-20 py-12">
        <ResultFor />
        {isLoading && <IsLoading />}
        {data?.data.results.map((item: any) => {
          return (
            <ResultItem
              key={item._id}
              name={item.name}
              desc={item.description}
              slug={item.slug}
            />
          );
        })}
        {isError && <NoResult />}
        {data?.data.count === 0 && <NoResult />}
        {data?.data.totalPages > 1 && (
          <Pagination currentPage={data?.data.page} pageCount={data?.data.totalPages} />
        )}
      </main>
    </>
  );
};

export default ResultContainer;
