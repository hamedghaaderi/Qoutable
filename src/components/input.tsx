import SearchIcon from "./searchicon";

const Input = () => {
  return (
    <>
      <div className="m-auto w-2/6 flex h-14">
        <input
          type="text"
          placeholder="Search Authors"
          className="w-9/10 rounded-3xl p-3 pl-6 outline-none rounded-r-none "
        />
        <button className="w-1/10 rounded-3xl rounded-l-none bg-yellow p-3">
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default Input;
