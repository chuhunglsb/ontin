import React from 'react';
import { PlusCircle, Search, UploadCloud, Sparkles } from 'lucide-react';

export default function QuickActionTabs({ onSelectTab, activeActionTab }) {
  const tabs = [
    {
      id: 'create',
      title: 'Tạo mới',
      subtitle: 'một nguồn lực',
      icon: PlusCircle,
      gradient: 'from-[#8854c0] to-[#aa3bff]',
      badge: 'Quiz & Bài giảng',
      testId: 'tab-create'
    },
    {
      id: 'search',
      title: 'Tìm kiếm',
      subtitle: 'để có nguồn lực',
      icon: Search,
      gradient: 'from-[#00a389] to-[#05b89c]',
      badge: '+30 triệu bài tập',
      testId: 'tab-search'
    },
    {
      id: 'upload',
      title: 'Tải lên',
      subtitle: 'và nâng cao nội dung của bạn',
      icon: UploadCloud,
      gradient: 'from-[#0084bd] to-[#129be0]',
      badge: 'AI Enhancer',
      testId: 'tab-upload'
    },
  ];

  return (
    <div className="mb-8" data-testid="explore-tabs">
      {/* Greeting Title */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#121212] tracking-tight flex items-center gap-2">
          <span>Xin chào, ở đó 👋</span>
        </h1>
        <p className="text-sm text-[#737373] mt-0.5">
          Hãy bắt đầu nào — Tạo, khám phá hoặc nâng cao bài học dành riêng cho học sinh của bạn.
        </p>
      </div>

      {/* 3 Main Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeActionTab === tab.id;
          return (
            <div
              key={tab.id}
              data-testid={tab.testId}
              onClick={() => onSelectTab(tab.id)}
              className={`group p-4 rounded-2xl bg-white border cursor-pointer transition-all hover:shadow-md relative overflow-hidden flex items-center justify-between ${
                isSelected 
                  ? 'border-[#8854c0] ring-2 ring-[#8854c0]/20' 
                  : 'border-[#e5e5e8] hover:border-[#8854c0]'
              }`}
            >
              <div className="flex items-center gap-3.5 z-10">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${tab.gradient} flex items-center justify-center text-white shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-[#121212] text-sm group-hover:text-[#8854c0] transition-colors">
                      {tab.title}
                    </h3>
                    <span className="text-[10px] font-semibold bg-[#f1f1f4] text-[#737373] px-1.5 py-0.5 rounded">
                      {tab.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#737373] mt-0.5">{tab.subtitle}</p>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#faf6fd] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
