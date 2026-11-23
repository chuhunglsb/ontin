import React, { useState } from 'react';
import { 
  X, 
  BookOpen, 
  Search, 
  GraduationCap, 
  Play, 
  Layers, 
  Sparkles, 
  CheckCircle2,
  FolderOpen,
  Filter
} from 'lucide-react';
import { LESSONS_BY_GRADE, ALL_LESSONS } from '../../data/defaultPresentation';

export default function LessonLibraryModal({
  currentLessonId,
  onSelectLesson,
  onClose,
}) {
  const [selectedGradeTab, setSelectedGradeTab] = useState('all'); // 'all' | 'Lớp 3' | 'Lớp 4' | 'Lớp 5'
  const [searchKeyword, setSearchKeyword] = useState('');

  const GRADE_TABS = [
    { id: 'all', label: 'Tất cả bài học (Lớp 3 - 4 - 5)' },
    { id: 'Lớp 3', label: 'Tin học Lớp 3' },
    { id: 'Lớp 4', label: 'Tin học Lớp 4' },
    { id: 'Lớp 5', label: 'Tin học Lớp 5' },
  ];

  // Filter lessons
  const filteredLessons = ALL_LESSONS.filter((item) => {
    const matchesGrade = selectedGradeTab === 'all' || item.grade === selectedGradeTab;
    const matchesKeyword = !searchKeyword.trim() || 
      item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.topic.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.description.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesGrade && matchesKeyword;
  });

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200 select-none">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-[#e5e5e8] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#f1f1f4] flex items-center justify-between bg-[#fafafc]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0084bd] to-[#2c9cda] flex items-center justify-center text-white shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-extrabold text-[#121212]">
                  Thư Viện Bài Giảng Tin Học Tiểu Học
                </h2>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#e6f4fa] text-[#0084bd] border border-[#bae3f5]">
                  Bộ sách Kết nối tri thức với cuộc sống
                </span>
              </div>
              <p className="text-xs text-[#737373] mt-0.5">
                Nhà xuất bản Giáo dục Việt Nam • Đầy đủ nội dung bài giảng & câu hỏi tương tác Lớp 3, 4, 5
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#a3a3a3] hover:text-[#121212] hover:bg-[#f1f1f4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="px-6 py-3.5 bg-white border-b border-[#e5e5e8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Grade Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {GRADE_TABS.map((tab) => {
              const isActive = selectedGradeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedGradeTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#0084bd] text-white shadow-2xs'
                      : 'bg-[#f1f1f4] text-[#525252] hover:bg-[#e5e5e8]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#a3a3a3] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Tìm bài học (chuột, phím, Scratch, thư mục...)"
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-[#e5e5e8] text-xs outline-none focus:border-[#0084bd] bg-[#fafafc]"
            />
          </div>
        </div>

        {/* Lessons List Grid */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#f8f8fa] space-y-3">
          {filteredLessons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredLessons.map((item) => {
                const isCurrent = item.id === currentLessonId;
                const questionCount = item.slides.filter(s => s.type !== 'content').length;
                const contentCount = item.slides.filter(s => s.type === 'content').length;

                return (
                  <div
                    key={item.id}
                    onClick={() => onSelectLesson(item)}
                    className={`p-4 rounded-2xl bg-white border cursor-pointer transition-all hover:shadow-md flex flex-col justify-between group ${
                      isCurrent
                        ? 'border-[#0084bd] ring-2 ring-[#0084bd]/20 shadow-sm'
                        : 'border-[#e5e5e8] hover:border-[#0084bd]'
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#f1f1f4] text-[#525252]">
                          {item.grade}
                        </span>
                        <span className="text-[10px] font-semibold text-[#0084bd] truncate max-w-[200px]">
                          {item.topic}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-extrabold text-sm text-[#121212] group-hover:text-[#0084bd] transition-colors line-clamp-1">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#737373] mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer Meta & Open Button */}
                    <div className="mt-4 pt-3 border-t border-[#f1f1f4] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-[#737373] text-[11px]">
                        <span>{item.slides.length} slides</span>
                        <span>•</span>
                        <span className="text-[#8854c0] font-semibold">{questionCount} câu hỏi tương tác</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectLesson(item);
                        }}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs transition-colors shadow-2xs ${
                          isCurrent
                            ? 'bg-[#e6f7f4] text-[#00a389]'
                            : 'bg-[#0084bd] hover:bg-[#0073a8] text-white'
                        }`}
                      >
                        {isCurrent ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Đang mở</span>
                          </>
                        ) : (
                          <>
                            <FolderOpen className="w-3.5 h-3.5" />
                            <span>Mở bài này</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-2xl border border-[#e5e5e8]">
              <p className="text-sm font-bold text-[#121212]">Không tìm thấy bài học nào phù hợp</p>
              <p className="text-xs text-[#737373] mt-1">Hãy thử tìm với từ khóa khác như "chuột", "bàn phím", "Scratch", "Paint", "thư mục"...</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#f1f1f4] bg-white flex items-center justify-between text-xs text-[#737373]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#0084bd]" /> Đầy đủ {ALL_LESSONS.length} bài học chuẩn khung chương trình Tin học Tiểu học mới
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#525252] hover:bg-[#f1f1f4] transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
