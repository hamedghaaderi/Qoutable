import { useState } from "react";
import useTag from "../hook/tag";
import CloseIcon from "./closeicon";
import OpenIcon from "./openicon";
import useFilter from "../store/filters";
import List from "./list";

interface IFilter {
  onClose: any;
  open: boolean;
}

const Filter = ({ onClose, open }: IFilter) => {
  const { setQoute, setAuthor, setTag } = useFilter(
    (state: any) => state.action
  );
  const { qoute, tag, author } = useFilter((state: any) => state);
  const [showList, setShowList] = useState(false);
  const { data } = useTag();
  open && (document.body.style.overflow = "hidden");
  const handleCloseModal = () => {
    document.getElementById("backdrop")?.classList.add("animate-opacityout");
    document.getElementById("container")?.classList.add("animate-translateout");
    setTimeout(() => {
      onClose();
    }, 280);
  };
  const handleCloseList = (e: any) => {
    const element: any = document.getElementById("tag");
    element.innerHTML = e.target.innerText;
    setShowList(false);
    setTag(e.target.innerText);
  };
  const handleChangeAuthor = (e: any) => {
    setAuthor(e.target.value);
  };
  const handleChangeQoute = (e: any) => {
    setQoute(e.target.value);
  };
  const handleClick = () => {
    const element: any = document.getElementById("tag");
    element.innerHTML = "Select Tag";
    setShowList(false);
    setTag("");
  };
  return (
    <>
      <div
        id="backdrop"
        className="bg-transparent animate-opacityin backdrop-blur-sm bg-opacity-25 fixed bottom-0 w-screen h-screen"
      >
        <div
          id="container"
          className="bg-back animate-translatein w-screen h-fit absolute bottom-0 rounded-3xl rounded-b-none p-10"
        >
          <div className="flex flex-row justify-between border-b-2 border-b-slate-300 pb-5">
            <button onClick={handleCloseModal}>
              <CloseIcon />
            </button>
            <h5 className="font-Poppins text-lg text-blue">
              Filter Your Random Qoute
            </h5>
          </div>
          <div className="mt-5 flex flex-col justify-between font-Poppins">
            <div className="flex flex-col justify-between mb-5">
              <label className=" text-lg text-blue ml-4 mb-2" htmlFor="qoute">
                Qoute
              </label>
              <input
                placeholder="True friendship is ..."
                onChange={handleChangeQoute}
                className="rounded-3xl p-3 px-5 outline-none"
                id="qoute"
                name="qoute"
                type="text"
                value={qoute}
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col w-48% justify-between">
                <label className="text-lg text-blue ml-4 mb-2" htmlFor="author">
                  Author
                </label>
                <input
                  placeholder="George Washington"
                  onChange={handleChangeAuthor}
                  className="rounded-3xl p-3 px-5 outline-none"
                  id="author"
                  name="author"
                  type="text"
                  value={author}
                />
              </div>
              <div className="flex flex-col w-48% relative justify-between">
                <p className="text-lg text-blue ml-4 mb-2">tag</p>
                <div
                  onClick={() => setShowList(!showList)}
                  className="bg-white h-12 flex flex-row justify-between rounded-3xl p-3 pl-5 pr-4"
                >
                  <p id="tag" className="text-black">
                    {tag === "" ? "Select Tag" : tag}
                  </p>
                  <OpenIcon />
                </div>
                {showList && (
                  <List
                    data={data?.data}
                    handleCloseList={handleCloseList}
                    handleClick={handleClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
