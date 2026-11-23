import React, { useState } from 'react';
import { X, KeyRound, ArrowRight, Sparkles } from 'lucide-react';

export default function EnterCodeModal({ onClose }) {
  const [pinCode, setPinCode] = useState('');

  const handleJoin = (e) => {
    e.preventDefault();
    if (pinCode.length >= 6) {
      alert(`Đang kết nối vào phòng thi với mã PIN: ${pinCode}`);
      onClose();
    } else {
      alert('Vui lòng nhập mã trò chơi hợp lệ gồm 6 chữ số!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden border border-[#e5e5e8] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-[#f1f1f4] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#faf6fd] text-[#8854c0] flex items-center justify-center">
              <KeyRound className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-base text-[#121212]">
              Tham gia một trò chơi
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#a3a3a3] hover:text-[#121212] hover:bg-[#f1f1f4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleJoin} className="p-6 space-y-4">
          <p className="text-xs text-[#737373]">
            Nhập mã gồm 6 hoặc 8 chữ số do giáo viên của bạn cung cấp để tham gia bài kiểm tra trực tiếp.
          </p>

          <div>
            <input
              type="text"
              maxLength={8}
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value.replace(/[^0-9]/g, ''))}
              placeholder="VD: 482910"
              className="w-full text-center text-2xl font-bold tracking-widest py-3 px-4 rounded-2xl border-2 border-[#e5e5e8] focus:border-[#8854c0] outline-none text-[#121212] transition-colors"
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-[#8854c0] hover:bg-[#733bb2] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <span>Tham gia ngay</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="text-center">
            <span className="text-[11px] text-[#a3a3a3]">
              Bạn là giáo viên? <a href="#" onClick={(e) => { e.preventDefault(); onClose(); }} className="text-[#8854c0] font-semibold hover:underline">Tạo mã phòng của bạn</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
