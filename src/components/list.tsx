import ListItem from "./list.item";

interface IFilter {
  data: any;
  handleCloseList: (e: any) => void;
  handleClick: () => void;
}
interface ITag {
  _id: string;
  name: string;
  slug: string;
  quoteCount: number;
  dateAdded: string;
  dateModified: string;
}

const List = ({ data, handleCloseList, handleClick }: IFilter) => {
  return (
    <>
      <div className="max-h-56 w-full bg-white px-5 py-3 absolute bottom-14 rounded-2xl pr-3">
        <div className="overflow-scroll h-200px">
          <div onClick={handleClick} className="mb-3 text-blue">
            Empty field
          </div>
          {data.map((tag: ITag) => (
            <ListItem
              key={tag._id}
              handleCloseList={handleCloseList}
              name={tag.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
