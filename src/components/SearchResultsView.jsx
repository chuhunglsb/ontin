import React from 'react';
import { 
  CheckSquare, 
  Presentation, 
  Video, 
  Layers, 
  Sparkles, 
  User, 
  Clock, 
  CheckCircle, 
  Play, 
  ArrowLeft,
  FilterX
} from 'lucide-react';

export default function SearchResultsView({
  searchQuery,
  results,
  activeTypeTab,
  setActiveTypeTab,
  onClearFilters,
  onSelectActivity,
}) {
  const getTypeBadge = (type) => {
    switch (type) {
      case 'quiz':
        return { label: 'Đánh giá (Quiz)', color: 'bg-[#f3ecfb] text-[#8854c0]' };
      case 'lesson':
        return { label: 'Thuyết trình', color: 'bg-[#e6f4fa] text-[#0084bd]' };
      case 'video':
        return { label: 'Video tương tác', color: 'bg-[#fdeeee] text-[#ea5455]' };
      case 'flashcards':
        return { label: 'Flashcards', color: 'bg-[#e6f7f4] text-[#00a389]' };
      default:
        return { label: 'Hoạt động', color: 'bg-[#f1f1f4] text-[#525252]' };
    }
  };

  return (
    <div className="mb-12">
      {/* Search Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e5e5e8]">
        <div>
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#8854c0] hover:text-[#733bb2] mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Quay lại trang khám phá</span>
          </button>
          <h2 className="text-xl font-bold text-[#121212]">
            {searchQuery ? (
              <span>Kết quả tìm kiếm cho: <strong className="text-[#8854c0]">"{searchQuery}"</strong></span>
            ) : (
              <span>Tất cả hoạt động học tập</span>
            )}
          </h2>
          <p className="text-xs text-[#737373] mt-0.5">
            Tìm thấy {results.length} bài tập & nguồn lực phù hợp
          </p>
        </div>

        {results.length > 0 && (
          <button
            onClick={onClearFilters}
            className="px-3 py-1.5 text-xs font-semibold text-[#737373] hover:text-[#121212] border border-[#e5e5e8] rounded-xl hover:bg-[#f8f8fa] transition-colors self-start sm:self-auto"
          >
            Xóa bộ lọc
          </button>
        )}
      </div>

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((activity) => {
            const badge = getTypeBadge(activity.type);
            return (
              <div
                key={activity.id}
                onClick={() => onSelectActivity(activity)}
                className="group bg-white border border-[#e5e5e8] hover:border-[#8854c0] hover:shadow-lg rounded-2xl overflow-hidden cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Cover Image */}
                  <div className="h-44 w-full relative overflow-hidden bg-[#f1f1f4]">
                    <img
                      src={activity.coverImage}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md shadow-xs ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold px-2 py-0.5 rounded-md">
                      {activity.questionsCount} câu hỏi
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-[11px] text-[#737373] mb-1.5">
                      <span className="font-semibold text-[#8854c0]">Lớp {activity.grade}</span>
                      <span>•</span>
                      <span>{activity.plays} lượt chơi</span>
                      <span>•</span>
                      <span className="text-[#00a389] font-medium">{activity.accuracy} chính xác</span>
                    </div>

                    <h3 className="font-bold text-sm text-[#121212] group-hover:text-[#8854c0] transition-colors line-clamp-2">
                      {activity.title}
                    </h3>

                    {/* Standard code */}
                    {activity.standard && (
                      <div className="mt-2 inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-[#f1f1f4] text-[#525252]">
                        {activity.standard}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Author & Action */}
                <div className="px-4 py-3 border-t border-[#f1f1f4] bg-[#fafafc] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={activity.authorAvatar}
                      alt={activity.author}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span className="text-xs text-[#525252] font-medium truncate max-w-[130px]">
                      {activity.author}
                    </span>
                  </div>

                  <button 
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#8854c0] group-hover:bg-[#733bb2] text-white text-xs font-semibold transition-colors shadow-2xs"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Luyện tập</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State Matching Wayground REA Inspection */
        <div className="p-12 text-center bg-white rounded-2xl border border-[#e5e5e8]">
          <div className="w-16 h-16 rounded-full bg-[#faf6fd] text-[#8854c0] flex items-center justify-center mx-auto mb-4">
            <FilterX className="w-8 h-8" />
          </div>
          <h3 className="text-base font-bold text-[#121212]">
            Không tìm thấy hoạt động nào
          </h3>
          <p className="text-xs text-[#737373] mt-1 max-w-sm mx-auto">
            Hãy thử tìm kiếm bằng các từ khóa khác hoặc xóa bộ lọc để khám phá thêm nhiều bài học.
          </p>
          <button
            onClick={onClearFilters}
            className="mt-4 px-4 py-2 rounded-xl bg-[#8854c0] text-white text-xs font-semibold hover:bg-[#733bb2] transition-colors shadow-sm"
          >
            Xóa bộ lọc và xem tất cả
          </button>
        </div>
      )}
    </div>
  );
}
