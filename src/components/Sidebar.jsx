import React from 'react';
import { 
  Home, 
  FolderHeart, 
  BarChart3, 
  Users, 
  Gamepad2, 
  LogIn, 
  Sparkles,
  ChevronRight,
  BookOpen
} from 'lucide-react';

export default function Sidebar({ activeNav, setActiveNav, onOpenAuth }) {
  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: Home, badge: null },
    { id: 'library', label: 'Thư viện của tôi', icon: FolderHeart, badge: null },
    { id: 'reports', label: 'Báo cáo', icon: BarChart3, badge: null },
    { id: 'students', label: 'Học sinh & Lớp', icon: Users, badge: null },
    { id: 'playground', label: 'Sân chơi', icon: Gamepad2, badge: 'Mới' },
  ];

  return (
    <aside 
      data-testid="expanded-sidebar" 
      className="w-64 bg-white border-r border-[#e5e5e8] flex flex-col justify-between h-screen sticky top-0 z-30 select-none"
    >
      {/* Logo & Brand Header */}
      <div>
        <div className="p-4 flex items-center justify-between border-b border-[#f1f1f4]">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveNav('home')}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8854c0] to-[#aa3bff] flex items-center justify-center text-white shadow-sm font-bold text-lg">
              O
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#121212]">ONTIN</span>
              </div>
              <p className="text-[10px] text-[#737373] font-medium leading-none">Học tập & Thuyết trình</p>
            </div>
          </div>
          <span className="text-[10px] font-semibold bg-[#f3ecfb] text-[#8854c0] px-2 py-0.5 rounded-full">
            VI
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#f3ecfb] text-[#8854c0] font-semibold'
                    : 'text-[#525252] hover:bg-[#f8f8fa] hover:text-[#121212]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#8854c0]' : 'text-[#737373]'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] bg-[#00a389] text-white px-1.5 py-0.5 rounded-md font-semibold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* AI Launchpad Promo Banner */}
        <div className="mx-3 mt-4 p-3.5 rounded-2xl bg-gradient-to-br from-[#faf6fd] to-[#f3ecfb] border border-[#e8dcf7]">
          <div className="flex items-center gap-2 text-[#8854c0] font-bold text-xs mb-1">
            <Sparkles className="w-4 h-4" />
            <span>ONTIN AI</span>
          </div>
          <p className="text-xs text-[#525252] leading-relaxed">
            Tạo bài tập, quiz chuẩn hóa và phân hóa nội dung tự động chỉ với 1 cú click.
          </p>
        </div>
      </div>

      {/* Bottom User / Login Area */}
      <div className="p-3 border-t border-[#f1f1f4] space-y-2">
        <button
          onClick={onOpenAuth}
          data-testid="expanded-sidebar-login-button"
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#8854c0] text-white font-semibold text-sm hover:bg-[#733bb2] transition-colors shadow-sm"
        >
          <LogIn className="w-4 h-4" />
          <span>Đăng nhập / Đăng ký</span>
        </button>
        <div className="px-2 py-1 flex items-center justify-between text-[11px] text-[#737373]">
          <span>Gói giáo viên K12</span>
          <span className="text-[#00a389] font-medium">Miễn phí</span>
        </div>
      </div>
    </aside>
  );
}
