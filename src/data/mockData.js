// Dữ liệu mô phỏng chính xác từ API Wayground (_sserverv2/main/v3/)
export const SUBJECTS = [
  { id: 'mathematics', name: 'Toán', icon: 'Calculator', color: '#8854C0' },
  { id: 'science', name: 'Khoa học', icon: 'Atom', color: '#00A389' },
  { id: 'english', name: 'Ngữ văn (ELA)', icon: 'BookOpen', color: '#0084BD' },
  { id: 'social_studies', name: 'Khoa học xã hội', icon: 'Globe', color: '#EA5455' },
  { id: 'languages', name: 'Ngoại ngữ', icon: 'Languages', color: '#FA7533' },
  { id: 'arts', name: 'Nghệ thuật & Âm nhạc', icon: 'Palette', color: '#E42777' },
  { id: 'computer_science', name: 'Khoa học máy tính', icon: 'Laptop', color: '#2C9CDA' },
  { id: 'career_tech', name: 'Kỹ thuật & Hướng nghiệp', icon: 'Briefcase', color: '#099268' },
];

export const GRADES = [
  { id: 'K', name: 'Mầm non (K)' },
  { id: '1', name: 'Lớp 1' },
  { id: '2', name: 'Lớp 2' },
  { id: '3', name: 'Lớp 3' },
  { id: '4', name: 'Lớp 4' },
  { id: '5', name: 'Lớp 5' },
  { id: '6', name: 'Lớp 6' },
  { id: '7', name: 'Lớp 7' },
  { id: '8', name: 'Lớp 8' },
  { id: '9', name: 'Lớp 9' },
  { id: '10', name: 'Lớp 10' },
  { id: '11', name: 'Lớp 11' },
  { id: '12', name: 'Lớp 12' },
  { id: 'higher_ed', name: 'Đại học' },
];

export const RESOURCE_TYPES = [
  { id: 'all', name: 'Kết quả hàng đầu', icon: 'Sparkles' },
  { id: 'quiz', name: 'Đánh giá (Quiz)', icon: 'CheckSquare' },
  { id: 'lesson', name: 'Thuyết trình (Bài giảng)', icon: 'Presentation' },
  { id: 'video', name: 'Video tương tác', icon: 'Video' },
  { id: 'passage', name: 'Đoạn văn', icon: 'FileText' },
  { id: 'flashcards', name: 'Flashcards', icon: 'Layers' },
];

// Curriculums trích xuất từ REA request-77: list-standard-and-curriculums-v2
export const CURRICULUMS_BY_SUBJECT = {
  mathematics: [
    {
      id: 'envision',
      name: 'enVision Mathematics',
      publisher: 'Savvas Learning Company',
      gradeRange: 'Lớp 6 - 8',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=160&auto=format&fit=crop&q=80',
      badge: 'Phổ biến nhất',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      id: 'big_ideas',
      name: 'Big Ideas Math',
      publisher: 'Big Ideas Learning',
      gradeRange: 'Lớp 6 - 8',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=160&auto=format&fit=crop&q=80',
      badge: 'Được đề xuất',
      color: 'from-emerald-600 to-teal-700',
    },
    {
      id: 'illustrative',
      name: 'Illustrative Mathematics',
      publisher: 'Kendall Hunt',
      gradeRange: 'Lớp 6 - 8',
      image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=160&auto=format&fit=crop&q=80',
      badge: 'Mã nguồn mở',
      color: 'from-violet-600 to-purple-800',
    },
    {
      id: 'reveal_math',
      name: 'Reveal Math',
      publisher: 'McGraw Hill',
      gradeRange: 'Lớp 6 - 8',
      image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=160&auto=format&fit=crop&q=80',
      badge: 'Mới',
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 'into_math',
      name: 'Into Math',
      publisher: 'Houghton Mifflin Harcourt (HMH)',
      gradeRange: 'Lớp 6 - 8',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=160&auto=format&fit=crop&q=80',
      badge: 'Toàn diện',
      color: 'from-rose-500 to-pink-600',
    },
    {
      id: 'bluebonnet',
      name: 'Bluebonnet Learning',
      publisher: 'Texas Education Agency',
      gradeRange: 'Lớp 6 - 8',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=160&auto=format&fit=crop&q=80',
      badge: 'Chuẩn TEKS',
      color: 'from-cyan-600 to-blue-700',
    },
  ],
  science: [
    {
      id: 'ngss_science',
      name: 'Amplify Science NGSS',
      publisher: 'Amplify & Lawrence Hall of Science',
      gradeRange: 'Lớp 6 - 8',
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=160&auto=format&fit=crop&q=80',
      badge: 'Chuẩn NGSS',
      color: 'from-teal-600 to-emerald-700',
    },
    {
      id: 'elevate_science',
      name: 'Elevate Science',
      publisher: 'Savvas Learning',
      gradeRange: 'Lớp 6 - 8',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=160&auto=format&fit=crop&q=80',
      badge: 'Thực nghiệm',
      color: 'from-cyan-600 to-sky-700',
    },
  ],
  english: [
    {
      id: 'my_perspectives',
      name: 'myPerspectives ELA',
      publisher: 'Savvas Learning Company',
      gradeRange: 'Lớp 6 - 8',
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=160&auto=format&fit=crop&q=80',
      badge: 'Toàn diện',
      color: 'from-purple-600 to-indigo-700',
    },
    {
      id: 'springboard',
      name: 'SpringBoard English',
      publisher: 'College Board',
      gradeRange: 'Lớp 6 - 8',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=160&auto=format&fit=crop&q=80',
      badge: 'Nâng cao',
      color: 'from-amber-600 to-orange-700',
    },
  ]
};

// Standards trích xuất từ REA request-78: list-hqrl-sot-standards
export const STANDARDS_BY_SUBJECT = {
  mathematics: [
    {
      id: 'ccss',
      name: 'Common Core State Standards (CCSS)',
      description: 'Tiêu chuẩn cốt lõi quốc gia Hoa Kỳ cho Toán học K-12',
      code: 'CCSS.MATH',
      count: '1,420 hoạt động',
      icon: 'Award',
    },
    {
      id: 'teks',
      name: 'Texas Essential Knowledge and Skills (TEKS)',
      description: 'Tiêu chuẩn giáo dục tiểu bang Texas',
      code: 'TX.TEKS',
      count: '980 hoạt động',
      icon: 'CheckCircle2',
    },
    {
      id: 'georgia',
      name: 'Georgia’s K-12 Standards of Excellence',
      description: 'Bộ chuẩn đánh giá toán học chuẩn hóa bang Georgia',
      code: 'GSE',
      count: '810 hoạt động',
      icon: 'Bookmark',
    },
    {
      id: 'nys',
      name: 'New York State Next Generation Learning',
      description: 'Tiêu chuẩn học tập thế hệ mới của Bang New York',
      code: 'NY.NGLS',
      count: '760 hoạt động',
      icon: 'ShieldCheck',
    },
    {
      id: 'nc',
      name: 'North Carolina Standard Course of Study',
      description: 'Chương trình học chuẩn Bang North Carolina',
      code: 'NC.SCOS',
      count: '640 hoạt động',
      icon: 'GraduationCap',
    },
    {
      id: 'sc',
      name: 'South Carolina College & Career Ready Standards',
      description: 'Chuẩn chuẩn bị đại học và nghề nghiệp South Carolina',
      code: 'SC.CCRS',
      count: '590 hoạt động',
      icon: 'FileCheck',
    },
  ],
  science: [
    {
      id: 'ngss',
      name: 'Next Generation Science Standards (NGSS)',
      description: 'Chuẩn khoa học thế hệ mới với mô hình 3 chiều thực nghiệm',
      code: 'NGSS',
      count: '1,120 hoạt động',
      icon: 'Atom',
    },
    {
      id: 'teks_sci',
      name: 'Texas Essential Knowledge (TEKS Science)',
      description: 'Tiêu chuẩn thực nghiệm khoa học Texas',
      code: 'TX.SCI',
      count: '720 hoạt động',
      icon: 'Award',
    },
  ],
  english: [
    {
      id: 'ccss_ela',
      name: 'Common Core ELA Standards',
      description: 'Chuẩn đọc hiểu, viết, ngôn ngữ và giao tiếp',
      code: 'CCSS.ELA',
      count: '1,350 hoạt động',
      icon: 'BookOpen',
    },
  ]
};

// Domains & Topics trích xuất từ REA request-79: complete-domains-v2 & admin_dom.html
export const DOMAINS_BY_SUBJECT = {
  mathematics: [
    {
      id: 'ratios',
      title: 'Tỷ lệ và mối quan hệ tỷ lệ thuận',
      englishTitle: 'Ratios & Proportional Relationships',
      icon: 'Percent',
      topicCount: 5,
      topics: [
        {
          id: 'topic_1',
          code: 'Chủ đề 1',
          title: 'Hiểu về Tỷ lệ và khái niệm cơ bản',
          questions: 18,
          duration: '15 phút',
          plays: '124.5k lượt chơi',
          rating: 4.9,
          type: 'quiz',
          sampleQuestions: [
            {
              question: 'Một công thức làm bánh yêu cầu 2 cốc đường cho mỗi 3 cốc bột. Tỷ lệ giữa đường và bột là bao nhiêu?',
              options: ['2:3', '3:2', '2:5', '3:5'],
              correct: 0,
            },
            {
              question: 'Nếu tỷ lệ số học sinh nam và nữ trong lớp là 4:5 và có 20 nam, thì có bao nhiêu nữ?',
              options: ['20', '25', '30', '16'],
              correct: 1,
            }
          ]
        },
        {
          id: 'topic_2',
          code: 'Chủ đề 2',
          title: 'Bảng tỷ lệ và đồ thị tọa độ',
          questions: 14,
          duration: '20 phút',
          plays: '98.2k lượt chơi',
          rating: 4.8,
          type: 'lesson',
        },
        {
          id: 'topic_3',
          code: 'Chủ đề 3',
          title: 'Tỷ lệ đơn vị và giải quyết vấn đề thực tế',
          questions: 20,
          duration: '25 phút',
          plays: '150.1k lượt chơi',
          rating: 4.9,
          type: 'quiz',
        },
        {
          id: 'topic_4',
          code: 'Chủ đề 4',
          title: 'Phần trăm của một số và tỷ lệ phần trăm',
          questions: 16,
          duration: '15 phút',
          plays: '89.4k lượt chơi',
          rating: 4.7,
          type: 'flashcards',
        },
        {
          id: 'topic_5',
          code: 'Chủ đề 5',
          title: 'Chuyển đổi đơn vị đo lường bằng tỷ lệ',
          questions: 12,
          duration: '18 phút',
          plays: '67.0k lượt chơi',
          rating: 4.8,
          type: 'video',
        },
      ]
    },
    {
      id: 'number_system',
      title: 'Hệ thống số (The Number System)',
      englishTitle: 'The Number System',
      icon: 'Binary',
      topicCount: 8,
      topics: [
        {
          id: 'ns_1',
          code: 'Chủ đề 1',
          title: 'Phép chia phân số và hỗn số',
          questions: 15,
          duration: '15 phút',
          plays: '210k lượt chơi',
          rating: 4.9,
          type: 'quiz',
        },
        {
          id: 'ns_2',
          code: 'Chủ đề 2',
          title: 'Phép cộng trừ nhân chia số thập phân nhiều chữ số',
          questions: 20,
          duration: '20 phút',
          plays: '180k lượt chơi',
          rating: 4.8,
          type: 'lesson',
        },
        {
          id: 'ns_3',
          code: 'Chủ đề 3',
          title: 'Ước chung lớn nhất (UCLN) và Bội chung nhỏ nhất (BCNN)',
          questions: 16,
          duration: '15 phút',
          plays: '145k lượt chơi',
          rating: 4.7,
          type: 'quiz',
        },
        {
          id: 'ns_4',
          code: 'Chủ đề 4',
          title: 'Số nguyên âm và ý nghĩa trong đời sống',
          questions: 12,
          duration: '12 phút',
          plays: '190k lượt chơi',
          rating: 4.9,
          type: 'flashcards',
        },
      ]
    },
    {
      id: 'expressions',
      title: 'Biểu thức và phương trình',
      englishTitle: 'Expressions & Equations',
      icon: 'CodeXml',
      topicCount: 6,
      topics: [
        {
          id: 'ee_1',
          code: 'Chủ đề 1',
          title: 'Viết và tính giá trị biểu thức số có lũy thừa',
          questions: 15,
          duration: '15 phút',
          plays: '132k lượt chơi',
          rating: 4.8,
          type: 'quiz',
        },
        {
          id: 'ee_2',
          code: 'Chủ đề 2',
          title: 'Biểu thức đại số chứa biến số',
          questions: 18,
          duration: '20 phút',
          plays: '115k lượt chơi',
          rating: 4.8,
          type: 'lesson',
        },
        {
          id: 'ee_3',
          code: 'Chủ đề 3',
          title: 'Giải phương trình bậc nhất một ẩn cơ bản',
          questions: 22,
          duration: '25 phút',
          plays: '178k lượt chơi',
          rating: 4.9,
          type: 'quiz',
        },
      ]
    },
    {
      id: 'geometry',
      title: 'Hình học',
      englishTitle: 'Geometry',
      icon: 'Shapes',
      topicCount: 4,
      topics: [
        {
          id: 'geo_1',
          code: 'Chủ đề 1',
          title: 'Diện tích tam giác, hình bình hành và hình thang',
          questions: 14,
          duration: '15 phút',
          plays: '140k lượt chơi',
          rating: 4.8,
          type: 'quiz',
        },
        {
          id: 'geo_2',
          code: 'Chủ đề 2',
          title: 'Thể tích hình hộp chữ nhật với cạnh là phân số',
          questions: 16,
          duration: '18 phút',
          plays: '105k lượt chơi',
          rating: 4.7,
          type: 'video',
        },
      ]
    },
    {
      id: 'statistics',
      title: 'Thống kê và xác suất',
      englishTitle: 'Statistics & Probability',
      icon: 'BarChart2',
      topicCount: 5,
      topics: [
        {
          id: 'stat_1',
          code: 'Chủ đề 1',
          title: 'Nhận biết câu hỏi thống kê và biến thể dữ liệu',
          questions: 12,
          duration: '12 phút',
          plays: '95k lượt chơi',
          rating: 4.7,
          type: 'quiz',
        },
        {
          id: 'stat_2',
          code: 'Chủ đề 2',
          title: 'Giá trị trung bình, trung vị, mốt và khoảng biến thiên',
          questions: 20,
          duration: '20 phút',
          plays: '160k lượt chơi',
          rating: 4.9,
          type: 'lesson',
        },
      ]
    }
  ],
  science: [
    {
      id: 'matter',
      title: 'Cấu trúc và tính chất của vật chất',
      englishTitle: 'Structure & Properties of Matter',
      icon: 'Atom',
      topicCount: 4,
      topics: [
        {
          id: 'sci_1',
          code: 'Chủ đề 1',
          title: 'Nguyên tử và phân tử: Cấu tạo chất',
          questions: 15,
          duration: '15 phút',
          plays: '110k lượt chơi',
          rating: 4.9,
          type: 'quiz',
        },
        {
          id: 'sci_2',
          code: 'Chủ đề 2',
          title: 'Biến đổi trạng thái: Rắn, Lỏng, Khí',
          questions: 18,
          duration: '18 phút',
          plays: '95k lượt chơi',
          rating: 4.8,
          type: 'video',
        }
      ]
    },
    {
      id: 'energy',
      title: 'Năng lượng và chuyển hóa năng lượng',
      englishTitle: 'Energy & Transformations',
      icon: 'Zap',
      topicCount: 4,
      topics: [
        {
          id: 'eng_1',
          code: 'Chủ đề 1',
          title: 'Động năng và Thế năng',
          questions: 16,
          duration: '16 phút',
          plays: '120k lượt chơi',
          rating: 4.9,
          type: 'quiz',
        }
      ]
    }
  ]
};

// Danh sách hoạt động tìm kiếm / kết quả chi tiết
export const SAMPLE_ACTIVITIES = [
  {
    id: 'act-1',
    title: 'Ôn tập Tỷ lệ và Tỷ số Phần trăm - Lớp 6',
    subject: 'mathematics',
    grade: '6',
    type: 'quiz',
    questionsCount: 15,
    plays: '42.8k',
    author: 'Nguyễn Thị Mai (Giáo viên THCS)',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&auto=format&fit=crop&q=80',
    accuracy: '86%',
    difficulty: 'Trung bình',
    tags: ['Tỷ lệ', 'Phần trăm', 'Lớp 6', 'Toán học'],
    standard: 'CCSS.MATH.6.RP.A.1',
    questions: [
      {
        id: 'q1',
        title: 'Một lớp có 18 bạn nữ và 12 bạn nam. Tỷ số rút gọn giữa số bạn nam và số bạn nữ là:',
        options: ['2/3', '3/2', '12/18', '2/5'],
        correctIndex: 0,
        explanation: '12 / 18 rút gọn cho ước chung 6 được 2/3.'
      },
      {
        id: 'q2',
        title: 'Một chiếc áo có giá gốc 200.000đ được giảm giá 15%. Số tiền được giảm là:',
        options: ['15.000đ', '20.000đ', '30.000đ', '35.000đ'],
        correctIndex: 2,
        explanation: '200.000 x 15% = 30.000đ.'
      },
      {
        id: 'q3',
        title: 'Xe máy đi 120 km hết 3 giờ. Vận tốc đơn vị (km/h) của xe máy là:',
        options: ['30 km/h', '40 km/h', '45 km/h', '50 km/h'],
        correctIndex: 1,
        explanation: '120 km / 3 giờ = 40 km/h.'
      }
    ]
  },
  {
    id: 'act-2',
    title: 'Bài giảng tương tác: Phân số & Số thập phân',
    subject: 'mathematics',
    grade: '6',
    type: 'lesson',
    questionsCount: 12,
    plays: '28.1k',
    author: 'Trần Văn Hùng',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&auto=format&fit=crop&q=80',
    accuracy: '91%',
    difficulty: 'Dễ',
    tags: ['Phân số', 'Số thập phân', 'Bài giảng'],
    standard: 'CCSS.MATH.6.NS.B.3',
    questions: [
      {
        id: 'q1',
        title: 'Phân số 3/4 được viết dưới dạng số thập phân là:',
        options: ['0.34', '0.75', '0.6', '0.7'],
        correctIndex: 1,
        explanation: '3 chia 4 bằng 0.75.'
      }
    ]
  },
  {
    id: 'act-3',
    title: 'Thực hành nhanh: Ước chung lớn nhất & Bội chung nhỏ nhất',
    subject: 'mathematics',
    grade: '6',
    type: 'quiz',
    questionsCount: 10,
    plays: '19.4k',
    author: 'Lê Hoàng Sơn',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=400&auto=format&fit=crop&q=80',
    accuracy: '78%',
    difficulty: 'Khó',
    tags: ['UCLN', 'BCNN', 'Số học'],
    standard: 'CCSS.MATH.6.NS.B.4',
    questions: [
      {
        id: 'q1',
        title: 'Ước chung lớn nhất của 24 và 36 là:',
        options: ['6', '8', '12', '18'],
        correctIndex: 2,
        explanation: '24 = 2^3 * 3, 36 = 2^2 * 3^2 -> UCLN = 2^2 * 3 = 12.'
      }
    ]
  },
  {
    id: 'act-4',
    title: 'Video tương tác: Khám phá Thế giới Nguyên tử & Phân tử',
    subject: 'science',
    grade: '6',
    type: 'video',
    questionsCount: 8,
    plays: '34.2k',
    author: 'Vũ Thảo Vy',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400&auto=format&fit=crop&q=80',
    accuracy: '88%',
    difficulty: 'Dễ',
    tags: ['Khoa học tự nhiên', 'Nguyên tử', 'Video tương tác'],
    standard: 'NGSS.MS-PS1-1',
    questions: [
      {
        id: 'q1',
        title: 'Hạt nhân nguyên tử gồm những loại hạt nào?',
        options: ['Proton và Electron', 'Proton và Neutron', 'Electron và Neutron', 'Chỉ có Proton'],
        correctIndex: 1,
        explanation: 'Hạt nhân gồm proton mang điện tích dương và neutron không mang điện.'
      }
    ]
  },
  {
    id: 'act-5',
    title: 'Flashcards: Từ vựng Tiếng Anh theo chủ đề Trường học',
    subject: 'english',
    grade: '6',
    type: 'flashcards',
    questionsCount: 25,
    plays: '61.7k',
    author: 'Sarah Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=80',
    accuracy: '94%',
    difficulty: 'Dễ',
    tags: ['Vocabulary', 'School Life', 'English 6'],
    standard: 'CCSS.ELA-LITERACY.L.6.4',
    questions: [
      {
        id: 'q1',
        title: 'Nghĩa của từ "Curriculum" trong ngữ cảnh giáo dục là gì?',
        options: ['Sách giáo khoa', 'Chương trình giảng dạy', 'Thời khóa biểu', 'Kỳ thi'],
        correctIndex: 1,
        explanation: 'Curriculum có nghĩa là chương trình học hoặc khung giảng dạy.'
      }
    ]
  }
];
