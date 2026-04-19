import AddLifeItemButton from "../components/AddLifeItemButton";
import LifeItemList from "../components/LifeItemList";
import MyLifeHeader from "../components/MyLifeHeader";

const MyLife = () => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <MyLifeHeader />
      <div className="flex flex-col gap-4 ">
        <AddLifeItemButton />
        <LifeItemList />
      </div>
    </div>
  );
};

export default MyLife;
