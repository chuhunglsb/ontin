// DANH MỤC TỔNG HỢP TOÀN BỘ CHƯƠNG TRÌNH TIN HỌC TIỂU HỌC LỚP 3 - 4 - 5
// Bộ sách giáo khoa: "Kết nối tri thức với cuộc sống" - Nhà xuất bản Giáo dục Việt Nam

import { LESSONS_GRADE_3 } from './lessonsGrade3';
import { LESSONS_GRADE_4 } from './lessonsGrade4';
import { LESSONS_GRADE_5 } from './lessonsGrade5';

export { LESSONS_GRADE_3, LESSONS_GRADE_4, LESSONS_GRADE_5 };

export const LESSONS_BY_GRADE = {
  'Lớp 3': LESSONS_GRADE_3,
  'Lớp 4': LESSONS_GRADE_4,
  'Lớp 5': LESSONS_GRADE_5,
};

export const ALL_LESSONS = [
  ...LESSONS_GRADE_3,
  ...LESSONS_GRADE_4,
  ...LESSONS_GRADE_5,
];

// Bài mặc định khởi đầu
export const DEFAULT_LESSON = LESSONS_GRADE_3[2]; // Bài 3: Máy tính - Những người bạn mới

export const SLIDE_TEMPLATES = [
  {
    type: 'content',
    name: 'Slide nội dung bài học Tin học',
    description: 'Chứa tiêu đề bài, kiến thức trọng tâm SGK Kết nối tri thức, hình ảnh thiết bị máy tính minh họa',
    icon: 'Presentation',
    color: '#0084bd',
  },
  {
    type: 'multiple_choice',
    name: 'Trắc nghiệm Tin học (1 đáp án đúng)',
    description: 'Câu hỏi củng cố kiến thức theo chuẩn SGK, có đếm ngược và chấm điểm tự động',
    icon: 'CheckSquare',
    color: '#8854c0',
  },
  {
    type: 'checkbox',
    name: 'Chọn nhiều đáp án đúng (Checkboxes)',
    description: 'Phù hợp câu hỏi nhận biết nhiều bộ phận máy tính hoặc quy tắc an toàn',
    icon: 'ListChecks',
    color: '#00a389',
  },
  {
    type: 'fill_blank',
    name: 'Điền từ / số vào chỗ trống',
    description: 'Học sinh gõ thuật ngữ tin học chính xác (ví dụ: chuột, bàn phím, CPU, thư mục...)',
    icon: 'TextCursorInput',
    color: '#fa7533',
  },
  {
    type: 'poll',
    name: 'Thăm dò ý kiến lớp học',
    description: 'Khảo sát thói quen sử dụng máy tính và mức độ hiểu bài của học sinh',
    icon: 'BarChart3',
    color: '#e42777',
  },
  {
    type: 'open_ended',
    name: 'Câu hỏi tự luận thảo luận',
    description: 'Học sinh nêu cảm nghĩ, chia sẻ ứng dụng máy tính trong học tập',
    icon: 'MessageSquareText',
    color: '#4f46e5',
  },
];
