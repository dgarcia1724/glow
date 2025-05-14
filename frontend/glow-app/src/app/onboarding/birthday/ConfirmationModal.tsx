import { useEffect } from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  age: string;
  formattedDate: string;
  onEdit: () => void;
  onConfirm: () => void;
}

export default function ConfirmationModal({
  isOpen,
  age,
  formattedDate,
  onEdit,
  onConfirm,
}: ConfirmationModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEdit();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onEdit]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-sm cursor-default"
      onClick={onEdit}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-[90%] max-w-sm p-6 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-extrabold text-black mb-4 text-center">
          Please confirm your info
        </h2>
        <div className="text-gray-800 text-base mb-2 text-center">{age}</div>
        <div className="text-gray-600 text-base mb-6 text-center">
          {formattedDate}
        </div>
        <div className="flex w-full border-t pt-4 gap-2">
          <button
            className="flex-1 py-2 rounded-lg text-base font-medium border border-transparent hover:bg-gray-100 transition-colors text-gray-800 cursor-pointer"
            onClick={onEdit}
          >
            Edit
          </button>
          <button
            className="flex-1 py-2 rounded-lg text-base font-medium text-gray-800 hover:bg-violet-50 transition-colors cursor-pointer"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
