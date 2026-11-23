import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Sparkles, 
  CheckSquare, 
  Presentation, 
  Video, 
  FileText, 
  Layers, 
  Filter,
  Check
} from 'lucide-react';
import { SUBJECTS, GRADES, RESOURCE_TYPES } from '../data/mockData';

export default function BrowseFilterSection({
  selectedSubject,
  setSelectedSubject,
  selectedGrade,
  setSelectedGrade,
  activeTypeTab,
  setActiveTypeTab,
}) {
  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
  const [gradeDropdownOpen, setGradeDropdownOpen] = useState(false);

  const subjectRef = useRef(null);
  const gradeRef = useRef(null);

  // Close popovers on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (subjectRef.current && !subjectRef.current.contains(e.target)) {
        setSubjectDropdownOpen(false);
      }
      if (gradeRef.current && !gradeRef.current.contains(e.target)) {
        setGradeDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentSubjectObj = SUBJECTS.find(s => s.id === selectedSubject) || SUBJECTS[0];
  const currentGradeObj = GRADES.find(g => g.id === selectedGrade) || GRADES[6]; // Lớp 6

  const getTabIcon = (id) => {
    switch (id) {
      case 'all': return Sparkles;
      case 'quiz': return CheckSquare;
      case 'lesson': return Presentation;
      case 'video': return Video;
      case 'passage': return FileText;
      case 'flashcards': return Layers;
      default: return Sparkles;
    }
  };

  return (
    <div className="mb-8" data-testid="browse-section">
      {/* Top Filter Controls: "Duyệt tài nguyên cho [Môn học] [Lớp]" */}
      <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-[#e5e5e8]">
        <h2 
          data-testid="browse-heading" 
          className="text-[#737373] text-lg font-semibold whitespace-nowrap"
        >
          Duyệt tài nguyên cho
        </h2>

        {/* Subject Selector */}
        <div className="relative" ref={subjectRef}>
          <div
            data-testid="subject-selector"
            onClick={() => setSubjectDropdownOpen(!subjectDropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl cursor-pointer hover:bg-[#121212]/5 active:bg-[#121212]/10 transition-colors border-b-2 border-[#8854c0]"
          >
            <h2 className="text-[#121212] text-lg font-bold whitespace-nowrap">
              {currentSubjectObj.name}
            </h2>
            <ChevronDown className="w-4 h-4 text-[#737373]" />
          </div>

          {/* Subject Dropdown Menu */}
          {subjectDropdownOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl border border-[#e5e5e8] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
              <div className="px-3 py-2 text-xs font-bold text-[#737373] uppercase tracking-wider border-b border-[#f1f1f4] mb-1">
                Chọn môn học
              </div>
              <div className="max-h-72 overflow-y-auto space-y-0.5">
                {SUBJECTS.map((sub) => {
                  const isSelected = sub.id === selectedSubject;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setSelectedSubject(sub.id);
                        setSubjectDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                        isSelected
                          ? 'bg-[#f3ecfb] text-[#8854c0] font-semibold'
                          : 'text-[#525252] hover:bg-[#f8f8fa]'
                      }`}
                    >
                      <span>{sub.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#8854c0]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Grade Selector */}
        <div className="relative" ref={gradeRef}>
          <div
            data-testid="grade-selector"
            onClick={() => setGradeDropdownOpen(!gradeDropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl cursor-pointer hover:bg-[#121212]/5 active:bg-[#121212]/10 transition-colors border-b-2 border-[#8854c0]"
          >
            <h2 className="text-[#121212] text-lg font-bold whitespace-nowrap">
              {currentGradeObj.name}
            </h2>
            <ChevronDown className="w-4 h-4 text-[#737373]" />
          </div>

          {/* Grade Dropdown Menu */}
          {gradeDropdownOpen && (
            <div className="absolute left-0 mt-2 w-52 bg-white rounded-2xl border border-[#e5e5e8] shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
              <div className="px-3 py-2 text-xs font-bold text-[#737373] uppercase tracking-wider border-b border-[#f1f1f4] mb-1">
                Chọn khối lớp
              </div>
              <div className="max-h-72 overflow-y-auto space-y-0.5">
                {GRADES.map((grd) => {
                  const isSelected = grd.id === selectedGrade;
                  return (
                    <button
                      key={grd.id}
                      onClick={() => {
                        setSelectedGrade(grd.id);
                        setGradeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                        isSelected
                          ? 'bg-[#f3ecfb] text-[#8854c0] font-semibold'
                          : 'text-[#525252] hover:bg-[#f8f8fa]'
                      }`}
                    >
                      <span>{grd.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#8854c0]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Resource Type Filter Pills / Tabs */}
      <div className="flex items-center gap-2 mt-4 overflow-x-auto no-scrollbar pb-1">
        {RESOURCE_TYPES.map((type) => {
          const Icon = getTabIcon(type.id);
          const isActive = activeTypeTab === type.id;
          return (
            <button
              key={type.id}
              onClick={() => setActiveTypeTab(type.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#121212] text-white shadow-sm'
                  : 'bg-white text-[#525252] border border-[#e5e5e8] hover:border-[#a3a3a3] hover:text-[#121212]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#f3ecfb]' : 'text-[#737373]'}`} />
              <span>{type.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
