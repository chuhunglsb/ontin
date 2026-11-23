import React from 'react';
import { 
  Plus, 
  Presentation, 
  CheckSquare, 
  ListChecks, 
  TextCursorInput, 
  BarChart3, 
  MessageSquareText, 
  Copy, 
  Trash2, 
  ChevronUp, 
  ChevronDown,
  Layers
} from 'lucide-react';
import { SLIDE_TEMPLATES } from '../../data/defaultPresentation';

export default function SlideListSidebar({
  slides,
  currentSlideIndex,
  onSelectSlide,
  onAddSlide,
  onDuplicateSlide,
  onDeleteSlide,
  onMoveSlide,
  showTemplateModal,
  setShowTemplateModal
}) {
  const getSlideIcon = (type) => {
    switch (type) {
      case 'content': return Presentation;
      case 'multiple_choice': return CheckSquare;
      case 'checkbox': return ListChecks;
      case 'fill_blank': return TextCursorInput;
      case 'poll': return BarChart3;
      case 'open_ended': return MessageSquareText;
      default: return Presentation;
    }
  };

  const getSlideTypeBadge = (type) => {
    switch (type) {
      case 'content': return { label: 'Bài giảng', color: 'bg-[#e6f4fa] text-[#0084bd]' };
      case 'multiple_choice': return { label: 'Trắc nghiệm', color: 'bg-[#f3ecfb] text-[#8854c0]' };
      case 'checkbox': return { label: 'Nhiều đáp án', color: 'bg-[#e6f7f4] text-[#00a389]' };
      case 'fill_blank': return { label: 'Điền số/chữ', color: 'bg-[#fff4eb] text-[#fa7533]' };
      case 'poll': return { label: 'Thăm dò', color: 'bg-[#fdeeee] text-[#e42777]' };
      case 'open_ended': return { label: 'Tự luận', color: 'bg-[#eef2ff] text-[#4f46e5]' };
      default: return { label: 'Slide', color: 'bg-[#f1f1f4] text-[#525252]' };
    }
  };

  return (
    <aside className="w-72 bg-white border-r border-[#e5e5e8] flex flex-col h-full select-none flex-shrink-0">
      {/* Sidebar Header */}
      <div className="p-3.5 border-b border-[#f1f1f4] flex items-center justify-between flex-shrink-0 bg-white">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#8854c0]" />
          <span className="font-bold text-sm text-[#121212]">Danh sách Slide</span>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#f1f1f4] text-[#737373]">
          {slides.length} slide
        </span>
      </div>

      {/* Prominent Add Slide Button at TOP (Always visible, never obscured) */}
      <div className="p-3 border-b border-[#f1f1f4] bg-[#fafafc] flex-shrink-0">
        <button
          type="button"
          onClick={() => setShowTemplateModal(true)}
          className="w-full py-2.5 px-3 rounded-xl bg-[#8854c0] hover:bg-[#733bb2] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer hover:shadow-md active:scale-98"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>+ Thêm slide mới</span>
        </button>
      </div>

      {/* Slide Thumbnails Scrollable List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {slides.map((slide, index) => {
          const isSelected = index === currentSlideIndex;
          const Icon = getSlideIcon(slide.type);
          const badge = getSlideTypeBadge(slide.type);

          return (
            <div
              key={slide.id}
              onClick={() => onSelectSlide(index)}
              className={`group relative p-2.5 rounded-2xl border transition-all cursor-pointer ${
                isSelected
                  ? 'border-[#8854c0] bg-[#faf6fd] shadow-sm ring-2 ring-[#8854c0]/20'
                  : 'border-[#e5e5e8] bg-white hover:border-[#8854c0] hover:bg-[#fafafc]'
              }`}
            >
              {/* Header: Slide Number & Type */}
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-bold ${
                    isSelected ? 'bg-[#8854c0] text-white' : 'bg-[#f1f1f4] text-[#737373]'
                  }`}>
                    {index + 1}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${badge.color}`}>
                    {badge.label}
                  </span>
                </div>

                {/* Reorder and Action Tools on Hover */}
                <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => { e.stopPropagation(); onMoveSlide(index, -1); }}
                    disabled={index === 0}
                    className="p-1 text-[#a3a3a3] hover:text-[#121212] disabled:opacity-30 rounded hover:bg-[#f1f1f4]"
                    title="Di chuyển lên"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onMoveSlide(index, 1); }}
                    disabled={index === slides.length - 1}
                    className="p-1 text-[#a3a3a3] hover:text-[#121212] disabled:opacity-30 rounded hover:bg-[#f1f1f4]"
                    title="Di chuyển xuống"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); onDuplicateSlide(index); }}
                    className="p-1 text-[#a3a3a3] hover:text-[#8854c0] rounded hover:bg-[#f1f1f4]"
                    title="Nhân bản slide"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                  {slides.length > 1 && (
                    <button
                      onClick={(e) => { e.stopPropagation(); onDeleteSlide(index); }}
                      className="p-1 text-[#a3a3a3] hover:text-[#ea5455] rounded hover:bg-[#f1f1f4]"
                      title="Xóa slide"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Thumbnail Miniature Preview */}
              <div className="h-16 rounded-xl bg-white border border-[#f1f1f4] p-2 flex flex-col justify-between overflow-hidden shadow-2xs">
                <p className="text-[11px] font-bold text-[#121212] truncate">
                  {slide.title || 'Slide không có tiêu đề'}
                </p>
                <div className="flex items-center justify-between text-[9px] text-[#737373]">
                  <span className="truncate max-w-[130px]">
                    {slide.type === 'content' ? (slide.content || 'Nội dung bài giảng') : (slide.question || 'Nội dung câu hỏi')}
                  </span>
                  {slide.timeLimit > 0 && (
                    <span className="font-semibold text-[#8854c0]">{slide.timeLimit}s</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Slide Button */}
      <div className="p-3 border-t border-[#f1f1f4]">
        <button
          onClick={() => setShowTemplateModal(true)}
          className="w-full py-2.5 px-3 rounded-xl bg-[#8854c0] hover:bg-[#733bb2] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Thêm slide mới</span>
        </button>
      </div>

      {/* Template Selection Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-150">
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#e5e5e8] animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#f1f1f4]">
              <div>
                <h3 className="font-bold text-base text-[#121212]">Chọn loại Slide cần tạo</h3>
                <p className="text-xs text-[#737373] mt-0.5">Thêm slide nội dung bài học hoặc câu hỏi tương tác cho học sinh</p>
              </div>
              <button
                onClick={() => setShowTemplateModal(false)}
                className="text-[#a3a3a3] hover:text-[#121212] text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2.5 max-h-96 overflow-y-auto">
              {SLIDE_TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.type}
                  onClick={() => {
                    onAddSlide(tmpl.type);
                    setShowTemplateModal(false);
                  }}
                  className="flex items-start gap-3.5 p-3 rounded-2xl border border-[#e5e5e8] hover:border-[#8854c0] hover:bg-[#faf6fd] text-left transition-all group"
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: tmpl.color }}
                  >
                    <Plus className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#121212] group-hover:text-[#8854c0]">
                      {tmpl.name}
                    </h4>
                    <p className="text-xs text-[#737373] mt-0.5">
                      {tmpl.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
