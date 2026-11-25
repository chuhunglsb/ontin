import React, { useState } from 'react';
import { 
  KeyRound, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Trophy, 
  Flame, 
  Sparkles,
  Send,
  HelpCircle
} from 'lucide-react';

export default function StudentJoinScreen({
  activeLesson,
  currentHostSlideIndex,
  onStudentJoin,
  onStudentSubmitAnswer,
  studentAnswers,
  onExitStudentView,
}) {
  const [pinInput, setPinInput] = useState(activeLesson?.pinCode || '');
  const [nameInput, setNameInput] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('🦊');
  const [isJoined, setIsJoined] = useState(false);
  const [studentId, setStudentId] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // Current student answer for the active slide
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [selectedMultiChoices, setSelectedMultiChoices] = useState([]);
  const [textAnswer, setTextAnswer] = useState('');
  const [hasSubmittedCurrentSlide, setHasSubmittedCurrentSlide] = useState(false);
  const [feedback, setFeedback] = useState(null); // { isCorrect, points }

  const AVATARS = ['🦊', '🐱', '🐼', '🦁', '🚀', '🌟', '🦄', '🐯', '🐬'];

  const currentSlide = activeLesson?.slides[currentHostSlideIndex] || activeLesson?.slides[0];

  const handleJoin = (e) => {
    e.preventDefault();
    if (!pinInput.trim()) {
      alert('Vui lòng nhập mã PIN bài giảng!');
      return;
    }
    if (!nameInput.trim()) {
      alert('Vui lòng nhập tên của bạn!');
      return;
    }

    if (pinInput.replace(/\s/g, '') !== activeLesson?.pinCode?.replace(/\s/g, '')) {
      alert(`Mã PIN không khớp! Mã phòng bài giảng hiện tại là: ${activeLesson?.pinCode}`);
      return;
    }

    const newStudent = {
      id: `student-${Date.now()}`,
      name: nameInput.trim(),
      avatar: selectedAvatar,
      score: 0,
      streak: 0,
    };

    setStudentId(newStudent.id);
    setIsJoined(true);
    onStudentJoin(newStudent);
  };

  const handleSubmitSingleChoice = (optionIndex) => {
    if (hasSubmittedCurrentSlide) return;
    setSelectedChoice(optionIndex);
    setHasSubmittedCurrentSlide(true);

    const isCorrect = currentSlide.correctIndex === optionIndex;
    const earnedPoints = isCorrect ? (currentSlide.points || 1000) : 0;

    if (isCorrect) {
      setCurrentScore((prev) => prev + earnedPoints);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    setFeedback({
      isCorrect,
      points: earnedPoints,
    });

    onStudentSubmitAnswer(studentId, currentHostSlideIndex, optionIndex, isCorrect, earnedPoints);
  };

  const handleSubmitCheckbox = () => {
    if (hasSubmittedCurrentSlide || selectedMultiChoices.length === 0) return;
    setHasSubmittedCurrentSlide(true);

    const correctOnes = currentSlide.correctIndices || [];
    const isCorrect = correctOnes.length === selectedMultiChoices.length &&
      selectedMultiChoices.every(idx => correctOnes.includes(idx));
    const earnedPoints = isCorrect ? (currentSlide.points || 1200) : 0;

    if (isCorrect) {
      setCurrentScore((prev) => prev + earnedPoints);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    setFeedback({
      isCorrect,
      points: earnedPoints,
    });

    onStudentSubmitAnswer(studentId, currentHostSlideIndex, selectedMultiChoices, isCorrect, earnedPoints);
  };

  const handleSubmitText = () => {
    if (hasSubmittedCurrentSlide || !textAnswer.trim()) return;
    setHasSubmittedCurrentSlide(true);

    let isCorrect = true;
    let earnedPoints = currentSlide.points || 1000;

    if (currentSlide.type === 'fill_blank') {
      const acceptable = (currentSlide.acceptableAnswers || []).map(a => a.toLowerCase().trim());
      isCorrect = acceptable.includes(textAnswer.toLowerCase().trim());
      earnedPoints = isCorrect ? (currentSlide.points || 1000) : 0;
    }

    if (isCorrect) {
      setCurrentScore((prev) => prev + earnedPoints);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    setFeedback({
      isCorrect,
      points: earnedPoints,
    });

    onStudentSubmitAnswer(studentId, currentHostSlideIndex, textAnswer.trim(), isCorrect, earnedPoints);
  };

  const OPTION_COLORS = [
    { bg: 'bg-[#ff5964]', border: 'border-[#ff5964]', letter: 'A' },
    { bg: 'bg-[#2ec4b6]', border: 'border-[#2ec4b6]', letter: 'B' },
    { bg: 'bg-[#ff9f1c]', border: 'border-[#ff9f1c]', letter: 'C' },
    { bg: 'bg-[#3a86ff]', border: 'border-[#3a86ff]', letter: 'D' },
    { bg: 'bg-[#8338ec]', border: 'border-[#8338ec]', letter: 'E' },
    { bg: 'bg-[#06d6a0]', border: 'border-[#06d6a0]', letter: 'F' },
  ];

  return (
    <div className="h-full min-h-0 bg-[#0e0e12] text-white flex flex-col font-sans select-none overflow-hidden">
      
      {/* ================= 1. JOIN SCREEN ================= */}
      {!isJoined ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-md w-full mx-auto animate-in fade-in duration-200">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-3xl bg-gradient-to-tr from-[#8854c0] to-[#aa3bff] flex items-center justify-center font-black text-2xl mx-auto shadow-xl mb-3">
              O
            </div>
            <h1 className="text-2xl font-black text-white">Tham Gia Bài Giảng</h1>
            <p className="text-xs text-[#a3a3a3] mt-1">
              Nhập mã PIN từ giáo viên để vào phòng học trực tiếp
            </p>
          </div>

          <form onSubmit={handleJoin} className="w-full bg-[#1c1c24] border border-white/10 rounded-3xl p-6 shadow-2xl space-y-4">
            {/* PIN Code Input */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#a3a3a3] block mb-1.5">
                Mã PIN bài giảng (6 chữ số)
              </label>
              <div className="relative">
                <input
                  type="text"
                  maxLength={6}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="VD: 682915"
                  className="w-full py-3 px-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:border-[#c084fc] outline-none text-center text-2xl font-mono font-black tracking-widest text-white"
                  autoFocus
                />
              </div>
            </div>

            {/* Student Name Input */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#a3a3a3] block mb-1.5">
                Tên hoặc Biệt danh của bạn
              </label>
              <input
                type="text"
                maxLength={30}
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="VD: Tuệ Nhi, Minh Khang..."
                className="w-full py-3 px-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#c084fc] outline-none text-sm font-bold text-white placeholder:text-[#737373]"
              />
            </div>

            {/* Avatar Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#a3a3a3] block mb-1.5">
                Chọn hình đại diện
              </label>
              <div className="flex items-center justify-between gap-1 p-2 rounded-2xl bg-white/5 border border-white/10">
                {AVATARS.map((av) => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => setSelectedAvatar(av)}
                    className={`w-9 h-9 rounded-xl text-lg flex items-center justify-center transition-transform ${
                      selectedAvatar === av ? 'bg-[#8854c0] scale-110 shadow-sm' : 'hover:bg-white/10'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Join Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#8854c0] to-[#aa3bff] hover:from-[#733bb2] hover:to-[#932ee6] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>Vào phòng học ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <button
            onClick={onExitStudentView}
            className="mt-6 text-xs text-[#737373] hover:text-white transition-colors"
          >
            ← Quay lại màn hình giáo viên
          </button>
        </div>
      ) : (
        /* ================= 2. LIVE INTERACTIVE SCREEN ================= */
        <div className="flex-1 flex flex-col justify-between overflow-hidden animate-in fade-in duration-150">
          {/* Student Top Status Bar */}
          <header className="h-16 bg-white/5 border-b border-white/10 px-5 flex items-center justify-between backdrop-blur-md z-30">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">{selectedAvatar}</span>
              <div>
                <p className="font-extrabold text-xs text-white truncate max-w-[120px]">{nameInput}</p>
                <div className="flex items-center gap-1.5 text-[10px] text-[#a3a3a3]">
                  <span>Mã: {activeLesson?.pinCode}</span>
                  {streak > 1 && (
                    <span className="font-bold text-amber-400 flex items-center">
                      <Flame className="w-3 h-3 fill-current" /> {streak}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs font-black text-[#38bdf8]">
                <Trophy className="w-3.5 h-3.5" />
                <span>{currentScore} pts</span>
              </div>

              <button
                onClick={onExitStudentView}
                className="text-xs text-[#a3a3a3] hover:text-white px-2 py-1 rounded-lg bg-white/5"
                title="Thoát chế độ học sinh"
              >
                ✕
              </button>
            </div>
          </header>

          {/* Student Screen Body */}
          <main className="flex-1 p-4 md:p-6 flex flex-col justify-between max-w-2xl w-full mx-auto overflow-y-auto">
            {/* Slide Question / Topic Header */}
            <div className="text-center py-2 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#c084fc] bg-white/5 px-2.5 py-0.5 rounded-full inline-block">
                Slide {currentHostSlideIndex + 1} / {activeLesson?.slides?.length}
              </span>
              <h2 className="text-lg md:text-xl font-bold text-white">
                {currentSlide?.type === 'content' ? currentSlide?.title : (currentSlide?.question || currentSlide?.title)}
              </h2>
            </div>

            {/* A. If Content Slide */}
            {currentSlide?.type === 'content' && (
              <div className="my-auto p-6 rounded-3xl bg-white/5 border border-white/10 text-center space-y-4">
                {currentSlide.imageUrl && (
                  <div className="h-44 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                    <img
                      src={currentSlide.imageUrl}
                      alt={currentSlide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <p className="text-xs md:text-sm text-[#d4d4d8] leading-relaxed whitespace-pre-line text-left">
                  {currentSlide.content}
                </p>
                <div className="pt-2 text-[11px] text-[#38bdf8] font-semibold flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Giáo viên đang thuyết trình nội dung bài học...</span>
                </div>
              </div>
            )}

            {/* B. If Multiple Choice Slide */}
            {currentSlide?.type === 'multiple_choice' && (
              <div className="my-auto w-full space-y-3">
                {/* Result banner if already answered */}
                {hasSubmittedCurrentSlide && feedback && (
                  <div className={`p-4 rounded-2xl border text-center animate-in zoom-in-95 duration-200 ${
                    feedback.isCorrect 
                      ? 'bg-[#00a389]/20 border-[#00a389] text-[#2ec4b6]' 
                      : 'bg-[#ff5964]/20 border-[#ff5964] text-[#ff5964]'
                  }`}>
                    <div className="flex items-center justify-center gap-2 font-black text-base">
                      {feedback.isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                      <span>{feedback.isCorrect ? 'CHÍNH XÁC! + ' + feedback.points + ' PTS' : 'CHƯA CHÍNH XÁC!'}</span>
                    </div>
                    <p className="text-xs text-[#d4d4d8] mt-1">Đã ghi nhận câu trả lời của bạn</p>
                  </div>
                )}

                {/* Big 4 Action Buttons for Mobile/Student */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(currentSlide.options || []).map((opt, optIdx) => {
                    const color = OPTION_COLORS[optIdx % OPTION_COLORS.length];
                    const isSelected = selectedChoice === optIdx;

                    return (
                      <button
                        key={optIdx}
                        disabled={hasSubmittedCurrentSlide}
                        onClick={() => handleSubmitSingleChoice(optIdx)}
                        className={`min-h-[75px] md:min-h-[90px] p-4 rounded-2xl ${color.bg} text-white font-extrabold text-sm md:text-base flex items-center gap-3 shadow-lg active:scale-95 transition-all text-left ${
                          isSelected ? 'ring-4 ring-white' : ''
                        } ${hasSubmittedCurrentSlide && !isSelected ? 'opacity-40' : ''}`}
                      >
                        <span className="w-8 h-8 rounded-xl bg-black/20 flex items-center justify-center text-sm font-black flex-shrink-0">
                          {color.letter}
                        </span>
                        <span className="flex-1 line-clamp-2">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* C. If Checkbox Slide */}
            {currentSlide?.type === 'checkbox' && (
              <div className="my-auto w-full space-y-3">
                {hasSubmittedCurrentSlide && feedback && (
                  <div className="p-4 rounded-2xl bg-[#00a389]/20 border border-[#00a389] text-[#2ec4b6] text-center">
                    <span className="font-black text-sm">ĐÃ GỬI BÀI LÀM THÀNH CÔNG!</span>
                  </div>
                )}

                <div className="space-y-2">
                  {(currentSlide.options || []).map((opt, optIdx) => {
                    const isChecked = selectedMultiChoices.includes(optIdx);
                    return (
                      <button
                        key={optIdx}
                        disabled={hasSubmittedCurrentSlide}
                        onClick={() => {
                          if (isChecked) {
                            setSelectedMultiChoices(selectedMultiChoices.filter(i => i !== optIdx));
                          } else {
                            setSelectedMultiChoices([...selectedMultiChoices, optIdx]);
                          }
                        }}
                        className={`w-full p-3.5 rounded-2xl border-2 text-left font-bold text-xs md:text-sm flex items-center justify-between transition-all ${
                          isChecked 
                            ? 'bg-[#00a389]/20 border-[#00a389] text-white' 
                            : 'bg-white/5 border-white/10 text-[#d4d4d8]'
                        }`}
                      >
                        <span>{opt}</span>
                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                          isChecked ? 'bg-[#00a389] border-[#00a389] text-white' : 'border-white/20'
                        }`}>
                          {isChecked && '✓'}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {!hasSubmittedCurrentSlide && (
                  <button
                    onClick={handleSubmitCheckbox}
                    disabled={selectedMultiChoices.length === 0}
                    className="w-full py-3.5 rounded-2xl bg-[#00a389] hover:bg-[#05b89c] disabled:opacity-40 text-white font-extrabold text-sm shadow-md transition-colors"
                  >
                    Gửi đáp án đã chọn ({selectedMultiChoices.length})
                  </button>
                )}
              </div>
            )}

            {/* D. If Fill in Blank or Open-ended */}
            {(currentSlide?.type === 'fill_blank' || currentSlide?.type === 'open_ended') && (
              <div className="my-auto w-full space-y-4">
                {hasSubmittedCurrentSlide ? (
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-[#00a389] mx-auto" />
                    <p className="font-black text-sm text-white">Đã gửi câu trả lời của bạn!</p>
                    <p className="text-xs text-[#a3a3a3]">Đang chờ giáo viên chuyển sang câu tiếp theo...</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={textAnswer}
                      onChange={(e) => setTextAnswer(e.target.value)}
                      placeholder="Nhập câu trả lời của bạn vào đây..."
                      className="w-full p-4 rounded-2xl bg-white/5 border-2 border-white/15 focus:border-[#c084fc] outline-none text-white text-base font-bold text-center"
                      autoFocus
                    />
                    <button
                      onClick={handleSubmitText}
                      disabled={!textAnswer.trim()}
                      className="w-full py-3.5 rounded-2xl bg-[#8854c0] hover:bg-[#733bb2] disabled:opacity-40 text-white font-extrabold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Gửi câu trả lời</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Status */}
            <div className="text-center text-[11px] text-[#737373] py-2">
              ONTIN Interactive Student Companion
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
