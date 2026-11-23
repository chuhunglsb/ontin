import React from 'react';
import { ChevronRight, Award, CheckCircle2, Bookmark, ShieldCheck, GraduationCap, FileCheck } from 'lucide-react';
import { STANDARDS_BY_SUBJECT } from '../data/mockData';

export default function StandardsSection({ selectedSubject, onSelectStandard }) {
  const standards = STANDARDS_BY_SUBJECT[selectedSubject] || STANDARDS_BY_SUBJECT.mathematics;

  const getStandardIcon = (iconName) => {
    switch (iconName) {
      case 'Award': return Award;
      case 'CheckCircle2': return CheckCircle2;
      case 'Bookmark': return Bookmark;
      case 'ShieldCheck': return ShieldCheck;
      case 'GraduationCap': return GraduationCap;
      default: return FileCheck;
    }
  };

  return (
    <section className="mb-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 data-testid="section-title" className="text-lg font-bold text-[#121212] tracking-tight">
            Standards-aligned {selectedSubject} resources
          </h2>
          <p className="text-xs text-[#737373] mt-0.5">
            Các hoạt động và bài tập chuẩn hóa bám sát khung năng lực quốc gia và tiểu bang.
          </p>
        </div>
        <button 
          data-testid="see-all-link"
          className="text-xs font-semibold text-[#8854c0] hover:text-[#733bb2] flex items-center gap-1 group"
        >
          <span>Nhìn thấy tất cả</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Standards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {standards.map((std) => {
          const Icon = getStandardIcon(std.icon);
          return (
            <div
              key={std.id}
              data-testid="browse-resource-card"
              onClick={() => onSelectStandard && onSelectStandard(std)}
              className="group p-4 rounded-2xl bg-white border border-[#e5e5e8] hover:border-[#8854c0] hover:shadow-md cursor-pointer transition-all flex items-start gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#faf6fd] border border-[#e8dcf7] text-[#8854c0] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#f1f1f4] text-[#525252]">
                    {std.code}
                  </span>
                  <span className="text-[11px] font-medium text-[#00a389]">
                    {std.count}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-[#121212] mt-1 group-hover:text-[#8854c0] transition-colors truncate">
                  {std.name}
                </h3>
                <p className="text-xs text-[#737373] mt-0.5 line-clamp-1">
                  {std.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
