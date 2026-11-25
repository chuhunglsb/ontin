import React, { useState } from 'react';
import { 
  Play, 
  Save, 
  ArrowLeft, 
  Eye, 
  Sparkles, 
  Share2, 
  Check, 
  Settings,
  HelpCircle,
  GraduationCap,
  BookOpen,
  ChevronDown,
  Lock
} from 'lucide-react';
import SlideListSidebar from './SlideListSidebar';
import SlideCanvas from './SlideCanvas';
import SlideInspector from './SlideInspector';
import LessonLibraryModal from './LessonLibraryModal';

export default function PresentationEditor({
  lesson,
  onUpdateLesson,
  onStartLiveHost,
  onStudentJoinDirect,
  onBackToDashboard,
  isTeacherAuthenticated = false,
  onRequireLogin = () => {},
}) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);
  const [showLibraryModal, setShowLibraryModal] = useState(false);

  const currentSlide = lesson.slides[currentSlideIndex] || lesson.slides[0];

  const handleUpdateCurrentSlide = (updatedSlide) => {
    if (!isTeacherAuthenticated) {
      onRequireLogin();
      return;
    }
    const newSlides = [...lesson.slides];
    newSlides[currentSlideIndex] = updatedSlide;
    onUpdateLesson({
      ...lesson,
      slides: newSlides,
    });
  };

  const handleAddSlide = (type) => {
    if (!isTeacherAuthenticated) {
      onRequireLogin();
      return;
    }
    let newSlide;
    if (type === 'content') {
      newSlide = {
        id: `slide-${Date.now()}`,
        type: 'content',
        layout: 'text_image',
        title: 'Tiêu đề slide bài giảng Tin học',
        content: 'Nhập nội dung trọng tâm bài học theo SGK Tin học (Kết nối tri thức với cuộc sống)...',
        imageUrl: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=700&auto=format&fit=crop&q=80',
        duration: 0,
      };
    } else if (type === 'multiple_choice') {
      newSlide = {
        id: `slide-${Date.now()}`,
        type: 'multiple_choice',
        question: 'Câu hỏi trắc nghiệm Tin học mới:',
        options: ['Lựa chọn A', 'Lựa chọn B', 'Lựa chọn C', 'Lựa chọn D'],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Nhập lời giải thích ngắn gọn dựa trên kiến thức bài học SGK.',
      };
    } else if (type === 'checkbox') {
      newSlide = {
        id: `slide-${Date.now()}`,
        type: 'checkbox',
        question: 'Chọn tất cả các phương án đúng sau đây:',
        options: ['Phương án 1', 'Phương án 2', 'Phương án 3', 'Phương án 4'],
        correctIndices: [0, 1],
        timeLimit: 40,
        points: 1200,
        explanation: 'Giải thích vì sao các phương án trên là đúng.',
      };
    } else if (type === 'fill_blank') {
      newSlide = {
        id: `slide-${Date.now()}`,
        type: 'fill_blank',
        question: 'Điền thuật ngữ tin học thích hợp vào chỗ trống:',
        acceptableAnswers: ['Đáp án 1'],
        timeLimit: 30,
        points: 1000,
      };
    } else if (type === 'poll') {
      newSlide = {
        id: `slide-${Date.now()}`,
        type: 'poll',
        question: 'Khảo sát ý kiến học sinh về chủ đề này:',
        options: ['Rất đồng ý', 'Đồng ý', 'Cần cô hướng dẫn thêm'],
        timeLimit: 25,
      };
    } else {
      newSlide = {
        id: `slide-${Date.now()}`,
        type: 'open_ended',
        question: 'Hãy nêu cảm nghĩ hoặc liên hệ thực tế của em:',
        timeLimit: 60,
        points: 800,
      };
    }

    const newSlides = [...lesson.slides];
    newSlides.splice(currentSlideIndex + 1, 0, newSlide);
    onUpdateLesson({
      ...lesson,
      slides: newSlides,
    });
    setCurrentSlideIndex(currentSlideIndex + 1);
  };

  const handleDuplicateSlide = (index) => {
    if (!isTeacherAuthenticated) {
      onRequireLogin();
      return;
    }
    const slideToCopy = lesson.slides[index];
    const duplicated = {
      ...slideToCopy,
      id: `slide-${Date.now()}`,
      title: `${slideToCopy.title || 'Slide'} (Bản sao)`
    };
    const newSlides = [...lesson.slides];
    newSlides.splice(index + 1, 0, duplicated);
    onUpdateLesson({
      ...lesson,
      slides: newSlides
    });
    setCurrentSlideIndex(index + 1);
  };

  const handleDeleteSlide = (index) => {
    if (!isTeacherAuthenticated) {
      onRequireLogin();
      return;
    }
    if (lesson.slides.length <= 1) return;
    const newSlides = lesson.slides.filter((_, i) => i !== index);
    onUpdateLesson({
      ...lesson,
      slides: newSlides
    });
    if (currentSlideIndex >= newSlides.length) {
      setCurrentSlideIndex(newSlides.length - 1);
    }
  };

  const handleMoveSlide = (index, direction) => {
    if (!isTeacherAuthenticated) {
      onRequireLogin();
      return;
    }
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= lesson.slides.length) return;
    const newSlides = [...lesson.slides];
    const temp = newSlides[index];
    newSlides[index] = newSlides[targetIndex];
    newSlides[targetIndex] = temp;
    onUpdateLesson({
      ...lesson,
      slides: newSlides
    });
    setCurrentSlideIndex(targetIndex);
  };

  const handleSave = () => {
    if (!isTeacherAuthenticated) {
      onRequireLogin();
      return;
    }
    setSaveStatus('Đã lưu bài giảng thành công!');
    setTimeout(() => setSaveStatus(null), 2500);
  };

  const handleOpenTemplateModal = () => {
    if (!isTeacherAuthenticated) {
      onRequireLogin();
      return;
    }
    setShowTemplateModal(true);
  };

  return (
    <div className="h-full flex flex-col bg-[#f8f8fa] overflow-hidden select-none">
      {/* Top Studio Navbar */}
      <header className="h-16 bg-white border-b border-[#e5e5e8] px-5 flex items-center justify-between z-30 flex-shrink-0">
        {/* Left: Back & Title Edit */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBackToDashboard}
            className="p-2 rounded-xl text-[#737373] hover:text-[#121212] hover:bg-[#f1f1f4] transition-colors"
            title="Quay lại"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="w-px h-6 bg-[#e5e5e8] hidden sm:block" />

          {/* Book Series Badge & Title */}
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#e6f4fa] text-[#0084bd] border border-[#bae3f5] truncate">
                SGK Kết nối tri thức với cuộc sống • NXBGDVN
              </span>
              
              {/* Library Modal Trigger */}
              <button
                onClick={() => setShowLibraryModal(true)}
                className="flex items-center gap-1.5 text-[11px] font-bold text-white bg-[#0084bd] hover:bg-[#0073a8] px-2.5 py-0.5 rounded-lg shadow-2xs transition-colors"
                title="Mở toàn bộ danh mục bài học Lớp 3, 4, 5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Thư viện SGK (Lớp 3 - 4 - 5)</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            <div className="flex items-center gap-2 mt-0.5">
              <input
                type="text"
                value={lesson.title}
                readOnly={!isTeacherAuthenticated}
                onClick={() => !isTeacherAuthenticated && onRequireLogin()}
                onChange={(e) => {
                  if (!isTeacherAuthenticated) {
                    onRequireLogin();
                    return;
                  }
                  onUpdateLesson({ ...lesson, title: e.target.value });
                }}
                className="font-extrabold text-sm sm:text-base text-[#121212] outline-none border-b border-transparent hover:border-[#e5e5e8] focus:border-[#8854c0] bg-transparent truncate max-w-sm sm:max-w-md"
              />
              <span className="text-[11px] text-[#737373] hidden md:inline">
                ({lesson.grade}) • Mã PIN: <strong className="text-[#8854c0] font-mono">{lesson.pinCode}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          {/* Quick Add Slide from Header */}
          <button
            onClick={handleOpenTemplateModal}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#8854c0]/10 hover:bg-[#8854c0]/20 text-xs font-bold text-[#8854c0] border border-[#8854c0]/30 transition-colors"
            title={isTeacherAuthenticated ? 'Thêm slide bài giảng hoặc câu hỏi mới' : 'Đăng nhập Giáo viên để thêm slide'}
          >
            {!isTeacherAuthenticated && <Lock className="w-3.5 h-3.5" />}
            <span>+ Thêm slide</span>
          </button>

          {saveStatus && (
            <span className="hidden md:inline-flex items-center gap-1 text-xs text-[#00a389] font-semibold bg-[#e6f7f4] px-2.5 py-1 rounded-lg">
              <Check className="w-3.5 h-3.5" />
              <span>{saveStatus}</span>
            </span>
          )}

          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#e5e5e8] hover:border-[#121212] text-xs font-semibold text-[#121212] bg-white transition-colors"
          >
            <Save className="w-4 h-4 text-[#737373]" />
            <span className="hidden sm:inline">Lưu bài</span>
          </button>

          {/* Student Join Direct Simulator */}
          <button
            onClick={onStudentJoinDirect}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#e5e5e8] hover:border-[#8854c0] text-xs font-semibold text-[#525252] bg-white transition-colors"
            title="Thử nghiệm giao diện học sinh nhập mã tham gia"
          >
            <GraduationCap className="w-4 h-4 text-[#8854c0]" />
            <span className="hidden md:inline">Học sinh nhập mã</span>
          </button>

          {/* START LIVE PRESENTATION HOST BUTTON */}
          <button
            onClick={onStartLiveHost}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#8854c0] to-[#aa3bff] hover:from-[#733bb2] hover:to-[#932ee6] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Trình chiếu & Mở phòng</span>
          </button>
        </div>
      </header>

      {/* Read-only notice banner when not logged in */}
      {!isTeacherAuthenticated && (
        <div className="bg-amber-50 border-b border-amber-200 px-5 py-2 flex items-center justify-between text-xs text-amber-900 flex-shrink-0">
          <div className="flex items-center gap-2 font-medium">
            <Lock className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
            <span>
              Đang ở <strong>chế độ chỉ xem</strong>. Đăng nhập tài khoản Giáo viên để thêm mới hoặc chỉnh sửa bài giảng.
            </span>
          </div>
          <button
            onClick={onRequireLogin}
            className="px-3 py-1 rounded-lg bg-[#8854c0] hover:bg-[#733bb2] text-white font-bold text-[11px] transition-colors flex-shrink-0"
          >
            Đăng nhập Giáo viên
          </button>
        </div>
      )}

      {/* Main Studio Body: 3-column layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* 1. Left Thumbnail Sidebar */}
        <SlideListSidebar
          slides={lesson.slides}
          currentSlideIndex={currentSlideIndex}
          onSelectSlide={setCurrentSlideIndex}
          onAddSlide={handleAddSlide}
          onDuplicateSlide={handleDuplicateSlide}
          onDeleteSlide={handleDeleteSlide}
          onMoveSlide={handleMoveSlide}
          showTemplateModal={showTemplateModal}
          setShowTemplateModal={(open) => {
            if (open && !isTeacherAuthenticated) {
              onRequireLogin();
              return;
            }
            setShowTemplateModal(open);
          }}
          isReadOnly={!isTeacherAuthenticated}
        />

        {/* 2. Center Slide Canvas */}
        <SlideCanvas
          slide={currentSlide}
          slideIndex={currentSlideIndex}
          totalSlides={lesson.slides.length}
          onUpdateSlide={handleUpdateCurrentSlide}
          isReadOnly={!isTeacherAuthenticated}
          onRequireLogin={onRequireLogin}
        />

        {/* 3. Right Property Inspector */}
        <SlideInspector
          slide={currentSlide}
          onUpdateSlide={handleUpdateCurrentSlide}
          isReadOnly={!isTeacherAuthenticated}
          onRequireLogin={onRequireLogin}
        />
      </div>

      {/* Full Lesson Library Modal for Grades 3, 4, 5 */}
      {showLibraryModal && (
        <LessonLibraryModal
          currentLessonId={lesson.id}
          onSelectLesson={(selectedLsn) => {
            onUpdateLesson(selectedLsn);
            setCurrentSlideIndex(0);
            setShowLibraryModal(false);
          }}
          onClose={() => setShowLibraryModal(false)}
        />
      )}
    </div>
  );
}
