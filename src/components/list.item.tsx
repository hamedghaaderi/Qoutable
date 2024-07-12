interface IListItem {
  name: string;
  handleCloseList: (e: any) => void;
}

const ListItem = ({ name, handleCloseList }: IListItem) => {
  return (
    <>
      <div className="last:mb-0 my-3 text-blue" onClick={handleCloseList}>
        {name}
      </div>
    </>
  );
};

export default ListItem;
