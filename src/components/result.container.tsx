import useSearch from "../hook/Search";
import IsLoading from "./isloading";
import NoResult from "./noresult";
import Pagination from "./pagination";
import ResultItem from "./result.item";
import ResultFor from "./resultfor";
import ToTop from "./totop";
interface IItem {
  _id: string;
  name: string;
  link: string;
  bio: string;
  description: string;
  quoteCount: number;
  slug: string;
  dateAdded: string;
  dateModified: string;
}

const ResultContainer = () => {
  const { data, isLoading, isError } = useSearch();

  return (
    <>
      <ResultFor />
      {isLoading && <IsLoading />}
      {data?.data.results.map((item: IItem) => {
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
      {data?.data.totalPages > 1 && data?.data.count !== 0 && data?.data && (
        <Pagination
          currentPage={data?.data.page}
          pageCount={data?.data.totalPages}
        />
      )}
      <ToTop />
    </>
  );
};

export default ResultContainer;
