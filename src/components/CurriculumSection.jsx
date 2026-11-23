import React from 'react';
import { ChevronRight, BookOpen, Sparkles } from 'lucide-react';
import { CURRICULUMS_BY_SUBJECT } from '../data/mockData';

export default function CurriculumSection({ selectedSubject, onSelectCurriculum }) {
  const curriculums = CURRICULUMS_BY_SUBJECT[selectedSubject] || CURRICULUMS_BY_SUBJECT.mathematics;

  const subjectTitles = {
    mathematics: 'mathematics',
    science: 'science',
    english: 'ELA / language arts',
    social_studies: 'social studies',
  };

  const subjectLabel = subjectTitles[selectedSubject] || selectedSubject;

  return (
    <section className="mb-10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 data-testid="section-title" className="text-lg font-bold text-[#121212] tracking-tight">
            Curriculum-aligned {subjectLabel} resources
          </h2>
          <p className="text-xs text-[#737373] mt-0.5">
            Chương trình truy cập sớm kết thúc vào ngày 31 tháng 12.
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

      {/* Curriculums Grid / Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mt-3">
        {curriculums.map((cur) => (
          <div
            key={cur.id}
            data-testid="browse-resource-card"
            onClick={() => onSelectCurriculum && onSelectCurriculum(cur)}
            className="group flex flex-col justify-between bg-white border border-[#e5e5e8] hover:border-[#8854c0] hover:shadow-md rounded-2xl p-3.5 cursor-pointer transition-all relative overflow-hidden"
          >
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#faf6fd] text-[#8854c0] border border-[#e8dcf7]">
                  {cur.badge}
                </span>
                <span className="text-[10px] font-medium text-[#a3a3a3]">
                  {cur.gradeRange}
                </span>
              </div>

              {/* Title & Publisher */}
              <h3 className="font-bold text-sm text-[#121212] group-hover:text-[#8854c0] transition-colors line-clamp-2">
                {cur.name}
              </h3>
              <p className="text-xs text-[#737373] mt-1 line-clamp-1">
                {cur.publisher}
              </p>
            </div>

            {/* Thumbnail / Visual */}
            <div className="mt-3 w-full h-24 rounded-xl overflow-hidden bg-[#f8f8fa] relative">
              <img
                src={cur.image}
                alt={cur.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                <span className="text-[11px] text-white font-medium flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> Xem giáo trình
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
