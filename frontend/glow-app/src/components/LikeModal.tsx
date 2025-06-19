import React, { useEffect, useState } from "react";

interface LikeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (type: "like" | "superlike", comment: string) => void;
  likeType: "like" | "superlike";
  userName: string;
}

export default function LikeModal({
  isOpen,
  onClose,
  onSend,
  likeType,
  userName,
}: LikeModalProps) {
  const [comment, setComment] = useState("");

  // Reset comment when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setComment("");
    }
  }, [isOpen]);

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

  const handleSend = () => {
    onSend(likeType, comment);
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 overflow-hidden cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {likeType === "superlike"
                ? `Send spark to ${userName}`
                : `Send like to ${userName}`}
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4">
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Add a comment (optional)
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Say something nice..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fuchsia-200 focus:border-fuchsia-300 resize-none text-gray-900"
              rows={4}
              maxLength={150}
            />
            <div className="text-xs text-gray-500 text-right">
              {comment.length}/150
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 pt-0 flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 py-3 px-4 rounded-lg border-2 border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-tr from-fuchsia-400 via-fuchsia-300 to-fuchsia-500 text-black font-medium hover:from-fuchsia-500 hover:via-fuchsia-400 hover:to-fuchsia-600 transition-all shadow-lg cursor-pointer"
          >
            {likeType === "superlike" ? "Send spark" : "Send like"}
          </button>
        </div>
      </div>
    </div>
  );
}
