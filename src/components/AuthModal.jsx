import React from 'react';
import { X, LogIn, Mail } from 'lucide-react';

export default function AuthModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-[#e5e5e8] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-[#f1f1f4] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#8854c0] text-white flex items-center justify-center font-bold">
              W
            </div>
            <h3 className="font-bold text-base text-[#121212]">
              Đăng nhập vào Wayground
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#a3a3a3] hover:text-[#121212] hover:bg-[#f1f1f4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs text-[#737373] text-center">
            Tham gia cùng hơn 50 triệu giáo viên và học sinh trên toàn thế giới để phân hóa bài học và theo dõi tiến độ.
          </p>

          <div className="space-y-2.5">
            <button
              onClick={() => { alert('Đăng nhập thành công với tài khoản Google'); onClose(); }}
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-[#e5e5e8] hover:border-[#121212] bg-white text-xs font-semibold text-[#121212] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Tiếp tục với Google</span>
            </button>

            <button
              onClick={() => { alert('Đăng nhập với Microsoft'); onClose(); }}
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-[#e5e5e8] hover:border-[#121212] bg-white text-xs font-semibold text-[#121212] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 23 23">
                <path fill="#f35325" d="M1 1h10v10H1z"/>
                <path fill="#81bc06" d="M12 1h10v10H12z"/>
                <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                <path fill="#ffba08" d="M12 12h10v10H12z"/>
              </svg>
              <span>Tiếp tục với Microsoft</span>
            </button>

            <button
              onClick={() => { alert('Đăng nhập bằng Email'); onClose(); }}
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 rounded-xl border border-[#e5e5e8] hover:border-[#121212] bg-white text-xs font-semibold text-[#121212] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#737373]" />
              <span>Tiếp tục với Email trường học</span>
            </button>
          </div>

          <div className="pt-2 text-center text-[11px] text-[#737373]">
            Bằng việc tiếp tục, bạn đồng ý với Điều khoản dịch vụ và Chính sách quyền riêng tư của Wayground.
          </div>
        </div>
      </div>
    </div>
  );
}
