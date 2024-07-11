import { useSearchParams } from "react-router-dom";
interface ISelectPage {
  number: string;
  page: string;
}

const SelectPage = ({ number, page }: ISelectPage) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderQuery = searchParams.get("order") ?? "";
  const authorQuery = searchParams.get("author") ?? "";
  const handleClick = (e: any) => {
    const queryAuthor = authorQuery === "" ? "" : `author=${authorQuery}&`;
    const queryOrder = orderQuery === "" ? "" : `order=${orderQuery}&`;
    const query =
      orderQuery === "" && authorQuery === ""
        ? `page=${e.target.innerText}`
        : `${queryAuthor}${queryOrder}page=${e.target.innerText}`;
    setSearchParams(query);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={
          page == number
            ? "bg-hblue text-blue mx-2 p-2 font-Poppins rounded-lg text-lg"
            : "bg-white text-blue mx-2 p-2 font-Poppins rounded-lg text-base"
        }
      >
        {number}
      </button>
    </>
  );
};

export default SelectPage;
