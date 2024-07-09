import { Link } from "react-router-dom";
import ArrowIcon from "./arrowicon";
import SpeakerIcon from "./speakericon";
import CopyIcon from "./copyicon";
import FilterIcon from "./filtericon";
import useRandomQoute from "../hook/random.qoute";
import { useQueryClient } from "@tanstack/react-query";
import IsLoading from "./isloading";
import NoResult from "./noresult";
const speech = window.speechSynthesis;

const RandomQoute = () => {
  const { data, isLoading, isError } = useRandomQoute();
  const info = data?.data;
  const client = useQueryClient();
  const handleNew = () => {
    client.invalidateQueries({ queryKey: ["random"] });
  };
  const handleSpeak = () => {
    const sp = new SpeechSynthesisUtterance(
      `${info.content} by ${info.author}`
    );
    speech.speak(sp);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(info.content);
  };

  return (
    <>
      {isLoading ? (
        <IsLoading />
      ) : (
        <section className="bg-white rounded-3xl p-10">
          <div className="flex flex-col pb-7 items-center border-b-2 border-b-slate-300">
            <p className="text-2xl text-blue font-Poppins mb-7 text-center">
              {info.content}
            </p>
            <Link
              className="text-xl self-end text-black font-Poppins flex justify-between items-center"
              to={"/author" + `/${info.authorSlug}`}
            >
              {info.author}
              <ArrowIcon />
            </Link>
          </div>
          <div className="mt-7 flex flex-row justify-between items-center">
            <ul className="flex flex-row justify-between items-center">
              <li
                onClick={handleSpeak}
                className="rounded-percent p-3 bg-yellow mr-3"
              >
                <SpeakerIcon />
              </li>
              <li
                onClick={handleCopy}
                className="rounded-percent p-3 bg-yellow"
              >
                <CopyIcon />
              </li>
            </ul>
            <div className="flex flex-row justify-between items-center">
              <button className="p-4 mr-1 bg-yellow rounded-3xl rounded-r-none">
                <FilterIcon />
              </button>
              <button
                onClick={handleNew}
                className="p-3 bg-yellow text-lg rounded-3xl rounded-l-none"
              >
                New Qoute
              </button>
            </div>
          </div>
        </section>
      )}
      {isError && <NoResult />}
    </>
  );
};

export default RandomQoute;
