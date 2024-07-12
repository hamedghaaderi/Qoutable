interface ITagItem {
  tag: string;
}

const TagItem = ({ tag }: ITagItem) => {
  return (
    <>
      <div className="font-Poppins text-blue bg-hblue text-sm w-fit rounded-xl p-2 mr-2 last:m-0">
        #{tag}
      </div>
    </>
  );
};

export default TagItem;
