import InfoModal from "../ui/InfoModal";

type Props = { onClose: () => void };

const HomeInfoModal = ({ onClose }: Props) => {
  return (
    <InfoModal onClose={onClose}>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-sm text-dark">1. Set your salary</p>
        <p className="text-sm text-muted">Enter your monthly salary and hourly rate so the app can calculate in real terms.</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-sm text-dark">2. Check a price</p>
        <p className="text-sm text-muted">Enter any price and hit Calculate to see what it really costs you.</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-sm text-dark">3. See the real cost</p>
        <p className="text-sm text-muted">Hours worked, percentage of your month, and how it compares to things in your life.</p>
      </div>
    </InfoModal>
  );
};

export default HomeInfoModal;
