# ONTIN - Chức Năng Thuyết Trình Tương Tác (Interactive Presentation & Live Lesson)

Hệ thống cho phép giáo viên thiết kế các slide bài giảng thuyết trình kết hợp câu hỏi tương tác nhiều loại, đồng thời khởi chạy phòng học trực tiếp để học sinh nhập mã PIN 6 số tham gia trả lời thời gian thực.

---

## 🚀 Cách Khởi Chạy Nhanh

```bash
# 1. Cài đặt các gói phụ thuộc (nếu chưa có)
npm install

# 2. Chạy môi trường phát triển (Development Server)
npm run dev

# 3. Mở trình duyệt tại:
http://localhost:5173
```

---

## 🎯 Các Tính Năng Trọng Tâm Của Module Thuyết Trình

### 1. Studio Thiết Kế Bài Giảng Dành Cho Giáo Viên (Teacher Studio Editor)
- **Quản lý Slide chuyên nghiệp (Slide List Sidebar)**:
  - Xem danh sách slide dạng thumbnail trực quan với thứ tự và biểu tượng nhận diện loại slide.
  - Thêm slide mới với menu mẫu phong phú.
  - Sắp xếp đổi thứ tự (Di chuyển lên/xuống), nhân bản (Duplicate) hoặc xóa slide.
- **Thiết kế Nội Dung Bài Học (Content Slide)**:
  - Soạn thảo tiêu đề bài học, nội dung văn bản, các ý trọng tâm, công thức toán.
  - Tích hợp khung ảnh minh họa (hỗ trợ nhập URL hoặc chọn nhanh ảnh mẫu có sẵn).
  - Tùy chọn mở rộng và chú thích chân slide.
- **Thiết Kế Đa Dạng Các Loại Câu Hỏi Tương Tác**:
  1. **Trắc nghiệm đơn (Multiple Choice)**: Tùy chỉnh câu hỏi, thêm/bớt từ 2 đến 6 phương án (A, B, C, D, E, F), tích chọn đáp án đúng với dấu tích xanh nổi bật.
  2. **Chọn nhiều đáp án đúng (Checkbox / Multi-select)**: Cho phép tích chọn đồng thời nhiều hơn một phương án chính xác.
  3. **Điền vào chỗ trống (Fill in the Blank)**: Nhập danh sách các từ/số được hệ thống chấp nhận (cách nhau bởi dấu chấm phẩy `;`) để tự động chấm điểm.
  4. **Thăm dò ý kiến (Poll / Survey)**: Khảo sát cảm nhận học sinh, hiển thị biểu đồ phần trăm bình chọn trực tiếp.
  5. **Câu hỏi mở (Open-ended)**: Học sinh nhập câu trả lời tự do để giáo viên trình chiếu và nhận xét trên màn hình lớp.
- **Bảng Thuộc Tính Slide (Inspector)**:
  - Cài đặt thời gian đếm ngược: 15s, 30s, 45s, 60s, 90s, 2 phút hoặc không giới hạn.
  - Cài đặt điểm thưởng: Tiêu chuẩn (1,000 pts) hoặc Nhân đôi (2,000 pts).
  - Soạn thảo lời giải thích chi tiết cho từng câu hỏi sau khi học sinh làm bài.

---

### 2. Màn Hình Giáo Viên Thuyết Trình Trực Tiếp (Live Host Screen)
- **Màn hình chờ (Lobby)**:
  - Hiển thị **Mã PIN 6 số** (VD: `682 915`) to rõ ràng ở trung tâm màn hình.
  - Danh sách học sinh đã vào phòng cập nhật theo thời gian thực (kèm avatar hoạt hình và tên).
  - Nút **"+ Thêm học sinh giả lập vào phòng"** để giáo viên có thể thử nghiệm ngay lập tức tính năng lớp học đông học sinh mà không cần kết nối thêm thiết bị thật.
  - Nút "Bắt đầu bài giảng" khi lớp đã sẵn sàng.
- **Chế độ Thuyết Trình Bài Học (Live Presenter Stage)**:
  - Chuyển tiếp/lùi slide bằng thanh công cụ chuyên nghiệp.
  - Đồng hồ đếm ngược thời gian làm bài tự động tích tắc và cảnh báo đỏ khi sắp hết giờ.
  - Bộ đếm tiến độ nộp bài: *"X / Y học sinh đã trả lời"*.
  - Biểu đồ cột phân bố đáp án A, B, C, D trực quan ngay sau khi kết thúc câu hỏi, kèm lời giải thích.
  - **Bảng xếp hạng (Leaderboard)**: Vinh danh top học sinh theo điểm số và chuỗi làm đúng (Streak 🔥).
  - **Màn hình vinh danh (Summary)**: Bục trao giải Podium 🥇 Quán Quân, 🥈 Hạng 2, 🥉 Hạng 3.

---

### 3. Giao Diện Học Sinh Nhập Mã & Tương Tác (Student Join Screen)
- **Nhập mã PIN 6 số**: Học sinh nhập mã PIN từ bảng của giáo viên (ví dụ: `682915`), điền tên hoặc biệt danh và chọn Avatar yêu thích (🦊, 🐱, 🐼, 🚀...).
- **Đồng bộ hóa trực tiếp theo giáo viên**:
  - Khi giáo viên đang giảng slide nội dung: Màn hình học sinh hiển thị nội dung slide bài giảng.
  - Khi giáo viên chuyển sang câu hỏi: Màn hình học sinh lập tức biến thành bộ điều khiển trả lời với 4 nút màu lớn (A Đỏ, B Xanh ngọc, C Cam, D Xanh dương) chuẩn phong cách Quizizz.
  - Nhận phản hồi đúng/sai tức thì, thông báo điểm thưởng (+1000 pts) và chuỗi streak!

---

### 4. Chế Độ Xem Song Song (Split Screen Dual-View) 🌟
- Trên thanh điều hướng trên cùng, người dùng có thể bấm vào tab **"Song song (Split View)"** để hiển thị đồng thời:
  - **Nửa màn hình bên trái**: Màn hình chiếu của giáo viên (điều khiển slide, hiện kết quả, bảng xếp hạng).
  - **Nửa màn hình bên phải**: Giao diện thiết bị di động của học sinh (nhập mã, tương tác câu hỏi, nhận điểm).
- Giúp giáo viên kiểm tra trọn vẹn trải nghiệm của cả hai phía trong cùng một màn hình một cách trực quan và thuận tiện nhất!
