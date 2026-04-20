import InfoModal from "../ui/InfoModal";

type Props = { onClose: () => void };

const GoalInfoModal = ({ onClose }: Props) => {
  return (
    <InfoModal onClose={onClose}>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-sm text-dark">1. Set your goal</p>
        <p className="text-sm text-muted">Enter the price of something you want to save up for.</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-sm text-dark">2. Adjust the slider</p>
        <p className="text-sm text-muted">Choose what percentage of your monthly salary you can set aside.</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-sm text-dark">3. Compare scenarios</p>
        <p className="text-sm text-muted">See how saving 10%, 20%, or 30% changes how fast you get there.</p>
      </div>
    </InfoModal>
  );
};

export default GoalInfoModal;
