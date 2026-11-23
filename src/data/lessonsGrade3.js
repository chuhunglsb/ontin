// DANH MỤC BÀI HỌC TIN HỌC LỚP 3
// Bộ sách "Kết nối tri thức với cuộc sống" - Nhà xuất bản Giáo dục Việt Nam

export const LESSONS_GRADE_3 = [
  // --- CHỦ ĐỀ 1: MÁY TÍNH VÀ EM ---
  {
    id: 'tin-3-bai-1',
    topic: 'Chủ đề 1: Máy tính và em',
    title: 'Bài 1: Thông tin và quyết định',
    grade: 'Lớp 3',
    pinCode: '301101',
    description: 'Nhận biết thông tin thu nhận từ các giác quan và cách con người đưa ra quyết định dựa trên thông tin.',
    slides: [
      {
        id: 'tin3-b1-s1',
        type: 'content',
        layout: 'text_image',
        title: 'Bài 1: Thông tin và quyết định',
        content: 'Mục tiêu bài học:\n1. Nhận biết được thông tin thu nhận qua các giác quan (mắt thấy, tai nghe, mũi ngửi, tay sờ...).\n2. Nêu được ví dụ về việc con người đưa ra quyết định dựa trên thông tin thu nhận được.',
        imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&auto=format&fit=crop&q=80',
        caption: 'Mỗi ngày chúng ta tiếp nhận rất nhiều thông tin từ thế giới xung quanh',
      },
      {
        id: 'tin3-b1-s2',
        type: 'content',
        layout: 'two_columns',
        title: 'Khám phá: Thông tin là gì?',
        content: '• Thông tin là những hiểu biết của con người về thế giới xung quanh và về chính bản thân mình.\n\nVí dụ:\n- Nhìn thấy đèn tín hiệu giao thông chuyển màu đỏ.\n- Nghe thấy tiếng trống trường báo giờ vào lớp.\n- Đọc được dự báo thời tiết ngày mai có mưa.',
        contentRight: '• Quyết định là gì?\nSau khi tiếp nhận thông tin, con người sẽ suy nghĩ và hành động phù hợp. Đó là đưa ra quyết định!\n\nVí dụ:\n- Thấy đèn đỏ → Quyết định dừng xe lại.\n- Nghe tiếng chuông báo thức → Quyết định thức dậy để đi học.',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin3-b1-s3',
        type: 'multiple_choice',
        title: 'Câu hỏi 1: Nhận biết thông tin',
        question: 'Khi nhìn thấy mây đen kéo kín bầu trời và có gió thổi mạnh, thông tin này giúp em đưa ra quyết định gì?',
        options: [
          'Mang theo áo mưa hoặc ô khi đi học',
          'Mặc quần áo ấm như mùa đông',
          'Đi bơi ngoài trời',
          'Tưới thêm thật nhiều nước cho cây ngoài vườn'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Mây đen và gió mạnh là dấu hiệu trời sắp mưa, quyết định đúng đắn là chuẩn bị áo mưa hoặc ô.',
      },
      {
        id: 'tin3-b1-s4',
        type: 'checkbox',
        title: 'Câu hỏi 2: Giác quan thu nhận thông tin',
        question: 'Những giác quan nào sau đây giúp con người thu nhận thông tin từ môi trường xung quanh? (Chọn tất cả đáp án đúng)',
        options: [
          'Thị giác (Mắt nhìn)',
          'Thính giác (Tai nghe)',
          'Khứu giác (Mũi ngửi)',
          'Cảm giác (Xúc giác sờ chạm)'
        ],
        correctIndices: [0, 1, 2, 3],
        timeLimit: 35,
        points: 1200,
        explanation: 'Cả 5 giác quan (thị giác, thính giác, khứu giác, vị giác, xúc giác) đều giúp con người tiếp nhận thông tin.',
      },
      {
        id: 'tin3-b1-s5',
        type: 'fill_blank',
        title: 'Câu hỏi 3: Điền từ còn thiếu',
        question: 'Tiếng trống trường vang lên báo hiệu giờ ra chơi đã hết, học sinh nhanh chóng đi vào ... học.',
        acceptableAnswers: ['lớp', 'lop', 'phòng', 'phong'],
        timeLimit: 25,
        points: 1000,
        explanation: 'Tiếng trống trường là thông tin giúp học sinh đưa ra quyết định đi vào lớp học đúng giờ.',
      }
    ]
  },
  {
    id: 'tin-3-bai-2',
    topic: 'Chủ đề 1: Máy tính và em',
    title: 'Bài 2: Xử lý thông tin',
    grade: 'Lớp 3',
    pinCode: '301102',
    description: 'Tìm hiểu 3 bước trong quá trình xử lý thông tin: Thu nhận thông tin - Xử lý thông tin - Đưa ra quyết định/kết quả.',
    slides: [
      {
        id: 'tin3-b2-s1',
        type: 'content',
        layout: 'text_image',
        title: 'Bài 2: Xử lý thông tin ở con người và máy tính',
        content: 'Quá trình xử lý thông tin gồm 3 bước cơ bản:\n1. Thu nhận thông tin (Thông tin vào)\n2. Xử lý thông tin (Bộ não hoặc CPU máy tính phân tích)\n3. Đưa ra kết quả / quyết định (Thông tin ra)',
        imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin3-b2-s2',
        type: 'multiple_choice',
        title: 'Câu hỏi trắc nghiệm: Quá trình xử lý',
        question: 'Khi cô giáo đọc phép tính "5 + 3 = ?", tai em nghe thấy phép tính là bước nào trong quá trình xử lý thông tin?',
        options: [
          'Thu nhận thông tin (Thông tin vào)',
          'Xử lý thông tin',
          'Đưa ra kết quả (Thông tin ra)',
          'Lưu trữ thông tin'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Tai nghe thấy cô giáo đọc đề bài chính là bước thu nhận thông tin vào bộ não.',
      }
    ]
  },
  {
    id: 'tin-3-bai-3',
    topic: 'Chủ đề 1: Máy tính và em',
    title: 'Bài 3: Máy tính - Những người bạn mới',
    grade: 'Lớp 3',
    pinCode: '682915',
    description: '4 bộ phận chính của máy tính để bàn và các loại máy tính thông dụng (Laptop, Tablet).',
    slides: [
      {
        id: 'tin3-b3-s1',
        type: 'content',
        layout: 'text_image',
        title: 'Bài 3: Máy tính - Những người bạn mới',
        content: 'Mục tiêu:\n1. Nhận biết 4 bộ phận chính: Thân máy, Màn hình, Bàn phím, Chuột.\n2. Phân biệt máy tính để bàn, máy tính xách tay và máy tính bảng.',
        imageUrl: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin3-b3-s2',
        type: 'multiple_choice',
        title: 'Bộ não của máy tính',
        question: 'Bộ phận nào của máy tính để bàn chứa bộ xử lý, được ví như "bộ não" điều khiển mọi hoạt động của máy tính?',
        options: [
          'Thân máy tính',
          'Màn hình máy tính',
          'Bàn phím máy tính',
          'Chuột máy tính'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Thân máy chứa bộ xử lý trung tâm (CPU), tiếp nhận và xử lý mọi thông tin.',
      },
      {
        id: 'tin3-b3-s3',
        type: 'checkbox',
        title: 'Đặc điểm máy tính xách tay',
        question: 'Những bộ phận nào của máy tính xách tay được gắn liền vào thân máy?',
        options: [
          'Màn hình',
          'Bàn phím',
          'Vùng cảm ứng chuột',
          'Loa thùng cồng kềnh'
        ],
        correctIndices: [0, 1, 2],
        timeLimit: 30,
        points: 1200,
      }
    ]
  },
  {
    id: 'tin-3-bai-4',
    topic: 'Chủ đề 1: Máy tính và em',
    title: 'Bài 4: Làm việc với máy tính',
    grade: 'Lớp 3',
    pinCode: '301104',
    description: 'Tư thế ngồi đúng khi dùng máy tính, cách bật/tắt máy tính đúng quy trình an toàn.',
    slides: [
      {
        id: 'tin3-b4-s1',
        type: 'content',
        layout: 'text_image',
        title: 'Bài 4: Làm việc với máy tính đúng cách',
        content: '🌟 Quy tắc tư thế ngồi chuẩn:\n• Lưng thẳng, hai chân đặt thoải mái trên mặt sàn.\n• Mắt ngang hoặc hơi thấp hơn mép trên màn hình, khoảng cách từ mắt đến màn hình khoảng 50 - 70 cm.\n• Tay thả lỏng tự nhiên, cổ tay thẳng với bàn phím và chuột.\n\n🔌 Bật và tắt máy tính:\n• Bật: Bấm nút nguồn trên thân máy và màn hình.\n• Tắt: Chọn nút Start → Power → Shut down (Không rút phích cắm đột ngột).',
        imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin3-b4-s2',
        type: 'multiple_choice',
        title: 'Khoảng cách an toàn cho mắt',
        question: 'Khoảng cách an toàn từ mắt đến màn hình máy tính nên duy trì là bao nhiêu?',
        options: [
          '50 cm đến 70 cm',
          '10 cm đến 20 cm',
          'Trên 2 mét',
          'Càng gần càng tốt'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Giữ khoảng cách 50 - 70 cm (khoảng một sải tay) giúp bảo vệ thị lực của học sinh.',
      }
    ]
  },
  {
    id: 'tin-3-bai-5',
    topic: 'Chủ đề 1: Máy tính và em',
    title: 'Bài 5: Sử dụng bàn phím máy tính',
    grade: 'Lớp 3',
    pinCode: '301105',
    description: 'Các hàng phím trên bàn phím: Hàng phím cơ sở, hàng phím trên, hàng phím dưới, hai phím có gờ F và J.',
    slides: [
      {
        id: 'tin3-b5-s1',
        type: 'content',
        layout: 'text_image',
        title: 'Bài 5: Khu vực chính của bàn phím',
        content: 'Bàn phím gồm các hàng phím quan trọng:\n• Hàng phím số (ở trên cùng)\n• Hàng phím trên: Q W E R T Y U I O P\n• Hàng phím cơ sở: A S D F G H J K L ;\n  👉 Đặc biệt: Phím F và J là 2 phím có gờ để định vị ngón trỏ!\n• Hàng phím dưới: Z X C V B N M , .\n• Hàng phím dưới cùng: Phím cách (Space bar) dài nhất.',
        imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin3-b5-s2',
        type: 'multiple_choice',
        title: 'Hai phím có gờ định vị',
        question: 'Trên hàng phím cơ sở, hai phím nào có gờ nhô lên để đặt hai ngón tay trỏ làm mốc?',
        options: [
          'Phím F và phím J',
          'Phím A và phím L',
          'Phím G và phím H',
          'Phím Q và phím P'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Phím F và J có gờ nổi để ngón trỏ tay trái đặt vào F, ngón trỏ tay phải đặt vào J mà không cần nhìn.',
      }
    ]
  },
  {
    id: 'tin-3-bai-6',
    topic: 'Chủ đề 1: Máy tính và em',
    title: 'Bài 6: Sử dụng chuột máy tính',
    grade: 'Lớp 3',
    pinCode: '301106',
    description: 'Cấu tạo chuột và 5 thao tác cơ bản: Di chuyển chuột, Nháy chuột, Nháy đúp, Nháy nút phải, Kéo thả chuột.',
    slides: [
      {
        id: 'tin3-b6-s1',
        type: 'content',
        title: 'Bài 6: Các thao tác với chuột máy tính',
        content: '5 thao tác sử dụng chuột cơ bản:\n1. Di chuyển chuột: Thay đổi vị trí con trỏ trên màn hình.\n2. Nháy chuột (Click): Nhấn nút trái chuột rồi thả tay ra.\n3. Nháy đúp chuột (Double click): Nhấn nhanh nút trái chuột 2 lần liên tiếp để mở tệp/phần mềm.\n4. Nháy nút phải chuột (Right click): Nhấn nút phải rồi thả ra để mở bảng chọn menu.\n5. Kéo thả chuột (Drag and drop): Nhấn giữ nút trái, di chuyển đến vị trí mới rồi thả tay.',
        imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin3-b6-s2',
        type: 'multiple_choice',
        title: 'Mở một biểu tượng trên màn hình',
        question: 'Để mở một phần mềm hoặc thư mục trên màn hình nền, em thường thực hiện thao tác nào?',
        options: [
          'Nháy đúp chuột (nhấn nhanh 2 lần nút trái)',
          'Nháy nút phải chuột 1 lần',
          'Chỉ cần di chuyển chuột qua',
          'Nhấn giữ nút cuộn'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Thao tác nháy đúp chuột (Double click) dùng để mở các ứng dụng, tài liệu trên máy tính.',
      }
    ]
  },
  // --- CHỦ ĐỀ 2: MẠNG MÁY TÍNH VÀ INTERNET ---
  {
    id: 'tin-3-bai-7',
    topic: 'Chủ đề 2: Mạng máy tính và Internet',
    title: 'Bài 7: Khám phá Internet',
    grade: 'Lớp 3',
    pinCode: '302107',
    description: 'Khái niệm Internet là kho thông tin khổng lồ kết nối toàn cầu, lợi ích và cảnh báo an toàn.',
    slides: [
      {
        id: 'tin3-b7-s1',
        type: 'content',
        title: 'Bài 7: Internet - Kho tàng tri thức thế giới',
        content: '🌐 Internet là gì?\n• Là mạng máy tính kết nối hàng triệu máy tính trên toàn thế giới lại với nhau.\n• Giúp em xem tin tức, xem video học tập, đọc sách, nghe nhạc, học tiếng Anh trực tuyến và liên lạc với bạn bè, người thân ở xa.',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin3-b7-s2',
        type: 'checkbox',
        title: 'Những việc em có thể làm trên Internet',
        question: 'Những hoạt động bổ ích nào sau đây em có thể thực hiện trên Internet? (Chọn tất cả đáp án đúng)',
        options: [
          'Học tiếng Anh và xem bài giảng khoa học',
          'Tìm kiếm hình ảnh các loài động vật hoang dã',
          'Xem bản đồ và cảnh đẹp quê hương đất nước',
          'Tự ý cung cấp số điện thoại và địa chỉ nhà cho người lạ'
        ],
        correctIndices: [0, 1, 2],
        timeLimit: 35,
        points: 1200,
        explanation: 'Không bao giờ được tự ý chia sẻ thông tin cá nhân (địa chỉ nhà, số điện thoại) cho người lạ trên mạng.',
      }
    ]
  },
  // --- CHỦ ĐỀ 3: TỔ CHỨC LƯU TRỮ VÀ TÌM KIẾM ---
  {
    id: 'tin-3-bai-8',
    topic: 'Chủ đề 3: Tổ chức lưu trữ, tìm kiếm thông tin',
    title: 'Bài 8: Sắp xếp để dễ tìm',
    grade: 'Lớp 3',
    pinCode: '303108',
    description: 'Sắp xếp đồ vật và dữ liệu theo nhóm, danh mục để tìm kiếm nhanh chóng và thuận tiện.',
    slides: [
      {
        id: 'tin3-b8-s1',
        type: 'content',
        title: 'Bài 8: Sắp xếp thông tin và đồ vật khoa học',
        content: '• Khi sắp xếp sách vở, đồ chơi theo từng ngăn hoặc theo môn học, em sẽ tìm kiếm rất nhanh mà không mất thời gian xới tung mọi thứ.\n• Trong máy tính cũng vậy: Các bài hát, tranh vẽ, tài liệu học tập được chia thành các thư mục riêng biệt giúp việc tìm kiếm dễ dàng.',
        imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin3-b8-s2',
        type: 'multiple_choice',
        title: 'Lợi ích của việc sắp xếp hợp lý',
        question: 'Lợi ích lớn nhất của việc sắp xếp đồ vật và tệp tin trong máy tính một cách gọn gàng, có trật tự là gì?',
        options: [
          'Giúp tìm kiếm nhanh chóng và dễ dàng khi cần',
          'Làm cho máy tính nặng hơn',
          'Làm cho đồ vật bị biến mất',
          'Không có tác dụng gì'
        ],
        correctIndex: 0,
        timeLimit: 25,
        points: 1000,
      }
    ]
  },
  // --- CHỦ ĐỀ 4: ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HÓA SỐ ---
  {
    id: 'tin-3-bai-10',
    topic: 'Chủ đề 4: Đạo đức, pháp luật và văn hóa số',
    title: 'Bài 10: Quy tắc an toàn khi sử dụng máy tính',
    grade: 'Lớp 3',
    pinCode: '304110',
    description: 'An toàn về điện, an toàn cho sức khỏe và bảo vệ dữ liệu trong phòng máy tính trường học.',
    slides: [
      {
        id: 'tin3-b10-s1',
        type: 'content',
        title: 'Bài 10: Quy tắc an toàn trong phòng máy tính',
        content: '⚠️ Những điều TUYỆT ĐỐI KHÔNG làm:\n1. Không dùng tay ướt chạm vào dây nguồn, ổ cắm hoặc bật tắt công tắc điện.\n2. Không mang đồ ăn, nước uống vào phòng thực hành máy tính.\n3. Không tự ý cắm vật lạ vào các khe cắm trên thân máy tính.\n4. Không dùng máy tính liên tục quá 30 - 45 phút, cần nghỉ ngơi thư giãn mắt.',
        imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin3-b10-s2',
        type: 'checkbox',
        title: 'Hành vi đúng trong phòng tin học',
        question: 'Những hành động nào sau đây là ĐÚNG NỘI QUY phòng máy tính? (Chọn tất cả đáp án đúng)',
        options: [
          'Ngồi đúng vị trí máy tính được phân công',
          'Lắng nghe hướng dẫn của thầy cô trước khi thực hành',
          'Tắt máy tính đúng cách và dọn ghế gọn gàng trước khi ra về',
          'Vừa học vừa ăn bánh kẹo và uống nước ngọt'
        ],
        correctIndices: [0, 1, 2],
        timeLimit: 30,
        points: 1200,
      }
    ]
  },
  // --- CHỦ ĐỀ 5: ỨNG DỤNG TIN HỌC ---
  {
    id: 'tin-3-bai-12',
    topic: 'Chủ đề 5: Ứng dụng tin học',
    title: 'Bài 12: Em tập vẽ với phần mềm Paint',
    grade: 'Lớp 3',
    pinCode: '305112',
    description: 'Làm quen với giao diện Paint, công cụ bút chì, tẩy, các hình mẫu cơ bản và hộp màu.',
    slides: [
      {
        id: 'tin3-b12-s1',
        type: 'content',
        title: 'Bài 12: Làm quen với phần mềm đồ họa Paint',
        content: '🎨 Các công cụ vẽ cơ bản trong Paint:\n• Bút vẽ (Brushes / Pencil): Vẽ nét tự do.\n• Tẩy (Eraser): Xóa phần hình vẽ chưa ưng ý.\n• Tô màu (Fill with color - biểu tượng thùng sơn): Đổ màu vào hình kín.\n• Hình mẫu (Shapes): Vẽ đường thẳng, hình chữ nhật, hình tròn, ngôi sao...',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin3-b12-s2',
        type: 'multiple_choice',
        title: 'Công cụ đổ màu',
        question: 'Để tô màu cho một hình vẽ khép kín trong Paint, em sử dụng công cụ có hình biểu tượng gì?',
        options: [
          'Thùng sơn đang đổ màu',
          'Cây bút chì',
          'Cục tẩy màu hồng',
          'Kính lúp phóng to'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Công cụ Fill with color có hình thùng sơn đang nghiêng đổ màu.',
      }
    ]
  },
  // --- CHỦ ĐỀ 6: GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP MÁY TÍNH ---
  {
    id: 'tin-3-bai-13',
    topic: 'Chủ đề 6: Giải quyết vấn đề với sự trợ giúp của máy tính',
    title: 'Bài 13: Thuật toán và em',
    grade: 'Lớp 3',
    pinCode: '306113',
    description: 'Khái niệm thuật toán là dãy các bước nối tiếp nhau theo thứ tự để hoàn thành một nhiệm vụ.',
    slides: [
      {
        id: 'tin3-b13-s1',
        type: 'content',
        title: 'Bài 13: Các bước thực hiện công việc (Thuật toán)',
        content: '🤖 Thuật toán là gì?\n• Là một chuỗi các bước hướng dẫn rõ ràng, được thực hiện tuần tự từ đầu đến cuối để hoàn thành một công việc cụ thể.\n\nVí dụ: Thuật toán rửa tay sạch khuẩn 6 bước:\nBước 1: Làm ướt tay với nước sạch.\nBước 2: Lấy xà phòng và xoa đều hai lòng bàn tay.\nBước 3: Chà mu bàn tay và kẽ ngón tay.\nBước 4: Rửa sạch xà phòng dưới vòi nước chảy.\nBước 5: Lau khô tay bằng khăn sạch.',
        imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&auto=format&fit=crop&q=80',
      },
      {
        id: 'tin3-b13-s2',
        type: 'multiple_choice',
        title: 'Tính tuần tự của các bước',
        question: 'Khi thực hiện một thuật toán, thứ tự các bước cần được tuân thủ như thế nào?',
        options: [
          'Thực hiện tuần tự đúng theo thứ tự từng bước',
          'Làm bước nào trước cũng được, tùy hứng',
          'Bỏ qua các bước đầu, làm bước cuối luôn',
          'Đảo lộn lung tung'
        ],
        correctIndex: 0,
        timeLimit: 30,
        points: 1000,
        explanation: 'Thuật toán đòi hỏi phải làm đúng tuần tự từng bước thì mới ra kết quả chính xác.',
      }
    ]
  }
];
