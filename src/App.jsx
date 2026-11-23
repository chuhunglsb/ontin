import React, { useState } from 'react';
import PresentationHub from './components/presentation/PresentationHub';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import QuickActionTabs from './components/QuickActionTabs';
import SearchBar from './components/SearchBar';
import BrowseFilterSection from './components/BrowseFilterSection';
import CurriculumSection from './components/CurriculumSection';
import StandardsSection from './components/StandardsSection';
import DomainsTopicsList from './components/DomainsTopicsList';
import SearchResultsView from './components/SearchResultsView';
import ResourcePreviewModal from './components/ResourcePreviewModal';
import DataFlowDiagramModal from './components/DataFlowDiagramModal';
import EnterCodeModal from './components/EnterCodeModal';
import AuthModal from './components/AuthModal';
import { SAMPLE_ACTIVITIES } from './data/mockData';
import { Presentation, Sparkles, LayoutDashboard } from 'lucide-react';

export default function App() {
  // App Main Mode: 'presentation' (Ưu tiên theo yêu cầu) hoặc 'dashboard' (Xem tổng thể Wayground)
  const [currentAppMode, setCurrentAppMode] = useState('presentation');

  // Dashboard state
  const [activeNav, setActiveNav] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState('mathematics');
  const [selectedGrade, setSelectedGrade] = useState('6');
  const [activeTypeTab, setActiveTypeTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Modals
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  const [previewActivity, setPreviewActivity] = useState(null);

  // NẾU ĐANG Ở CHẾ ĐỘ THUYẾT TRÌNH (Trọng tâm yêu cầu người dùng)
  if (currentAppMode === 'presentation') {
    return (
      <PresentationHub 
        onBackToDashboard={() => setCurrentAppMode('dashboard')}
      />
    );
  }

  // Chế độ Dashboard phụ
  return (
    <div className="min-h-screen bg-[#fafafc] flex text-[#121212] font-sans">
      <Sidebar 
        activeNav={activeNav} 
        setActiveNav={setActiveNav} 
        onOpenAuth={() => setShowAuthModal(true)} 
      />

      <div className="flex-1 flex flex-col min-w-0" data-testid="shell-content">
        <Header 
          onOpenCodeModal={() => setShowCodeModal(true)}
          onOpenEvidenceModal={() => setShowEvidenceModal(true)}
        />

        {/* Banner chuyển nhanh vào Studio Thuyết Trình */}
        <div className="bg-gradient-to-r from-[#8854c0] to-[#aa3bff] px-6 py-3 text-white flex items-center justify-between text-xs font-semibold shadow-sm">
          <div className="flex items-center gap-2">
            <Presentation className="w-4 h-4" />
            <span>Đang xem tổng quan Wayground. Bấm để mở Studio Thiết kế Bài giảng Thuyết trình:</span>
          </div>
          <button
            onClick={() => setCurrentAppMode('presentation')}
            className="px-3 py-1.5 rounded-lg bg-white text-[#8854c0] font-bold hover:bg-[#fafafc] transition-colors shadow-2xs"
          >
            Mở Studio Thuyết Trình →
          </button>
        </div>

        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          <QuickActionTabs 
            onSelectTab={(tabId) => {
              if (tabId === 'create') {
                setCurrentAppMode('presentation');
              }
            }} 
            activeActionTab="search" 
          />

          <SearchBar 
            searchQuery={searchQuery}
            setSearchQuery={(q) => {
              setSearchQuery(q);
              if (q.trim().length > 0) setIsSearching(true);
            }}
            onSearchSubmit={(q) => { setSearchQuery(q); setIsSearching(true); }}
            onClearSearch={() => { setSearchQuery(''); setIsSearching(false); }}
          />

          <BrowseFilterSection 
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
            selectedGrade={selectedGrade}
            setSelectedGrade={setSelectedGrade}
            activeTypeTab={activeTypeTab}
            setActiveTypeTab={setActiveTypeTab}
          />

          <CurriculumSection 
            selectedSubject={selectedSubject} 
            onSelectCurriculum={(cur) => { setSearchQuery(cur.name); setIsSearching(true); }}
          />

          <StandardsSection 
            selectedSubject={selectedSubject} 
            onSelectStandard={(std) => { setSearchQuery(std.code); setIsSearching(true); }}
          />

          <DomainsTopicsList 
            selectedSubject={selectedSubject} 
            onSelectTopic={(topic, domain) => {
              setPreviewActivity({
                title: `${topic.code}: ${topic.title}`,
                subject: selectedSubject,
                grade: selectedGrade,
                type: topic.type,
                questionsCount: topic.questions,
                plays: topic.plays,
                standard: domain.title,
                questions: topic.sampleQuestions
              });
            }}
          />
        </main>
      </div>

      {showCodeModal && <EnterCodeModal onClose={() => setShowCodeModal(false)} />}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
      {showEvidenceModal && <DataFlowDiagramModal onClose={() => setShowEvidenceModal(false)} />}
      {previewActivity && (
        <ResourcePreviewModal 
          activity={previewActivity} 
          onClose={() => setPreviewActivity(null)} 
        />
      )}
    </div>
  );
}
