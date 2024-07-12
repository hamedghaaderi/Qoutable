import AuthorInfo from "../components/authorinfo";
import Footer from "../components/footer";
import Header from "../components/header";
import IsLoading from "../components/isloading";
import LinkTo from "../components/link.to";
import NoResult from "../components/noresult";
import useGetAuthor from "../hook/get.author";

const AuthorBySlug = () => {
  scrollTo({ top: 0, behavior: "smooth" });
  const { data, isLoading, isError } = useGetAuthor();
  
  return (
    <>
      <Header btn={<LinkTo />} link={"/random"} innerText={"Random Qoute"} />
      <main className="bg-back px-20 py-12">
        {isLoading && <IsLoading />}
        {data && (
          <AuthorInfo
            name={data?.data.name}
            desc={data?.data.description}
            bio={data?.data.bio}
            link={data?.data.link}
            totalQoutes={data?.data.quoteCount}
          />
        )}
        {isError && <NoResult />}
      </main>
      <Footer />
    </>
  );
};

export default AuthorBySlug;
