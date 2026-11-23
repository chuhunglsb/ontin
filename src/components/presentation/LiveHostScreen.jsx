import React, { useState, useEffect } from 'react';
import { 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Users, 
  Trophy, 
  X, 
  Sparkles, 
  BarChart3, 
  CheckCircle2, 
  Share2, 
  Volume2, 
  Maximize2,
  UserPlus,
  ArrowRight,
  Flame
} from 'lucide-react';

export default function LiveHostScreen({
  lesson,
  students,
  studentAnswers,
  onAddSimulatedStudent,
  onSlideChange,
  currentHostSlideIndex,
  onEndLesson,
}) {
  const [phase, setPhase] = useState('lobby'); // 'lobby' | 'presenting' | 'summary'
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const currentSlide = lesson.slides[currentHostSlideIndex] || lesson.slides[0];

  // Initialize timer whenever slide changes in presenting mode
  useEffect(() => {
    if (phase === 'presenting' && currentSlide.type !== 'content' && currentSlide.timeLimit > 0) {
      setTimeLeft(currentSlide.timeLimit);
      setTimerActive(true);
      setShowResults(false);
    } else {
      setTimerActive(false);
      setShowResults(true);
    }
  }, [currentHostSlideIndex, phase, currentSlide]);

  // Countdown timer loop
  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
      setShowResults(true);
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  // Count responses for the current slide
  const currentSlideSubmissions = studentAnswers[currentHostSlideIndex] || {};
  const submissionCount = Object.keys(currentSlideSubmissions).length;

  const handleNextSlide = () => {
    if (currentHostSlideIndex < lesson.slides.length - 1) {
      onSlideChange(currentHostSlideIndex + 1);
    } else {
      setPhase('summary');
    }
  };

  const handlePrevSlide = () => {
    if (currentHostSlideIndex > 0) {
      onSlideChange(currentHostSlideIndex - 1);
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

  // Calculate top students leaderboard
  const sortedStudents = [...students].sort((a, b) => (b.score || 0) - (a.score || 0));

  return (
    <div className="h-full min-h-0 flex flex-col bg-[#121212] text-white select-none overflow-hidden font-sans">
      
      {/* ================= 1. LOBBY PHASE ================= */}
      {phase === 'lobby' && (
        <div className="flex-1 flex flex-col justify-between p-8 max-w-6xl w-full mx-auto animate-in fade-in duration-200">
          {/* Lobby Top Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#8854c0] to-[#aa3bff] flex items-center justify-center font-black text-xl">
                W
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-tight">{lesson.title}</h1>
                <p className="text-xs text-[#a3a3a3]">{lesson.subject} • {lesson.grade} • {lesson.slides.length} slide bài giảng</p>
              </div>
            </div>

            <button
              onClick={onEndLesson}
              className="p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 text-[#a3a3a3] hover:text-white transition-colors"
              title="Thoát phòng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lobby Big PIN Code Banner */}
          <div className="my-auto text-center space-y-4">
            <p className="text-sm uppercase tracking-widest text-[#a3a3a3] font-bold">
              Học sinh truy cập và nhập mã để tham gia bài giảng
            </p>

            <div className="inline-block p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/15 to-white/5 border border-white/20 backdrop-blur-md shadow-2xl">
              <div className="text-5xl sm:text-7xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] via-[#e879f9] to-[#38bdf8] font-mono">
                {lesson.pinCode}
              </div>
              <p className="text-xs text-[#e5e5e8] mt-3">
                Hoặc quét mã QR trên màn hình của giáo viên
              </p>
            </div>

            {/* Quick Simulate Bot Students Button */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={onAddSimulatedStudent}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#c084fc] border border-white/15 transition-all"
              >
                <UserPlus className="w-4 h-4" />
                <span>+ Thêm học sinh giả lập vào phòng (Test)</span>
              </button>
            </div>
          </div>

          {/* Lobby Joined Students List & Start Button */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 text-xs font-bold text-[#a3a3a3] uppercase tracking-wider mb-2">
                <Users className="w-4 h-4 text-[#c084fc]" />
                <span>Học sinh đã tham gia ({students.length})</span>
              </div>

              <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto">
                {students.length > 0 ? (
                  students.map((st) => (
                    <span 
                      key={st.id}
                      className="px-3 py-1 rounded-xl bg-white/10 text-white font-medium text-xs flex items-center gap-1.5 border border-white/10 animate-in zoom-in-95 duration-150"
                    >
                      <span>{st.avatar || '🎓'}</span>
                      <span>{st.name}</span>
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-[#737373] italic">
                    Chưa có học sinh nào... Hãy chia sẻ mã PIN {lesson.pinCode} cho lớp!
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={() => setPhase('presenting')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#8854c0] to-[#aa3bff] hover:from-[#733bb2] hover:to-[#932ee6] text-white font-extrabold text-base shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2 flex-shrink-0"
            >
              <span>Bắt đầu bài giảng</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* ================= 2. PRESENTING PHASE ================= */}
      {phase === 'presenting' && (
        <div className="flex-1 flex flex-col justify-between overflow-hidden relative">
          {/* Top Bar Presenter Header */}
          <header className="h-16 bg-white/5 border-b border-white/10 px-6 flex items-center justify-between backdrop-blur-md z-30">
            <div className="flex items-center gap-4">
              <span className="font-extrabold text-base tracking-tight text-white truncate max-w-sm">
                {lesson.title}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-[#c084fc] font-bold">
                Mã PIN: {lesson.pinCode}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Question timer */}
              {currentSlide.type !== 'content' && (
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-sm border ${
                  timeLeft <= 5 
                    ? 'bg-rose-500/20 border-rose-500 text-rose-400 animate-pulse' 
                    : 'bg-white/10 border-white/15 text-white'
                }`}>
                  <Clock className="w-4 h-4" />
                  <span>{timeLeft}s</span>
                </div>
              )}

              {/* Submission Counter */}
              {currentSlide.type !== 'content' && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold text-[#38bdf8]">
                  <Users className="w-3.5 h-3.5" />
                  <span>{submissionCount}/{students.length} đã trả lời</span>
                </div>
              )}

              {/* Leaderboard toggle */}
              <button
                onClick={() => setShowLeaderboard(!showLeaderboard)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#8854c0]/30 hover:bg-[#8854c0]/50 border border-[#8854c0] text-xs font-bold text-[#c084fc] transition-colors"
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Bảng xếp hạng</span>
              </button>

              <button
                onClick={onEndLesson}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#a3a3a3] hover:text-white transition-colors"
                title="Dừng thuyết trình"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Main Slide Presentation Stage */}
          <main className="flex-1 p-6 md:p-10 flex flex-col items-center justify-center overflow-y-auto">
            <div className="w-full max-w-5xl bg-[#1c1c24] border border-white/15 rounded-3xl p-8 md:p-12 shadow-2xl relative flex flex-col justify-between min-h-[480px]">
              
              {/* SLIDE TYPE: CONTENT */}
              {currentSlide.type === 'content' && (
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                    {currentSlide.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
                    <div className="space-y-4">
                      <p className="text-base md:text-lg leading-relaxed text-[#d4d4d8] whitespace-pre-line">
                        {currentSlide.content}
                      </p>
                      {currentSlide.contentRight && (
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sm text-[#e5e5e8]">
                          {currentSlide.contentRight}
                        </div>
                      )}
                    </div>
                    {currentSlide.imageUrl && (
                      <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/40 h-64 shadow-lg">
                        <img
                          src={currentSlide.imageUrl}
                          alt={currentSlide.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* SLIDE TYPE: QUESTION (MULTIPLE CHOICE, CHECKBOX, POLL...) */}
              {currentSlide.type !== 'content' && (
                <div className="space-y-8">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#c084fc] mb-2 block">
                      {currentSlide.type === 'multiple_choice' && 'Trắc nghiệm nhiều lựa chọn'}
                      {currentSlide.type === 'checkbox' && 'Chọn nhiều đáp án đúng'}
                      {currentSlide.type === 'fill_blank' && 'Điền vào chỗ trống'}
                      {currentSlide.type === 'poll' && 'Thăm dò ý kiến'}
                      {currentSlide.type === 'open_ended' && 'Câu hỏi mở thảo luận'}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                      {currentSlide.question}
                    </h2>
                  </div>

                  {/* Options Display & Results Bar Chart */}
                  {(currentSlide.type === 'multiple_choice' || currentSlide.type === 'checkbox' || currentSlide.type === 'poll') && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {(currentSlide.options || []).map((opt, optIdx) => {
                        const color = OPTION_COLORS[optIdx % OPTION_COLORS.length];
                        const isCorrect = currentSlide.type === 'multiple_choice' 
                          ? currentSlide.correctIndex === optIdx
                          : (currentSlide.correctIndices || []).includes(optIdx);

                        // Calculate how many students chose this option
                        const chosenCount = Object.values(currentSlideSubmissions).filter(v => 
                          Array.isArray(v) ? v.includes(optIdx) : v === optIdx
                        ).length;
                        const percentage = students.length > 0 ? Math.round((chosenCount / students.length) * 100) : 0;

                        return (
                          <div
                            key={optIdx}
                            className={`p-4 rounded-2xl border-2 transition-all relative overflow-hidden flex flex-col justify-between ${
                              showResults && isCorrect
                                ? 'border-[#00a389] bg-[#00a389]/20 shadow-lg'
                                : 'border-white/10 bg-white/5'
                            }`}
                          >
                            <div className="flex items-center justify-between z-10 mb-2">
                              <div className="flex items-center gap-3">
                                <span className={`w-8 h-8 rounded-xl ${color.bg} text-white font-black text-sm flex items-center justify-center`}>
                                  {color.letter}
                                </span>
                                <span className="font-bold text-sm md:text-base text-white">
                                  {opt}
                                </span>
                              </div>
                              {showResults && isCorrect && (
                                <span className="p-1 rounded-full bg-[#00a389] text-white">
                                  <CheckCircle2 className="w-5 h-5" />
                                </span>
                              )}
                            </div>

                            {/* Percentage bar when showing results */}
                            {showResults && (
                              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#a3a3a3]">
                                <span>{chosenCount} học sinh ({percentage}%)</span>
                                <div className="w-28 bg-white/10 h-2 rounded-full overflow-hidden">
                                  <div 
                                    className="bg-[#c084fc] h-full rounded-full transition-all duration-500" 
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Fill in the blank reveal */}
                  {currentSlide.type === 'fill_blank' && (
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3">
                      <p className="text-xs text-[#a3a3a3] uppercase font-bold tracking-wider">
                        {showResults ? 'Đáp án chính xác được chấp nhận:' : 'Đang chờ học sinh nhập đáp án...'}
                      </p>
                      {showResults && (
                        <div className="text-2xl font-black text-[#00a389]">
                          {(currentSlide.acceptableAnswers || []).join(' hoặc ')}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Explanation box */}
                  {showResults && currentSlide.explanation && (
                    <div className="p-4 rounded-2xl bg-[#8854c0]/20 border border-[#8854c0]/40 text-xs text-[#e5e5e8]">
                      <span className="font-bold text-[#c084fc]">Giải thích chi tiết: </span>
                      {currentSlide.explanation}
                    </div>
                  )}
                </div>
              )}
            </div>
          </main>

          {/* Bottom Presenter Toolbar */}
          <footer className="h-20 bg-white/5 border-t border-white/10 px-8 flex items-center justify-between backdrop-blur-md z-30">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevSlide}
                disabled={currentHostSlideIndex === 0}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Slide trước</span>
              </button>

              <span className="text-xs font-bold text-[#a3a3a3]">
                Slide {currentHostSlideIndex + 1} / {lesson.slides.length}
              </span>

              <button
                onClick={handleNextSlide}
                className="px-5 py-2.5 rounded-xl bg-[#8854c0] hover:bg-[#733bb2] text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors"
              >
                <span>{currentHostSlideIndex === lesson.slides.length - 1 ? 'Tổng kết bài học' : 'Slide tiếp theo'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              {currentSlide.type !== 'content' && !showResults && (
                <button
                  onClick={() => { setTimerActive(false); setShowResults(true); }}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
                >
                  Kết thúc câu hỏi & Hiện đáp án
                </button>
              )}
            </div>
          </footer>

          {/* Interactive Leaderboard Modal Popup */}
          {showLeaderboard && (
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-in fade-in duration-150">
              <div 
                className="bg-[#1c1c24] rounded-3xl max-w-md w-full border border-white/20 p-6 shadow-2xl space-y-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    <h3 className="font-bold text-base text-white">Bảng Xếp Hạng Lớp Học</h3>
                  </div>
                  <button
                    onClick={() => setShowLeaderboard(false)}
                    className="p-1 rounded-lg text-[#a3a3a3] hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {sortedStudents.map((st, idx) => (
                    <div 
                      key={st.id} 
                      className={`p-3 rounded-2xl flex items-center justify-between border ${
                        idx === 0 
                          ? 'bg-amber-500/10 border-amber-500/40 text-amber-200' 
                          : idx === 1 
                          ? 'bg-slate-400/10 border-slate-400/40 text-slate-200' 
                          : idx === 2 
                          ? 'bg-amber-700/10 border-amber-700/40 text-amber-300' 
                          : 'bg-white/5 border-white/10 text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-black text-xs w-5 text-center">
                          {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}
                        </span>
                        <span className="text-base">{st.avatar || '🎓'}</span>
                        <span className="font-bold text-sm truncate max-w-[150px]">{st.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {st.streak > 1 && (
                          <span className="text-[10px] font-bold text-amber-400 flex items-center gap-0.5">
                            <Flame className="w-3 h-3 fill-current" /> {st.streak}
                          </span>
                        )}
                        <span className="font-extrabold text-sm text-[#38bdf8]">
                          {st.score || 0} pts
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= 3. SUMMARY PHASE ================= */}
      {phase === 'summary' && (
        <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-3xl w-full mx-auto text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-3xl shadow-xl mx-auto">
            🏆
          </div>

          <div>
            <h1 className="text-3xl font-black text-white">
              Hoàn Thành Bài Giảng Thuyết Trình!
            </h1>
            <p className="text-sm text-[#a3a3a3] mt-1">
              Bài học "{lesson.title}" đã kết thúc với sự tham gia của {students.length} học sinh.
            </p>
          </div>

          {/* Top 3 Podium */}
          <div className="grid grid-cols-3 gap-3 w-full pt-4">
            {/* Rank 2 */}
            <div className="p-4 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-end items-center h-48">
              <span className="text-2xl mb-1">🥈</span>
              <p className="font-bold text-sm text-white truncate max-w-[100px]">
                {sortedStudents[1]?.name || '---'}
              </p>
              <p className="text-xs text-[#38bdf8] font-bold mt-1">
                {sortedStudents[1]?.score || 0} pts
              </p>
              <div className="w-full bg-slate-500/20 h-16 rounded-xl mt-3 flex items-center justify-center text-xs font-bold text-slate-300">
                Hạng 2
              </div>
            </div>

            {/* Rank 1 */}
            <div className="p-4 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex flex-col justify-end items-center h-56 shadow-lg shadow-amber-500/10">
              <span className="text-3xl mb-1">🥇</span>
              <p className="font-bold text-base text-amber-200 truncate max-w-[120px]">
                {sortedStudents[0]?.name || '---'}
              </p>
              <p className="text-xs text-amber-400 font-extrabold mt-1">
                {sortedStudents[0]?.score || 0} pts
              </p>
              <div className="w-full bg-amber-500/30 h-24 rounded-xl mt-3 flex items-center justify-center text-sm font-black text-amber-300">
                Quán Quân
              </div>
            </div>

            {/* Rank 3 */}
            <div className="p-4 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-end items-center h-44">
              <span className="text-2xl mb-1">🥉</span>
              <p className="font-bold text-sm text-white truncate max-w-[100px]">
                {sortedStudents[2]?.name || '---'}
              </p>
              <p className="text-xs text-[#38bdf8] font-bold mt-1">
                {sortedStudents[2]?.score || 0} pts
              </p>
              <div className="w-full bg-amber-800/20 h-12 rounded-xl mt-3 flex items-center justify-center text-xs font-bold text-amber-400">
                Hạng 3
              </div>
            </div>
          </div>

          <div className="pt-6 flex gap-3">
            <button
              onClick={() => { setPhase('presenting'); onSlideChange(0); }}
              className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 text-xs font-bold text-white transition-colors"
            >
              Thuyết trình lại từ đầu
            </button>
            <button
              onClick={onEndLesson}
              className="px-8 py-3 rounded-2xl bg-[#8854c0] hover:bg-[#733bb2] text-white text-xs font-bold shadow-md transition-colors"
            >
              Quay lại Trình thiết kế Studio
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
