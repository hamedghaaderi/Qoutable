import Footer from "../components/footer";
import Header from "../components/header";
import IsLoading from "../components/isloading";
import LinkTo from "../components/link.to";
import ResultItem from "../components/result.item";
import useListAuthors from "../hook/list.authors";
import AscDesc from "../components/ascdesc";

const AuthorsPage = () => {
  const { isLoading, data } = useListAuthors();

  return (
    <>
      <Header btn={<LinkTo />} link={"/random"} innerText={"Random Qoute"} />
      <main className="bg-back px-20 py-12">
        {data?.data && <AscDesc />}
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
