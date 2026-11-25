import React from 'react';
import { 
  Clock, 
  Award, 
  HelpCircle, 
  Image as ImageIcon, 
  Palette, 
  SlidersHorizontal,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SLIDE_TEMPLATES } from '../../data/defaultPresentation';

export default function SlideInspector({
  slide,
  onUpdateSlide,
  isReadOnly = false,
  onRequireLogin = () => {},
}) {
  if (!slide) return null;

  const TIME_OPTIONS = [
    { label: 'Không giới hạn', value: 0 },
    { label: '15 giây', value: 15 },
    { label: '30 giây', value: 30 },
    { label: '45 giây', value: 45 },
    { label: '60 giây', value: 60 },
    { label: '90 giây', value: 90 },
    { label: '2 phút', value: 120 },
  ];

  const POINT_OPTIONS = [
    { label: 'Không tính điểm', value: 0 },
    { label: 'Tiêu chuẩn (1,000 pts)', value: 1000 },
    { label: 'Nhân đôi (2,000 pts)', value: 2000 },
  ];

  const SAMPLE_IMAGES = [
    { name: 'Toán học & Tỷ lệ', url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80' },
    { name: 'Sách & Học tập', url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80' },
    { name: 'Biểu đồ & Thống kê', url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80' },
    { name: 'Khoa học Tự nhiên', url: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600&auto=format&fit=crop&q=80' },
  ];

  return (
    <aside className="w-80 bg-white border-l border-[#e5e5e8] flex flex-col h-full overflow-y-auto select-none flex-shrink-0">
      {/* Header */}
      <div className="p-4 border-b border-[#f1f1f4] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-[#8854c0]" />
          <span className="font-bold text-sm text-[#121212]">Thuộc tính Slide</span>
        </div>
      </div>

      <div
        className="p-4 space-y-6"
        onFocusCapture={(e) => {
          if (isReadOnly && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) {
            e.target.blur();
            onRequireLogin();
          }
        }}
      >
        {/* 1. Slide Type Selector */}
        <div>
          <label className="text-xs font-bold text-[#525252] block mb-2 uppercase tracking-wider">
            Loại Slide
          </label>
          <select
            value={slide.type}
            onChange={(e) => onUpdateSlide({ ...slide, type: e.target.value })}
            className="w-full p-2.5 rounded-xl border border-[#e5e5e8] text-xs font-semibold text-[#121212] bg-[#fafafc] outline-none focus:border-[#8854c0]"
          >
            {SLIDE_TEMPLATES.map((tmpl) => (
              <option key={tmpl.type} value={tmpl.type}>
                {tmpl.name}
              </option>
            ))}
          </select>
        </div>

        {/* 2. Question Controls (Only if question type) */}
        {slide.type !== 'content' && (
          <>
            {/* Time Limit */}
            <div>
              <label className="text-xs font-bold text-[#525252] flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-[#8854c0]" />
                <span>Thời gian đếm ngược</span>
              </label>
              <select
                value={slide.timeLimit !== undefined ? slide.timeLimit : 30}
                onChange={(e) => onUpdateSlide({ ...slide, timeLimit: Number(e.target.value) })}
                className="w-full p-2.5 rounded-xl border border-[#e5e5e8] text-xs font-semibold text-[#121212] bg-[#fafafc] outline-none focus:border-[#8854c0]"
              >
                {TIME_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Points (if not poll) */}
            {slide.type !== 'poll' && (
              <div>
                <label className="text-xs font-bold text-[#525252] flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#00a389]" />
                  <span>Điểm thưởng</span>
                </label>
                <select
                  value={slide.points !== undefined ? slide.points : 1000}
                  onChange={(e) => onUpdateSlide({ ...slide, points: Number(e.target.value) })}
                  className="w-full p-2.5 rounded-xl border border-[#e5e5e8] text-xs font-semibold text-[#121212] bg-[#fafafc] outline-none focus:border-[#8854c0]"
                >
                  {POINT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Answer Explanation */}
            <div>
              <label className="text-xs font-bold text-[#525252] flex items-center gap-1.5 mb-2 uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-[#8854c0]" />
                <span>Giải thích đáp án</span>
              </label>
              <textarea
                rows={4}
                value={slide.explanation || ''}
                onChange={(e) => onUpdateSlide({ ...slide, explanation: e.target.value })}
                placeholder="Giải thích chi tiết vì sao đáp án này đúng để học sinh học hỏi sau khi làm bài..."
                className="w-full p-2.5 rounded-xl border border-[#e5e5e8] text-xs text-[#121212] bg-[#fafafc] outline-none focus:border-[#8854c0] resize-none leading-relaxed"
              />
            </div>
          </>
        )}

        {/* 3. Image URL or Presets for Content Slides */}
        {slide.type === 'content' && (
          <div>
            <label className="text-xs font-bold text-[#525252] flex items-center gap-1.5 mb-2 uppercase tracking-wider">
              <ImageIcon className="w-3.5 h-3.5 text-[#0084bd]" />
              <span>Hình ảnh minh họa slide</span>
            </label>
            <input
              type="text"
              value={slide.imageUrl || ''}
              onChange={(e) => onUpdateSlide({ ...slide, imageUrl: e.target.value })}
              placeholder="Dán link ảnh https://..."
              className="w-full p-2.5 rounded-xl border border-[#e5e5e8] text-xs text-[#121212] bg-[#fafafc] outline-none focus:border-[#8854c0] mb-2"
            />

            {/* Sample Image Presets */}
            <div className="space-y-1.5">
              <span className="text-[10px] text-[#a3a3a3] font-semibold">Chọn nhanh ảnh mẫu:</span>
              <div className="grid grid-cols-2 gap-1.5">
                {SAMPLE_IMAGES.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onUpdateSlide({ ...slide, imageUrl: img.url })}
                    className="p-1.5 rounded-lg border border-[#e5e5e8] text-[10px] text-[#525252] hover:border-[#8854c0] hover:text-[#8854c0] text-left truncate bg-white"
                  >
                    {img.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quick Tips */}
        <div className="p-3.5 rounded-2xl bg-[#faf6fd] border border-[#e8dcf7] text-xs text-[#525252] space-y-1">
          <span className="font-bold text-[#8854c0] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Mẹo thuyết trình
          </span>
          <p className="text-[11px] leading-relaxed">
            Kết hợp 1 slide bài giảng với 1 câu hỏi tương tác ngắn giúp tăng 80% mức độ tập trung và ghi nhớ của học sinh trong giờ học!
          </p>
        </div>
      </div>
    </aside>
  );
}
