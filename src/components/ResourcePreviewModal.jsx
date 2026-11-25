import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Calendar, 
  Share2, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function ResourcePreviewModal({ activity, onClose }) {
  if (!activity) return null;

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const questions = activity.questions || [
    {
      id: 'sample-1',
      title: 'Một công thức yêu cầu 3 phần nước và 2 phần si-rô. Nếu có 6 phần si-rô thì cần bao nhiêu phần nước?',
      options: ['6 phần nước', '9 phần nước', '12 phần nước', '4 phần nước'],
      correctIndex: 1,
      explanation: 'Tỷ lệ Nước : Si-rô = 3 : 2. Khi si-rô gấp 3 lần (6 phần), nước cũng gấp 3 lần: 3 x 3 = 9 phần.'
    },
    {
      id: 'sample-2',
      title: 'Phân số nào sau đây tương đương với 75%?',
      options: ['1/2', '2/3', '3/4', '4/5'],
      correctIndex: 2,
      explanation: '75% = 75/100 = 3/4.'
    }
  ];

  const handleSelectOption = (qIdx, optIdx) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [qIdx]: optIdx
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-[#e5e5e8] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-[#f1f1f4] flex items-start justify-between bg-[#fafafc]">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#f3ecfb] text-[#8854c0]">
                {activity.type === 'quiz' ? 'Đánh giá (Quiz)' : 'Bài giảng tương tác'}
              </span>
              <span className="text-xs font-semibold text-[#737373]">
                Lớp {activity.grade || '6'}
              </span>
              {activity.standard && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#f1f1f4] text-[#525252]">
                  {activity.standard}
                </span>
              )}
            </div>
            <h2 className="text-lg font-bold text-[#121212] leading-snug">
              {activity.title}
            </h2>
            <p className="text-xs text-[#737373] mt-1">
              Bởi <strong>{activity.author || 'Đội ngũ Sư phạm ONTIN'}</strong> • {questions.length} câu hỏi • {activity.plays || '10k+'} lượt chơi
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#a3a3a3] hover:text-[#121212] hover:bg-[#f1f1f4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Action Buttons */}
        <div className="px-5 py-3 bg-[#f8f8fa] border-b border-[#e5e5e8] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => alert(`Bắt đầu làm bài: "${activity.title}". Chúc bạn học tốt!`)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8854c0] hover:bg-[#733bb2] text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Chơi trực tiếp</span>
            </button>
            <button 
              onClick={() => alert(`Đã tạo liên kết giao bài tập về nhà cho lớp!`)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#e5e5e8] hover:border-[#121212] text-[#121212] text-xs font-semibold transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-[#00a389]" />
              <span>Giao bài tập về nhà</span>
            </button>
          </div>

          <button
            onClick={() => setShowAnswerKey(!showAnswerKey)}
            className="text-xs font-semibold text-[#8854c0] hover:underline"
          >
            {showAnswerKey ? 'Ẩn đáp án' : 'Hiện đáp án gợi ý'}
          </button>
        </div>

        {/* Modal Body: Question List */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">
          <div className="flex items-center justify-between text-xs text-[#737373]">
            <span className="font-semibold uppercase tracking-wider">Xem trước danh sách câu hỏi</span>
            <span>Bấm vào đáp án để kiểm tra ngay</span>
          </div>

          {questions.map((q, qIdx) => {
            const userChoice = selectedAnswers[qIdx];
            const isCorrect = userChoice === q.correctIndex;

            return (
              <div 
                key={q.id || qIdx} 
                className="p-4 rounded-2xl border border-[#e5e5e8] bg-white shadow-2xs space-y-3"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-[#faf6fd] text-[#8854c0] font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {qIdx + 1}
                  </span>
                  <p className="text-sm font-semibold text-[#121212]">
                    {q.title || q.question}
                  </p>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userChoice === optIdx;
                    const isRightOption = optIdx === q.correctIndex;
                    
                    let btnStyle = 'bg-white border-[#e5e5e8] text-[#525252] hover:bg-[#f8f8fa]';
                    if (isSelected) {
                      btnStyle = isRightOption 
                        ? 'bg-[#e6f7f4] border-[#00a389] text-[#00a389] font-bold' 
                        : 'bg-[#fdeeee] border-[#ea5455] text-[#ea5455] font-bold';
                    } else if (showAnswerKey && isRightOption) {
                      btnStyle = 'bg-[#e6f7f4] border-[#00a389] text-[#00a389] font-bold';
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(qIdx, optIdx)}
                        className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs text-left transition-all ${btnStyle}`}
                      >
                        <span className="w-5 h-5 rounded-md bg-[#f1f1f4] text-[#737373] text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {(userChoice !== undefined || showAnswerKey) && q.explanation && (
                  <div className="p-3 rounded-xl bg-[#faf6fd] border border-[#e8dcf7] text-xs text-[#525252]">
                    <span className="font-bold text-[#8854c0]">Giải thích: </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#f1f1f4] bg-white flex items-center justify-between text-xs text-[#737373]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#8854c0]" /> Tự động chấm điểm và tổng hợp báo cáo theo chuẩn
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
