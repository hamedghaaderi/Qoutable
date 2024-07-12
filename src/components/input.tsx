import useValue from "../store/value";
interface IInput {
  button: JSX.Element;
  className: string;
}

const Input = ({ button, className }: IInput) => {
  const { setValue } = useValue((state: any) => state.action);
  const handleChange = (e: any) => {
    setValue(e.target.value.trim());
  };

  return (
    <>
      <div className={className + " flex h-14"}>
        <input
          type="text"
          name="search"
          placeholder="Search Authors"
          className="w-9/10 rounded-3xl p-3 pl-6 outline-none rounded-r-none"
          onChange={handleChange}
        />
        {button}
      </div>
    </>
  );
};

export default Input;
