"use client";

import React from "react";

interface KpiDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  kpi: {
    name: string;
    description: string;
    tags?: string[];
    stats: {
      used: number;
      type: string;
      pages: number;
      lastUpdated: string;
    };
    questions: { question: string; description: string }[];
    additionalContent?: string; 
  } | null; 
}

const KpiDetailModal: React.FC<KpiDetailModalProps> = ({ isOpen, onClose, kpi }) => {
  if (!isOpen || !kpi) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c1.333 0 4 1.333 4 4s-2.667 4-4 4-4-1.333-4-4 2.667-4 4-4z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">{kpi.name}</h2>
          <p className="text-sm text-gray-500 mb-4">{kpi.description}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {kpi.tags &&
              kpi.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-700"
                >
                  #{tag}
                </span>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-4 text-center gap-4 mb-6">
          <div>
            <p className="text-lg font-bold">{kpi.stats.used}</p>
            <p className="text-xs text-gray-500">Used</p>
          </div>
          <div>
            <p className="text-lg font-bold">{kpi.stats.type}</p>
            <p className="text-xs text-gray-500">Type</p>
          </div>
          <div>
            <p className="text-lg font-bold">{kpi.stats.pages}</p>
            <p className="text-xs text-gray-500">Pages No.</p>
          </div>
          <div>
            <p className="text-lg font-bold">{kpi.stats.lastUpdated}</p>
            <p className="text-xs text-gray-500">Last Updated</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          {kpi.additionalContent ? (
            <p className="text-sm text-gray-500">{kpi.additionalContent}</p>
          ) : (
            <p className="text-sm text-gray-400 italic">No additional information available.</p>
          )}
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Business Questions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {kpi.questions.map((q, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg"
              >
                <h4 className="text-sm font-semibold">{q.question}</h4>
                <p className="text-xs text-gray-500">{q.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900">
            ☆ Favorite item
          </button>
        </div>
      </div>
    </div>
  );
};

export default KpiDetailModal;
