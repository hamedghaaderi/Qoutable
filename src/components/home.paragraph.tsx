import Button from "./button";
interface IHomeParagraph {
  link: string;
  p: string;
  text: string;
}

const HomeParagraph = ({ link, p, text }: IHomeParagraph) => {
  return (
    <>
      <div className="flex flex-col justify-between h-28 items-center">
        <p className="font-Poppins text-md text-hblue">{p}</p>
        <Button href={link}>{text}</Button>
      </div>
    </>
  );
};

export default HomeParagraph;
