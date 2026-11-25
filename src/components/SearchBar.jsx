import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Sparkles, TrendingUp, History, ArrowRight } from 'lucide-react';

export default function SearchBar({ searchQuery, setSearchQuery, onSearchSubmit, onClearSearch }) {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);

  const SUGGESTED_QUERIES = [
    'Tỷ lệ và mối quan hệ tỷ lệ thuận',
    'Phân số và số thập phân',
    'Ước chung lớn nhất & Bội chung nhỏ nhất',
    'Nguyên tử và phân tử',
    'Từ vựng tiếng Anh chủ đề trường học',
    'Phương trình bậc nhất',
  ];

  // Click outside to close suggestion dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectQuery = (query) => {
    setSearchQuery(query);
    setIsFocused(false);
    if (onSearchSubmit) onSearchSubmit(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsFocused(false);
      if (onSearchSubmit) onSearchSubmit(searchQuery);
    }
  };

  return (
    <div className="relative mb-8" ref={containerRef} data-testid="search-section-container">
      {/* Emphasized Search Bar Container */}
      <div 
        data-testid="emphasized-search-bar"
        className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-2xl bg-white border transition-all ${
          isFocused 
            ? 'border-[#8854c0] shadow-lg ring-3 ring-[#8854c0]/15' 
            : 'border-[#e5e5e8] shadow-sm hover:border-[#8854c0]'
        }`}
      >
        <div data-testid="text-field-licon" className="text-[#8854c0] flex-shrink-0">
          <Search className="w-5 h-5" />
        </div>

        <input
          id="v-0-6-input"
          data-testid="emphasized-search-bar-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder="Tìm kiếm bất kỳ chủ đề nào (ví dụ: Tỷ lệ, Phân số, Nguyên tử, Hình học...)"
          className="w-full bg-transparent outline-none text-[#121212] placeholder:text-[#a3a3a3] text-sm md:text-base font-normal flex-grow"
          autoComplete="off"
        />

        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('');
              if (onClearSearch) onClearSearch();
            }}
            className="p-1 rounded-full text-[#a3a3a3] hover:text-[#121212] hover:bg-[#f1f1f4] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => {
            setIsFocused(false);
            if (onSearchSubmit) onSearchSubmit(searchQuery);
          }}
          data-testid="search-button"
          className="px-4 py-1.5 rounded-xl bg-[#8854c0] hover:bg-[#733bb2] text-white text-xs md:text-sm font-semibold transition-colors flex items-center gap-1.5 flex-shrink-0"
        >
          <span>Tìm kiếm</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Autocomplete / Suggested Dropdown */}
      {isFocused && (
        <div 
          data-testid="autocomplete-search"
          className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-[#e5e5e8] shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-[#737373] uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-[#8854c0]" />
            <span>Chủ đề thịnh hành trên ONTIN</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-1">
            {SUGGESTED_QUERIES.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSelectQuery(item)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-[#525252] hover:bg-[#f3ecfb] hover:text-[#8854c0] cursor-pointer transition-colors"
              >
                <Search className="w-3.5 h-3.5 text-[#a3a3a3]" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-2.5 pt-2 border-t border-[#f1f1f4] px-3 flex items-center justify-between text-[11px] text-[#737373]">
            <span>Gợi ý dựa trên chương trình chuẩn K-12</span>
            <span className="text-[#8854c0] font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> AI Query Assistant
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
