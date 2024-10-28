import MenuItem from "./MenuItem";

const MenuTopup = ({ datas = [] }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 px-4 py-8">
      {datas?.map((data) => (
        <MenuItem key={data.name} {...data} />
      ))}
    </div>
  );
};

export default MenuTopup;
