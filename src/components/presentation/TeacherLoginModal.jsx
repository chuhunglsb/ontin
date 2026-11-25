import React, { useState } from 'react';
import { Lock, User, Eye, EyeOff, X, ShieldCheck, AlertCircle } from 'lucide-react';

const DEFAULT_TEACHER_USERNAME = 'gvtinhoc';
const DEFAULT_TEACHER_PASSWORD = 'Matkhau.123';

export default function TeacherLoginModal({ onSuccess, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedUser = username.trim();

    if (!trimmedUser || !password) {
      setError('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.');
      return;
    }

    if (trimmedUser === DEFAULT_TEACHER_USERNAME && password === DEFAULT_TEACHER_PASSWORD) {
      setError('');
      onSuccess(trimmedUser);
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại!');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-150 select-none"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-[#e5e5e8] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#f1f1f4] flex items-center justify-between bg-[#fafafc]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#8854c0] to-[#aa3bff] text-white flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#121212]">
                Đăng nhập Giáo viên ONTIN
              </h3>
              <p className="text-[11px] text-[#737373]">
                Xác thực quyền thêm mới và chỉnh sửa bài giảng
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#a3a3a3] hover:text-[#121212] hover:bg-[#f1f1f4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="flex items-start gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="text-xs font-bold text-[#525252] block mb-1.5 uppercase tracking-wider">
              Tên đăng nhập
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#a3a3a3] absolute left-3.5 top-3" />
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Nhập tên tài khoản giáo viên"
                autoFocus
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e5e5e8] focus:border-[#8854c0] bg-[#fafafc] text-sm font-semibold text-[#121212] outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#525252] block mb-1.5 uppercase tracking-wider">
              Mật khẩu
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#a3a3a3] absolute left-3.5 top-3" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                placeholder="Nhập mật khẩu"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#e5e5e8] focus:border-[#8854c0] bg-[#fafafc] text-sm font-semibold text-[#121212] outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 p-0.5 text-[#a3a3a3] hover:text-[#525252]"
                title={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#e5e5e8] hover:bg-[#f8f8fa] text-xs font-bold text-[#525252] transition-colors"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#8854c0] to-[#aa3bff] hover:from-[#733bb2] hover:to-[#932ee6] text-white text-xs font-extrabold shadow-md hover:shadow-lg transition-all"
            >
              Đăng nhập Giáo viên
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
