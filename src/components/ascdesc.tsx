import { useSearchParams } from "react-router-dom";
import ArrowDownIcon from "./arrowdownicon"
import ArrowUpIcon from "./arrowupicon"

const AscDesc = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageQuery = searchParams.get("page") ?? "";
    const orderQuery = searchParams.get("order") ?? "asc";
    const handelClick = (param: string) => {
      const query =
        pageQuery === "" ? `order=${param}` : `page=${pageQuery}&order=${param}`;
      setSearchParams(query);
    };

  return (
    <>
            <div className="mb-9">
          <button
            onClick={() => handelClick("desc")}
            className={
              orderQuery == "desc"
                ? "bg-hblue p-2 rounded-lg mr-4"
                : "bg-white p-2 rounded-lg mr-4"
            }
          >
            <ArrowUpIcon />
          </button>
          <button
            onClick={() => handelClick("asc")}
            className={
              orderQuery == "asc"
                ? "bg-hblue p-2 rounded-lg mr-4"
                : "bg-white p-2 rounded-lg mr-4"
            }
          >
            <ArrowDownIcon />
          </button>
        </div>
    </>
  )
}

export default AscDesc