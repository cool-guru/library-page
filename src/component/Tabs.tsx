"use client";

import React, { useState, useEffect } from "react";
import data from "../data.json"; 
import KpiDetailModal from "./KpiDetailModal";
import RequestAccessModal from "./RequestAccessModal"; 

interface Item {
  name: string;
  description: string;
  date: string;
  restricted?: boolean;
}

const Tabs: React.FC = () => {
  const tabs = ["Featured", "KPI", "Layouts", "Storyboards"];
  const [activeTab, setActiveTab] = useState<string>("Featured");
  const [content, setContent] = useState<any>(data[activeTab as keyof typeof data]);
  const [isKpiModalOpen, setIsKpiModalOpen] = useState<boolean>(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState<boolean>(false);
  const [selectedKpi, setSelectedKpi] = useState<any>(null);

  useEffect(() => {
    setContent(data[activeTab as keyof typeof data]);
  }, [activeTab]);

  const handleKpiClick = (kpi: any) => {
    if (!kpi.restricted && activeTab === 'KPI') {
      setSelectedKpi(kpi);
      setIsKpiModalOpen(true);
    }
  };

  const handleRequestAccess = (kpi: any) => {
    console.log("Request Access Clicked for:", kpi);
    setSelectedKpi(kpi); 
    setIsRequestModalOpen(true); 
  };

  return (
    <>
      <div className="w-full bg-gray-100 rounded-lg shadow-sm p-2 mb-8">
        <div className="flex justify-between space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 flex-1 text-sm font-medium rounded-lg ${
                activeTab === tab
                  ? "bg-white text-gray-900 shadow"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{content.title}</h2>
        <p className="text-sm text-gray-500 mb-6">{content.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {content.items.map((item: Item, index: number) => (
            <div
              key={index}
              className={`p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${
                item.restricted ? "opacity-50" : ""
              }`}
              onClick={() => handleKpiClick(item)}
            >
              <div
                className={`flex items-center gap-4 mb-4 ${
                  item.restricted ? "cursor-pointer" : ""
                }`}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c1.333 0 4 1.333 4 4s-2.667 4-4 4-4-1.333-4-4 2.667-4 4-4z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-md font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">{item.description}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>
              {item.restricted && (
                <button
                    onClick={(e) => {
                    e.stopPropagation(); 
                    handleRequestAccess(item);
                    }}
                    className="px-2 py-1 bg-red-500 text-white text-xs rounded-lg"
                >
                    Request Access
                </button>
                )}
            </div>
          ))}
        </div>
      </div>

      <KpiDetailModal
        isOpen={isKpiModalOpen}
        onClose={() => setIsKpiModalOpen(false)}
        kpi={selectedKpi}
      />

      <RequestAccessModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        onSubmit={(reason) => {
            console.log(`Reason for ${selectedKpi?.name}:`, reason);
            setIsRequestModalOpen(false);
        }}
        kpiName={selectedKpi?.name}
        />
    </>
  );
};

export default Tabs;
