import React, { useState } from 'react';
import { 
  Percent, 
  Binary, 
  CodeXml, 
  Shapes, 
  BarChart2, 
  ChevronRight, 
  Play, 
  CheckSquare, 
  Presentation, 
  Video, 
  Layers, 
  Atom, 
  Zap,
  HelpCircle,
  Clock
} from 'lucide-react';
import { DOMAINS_BY_SUBJECT } from '../data/mockData';

export default function DomainsTopicsList({ selectedSubject, onSelectTopic }) {
  const domains = DOMAINS_BY_SUBJECT[selectedSubject] || DOMAINS_BY_SUBJECT.mathematics;

  const getDomainIcon = (iconName) => {
    switch (iconName) {
      case 'Percent': return Percent;
      case 'Binary': return Binary;
      case 'CodeXml': return CodeXml;
      case 'Shapes': return Shapes;
      case 'BarChart2': return BarChart2;
      case 'Atom': return Atom;
      case 'Zap': return Zap;
      default: return HelpCircle;
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'quiz':
        return { label: 'Quiz', icon: CheckSquare, color: 'text-[#8854c0] bg-[#f3ecfb]' };
      case 'lesson':
        return { label: 'Bài giảng', icon: Presentation, color: 'text-[#0084bd] bg-[#e6f4fa]' };
      case 'video':
        return { label: 'Video', icon: Video, color: 'text-[#ea5455] bg-[#fdeeee]' };
      case 'flashcards':
        return { label: 'Flashcards', icon: Layers, color: 'text-[#00a389] bg-[#e6f7f4]' };
      default:
        return { label: 'Hoạt động', icon: CheckSquare, color: 'text-[#525252] bg-[#f1f1f4]' };
    }
  };

  return (
    <section className="mb-12" data-testid="browse-topics">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 data-testid="section-title" className="text-lg font-bold text-[#121212] tracking-tight">
            chủ đề (Topics theo chuẩn năng lực)
          </h2>
          <p className="text-xs text-[#737373] mt-0.5">
            Khám phá các miền kiến thức và chuỗi bài tập phân hóa theo từng chủ đề.
          </p>
        </div>
        <button 
          data-testid="see-all-link"
          className="text-xs font-semibold text-[#8854c0] hover:text-[#733bb2] flex items-center gap-1 group"
        >
          <span>Nhìn thấy tất cả</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Domain Cards & Topic Rows */}
      <div className="space-y-4">
        {domains.map((domain) => {
          const Icon = getDomainIcon(domain.icon);
          return (
            <div
              key={domain.id}
              data-testid="domain-card"
              className="bg-white border border-[#e5e5e8] rounded-2xl p-4 md:p-5 shadow-2xs hover:shadow-sm transition-all"
            >
              {/* Domain Card Header */}
              <div className="flex items-center gap-3.5 pb-3 border-b border-[#f1f1f4]">
                <div className="w-10 h-10 rounded-xl bg-[#faf6fd] border border-[#e8dcf7] flex items-center justify-center text-[#8854c0] flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#121212]">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-[#737373]">
                    {domain.topicCount} chủ đề • {domain.englishTitle}
                  </p>
                </div>
              </div>

              {/* Topic Rows */}
              <div className="mt-2 divide-y divide-[#f8f8fa]">
                {domain.topics.map((topic) => {
                  const typeBadge = getTypeBadge(topic.type);
                  const TypeIcon = typeBadge.icon;
                  return (
                    <div
                      key={topic.id}
                      data-testid="topic-row"
                      onClick={() => onSelectTopic && onSelectTopic(topic, domain)}
                      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 py-3 px-2 rounded-xl hover:bg-[#f8f8fa] cursor-pointer transition-colors"
                    >
                      {/* Topic Title & Code */}
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-xs font-bold text-[#737373] bg-[#f1f1f4] px-2 py-0.5 rounded-md flex-shrink-0">
                          {topic.code}
                        </span>
                        <p className="text-sm font-semibold text-[#121212] group-hover:text-[#8854c0] transition-colors truncate">
                          {topic.title}
                        </p>
                      </div>

                      {/* Topic Meta Badges & Play Button */}
                      <div className="flex items-center gap-3 flex-shrink-0 text-xs text-[#737373] pl-9 sm:pl-0">
                        <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-md ${typeBadge.color}`}>
                          <TypeIcon className="w-3 h-3" />
                          <span>{typeBadge.label}</span>
                        </span>
                        <span>{topic.questions} câu hỏi</span>
                        <span className="hidden md:inline">• {topic.plays}</span>

                        <button 
                          className="w-7 h-7 rounded-full bg-[#f1f1f4] group-hover:bg-[#8854c0] group-hover:text-white flex items-center justify-center transition-all shadow-2xs ml-1"
                          title="Luyện tập ngay"
                        >
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
