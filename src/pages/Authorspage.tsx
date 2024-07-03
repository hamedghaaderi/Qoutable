import { useSearchParams } from "react-router-dom";
import ArrowDownIcon from "../components/arrowdownicon";
import ArrowUpIcon from "../components/arrowupicon";
import Footer from "../components/footer";
import Header from "../components/header";
import IsLoading from "../components/isloading";
import LinkTo from "../components/link.to";
import ResultItem from "../components/result.item";
import useListAuthors from "../hook/list.authors";

const AuthorsPage = () => {
  const { isLoading, data } = useListAuthors();
  const [, setSearchParams] = useSearchParams();
  const handelClick = (param: string) => {
    const query = `order=${param}`;
    setSearchParams(query);
  };

  return (
    <>
      <Header btn={<LinkTo />} link={"/random"} innerText={"Random Qoute"} />
      <main className="bg-back px-20 py-12">
        <div className="mb-9">
          <button
            onClick={() => handelClick("desc")}
            className="bg-white p-2 rounded-lg mr-4"
          >
            <ArrowUpIcon />
          </button>
          <button
            onClick={() => handelClick("asc")}
            className="bg-white p-2 rounded-lg"
          >
            <ArrowDownIcon />
          </button>
        </div>
        {isLoading ? (
          <IsLoading />
        ) : (
          data?.data.results.map((item: any) => {
            return (
              <ResultItem
                key={item._id}
                name={item.name}
                desc={item.description}
                slug={item.slug}
              />
            );
          })
        )}
      </main>
      <Footer />
    </>
  );
};

export default AuthorsPage;
