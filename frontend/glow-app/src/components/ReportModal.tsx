import React, { useEffect, useState } from "react";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
  userName: string;
}

export default function ReportModal({
  isOpen,
  onClose,
  onConfirm,
  userName,
}: ReportModalProps) {
  const [selectedReason, setSelectedReason] = useState<string>("");

  const reportReasons = [
    "Profile is fake, spam, or scammer",
    "Inappropriate content",
    "Underage or minor",
    "Someone is in danger",
  ];

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleConfirm = () => {
    if (selectedReason) {
      onConfirm(selectedReason);
    }
  };

  const handleClose = () => {
    setSelectedReason("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 overflow-hidden cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Report {userName}?
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Please select a reason for reporting this user:
          </p>

          {/* Report Reasons */}
          <div className="space-y-3 mb-6">
            {reportReasons.map((reason) => (
              <label
                key={reason}
                className={`flex items-center px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors ${
                  selectedReason === reason
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="reportReason"
                  value={reason}
                  checked={selectedReason === reason}
                  onChange={(e) => setSelectedReason(e.target.value)}
                  className="form-radio text-red-600 mr-3"
                />
                <span className="text-sm text-gray-700">{reason}</span>
              </label>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleClose}
              className="flex-1 py-3 px-4 rounded-lg border-2 border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={!selectedReason}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedReason
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
