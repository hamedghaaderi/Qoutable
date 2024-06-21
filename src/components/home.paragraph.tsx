import Button from "./button"

const HomeParagraph = ({link , p , text}: {link:string , p:string , text: string}) => {
  return (
    <>
    <div className="flex flex-col justify-between h-24 items-center">
            <p className="font-Poppins text-md text-hblue">
              {p}
            </p>
            <Button href={link}>{text}</Button>
          </div>
    </>
  )
}

export default HomeParagraph