import React, { useState } from 'react';
import PresentationEditor from './PresentationEditor';
import LiveHostScreen from './LiveHostScreen';
import StudentJoinScreen from './StudentJoinScreen';
import { DEFAULT_LESSON } from '../../data/defaultPresentation';
import { 
  Tv, 
  Smartphone, 
  SplitSquareVertical, 
  Edit3, 
  Sparkles,
  Users
} from 'lucide-react';

export default function PresentationHub({ onBackToDashboard }) {
  const [lesson, setLesson] = useState(DEFAULT_LESSON);
  const [viewMode, setViewMode] = useState('editor'); // 'editor' | 'host' | 'student' | 'split'
  const [currentHostSlideIndex, setCurrentHostSlideIndex] = useState(0);

  // Live session state
  const [students, setStudents] = useState([
    { id: 'st-1', name: 'Minh Khang', avatar: '🚀', score: 2800, streak: 3 },
    { id: 'st-2', name: 'Bảo Anh', avatar: '🌟', score: 2400, streak: 2 },
    { id: 'st-3', name: 'Hoàng Nam', avatar: '🦁', score: 2100, streak: 2 },
    { id: 'st-4', name: 'Gia Huy', avatar: '🐱', score: 1800, streak: 1 },
  ]);

  // Map of slideIndex -> { studentId: answerValue }
  const [studentAnswers, setStudentAnswers] = useState({
    1: { 'st-1': 0, 'st-2': 0, 'st-3': 1, 'st-4': 0 }, // 3 chọn đúng, 1 chọn B
    3: { 'st-1': [0, 1, 3], 'st-2': [0, 1], 'st-3': [0, 1, 3] },
  });

  const handleAddSimulatedStudent = () => {
    const BOT_NAMES = ['Tuệ Nhi', 'Đăng Khoa', 'Quỳnh Anh', 'Thanh Trúc', 'Hải Đăng', 'Phương Linh'];
    const BOT_AVATARS = ['🐼', '🐬', '🦄', '🐯', '🦊', '🎨'];
    const randomName = BOT_NAMES[Math.floor(Math.random() * BOT_NAMES.length)];
    const randomAvatar = BOT_AVATARS[Math.floor(Math.random() * BOT_AVATARS.length)];

    const newBot = {
      id: `bot-${Date.now()}`,
      name: `${randomName} (Học sinh)`,
      avatar: randomAvatar,
      score: Math.floor(Math.random() * 1500) + 1000,
      streak: Math.floor(Math.random() * 3) + 1,
    };

    setStudents((prev) => [...prev, newBot]);
  };

  const handleStudentJoin = (newStudent) => {
    setStudents((prev) => {
      if (prev.some(s => s.id === newStudent.id)) return prev;
      return [...prev, newStudent];
    });
  };

  const handleStudentSubmitAnswer = (studentId, slideIndex, answer, isCorrect, points) => {
    // Save answer
    setStudentAnswers((prev) => ({
      ...prev,
      [slideIndex]: {
        ...(prev[slideIndex] || {}),
        [studentId]: answer
      }
    }));

    // Update student score in list
    setStudents((prev) => prev.map((st) => {
      if (st.id === studentId) {
        return {
          ...st,
          score: (st.score || 0) + (points || 0),
          streak: isCorrect ? (st.streak || 0) + 1 : 0
        };
      }
      return st;
    }));
  };

  return (
    <div className="h-screen flex flex-col bg-[#121212] overflow-hidden select-none">
      {/* Top Universal Mode Switcher Bar */}
      <div className="h-11 bg-[#1a1a24] border-b border-white/10 px-4 flex items-center justify-between text-xs text-white z-40">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#c084fc] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Wayground Thuyết Trình
          </span>
          <span className="text-white/20">|</span>
          <span className="text-white/60 truncate max-w-xs">{lesson.title}</span>
        </div>

        {/* View Mode Switcher Pills */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setViewMode('editor')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold text-[11px] transition-all ${
              viewMode === 'editor'
                ? 'bg-[#8854c0] text-white shadow-xs'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>1. Thiết kế bài giảng</span>
          </button>

          <button
            onClick={() => setViewMode('host')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold text-[11px] transition-all ${
              viewMode === 'host'
                ? 'bg-[#8854c0] text-white shadow-xs'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>2. Giáo viên thuyết trình (Mã PIN: {lesson.pinCode})</span>
          </button>

          <button
            onClick={() => setViewMode('student')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold text-[11px] transition-all ${
              viewMode === 'student'
                ? 'bg-[#8854c0] text-white shadow-xs'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>3. Học sinh tham gia</span>
          </button>

          <button
            onClick={() => setViewMode('split')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold text-[11px] transition-all ${
              viewMode === 'split'
                ? 'bg-[#00a389] text-white shadow-xs'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
            title="Xem song song màn hình giáo viên và học sinh"
          >
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>Song song (Split View)</span>
          </button>
        </div>
      </div>

      {/* Main Mode View Area */}
      <div className="flex-1 overflow-hidden">
        {/* MODE 1: TEACHER STUDIO EDITOR */}
        {viewMode === 'editor' && (
          <PresentationEditor
            lesson={lesson}
            onUpdateLesson={setLesson}
            onStartLiveHost={() => setViewMode('host')}
            onStudentJoinDirect={() => setViewMode('student')}
            onBackToDashboard={onBackToDashboard}
          />
        )}

        {/* MODE 2: TEACHER LIVE HOST SCREEN */}
        {viewMode === 'host' && (
          <LiveHostScreen
            lesson={lesson}
            students={students}
            studentAnswers={studentAnswers}
            onAddSimulatedStudent={handleAddSimulatedStudent}
            onSlideChange={setCurrentHostSlideIndex}
            currentHostSlideIndex={currentHostSlideIndex}
            onEndLesson={() => setViewMode('editor')}
          />
        )}

        {/* MODE 3: STUDENT JOIN & INTERACTIVE SCREEN */}
        {viewMode === 'student' && (
          <StudentJoinScreen
            activeLesson={lesson}
            currentHostSlideIndex={currentHostSlideIndex}
            onStudentJoin={handleStudentJoin}
            onStudentSubmitAnswer={handleStudentSubmitAnswer}
            studentAnswers={studentAnswers}
            onExitStudentView={() => setViewMode('editor')}
          />
        )}

        {/* MODE 4: DUAL SCREEN SPLIT VIEW (TEACHER + STUDENT SIDE-BY-SIDE) */}
        {viewMode === 'split' && (
          <div className="h-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Left Column: Teacher Live Screen */}
            <div className="flex-1 h-full min-w-0">
              <LiveHostScreen
                lesson={lesson}
                students={students}
                studentAnswers={studentAnswers}
                onAddSimulatedStudent={handleAddSimulatedStudent}
                onSlideChange={setCurrentHostSlideIndex}
                currentHostSlideIndex={currentHostSlideIndex}
                onEndLesson={() => setViewMode('editor')}
              />
            </div>

            {/* Right Column: Student Phone Device Screen */}
            <div className="w-full md:w-[420px] h-full flex-shrink-0 bg-[#0e0e12] border-l border-white/10">
              <StudentJoinScreen
                activeLesson={lesson}
                currentHostSlideIndex={currentHostSlideIndex}
                onStudentJoin={handleStudentJoin}
                onStudentSubmitAnswer={handleStudentSubmitAnswer}
                studentAnswers={studentAnswers}
                onExitStudentView={() => setViewMode('editor')}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
