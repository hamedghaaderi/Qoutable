import ArrowIcon from "./arrowicon";
import Button from "./button";

interface IAuthorInfo {
  name: string;
  desc: string;
  bio: string;
  link: string;
  totalQoutes: number;
}

const AuthorInfo = ({ name, desc, bio, link, totalQoutes }: IAuthorInfo) => {
  return (
    <>
      <section className="bg-white rounded-3xl p-10">
        <h2 className="text-2xl text-blue font-Poppins mb-1">{name}</h2>
        <span className="text-xl text-hblue font-Poppins mb-3 inline-block">
          {desc}
        </span>
        <p className="text-lg text-justify font-Poppins text-black mb-3">
          {bio}
        </p>
        <div className="flex flex-col justify-between">
          <span className="text-blue text-lg inline-block">
            Number Of Qoutes:{" "}
            <span className="bg-hblue ml-2 p-2 rounded-lg text-black">
              {totalQoutes}
            </span>
          </span>
          <div className="w-64 self-end flex flex-row items-center justify-between">
            <Button href={"/authors"}>List Authors</Button>
            <a
              className="pl-6 py-2 border-l-2 border-l-hblue flex w-28 justify-between text-lg items-center"
              href={link}
            >
              Explore <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorInfo;
