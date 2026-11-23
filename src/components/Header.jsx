import React, { useState } from 'react';
import { KeyRound, Globe, Network, Sparkles, HelpCircle, Bell } from 'lucide-react';

export default function Header({ onOpenCodeModal, onOpenEvidenceModal }) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-[#e5e5e8] px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Left Greeting / Context */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#737373] bg-[#f1f1f4] px-2.5 py-1 rounded-md">
          Bảng điều khiển giáo viên
        </span>
        <span className="text-xs text-[#a3a3a3] hidden md:inline">|</span>
        <span className="text-xs text-[#737373] hidden md:inline">
          Khu vực: <strong className="text-[#121212]">Hà Nội, Việt Nam (VN-HN)</strong>
        </span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* REA Evidence Explorer Button */}
        <button
          onClick={onOpenEvidenceModal}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#faf6fd] to-[#f3ecfb] border border-[#d6bbfb] text-[#8854c0] text-xs font-semibold hover:bg-[#ede0fb] transition-colors shadow-2xs"
          title="Xem bằng chứng kỹ thuật đảo ngược từ REA"
        >
          <Network className="w-4 h-4 text-[#8854c0]" />
          <span className="hidden sm:inline">REA Data Flow & Evidence</span>
        </button>

        {/* Enter Code Button */}
        <button
          onClick={onOpenCodeModal}
          data-testid="enter-code-button"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#e5e5e8] hover:border-[#121212] bg-white text-[#121212] text-xs font-semibold transition-all hover:shadow-2xs"
        >
          <KeyRound className="w-3.5 h-3.5 text-[#8854c0]" />
          <span>Nhập mã</span>
        </button>

        {/* Language Indicator */}
        <div className="relative">
          <button
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-[#525252] hover:bg-[#f8f8fa] transition-colors"
          >
            <Globe className="w-4 h-4 text-[#737373]" />
            <span>Tiếng Việt (VI)</span>
          </button>

          {langMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e5e5e8] rounded-xl shadow-lg p-1.5 z-50 text-xs">
              <div className="px-2.5 py-1.5 font-semibold text-[#737373] border-b border-[#f1f1f4]">
                Crowdin Translations
              </div>
              <button 
                onClick={() => setLangMenuOpen(false)}
                className="w-full text-left px-2.5 py-2 rounded-lg bg-[#f3ecfb] text-[#8854c0] font-semibold flex items-center justify-between"
              >
                <span>Tiếng Việt (vi)</span>
                <span>✓</span>
              </button>
              <button 
                onClick={() => setLangMenuOpen(false)}
                className="w-full text-left px-2.5 py-2 rounded-lg text-[#525252] hover:bg-[#f8f8fa]"
              >
                English (en)
              </button>
              <button 
                onClick={() => setLangMenuOpen(false)}
                className="w-full text-left px-2.5 py-2 rounded-lg text-[#525252] hover:bg-[#f8f8fa]"
              >
                Español (es)
              </button>
            </div>
          )}
        </div>

        {/* Notifications / Help */}
        <button className="p-2 text-[#737373] hover:text-[#121212] hover:bg-[#f8f8fa] rounded-xl transition-colors">
          <Bell className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
