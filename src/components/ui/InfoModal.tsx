import { X } from "lucide-react";

type Props = { onClose: () => void; children: React.ReactNode };

const InfoModal = ({ onClose, children }: Props) => {
  return (
    <div className="fixed inset-0 bg-dark/60 flex items-end z-50" onClick={onClose}>
      <div className="bg-card w-full rounded-t-2xl p-6 flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h2 className="font-black text-lg text-dark">How this works</h2>
          <button onClick={onClose} className="text-muted">
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
