"use client";

import React, { useState } from "react";

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reason: string) => void;
  kpiName?: string; 
}

const RequestAccessModal: React.FC<RequestAccessModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  kpiName,
}) => {
  const [reason, setReason] = useState<string>("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold mb-4">
          Request Access for {kpiName || "this KPI"}
        </h3>
        <textarea
          className="w-full border rounded-lg p-3 mb-4"
          rows={4}
          placeholder="Enter your reason..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => {
              onSubmit(reason);
              setReason("");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestAccessModal;
