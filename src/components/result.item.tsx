import { Link } from "react-router-dom";
import ArrowIcon from "./arrowicon";
interface IResultItem {
  name: string;
  desc: string;
  slug: string;
}

const ResultItem = ({ name, desc, slug }: IResultItem) => {
  return (
    <>
      <section className="bg-white rounded-3xl p-10 mb-7 flex flex-col justify-between items-start h-44">
        <h2 className="text-2xl text-blue font-Poppins">{name}</h2>
        <span className="text-xl text-hblue font-Poppins">{desc}</span>
        <Link
          className="self-end flex justify-between text-lg items-center"
          to={"/author" + `/${slug}`}
        >
          More info <ArrowIcon />
        </Link>
      </section>
    </>
  );
};

export default ResultItem;
