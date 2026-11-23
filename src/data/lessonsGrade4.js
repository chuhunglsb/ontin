// DANH MỤC BÀI HỌC TIN HỌC LỚP 4
// Bộ sách "Kết nối tri thức với cuộc sống" - Nhà xuất bản Giáo dục Việt Nam

export const LESSONS_GRADE_4 = [
  // --- CHỦ ĐỀ 1: MÁY TÍNH VÀ EM ---
  {
    id: 'tin-4-bai-1',
    topic: 'Chủ đề 1: Máy tính và em',
    title: 'Bài 1: Phần cứng và phần mềm máy tính',
    grade: 'Lớp 4',
    pinCode: '401101',
    description: 'Phân biệt phần cứng (Hardware - sờ chạm được) và phần mềm (Software - chương trình chạy trên máy tính). Mối quan hệ giữa phần cứng và phần mềm.',
    slides: [
      {
        id: 'tin4-b1-s1',
        type: 'content',
        layout: 'text_image',
        title: 'Bài 1: Phần cứng và phần mềm máy tính',
        content: 'Mục tiêu bài học:\n1. Phân biệt được phần cứng và phần mềm máy tính.\n2. Nêu được ví dụ về phần cứng và phần mềm.\n3. Hiểu được mối quan hệ gắn bó: Phần cứng cần phần mềm để hoạt động và phần mềm cần phần cứng để chạy.',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&auto=format&fit=crop&q=80',
        caption: 'Máy tính là sự kết hợp hoàn hảo giữa phần cứng và phần mềm',
      },
      {
        id: 'tin4-b1-s2',
        type: 'content',
        layout: 'two_columns',
        title: 'Khái niệm: Phần cứng vs Phần mềm',
        content: '⚙️ Phần cứng (Hardware):\n• Là các thiết bị vật lý tạo nên máy tính mà em có thể nhìn thấy và sờ chạm được.\n\nVí dụ phần cứng:\n- Màn hình, bàn phím, chuột\n- Thân máy tính (ổ đĩa, bộ nhớ RAM, CPU)\n- Loa, tai nghe, máy in...',
        contentRight: '💾 Phần mềm (Software):\n• Là các chương trình, tập lệnh hướng dẫn máy tính thực hiện các công việc cụ thể. Em không thể sờ chạm vào phần mềm.\n\nVí dụ phần mềm:\n- Hệ điều hành Windows\n- Phần mềm vẽ Paint\n- Phần mềm soạn thảo Word\n- Trình duyệt Google Chrome\n- Phần mềm học tập Scratch',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin4-b1-s3',
        type: 'multiple_choice',
        title: 'Câu hỏi 1: Nhận biết phần mềm',
        question: 'Vật nào hoặc chương trình nào sau đây là PHẦN MỀM máy tính?',
        options: [
          'Phần mềm luyện gõ mười ngón Mario Teaches Typing',
          'Chuột máy tính có dây',
          'Bàn phím cơ có đèn LED',
          'Màn hình tinh thể lỏng 24 inch'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Phần mềm là chương trình chạy trên máy tính, chuột và bàn phím là các thiết bị phần cứng.',
      },
      {
        id: 'tin4-b1-s4',
        type: 'checkbox',
        title: 'Câu hỏi 2: Phân loại phần cứng',
        question: 'Những thiết bị nào sau đây thuộc về PHẦN CỨNG máy tính? (Chọn tất cả đáp án đúng)',
        options: [
          'Thân máy tính',
          'Màn hình hiển thị',
          'Tai nghe (Headphone)',
          'Hệ điều hành Windows 11'
        ],
        correctIndices: [0, 1, 2],
        timeLimit: 35,
        points: 1200,
        explanation: 'Thân máy, màn hình, tai nghe là phần cứng vật lý; Windows là phần mềm hệ điều hành.',
      }
    ]
  },
  {
    id: 'tin-4-bai-2',
    topic: 'Chủ đề 1: Máy tính và em',
    title: 'Bài 2: Gõ bàn phím đúng cách',
    grade: 'Lớp 4',
    pinCode: '401102',
    description: 'Quy tắc đặt 10 ngón tay trên hàng phím cơ sở và phân công từng ngón gõ các phím tương ứng.',
    slides: [
      {
        id: 'tin4-b2-s1',
        type: 'content',
        title: 'Bài 2: Luyện gõ mười ngón tay',
        content: '👐 Phân công ngón tay trên hàng phím cơ sở:\n• Tay trái: Ngón út (A), ngón áp út (S), ngón giữa (D), ngón trỏ (F).\n• Tay phải: Ngón trỏ (J), ngón giữa (K), ngón áp út (L), ngón út (;).\n• Hai ngón tay cái: Phụ trách phím cách (Space bar).\n\nLợi ích: Gõ nhanh hơn, chính xác hơn và mắt không cần phải nhìn cúi xuống bàn phím.',
        imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin4-b2-s2',
        type: 'multiple_choice',
        title: 'Phân công phím cách',
        question: 'Phím cách (Space bar - phím dài nhất) được phân công cho ngón tay nào gõ?',
        options: [
          'Ngón tay cái (bàn tay trái hoặc phải)',
          'Ngón tay út',
          'Ngón tay trỏ',
          'Ngón tay giữa'
        ],
        correctIndex: 0,
        timeLimit: 25,
        points: 1000,
      }
    ]
  },
  // --- CHỦ ĐỀ 2: MẠNG MÁY TÍNH VÀ INTERNET ---
  {
    id: 'tin-4-bai-3',
    topic: 'Chủ đề 2: Mạng máy tính và Internet',
    title: 'Bài 3: Thông tin trên trang web',
    grade: 'Lớp 4',
    pinCode: '749120',
    description: 'Các dạng thông tin trên trang web: văn bản, hình ảnh, âm thanh, video và siêu liên kết (hyperlink).',
    slides: [
      {
        id: 'tin4-b3-s1',
        type: 'content',
        title: 'Bài 3: Thông tin đa dạng trên trang web',
        content: '🌐 Các dạng thông tin trên trang web:\n1. Văn bản (Text): Chữ viết, tin tức, bài học.\n2. Hình ảnh (Image): Tranh ảnh minh họa, sơ đồ.\n3. Âm thanh (Audio): Giọng đọc, bài hát, tiếng động vật.\n4. Video: Phim tài liệu khoa học, bài giảng hoạt hình.\n5. Siêu liên kết (Hyperlink): Đoạn chữ hoặc hình ảnh liên kết dẫn đến trang web khác.',
        imageUrl: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin4-b3-s2',
        type: 'multiple_choice',
        title: 'Hình dạng con trỏ trên siêu liên kết',
        question: 'Khi di chuyển con trỏ chuột vào một siêu liên kết trên trang web, con trỏ chuột thường đổi thành hình gì?',
        options: [
          'Hình bàn tay chỉ ngón trỏ',
          'Hình mũi tên lớn',
          'Hình dấu nhân màu đỏ',
          'Hình đồng hồ cát'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Biểu tượng bàn tay chỉ ngón trỏ báo hiệu đây là một liên kết có thể nhấp chuột để mở tiếp trang mới.',
      }
    ]
  },
  {
    id: 'tin-4-bai-4',
    topic: 'Chủ đề 2: Mạng máy tính và Internet',
    title: 'Bài 4: Tìm kiếm thông tin trên Internet',
    grade: 'Lớp 4',
    pinCode: '402104',
    description: 'Sử dụng máy tìm kiếm (Google), cách chọn từ khóa tìm kiếm chính xác và chọn lọc thông tin đáng tin cậy.',
    slides: [
      {
        id: 'tin4-b4-s1',
        type: 'content',
        title: 'Bài 4: Kỹ năng tìm kiếm với từ khóa',
        content: '🔍 Các bước tìm kiếm thông tin trên Internet:\nBước 1: Mở trình duyệt web (Google Chrome, Cốc Cốc, Edge).\nBước 2: Truy cập trang web máy tìm kiếm (google.com).\nBước 3: Gõ từ khóa ngắn gọn, đúng trọng tâm vào ô tìm kiếm (Ví dụ: "Động vật quý hiếm Việt Nam").\nBước 4: Nhấn Enter và duyệt danh sách kết quả uy tín.',
        imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin4-b4-s2',
        type: 'fill_blank',
        title: 'Chọn từ khóa hiệu quả',
        question: 'Để tìm hiểu về loài gấu trúc đỏ, từ khóa tìm kiếm tốt nhất em nên nhập vào ô tìm kiếm là "...".',
        acceptableAnswers: ['gấu trúc đỏ', 'gau truc do', '"gấu trúc đỏ"'],
        timeLimit: 30,
        points: 1000,
      }
    ]
  },
  // --- CHỦ ĐỀ 3: TỔ CHỨC LƯU TRỮ THÔNG TIN ---
  {
    id: 'tin-4-bai-5',
    topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm thông tin',
    title: 'Bài 5: Thao tác với tệp và thư mục',
    grade: 'Lớp 4',
    pinCode: '403105',
    description: 'Cây thư mục (Folder tree), tạo thư mục mới, đổi tên thư mục, di chuyển và xóa tệp an toàn.',
    slides: [
      {
        id: 'tin4-b5-s1',
        type: 'content',
        title: 'Bài 5: Quản lý cây thư mục máy tính',
        content: '📁 Thư mục (Folder) giống như một ngăn kéo cặp sách, dùng để chứa các tệp hoặc thư mục con.\n\nCác thao tác cơ bản:\n• Tạo thư mục: Nháy nút phải chuột → New → Folder.\n• Đổi tên: Nháy nút phải chuột vào thư mục → Rename.\n• Xóa: Nháy nút phải chuột → Delete.\n• Lưu ý: Tuyệt đối không xóa các thư mục của người khác hoặc thư mục hệ điều hành!',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin4-b5-s2',
        type: 'multiple_choice',
        title: 'Biểu tượng của thư mục',
        question: 'Trên hệ điều hành máy tính, thư mục (Folder) thường được biểu diễn bằng hình ảnh biểu tượng nào?',
        options: [
          'Hình chiếc cặp / kẹp tài liệu màu vàng',
          'Hình con bướm nhiều màu',
          'Hình chiếc bút chì nhọn',
          'Hình thùng rác'
        ],
        correctIndex: 0,
        timeLimit: 25,
        points: 1000,
        explanation: 'Thư mục thường có biểu tượng kẹp giấy màu vàng (Folder icon).',
      }
    ]
  },
  // --- CHỦ ĐỀ 4: ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HÓA SỐ ---
  {
    id: 'tin-4-bai-6',
    topic: 'Chủ đề 4: Đạo đức, pháp luật và văn hóa số',
    title: 'Bài 6: Bản quyền phần mềm và bảo vệ thông tin',
    grade: 'Lớp 4',
    pinCode: '404106',
    description: 'Tôn trọng quyền tác giả của phần mềm, bảo mật mật khẩu và không chia sẻ thông tin riêng tư trên mạng.',
    slides: [
      {
        id: 'tin4-b6-s1',
        type: 'content',
        title: 'Bài 6: Bảo vệ thông tin cá nhân và bản quyền',
        content: '🔒 Thông tin cá nhân gồm: Họ tên đầy đủ, ngày sinh, địa chỉ nhà, số điện thoại, mật khẩu tài khoản.\n\nQuy tắc an toàn mạng:\n1. Không tiết lộ thông tin cá nhân cho người lạ trên mạng Internet.\n2. Đặt mật khẩu đủ mạnh và không chia sẻ mật khẩu cho bạn bè.\n3. Sử dụng phần mềm có bản quyền hoặc phần mềm miễn phí hợp pháp, không dùng bản bẻ khóa.',
        imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin4-b6-s2',
        type: 'checkbox',
        title: 'Bảo vệ tài khoản cá nhân',
        question: 'Hành động nào sau đây giúp em bảo vệ tài khoản máy tính của mình an toàn? (Chọn các phương án đúng)',
        options: [
          'Đăng xuất tài khoản sau khi dùng xong máy tính công cộng',
          'Đặt mật khẩu khó đoán gồm chữ và số',
          'Cho tất cả bạn bè trong lớp biết mật khẩu của mình',
          'Không bấm vào các đường link lạ nhận được từ người không quen'
        ],
        correctIndices: [0, 1, 3],
        timeLimit: 35,
        points: 1200,
      }
    ]
  },
  // --- CHỦ ĐỀ 5: ỨNG DỤNG TIN HỌC ---
  {
    id: 'tin-4-bai-7',
    topic: 'Chủ đề 5: Ứng dụng tin học',
    title: 'Bài 7: Soạn thảo văn bản tiếng Việt',
    grade: 'Lớp 4',
    pinCode: '405107',
    description: 'Quy tắc gõ chữ tiếng Việt với phần mềm gõ Unikey (kiểu gõ Telex: s, f, r, x, j, aa, oo, ee, dd...).',
    slides: [
      {
        id: 'tin4-b7-s1',
        type: 'content',
        title: 'Bài 7: Quy tắc gõ chữ có dấu kiểu Telex',
        content: '⌨️ Bảng gõ chữ tiếng Việt kiểu Telex:\n• s: Dấu sắc (a + s = á)\n• f: Dấu huyền (a + f = à)\n• r: Dấu hỏi (a + r = ả)\n• x: Dấu ngã (a + x = ã)\n• j: Dấu nặng (a + j = ạ)\n\n• aa = â | oo = ô | ee = ê | dd = đ | aw = ă | ow = ơ | uw = ư',
        imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin4-b7-s2',
        type: 'multiple_choice',
        title: 'Kiểm tra gõ Telex',
        question: 'Trong kiểu gõ Telex, để gõ từ "Học tập", em cần gõ các phím nào sau đây?',
        options: [
          'Hocj taapj',
          'Hocs tapj',
          'Hocx taapr',
          'Hocf taaps'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Hocj = Học (j là dấu nặng), taapj = tập (aa = â, j = dấu nặng).',
      }
    ]
  },
  {
    id: 'tin-4-bai-9',
    topic: 'Chủ đề 5: Ứng dụng tin học',
    title: 'Bài 9: Làm quen với bài trình chiếu',
    grade: 'Lớp 4',
    pinCode: '405109',
    description: 'Phần mềm trình chiếu PowerPoint, tạo trang trình chiếu mới, chèn chữ và đổi màu nền slide.',
    slides: [
      {
        id: 'tin4-b9-s1',
        type: 'content',
        title: 'Bài 9: Bài trình chiếu (Presentation) là gì?',
        content: '🖥️ Bài trình chiếu gồm nhiều trang chiếu (Slide) được xếp theo thứ tự.\n\n• Dùng để trình bày, thuyết trình bài học trước cả lớp một cách sinh động với chữ to rõ ràng, hình ảnh và video minh họa.\n• Phần mềm phổ biến nhất là Microsoft PowerPoint.',
        imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin4-b9-s2',
        type: 'multiple_choice',
        title: 'Thêm slide mới trong bài trình chiếu',
        question: 'Để thêm một trang trình chiếu (slide) mới vào bài, em chọn lệnh nào trong phần mềm PowerPoint?',
        options: [
          'New Slide',
          'Delete Slide',
          'Save As',
          'Print'
        ],
        correctIndex: 0,
        timeLimit: 25,
        points: 1000,
      }
    ]
  },
  // --- CHỦ ĐỀ 6: GIẢI QUYẾT VẤN ĐỀ VỚI SCRATCH ---
  {
    id: 'tin-4-bai-11',
    topic: 'Chủ đề 6: Lập trình trực quan Scratch',
    title: 'Bài 11: Làm quen với phần mềm lập trình Scratch',
    grade: 'Lớp 4',
    pinCode: '406111',
    description: 'Giao diện Scratch: Sân khấu (Stage), Nhân vật chú mèo vàng (Sprite), Khu vực khối lệnh (Blocks Palette).',
    slides: [
      {
        id: 'tin4-b11-s1',
        type: 'content',
        title: 'Bài 11: Khám phá thế giới lập trình Scratch',
        content: '🐱 Scratch là phần mềm lập trình trực quan kéo thả khối lệnh dành riêng cho học sinh:\n\n1. Sân khấu (Stage): Nơi nhân vật biểu diễn hành động.\n2. Nhân vật (Sprite): Mặc định là chú mèo vàng đáng yêu.\n3. Bảng khối lệnh: Các mảnh ghép lệnh chia theo nhóm màu:\n   - Màu xanh lam: Nhóm Chuyển động (Motion)\n   - Màu tím: Nhóm Hiển thị (Looks)\n   - Màu vàng: Nhóm Sự kiện (Events) như "Khi bấm vào lá cờ xanh"',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin4-b11-s2',
        type: 'multiple_choice',
        title: 'Bắt đầu chương trình Scratch',
        question: 'Khối lệnh màu vàng nào thường được đặt ở đầu tiên để chạy một chương trình trong Scratch?',
        options: [
          'Khi bấm vào lá cờ xanh (When green flag clicked)',
          'Di chuyển 10 bước (Move 10 steps)',
          'Nói "Xin chào!" trong 2 giây',
          'Dừng lại tất cả'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Khối sự kiện "Khi bấm vào lá cờ xanh" là điểm xuất phát kích hoạt chương trình Scratch.',
      }
    ]
  }
];
