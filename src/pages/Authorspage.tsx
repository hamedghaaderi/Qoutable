import Footer from "../components/footer";
import Header from "../components/header";
import IsLoading from "../components/isloading";
import LinkTo from "../components/link.to";
import ResultItem from "../components/result.item";
import useListAuthors from "../hook/list.authors";
import Pagination from "../components/pagination";
import AscDesc from "../components/ascdesc";
import ToTop from "../components/totop";
import NoResult from "../components/noresult";

const AuthorsPage = () => {
  scrollTo({ top: 0, behavior: "smooth" });
  const { isLoading, data } = useListAuthors();
  
  return (
    <>
      <Header btn={<LinkTo />} link={"/random"} innerText={"Random Qoute"} />
      <main className="bg-back px-20 py-12">
        {data?.data.count !== 0 && data?.data && <AscDesc />}
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
        {data?.data.count === 0 && <NoResult />}
        {data?.data.count !== 0 && data?.data && (
          <Pagination
            currentPage={data?.data.page}
            pageCount={data?.data.totalPages}
          />
        )}
        <ToTop />
      </main>
      <Footer />
    </>
  );
};

export default AuthorsPage;
