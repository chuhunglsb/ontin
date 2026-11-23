import React from 'react';
import { 
  Clock, 
  Award, 
  HelpCircle, 
  Check, 
  Image as ImageIcon, 
  Sparkles,
  CheckCircle2,
  ListPlus,
  Trash2
} from 'lucide-react';

export default function SlideCanvas({
  slide,
  slideIndex,
  totalSlides,
  onUpdateSlide,
}) {
  if (!slide) return null;

  const handleTitleChange = (val) => {
    onUpdateSlide({ ...slide, title: val });
  };

  const handleContentChange = (val) => {
    onUpdateSlide({ ...slide, content: val });
  };

  const handleQuestionChange = (val) => {
    onUpdateSlide({ ...slide, question: val });
  };

  const handleOptionChange = (idx, val) => {
    const newOptions = [...(slide.options || [])];
    newOptions[idx] = val;
    onUpdateSlide({ ...slide, options: newOptions });
  };

  const handleSetCorrectIndex = (idx) => {
    onUpdateSlide({ ...slide, correctIndex: idx });
  };

  const handleToggleCorrectIndices = (idx) => {
    const current = slide.correctIndices || [];
    let updated;
    if (current.includes(idx)) {
      updated = current.filter(i => i !== idx);
    } else {
      updated = [...current, idx];
    }
    onUpdateSlide({ ...slide, correctIndices: updated });
  };

  const handleAddOption = () => {
    if ((slide.options || []).length < 6) {
      onUpdateSlide({
        ...slide,
        options: [...(slide.options || []), `Phương án ${(slide.options || []).length + 1}`]
      });
    }
  };

  const handleRemoveOption = (idx) => {
    if ((slide.options || []).length > 2) {
      const newOptions = (slide.options || []).filter((_, i) => i !== idx);
      let newCorrectIndex = slide.correctIndex;
      if (newCorrectIndex === idx) newCorrectIndex = 0;
      else if (newCorrectIndex > idx) newCorrectIndex -= 1;

      onUpdateSlide({
        ...slide,
        options: newOptions,
        correctIndex: newCorrectIndex
      });
    }
  };

  const OPTION_COLORS = [
    { bg: 'bg-[#ff5964]', text: 'text-white', letter: 'A' },
    { bg: 'bg-[#2ec4b6]', text: 'text-white', letter: 'B' },
    { bg: 'bg-[#ff9f1c]', text: 'text-white', letter: 'C' },
    { bg: 'bg-[#3a86ff]', text: 'text-white', letter: 'D' },
    { bg: 'bg-[#8338ec]', text: 'text-white', letter: 'E' },
    { bg: 'bg-[#06d6a0]', text: 'text-white', letter: 'F' },
  ];

  return (
    <div className="flex-1 bg-[#f1f1f4] p-6 flex flex-col items-center justify-center overflow-y-auto">
      {/* 16:9 Presentation Canvas Aspect Ratio Container */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border border-[#e5e5e8] overflow-hidden flex flex-col aspect-[16/9] min-h-[500px] relative transition-all">
        
        {/* Slide Top Meta Bar */}
        <div className="px-6 py-3 border-b border-[#f1f1f4] flex items-center justify-between bg-[#fafafc] text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#8854c0] bg-[#f3ecfb] px-2.5 py-1 rounded-md uppercase tracking-wider text-[11px]">
              Slide {slideIndex + 1} / {totalSlides}
            </span>
            <span className="text-[#a3a3a3]">•</span>
            <span className="text-[#737373] font-medium">
              {slide.type === 'content' ? 'Slide Giảng Bài' : 'Slide Câu Hỏi Tương Tác'}
            </span>
          </div>

          {slide.type !== 'content' && (
            <div className="flex items-center gap-3 text-xs">
              {slide.timeLimit > 0 && (
                <div className="flex items-center gap-1 font-semibold text-[#8854c0] bg-white px-2 py-0.5 rounded-md border border-[#e8dcf7]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{slide.timeLimit}s</span>
                </div>
              )}
              {slide.points && (
                <div className="flex items-center gap-1 font-semibold text-[#00a389] bg-white px-2 py-0.5 rounded-md border border-[#c6f0e7]">
                  <Award className="w-3.5 h-3.5" />
                  <span>{slide.points} điểm</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Slide Main Body Area */}
        <div className="p-8 flex-1 flex flex-col justify-between overflow-y-auto">
          {/* SLIDE TYPE: CONTENT */}
          {slide.type === 'content' && (
            <div className="space-y-6 flex-1 flex flex-col">
              {/* Editable Slide Title */}
              <div>
                <input
                  type="text"
                  value={slide.title || ''}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Nhập tiêu đề slide bài giảng tại đây..."
                  className="w-full text-2xl md:text-3xl font-extrabold text-[#121212] tracking-tight outline-none border-b border-transparent hover:border-[#e5e5e8] focus:border-[#8854c0] transition-colors pb-1 bg-transparent"
                />
              </div>

              {/* Layout Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-center">
                <div className="space-y-4">
                  <textarea
                    rows={6}
                    value={slide.content || ''}
                    onChange={(e) => handleContentChange(e.target.value)}
                    placeholder="Nhập nội dung bài học, định nghĩa, các ý chính hoặc công thức toán..."
                    className="w-full text-sm md:text-base leading-relaxed text-[#525252] outline-none border border-transparent hover:border-[#e5e5e8] focus:border-[#8854c0] rounded-xl p-3 bg-transparent resize-none transition-colors"
                  />
                  {slide.contentRight && (
                    <div className="p-3 rounded-xl bg-[#faf6fd] border border-[#e8dcf7] text-xs text-[#525252]">
                      <span className="font-bold text-[#8854c0]">Mở rộng: </span>
                      {slide.contentRight}
                    </div>
                  )}
                </div>

                {/* Right side: Illustration Image or Callout */}
                <div className="h-full min-h-[200px] rounded-2xl overflow-hidden bg-[#f8f8fa] border border-[#e5e5e8] relative group flex items-center justify-center">
                  {slide.imageUrl ? (
                    <img
                      src={slide.imageUrl}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-6 text-[#a3a3a3]">
                      <ImageIcon className="w-10 h-10 mx-auto mb-2 text-[#d4d4d8]" />
                      <p className="text-xs">Chưa có hình ảnh minh họa cho slide này</p>
                    </div>
                  )}
                  {slide.caption && (
                    <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-xs text-white text-[11px] p-2 text-center">
                      {slide.caption}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* SLIDE TYPE: MULTIPLE CHOICE */}
          {slide.type === 'multiple_choice' && (
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              {/* Question Input */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8854c0] mb-1 block">
                  Câu hỏi trắc nghiệm (Chọn 1 đáp án đúng)
                </span>
                <textarea
                  rows={2}
                  value={slide.question || ''}
                  onChange={(e) => handleQuestionChange(e.target.value)}
                  placeholder="Nhập câu hỏi trắc nghiệm của bạn tại đây..."
                  className="w-full text-xl md:text-2xl font-bold text-[#121212] outline-none border-b border-transparent hover:border-[#e5e5e8] focus:border-[#8854c0] pb-1 bg-transparent resize-none"
                />
              </div>

              {/* Interactive Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {(slide.options || []).map((opt, optIdx) => {
                  const isCorrect = slide.correctIndex === optIdx;
                  const color = OPTION_COLORS[optIdx % OPTION_COLORS.length];

                  return (
                    <div
                      key={optIdx}
                      className={`relative flex items-center p-3 rounded-2xl border-2 transition-all group ${
                        isCorrect
                          ? 'border-[#00a389] bg-[#e6f7f4]/40 shadow-sm'
                          : 'border-[#e5e5e8] bg-white hover:border-[#8854c0]'
                      }`}
                    >
                      {/* Letter Badge (A, B, C, D) */}
                      <div className={`w-8 h-8 rounded-xl ${color.bg} ${color.text} font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-2xs`}>
                        {color.letter}
                      </div>

                      {/* Option Text Input */}
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => handleOptionChange(optIdx, e.target.value)}
                        placeholder={`Phương án ${color.letter}...`}
                        className="flex-1 px-3 text-sm font-medium text-[#121212] bg-transparent outline-none"
                      />

                      {/* Correct Answer Selector Toggle */}
                      <button
                        onClick={() => handleSetCorrectIndex(optIdx)}
                        className={`p-1.5 rounded-full transition-all flex items-center justify-center ${
                          isCorrect
                            ? 'bg-[#00a389] text-white shadow-xs'
                            : 'bg-[#f1f1f4] text-[#a3a3a3] hover:text-[#00a389] hover:bg-[#c6f0e7]'
                        }`}
                        title={isCorrect ? 'Đáp án đúng' : 'Đánh dấu đây là đáp án đúng'}
                      >
                        <Check className="w-4 h-4 stroke-[3]" />
                      </button>

                      {/* Delete Option (if > 2) */}
                      {(slide.options || []).length > 2 && (
                        <button
                          onClick={() => handleRemoveOption(optIdx)}
                          className="opacity-0 group-hover:opacity-100 p-1 text-[#a3a3a3] hover:text-[#ea5455] ml-1 transition-opacity"
                          title="Xóa phương án này"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Add Option Button & Hint */}
              <div className="flex items-center justify-between text-xs pt-2">
                <span className="text-[#737373]">
                  💡 Tích dấu xanh vào ô tròn để chọn đáp án chính xác
                </span>
                {(slide.options || []).length < 6 && (
                  <button
                    onClick={handleAddOption}
                    className="flex items-center gap-1 text-[#8854c0] hover:text-[#733bb2] font-semibold"
                  >
                    <ListPlus className="w-4 h-4" />
                    <span>Thêm phương án</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* SLIDE TYPE: CHECKBOX (MULTI-SELECT) */}
          {slide.type === 'checkbox' && (
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00a389] mb-1 block">
                  Câu hỏi chọn nhiều đáp án đúng (Checkboxes)
                </span>
                <textarea
                  rows={2}
                  value={slide.question || ''}
                  onChange={(e) => handleQuestionChange(e.target.value)}
                  placeholder="Nhập câu hỏi của bạn tại đây..."
                  className="w-full text-xl md:text-2xl font-bold text-[#121212] outline-none border-b border-transparent hover:border-[#e5e5e8] focus:border-[#8854c0] pb-1 bg-transparent resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {(slide.options || []).map((opt, optIdx) => {
                  const isChecked = (slide.correctIndices || []).includes(optIdx);
                  const color = OPTION_COLORS[optIdx % OPTION_COLORS.length];

                  return (
                    <div
                      key={optIdx}
                      className={`relative flex items-center p-3 rounded-2xl border-2 transition-all ${
                        isChecked
                          ? 'border-[#00a389] bg-[#e6f7f4]/40 shadow-sm'
                          : 'border-[#e5e5e8] bg-white hover:border-[#8854c0]'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-xl ${color.bg} ${color.text} font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-2xs`}>
                        {color.letter}
                      </div>

                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => handleOptionChange(optIdx, e.target.value)}
                        placeholder={`Phương án ${color.letter}...`}
                        className="flex-1 px-3 text-sm font-medium text-[#121212] bg-transparent outline-none"
                      />

                      <button
                        onClick={() => handleToggleCorrectIndices(optIdx)}
                        className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${
                          isChecked
                            ? 'bg-[#00a389] border-[#00a389] text-white'
                            : 'border-[#d4d4d8] hover:border-[#00a389]'
                        }`}
                        title="Tích chọn đáp án đúng"
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-xs pt-2 text-[#737373]">
                <span>Tích chọn tất cả các phương án đúng cho câu hỏi này.</span>
                {(slide.options || []).length < 6 && (
                  <button
                    onClick={handleAddOption}
                    className="flex items-center gap-1 text-[#8854c0] hover:text-[#733bb2] font-semibold"
                  >
                    <ListPlus className="w-4 h-4" />
                    <span>Thêm phương án</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* SLIDE TYPE: FILL IN THE BLANK */}
          {slide.type === 'fill_blank' && (
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#fa7533] mb-1 block">
                  Câu hỏi điền vào chỗ trống
                </span>
                <textarea
                  rows={2}
                  value={slide.question || ''}
                  onChange={(e) => handleQuestionChange(e.target.value)}
                  placeholder="Nhập câu hỏi điền từ hoặc số tại đây..."
                  className="w-full text-xl md:text-2xl font-bold text-[#121212] outline-none border-b border-transparent hover:border-[#e5e5e8] focus:border-[#fa7533] pb-1 bg-transparent resize-none"
                />
              </div>

              <div className="p-6 rounded-2xl bg-[#fffaf5] border border-[#ffd8b8] space-y-4">
                <label className="text-xs font-bold text-[#121212] block">
                  Các đáp án được chấp nhận (Acceptable answers):
                </label>
                <input
                  type="text"
                  value={(slide.acceptableAnswers || []).join(' ; ')}
                  onChange={(e) => {
                    const answers = e.target.value.split(';').map(s => s.trim()).filter(Boolean);
                    onUpdateSlide({ ...slide, acceptableAnswers: answers });
                  }}
                  placeholder="Nhập các đáp án cách nhau bằng dấu chấm phẩy (VD: 5 ; x=5 ; x = 5)"
                  className="w-full p-3 rounded-xl border border-[#ffd8b8] bg-white text-sm font-semibold text-[#121212] outline-none focus:border-[#fa7533]"
                />
                <p className="text-[11px] text-[#737373]">
                  Hệ thống sẽ tự động đối chiếu câu trả lời của học sinh với danh sách đáp án trên để chấm điểm.
                </p>
              </div>

              <div className="text-xs text-[#737373]">
                💡 Học sinh sẽ thấy một ô nhập câu trả lời trực tiếp trên thiết bị của mình.
              </div>
            </div>
          )}

          {/* SLIDE TYPE: POLL / SURVEY */}
          {slide.type === 'poll' && (
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#e42777] mb-1 block">
                  Thăm dò ý kiến / Khảo sát (Không tính điểm)
                </span>
                <textarea
                  rows={2}
                  value={slide.question || ''}
                  onChange={(e) => handleQuestionChange(e.target.value)}
                  placeholder="Nhập câu hỏi thăm dò ý kiến hoặc cảm nhận của học sinh..."
                  className="w-full text-xl md:text-2xl font-bold text-[#121212] outline-none border-b border-transparent hover:border-[#e5e5e8] focus:border-[#e42777] pb-1 bg-transparent resize-none"
                />
              </div>

              <div className="space-y-2.5">
                {(slide.options || []).map((opt, optIdx) => (
                  <div key={optIdx} className="flex items-center gap-3 p-3 rounded-xl border border-[#e5e5e8] bg-white">
                    <span className="w-6 h-6 rounded-lg bg-[#fdeeee] text-[#e42777] font-bold text-xs flex items-center justify-center">
                      {optIdx + 1}
                    </span>
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) => handleOptionChange(optIdx, e.target.value)}
                      placeholder={`Lựa chọn ${optIdx + 1}...`}
                      className="flex-1 text-sm font-medium outline-none bg-transparent"
                    />
                  </div>
                ))}
              </div>

              <div className="text-xs text-[#737373]">
                📊 Kết quả bình chọn của học sinh sẽ được vẽ biểu đồ phần trăm theo thời gian thực.
              </div>
            </div>
          )}

          {/* SLIDE TYPE: OPEN-ENDED */}
          {slide.type === 'open_ended' && (
            <div className="space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4f46e5] mb-1 block">
                  Câu hỏi tự luận mở (Học sinh nhập phản hồi tự do)
                </span>
                <textarea
                  rows={2}
                  value={slide.question || ''}
                  onChange={(e) => handleQuestionChange(e.target.value)}
                  placeholder="Nhập câu hỏi mở hoặc chủ đề thảo luận tại đây..."
                  className="w-full text-xl md:text-2xl font-bold text-[#121212] outline-none border-b border-transparent hover:border-[#e5e5e8] focus:border-[#4f46e5] pb-1 bg-transparent resize-none"
                />
              </div>

              <div className="p-8 rounded-2xl bg-[#f8f8fc] border-2 border-dashed border-[#c7d2fe] text-center text-[#4f46e5] space-y-2">
                <p className="text-sm font-bold">Khung câu trả lời của học sinh</p>
                <p className="text-xs text-[#737373] max-w-md mx-auto">
                  Mỗi học sinh sẽ có một khung soạn thảo văn bản để gửi câu trả lời hoặc suy nghĩ của mình lên màn hình lớp học của giáo viên.
                </p>
              </div>

              <div className="text-xs text-[#737373]">
                💬 Giáo viên có thể trình chiếu các câu trả lời hay của học sinh lên màn hình lớn.
              </div>
            </div>
          )}
        </div>

        {/* Slide Footer: Explanation Preview */}
        {slide.explanation && (
          <div className="px-6 py-2.5 bg-[#faf6fd] border-t border-[#e8dcf7] text-xs text-[#525252] flex items-center justify-between">
            <span className="truncate">
              <strong className="text-[#8854c0]">Giải thích đáp án: </strong>
              {slide.explanation}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
