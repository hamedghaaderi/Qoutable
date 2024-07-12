import { useSearchParams } from "react-router-dom";
import SelectPage from "./selectpage";

interface IPagination {
  pageCount: number;
  currentPage: number;
}

const Pagination = ({ pageCount, currentPage }: IPagination) => {
  let pages: number[] = [];
  for (let i = 0; i < pageCount; i++) {
    pages[i] = i + 1;
  }
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQuery = searchParams.get("page") ?? "1";
  const orderQuery = searchParams.get("order") ?? "";
  const authorQuery = searchParams.get("author") ?? "";
  const handlePrev = () => {
    const page = Number(pageQuery) - 1;
    const queryAuthor = authorQuery === "" ? "" : `author=${authorQuery}&`;
    const queryOrder = orderQuery === "" ? "" : `order=${orderQuery}&`;
    const query =
      orderQuery === "" && authorQuery === ""
        ? `page=${page}`
        : `${queryAuthor}${queryOrder}page=${page}`;
    setSearchParams(query);
  };
  const handleNext = () => {
    const page = Number(pageQuery) + 1;
    const queryAuthor = authorQuery === "" ? "" : `author=${authorQuery}&`;
    const queryOrder = orderQuery === "" ? "" : `order=${orderQuery}&`;
    const query =
      orderQuery === "" && authorQuery === ""
        ? `page=${page}`
        : `${queryAuthor}${queryOrder}page=${page}`;
    setSearchParams(query);
  };

  return (
    <>
      <div className="mt-16 mx-auto w-fit flex flex-row flex-wrap">
        <button
          onClick={handlePrev}
          className={
            currentPage === 1
              ? "pointer-events-none bg-white text-gray-400 mr-2 p-2 font-Poppins text-lg rounded-lg"
              : "bg-white text-blue mr-2 p-2 font-Poppins text-lg rounded-lg"
          }
        >
          prev
        </button>
        {pages.map((page: number) => {
          return <SelectPage key={page} number={`${page}`} page={pageQuery} />;
        })}
        <button
          onClick={handleNext}
          className={
            currentPage === pageCount
              ? "pointer-events-none bg-white text-gray-400 ml-2 p-2 font-Poppins text-lg rounded-lg"
              : "bg-white text-blue ml-2 p-2 font-Poppins text-lg rounded-lg"
          }
        >
          next
        </button>
      </div>
    </>
  );
};

export default Pagination;
