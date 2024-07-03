import AuthorInfo from "../components/authorinfo";
import Footer from "../components/footer";
import Header from "../components/header";
import IsLoading from "../components/isloading";
import LinkTo from "../components/link.to";
import NoResult from "../components/noresult";
import useGetAuthor from "../hook/get.author";

const AuthorBySlug = () => {
  const { data, isLoading, isError } = useGetAuthor();
  const info = data?.data;
  
  return (
    <>
      <Header btn={<LinkTo />} link={"/random"} innerText={"Random Qoute"} />
      <main className="bg-back px-20 py-12">
        {isLoading && <IsLoading />}
        {data && (
          <AuthorInfo
            name={info.name}
            desc={info.description}
            bio={info.bio}
            link={info.link}
            totalQoutes={info.quoteCount}
          />
        )}
        {isError && <NoResult />}
      </main>
      <Footer />
    </>
  );
};

export default AuthorBySlug;
