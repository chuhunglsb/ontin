// DANH MỤC BÀI HỌC TIN HỌC LỚP 5
// Bộ sách "Kết nối tri thức với cuộc sống" - Nhà xuất bản Giáo dục Việt Nam

export const LESSONS_GRADE_5 = [
  // --- CHỦ ĐỀ 1: MÁY TÍNH VÀ EM ---
  {
    id: 'tin-5-bai-1',
    topic: 'Chủ đề 1: Máy tính và em',
    title: 'Bài 1: Máy tính và cộng đồng',
    grade: 'Lớp 5',
    pinCode: '501101',
    description: 'Vai trò của máy tính và thiết bị thông minh trong đời sống xã hội, bệnh viện, trường học, ngân hàng và giao thông.',
    slides: [
      {
        id: 'tin5-b1-s1',
        type: 'content',
        layout: 'text_image',
        title: 'Bài 1: Máy tính và cộng đồng',
        content: 'Mục tiêu bài học:\n1. Nêu được ví dụ về máy tính và thiết bị số giúp ích cho con người trong các lĩnh vực đời sống.\n2. Nhận biết được xã hội ngày càng phát triển nhờ công nghệ thông tin.\n3. Có ý thức sử dụng máy tính văn minh, có trách nhiệm với cộng đồng.',
        imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&auto=format&fit=crop&q=80',
        caption: 'Máy tính kết nối cộng đồng, nâng cao chất lượng cuộc sống con người',
      },
      {
        id: 'tin5-b1-s2',
        type: 'content',
        layout: 'two_columns',
        title: 'Máy tính trong các ngành nghề xã hội',
        content: '🏥 Y tế và bệnh viện:\n• Quản lý bệnh án điện tử, máy chụp X-quang, máy siêu âm kỹ thuật số, chẩn đoán bệnh từ xa.\n\n🏫 Giáo dục và trường học:\n• Lớp học thông minh, bảng tương tác, bài giảng trực tuyến, quản lý điểm số và sổ liên lạc điện tử.',
        contentRight: '🚦 Giao thông vận tải:\n• Hệ thống camera phạt nguội thông minh, đèn tín hiệu tự động điều tiết theo lưu lượng xe, đặt vé máy bay/tàu hỏa qua mạng.\n\n🏦 Ngân hàng & Thương mại:\n• Cây rút tiền tự động ATM, thanh toán quét mã QR qua điện thoại không cần tiền mặt.',
        imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin5-b1-s3',
        type: 'multiple_choice',
        title: 'Câu hỏi 1: Máy tính trong y tế',
        question: 'Trong bệnh viện hiện đại, máy tính KHÔNG dùng để làm việc nào sau đây?',
        options: [
          'Trực tiếp đứng lớp dạy học sinh tiểu học tập viết',
          'Lưu trữ hồ sơ và lịch sử khám chữa bệnh của bệnh nhân',
          'Điều khiển máy chụp cắt lớp và phân tích hình ảnh siêu âm',
          'Đăng ký lịch khám bệnh trực tuyến cho người dân'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Dạy học sinh tập viết là công việc sư phạm trong trường học, không thuộc bệnh viện y tế.',
      },
      {
        id: 'tin5-b1-s4',
        type: 'checkbox',
        title: 'Câu hỏi 2: Ứng dụng thanh toán số',
        question: 'Lợi ích của việc thanh toán bằng quét mã QR qua điện thoại thông minh là gì? (Chọn tất cả đáp án đúng)',
        options: [
          'Nhanh chóng và chính xác số tiền cần trả',
          'Không cần mang theo nhiều tiền mặt trong người',
          'Giao dịch được lưu lại lịch sử rõ ràng để quản lý chi tiêu',
          'Làm rơi tiền xu ra đất gây ồn ào'
        ],
        correctIndices: [0, 1, 2],
        timeLimit: 35,
        points: 1200,
      }
    ]
  },
  {
    id: 'tin-5-bai-2',
    topic: 'Chủ đề 1: Máy tính và em',
    title: 'Bài 2: Sự kỳ diệu của thông tin số',
    grade: 'Lớp 5',
    pinCode: '501102',
    description: 'Đặc điểm thông tin số: Dễ dàng nhân bản, lan truyền nhanh chóng, dung lượng lưu trữ khổng lồ nhưng có thể bị sửa đổi.',
    slides: [
      {
        id: 'tin5-b2-s1',
        type: 'content',
        title: 'Bài 2: Thế nào là thông tin số?',
        content: '💾 Thông tin số (Digital Information) là thông tin được lưu trữ và xử lý dưới dạng dãy bit (0 và 1) trong máy tính.\n\nĐặc điểm nổi bật:\n1. Dung lượng lưu trữ khổng lồ: Một chiếc thẻ nhớ nhỏ bằng móng tay có thể chứa hàng chục nghìn cuốn sách!\n2. Sao chép và lan truyền siêu nhanh: Gửi một email hay chia sẻ ảnh chỉ mất 1 giây để đến nửa vòng trái đất.\n3. Dễ dàng tìm kiếm và chỉnh sửa.',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin5-b2-s2',
        type: 'multiple_choice',
        title: 'Đặc điểm thông tin số',
        question: 'Đặc điểm nào sau đây KHÔNG PHẢI là ưu điểm của thông tin số?',
        options: [
          'Luôn luôn hoàn toàn chính xác 100%, không bao giờ có tin giả mạo',
          'Dung lượng lưu trữ lớn trong thiết bị nhỏ gọn',
          'Khả năng sao chép và chia sẻ nhanh chóng',
          'Dễ dàng tìm kiếm khi cần thiết'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Trên mạng có rất nhiều thông tin giả mạo hoặc chưa kiểm chứng, người dùng phải biết chọn lọc.',
      }
    ]
  },
  // --- CHỦ ĐỀ 2: MẠNG MÁY TÍNH VÀ INTERNET ---
  {
    id: 'tin-5-bai-4',
    topic: 'Chủ đề 2: Mạng máy tính và Internet',
    title: 'Bài 4: Thư điện tử (Email)',
    grade: 'Lớp 5',
    pinCode: '502104',
    description: 'Cấu trúc địa chỉ Email (tên_người_dùng@tên_máy_chủ), cách gửi và nhận thư, đính kèm tệp tin.',
    slides: [
      {
        id: 'tin5-b4-s1',
        type: 'content',
        title: 'Bài 4: Khám phá thư điện tử (Email)',
        content: '✉️ Email (Electronic Mail) là dịch vụ gửi và nhận thư qua mạng máy tính Internet.\n\n• Cấu trúc một địa chỉ thư điện tử:\n  <Tên tài khoản> @ <Tên nhà cung cấp dịch vụ>\n  Ví dụ: nguyenvana@gmail.com\n\n• Ký hiệu bắt buộc ở giữa là chữ @ (a còng).\n• Ưu điểm: Thư đến người nhận gần như tức thì, chi phí rất rẻ, có thể đính kèm tranh ảnh, tệp văn bản...',
        imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin5-b4-s2',
        type: 'multiple_choice',
        title: 'Ký hiệu bắt buộc trong địa chỉ Email',
        question: 'Ký hiệu nào sau đây BẮT BUỘC PHẢI CÓ trong mọi địa chỉ thư điện tử (Email)?',
        options: [
          'Ký hiệu @ (A còng)',
          'Ký hiệu # (Dấu thăng)',
          'Ký hiệu $ (Đô la)',
          'Ký hiệu & (Dấu và)'
        ],
        correctIndex: 0,
        timeLimit: 25,
        points: 1000,
        explanation: 'Ký hiệu @ dùng để phân tách giữa tên người dùng và tên máy chủ dịch vụ thư.',
      },
      {
        id: 'tin5-b4-s3',
        type: 'fill_blank',
        title: 'Đính kèm tệp tin trong thư',
        question: 'Để gửi kèm một bức ảnh hoặc bài thuyết trình cùng với thư điện tử, em bấm vào nút có biểu tượng hình chiếc ... kẹp giấy.',
        acceptableAnswers: ['ghim', 'kẹp', 'cái ghim', 'kep giay', 'ghim kẹp'],
        timeLimit: 30,
        points: 1000,
        explanation: 'Biểu tượng ghim kẹp giấy (Paperclip icon) dùng để đính kèm tệp (Attach file) vào email.',
      }
    ]
  },
  // --- CHỦ ĐỀ 4: ĐẠO ĐỨC VÀ VĂN HÓA SỐ ---
  {
    id: 'tin-5-bai-6',
    topic: 'Chủ đề 4: Đạo đức, pháp luật và văn hóa số',
    title: 'Bài 6: Bản quyền nội dung số và ứng xử văn minh',
    grade: 'Lớp 5',
    pinCode: '504106',
    description: 'Tôn trọng quyền tác giả của hình ảnh, bài viết trên mạng; quy tắc giao tiếp lịch sự, văn minh trên môi trường Internet.',
    slides: [
      {
        id: 'tin5-b6-s1',
        type: 'content',
        title: 'Bài 6: Tôn trọng quyền tác giả và văn hóa mạng',
        content: '🌟 Quy tắc vàng của công dân số nhí:\n1. Tôn trọng bản quyền: Khi sử dụng hình ảnh, bài văn của người khác làm bài thuyết trình, em cần ghi rõ tên tác giả và nguồn gốc xuất xứ.\n2. Lịch sự, văn minh: Không viết lời thô tục, không xúc phạm hay trêu chọc bạn bè trong các nhóm chat học tập.\n3. Trung thực: Không mạo danh người khác, không chia sẻ tin đồn thất thiệt.',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin5-b6-s2',
        type: 'multiple_choice',
        title: 'Hành vi tôn trọng bản quyền',
        question: 'Khi sao chép một đoạn văn từ Internet vào bài thuyết trình của mình, hành động nào sau đây là ĐÚNG?',
        options: [
          'Trích dẫn rõ nguồn gốc trang web hoặc tên tác giả bài viết',
          'Xóa tên tác giả đi và nhận đó là bài tự mình viết',
          'Giữ bí mật không cho ai biết',
          'Thay đổi một vài từ rồi khoe mình sáng tác'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
      }
    ]
  },
  // --- CHỦ ĐỀ 5: ỨNG DỤNG BẢNG TÍNH EXCEL ---
  {
    id: 'tin-5-bai-7',
    topic: 'Chủ đề 5: Ứng dụng tin học',
    title: 'Bài 7: Thu thập và trình bày thông tin bằng bảng tính',
    grade: 'Lớp 5',
    pinCode: '505107',
    description: 'Làm quen phần mềm bảng tính Excel, hàng (Row), cột (Column), ô tính (Cell) và nhập dữ liệu bảng điểm/chi tiêu.',
    slides: [
      {
        id: 'tin5-b7-s1',
        type: 'content',
        title: 'Bài 7: Khám phá phần mềm bảng tính (Excel)',
        content: '📊 Phần mềm bảng tính giúp em thu thập, tính toán và quản lý dữ liệu dưới dạng bảng biểu:\n\n• Cột (Column): Được đặt tên bằng các chữ cái in hoa (A, B, C, D...).\n• Hàng (Row): Được đặt tên bằng các con số (1, 2, 3, 4...).\n• Ô tính (Cell): Là giao điểm của một cột và một hàng.\n  Ví dụ: Ô ở cột B, hàng 3 có địa chỉ là B3.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin5-b7-s2',
        type: 'multiple_choice',
        title: 'Đọc địa chỉ ô tính',
        question: 'Giao điểm của Cột D và Hàng 5 trong bảng tính Excel có tên địa chỉ ô là gì?',
        options: [
          'D5',
          '5D',
          'D-5',
          'Cell 5'
        ],
        correctIndex: 0,
        timeLimit: 25,
        points: 1000,
        explanation: 'Địa chỉ ô luôn viết tên Cột trước rồi đến số Hàng sau (D5).',
      }
    ]
  },
  // --- CHỦ ĐỀ 6: LẬP TRÌNH SCRATCH NÂNG CAO ---
  {
    id: 'tin-5-bai-11',
    topic: 'Chủ đề 6: Giải quyết vấn đề với Scratch nâng cao',
    title: 'Bài 11: Cấu trúc rẽ nhánh trong Scratch',
    grade: 'Lớp 5',
    pinCode: '506111',
    description: 'Khối lệnh điều kiện "Nếu... thì..." (if... then...) và "Nếu... thì... không thì..." (if... then... else...).',
    slides: [
      {
        id: 'tin5-b11-s1',
        type: 'content',
        title: 'Bài 11: Khối lệnh điều kiện Nếu... thì...',
        content: '🔀 Cấu trúc rẽ nhánh cho phép nhân vật quyết định hành động tùy thuộc vào một điều kiện đúng hay sai:\n\nVí dụ trong trò chơi Scratch:\n• NẾU nhân vật chạm vào ngôi sao THÌ tăng điểm lên 10 và phát âm thanh reo hò.\n• NẾU nhân vật rơi chạm vào dung nham THÌ trò chơi kết thúc (Game Over).\n\nKhối lệnh này nằm trong nhóm Điều khiển (Control - màu cam).',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin5-b11-s2',
        type: 'multiple_choice',
        title: 'Nhóm khối lệnh rẽ nhánh',
        question: 'Khối lệnh "Nếu... thì..." (if... then...) thuộc nhóm lệnh nào trong phần mềm Scratch?',
        options: [
          'Nhóm Điều khiển (Control - màu cam)',
          'Nhóm Chuyển động (Motion - màu xanh lam)',
          'Nhóm Âm thanh (Sound - màu hồng)',
          'Nhóm Biến số (Variables)'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Các khối rẽ nhánh và vòng lặp đều nằm trong nhóm lệnh Điều khiển (Control).',
      }
    ]
  },
  {
    id: 'tin-5-bai-12',
    topic: 'Chủ đề 6: Giải quyết vấn đề với Scratch nâng cao',
    title: 'Bài 12: Cấu trúc lặp trong Scratch',
    grade: 'Lớp 5',
    pinCode: '506112',
    description: 'Vòng lặp xác định số lần "lặp lại [10] lần" và vòng lặp vô hạn "liên tục" (forever).',
    slides: [
      {
        id: 'tin5-b12-s1',
        type: 'content',
        title: 'Bài 12: Vòng lặp tự động trong Scratch',
        content: '🔄 Thay vì phải ghép 100 khối lệnh giống hệt nhau, ta dùng cấu trúc lặp:\n\n1. Lặp lại số lần cố định (Repeat [n] times): Ví dụ vẽ hình vuông thì lặp lại 4 lần bước đi thẳng và quay 90 độ.\n2. Vòng lặp liên tục (Forever): Các hành động lặp đi lặp lại mãi mãi không dừng (như nhân vật chim đập cánh, xe ô tô chạy liên tục trên đường).',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin5-b12-s2',
        type: 'multiple_choice',
        title: 'Vẽ hình vuông trong Scratch',
        question: 'Để nhân vật chú mèo vẽ được một hình vuông, em cần lặp lại mấy lần động tác "Đi 100 bước và Xoay 90 độ"?',
        options: [
          'Lặp lại 4 lần',
          'Lặp lại 3 lần',
          'Lặp lại 5 lần',
          'Lặp lại 10 lần'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Hình vuông có 4 cạnh và 4 góc vuông 90 độ, nên cần lặp lại đúng 4 lần.',
      }
    ]
  }
];
