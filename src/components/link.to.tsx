import { Link } from "react-router-dom";
import SearchIcon from "./searchicon";

const LinkTo = () => {
  return (
    <>
      <Link to={"/search"}>
        <button className="rounded-3xl rounded-l-none bg-yellow p-3 w-full h-full">
          <SearchIcon />
        </button>
      </Link>
    </>
  );
};

export default LinkTo;
