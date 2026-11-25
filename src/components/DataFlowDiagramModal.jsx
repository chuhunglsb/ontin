import React, { useState } from 'react';
import { 
  X, 
  Network, 
  Database, 
  Cpu, 
  ArrowRight, 
  Server, 
  CheckCircle2, 
  Layers, 
  Terminal,
  ExternalLink,
  Code
} from 'lucide-react';

export default function DataFlowDiagramModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('diagram');

  const API_EVIDENCE = [
    {
      step: '1. Khởi tạo & Định vị Địa lý',
      endpoint: 'GET /_render/main/config/geo-data',
      txId: 'request-71',
      purpose: 'Xác định quốc gia và khu vực của người dùng để tải đúng chương trình giáo dục bản địa.',
      payload: 'None',
      response: '{\n  "success": true,\n  "data": {\n    "requestCountry": "VN",\n    "region": "HN"\n  },\n  "time": "2026-11-23T03:39:26.907924515Z"\n}',
    },
    {
      step: '2. Tải Tính năng & Feature Flags',
      endpoint: 'GET /_featserverv2/main/v2/features',
      txId: 'request-73',
      purpose: 'Nạp hơn 100 feature flags điều khiển giao diện (ai-enhance-v2, search-v2-enabled, session-shell-layout).',
      payload: 'None',
      response: '{\n  "success": true,\n  "data": {\n    "features": {\n      "ai-enhance-v2": "ENABLED",\n      "search-v2-enabled": true,\n      "session-shell-layout": "ENABLED",\n      "state-standards": "ENABLED"\n    }\n  }\n}',
    },
    {
      step: '3. Nạp Từ điển Đa ngôn ngữ (i18n)',
      endpoint: 'GET https://cf.quizizz.com/translationsV2/adminv3/vi.json',
      txId: 'request-75',
      purpose: 'Crowdin website translator nạp gói dịch thuật tiếng Việt cho toàn bộ bảng điều khiển.',
      payload: 'None',
      response: '{\n  "explore.browse_resources_for": "Duyệt tài nguyên cho",\n  "explore.enter_code": "Nhập mã",\n  "explore.my_library": "Thư viện của tôi"\n}',
    },
    {
      step: '4. Truy vấn Danh mục Giáo trình Chuẩn (Curriculums)',
      endpoint: 'POST /_sserverv2/main/v3/list-standard-and-curriculums-v2',
      txId: 'request-77',
      purpose: 'Lấy các bộ sách / giáo trình phù hợp theo môn học, khối lớp và vị trí.',
      payload: '{\n  "subject": "mathematics",\n  "frameworkType": "curriculum",\n  "page": "explore",\n  "grade": "6",\n  "state": "HN",\n  "frameworkCount": 6\n}',
      response: '{\n  "success": true,\n  "data": {\n    "hits": [\n      { "name": "enVision Mathematics", "code": "Savvas Learning Company" },\n      { "name": "Big Ideas Math", "code": "Big Ideas Learning" }\n    ]\n  }\n}',
    },
    {
      step: '5. Truy vấn Bộ Tiêu chuẩn Học tập (Standards)',
      endpoint: 'POST /_sserverv2/main/v3/list-hqrl-sot-standards',
      txId: 'request-78',
      purpose: 'Lấy các chuẩn đánh giá năng lực giáo dục (CCSS, TEKS, GSE, NY.NGLS).',
      payload: '{\n  "subject": "mathematics",\n  "frameworkType": "standard",\n  "page": "explore",\n  "grade": "6",\n  "state": "HN",\n  "frameworkCount": 6\n}',
      response: '{\n  "success": true,\n  "data": {\n    "hits": [\n      { "name": "Common Core State Standards", "code": "CCSS" },\n      { "name": "Texas Essential Knowledge and Skills", "code": "TEKS" }\n    ]\n  }\n}',
    },
    {
      step: '6. Tải Chi tiết Miền kiến thức & Chủ đề (Domains & Topics)',
      endpoint: 'POST /_sserverv2/main/v3/complete-domains-v2',
      txId: 'request-79',
      purpose: 'Tải cây chủ đề bài học cho Lớp 6 môn Toán (Tỷ lệ, Hệ thống số, Biểu thức, Hình học).',
      payload: '{\n  "subject": "mathematics",\n  "grade": "6",\n  "page": "explore"\n}',
      response: '{\n  "success": true,\n  "data": [\n    { "title": "Tỷ lệ và mối quan hệ tỷ lệ thuận", "topicCount": 5 },\n    { "title": "Hệ thống số", "topicCount": 8 }\n  ]\n}',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-[#e5e5e8] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#f1f1f4] flex items-center justify-between bg-[#fafafc]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8854c0] to-[#aa3bff] flex items-center justify-center text-white shadow-sm">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-[#121212]">
                  REA Bằng chứng & Kiến trúc Luồng Dữ liệu (Evidence Explorer)
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#f3ecfb] text-[#8854c0]">
                  CDP Network Captured
                </span>
              </div>
              <p className="text-xs text-[#737373]">
                Phân tích lưu lượng mạng, trạng thái client-side Pinia và endpoint API của ONTIN
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#a3a3a3] hover:text-[#121212] hover:bg-[#f1f1f4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="px-5 pt-3 border-b border-[#e5e5e8] bg-white flex gap-2">
          <button
            onClick={() => setActiveTab('diagram')}
            className={`px-4 py-2 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'diagram'
                ? 'border-[#8854c0] text-[#8854c0]'
                : 'border-transparent text-[#737373] hover:text-[#121212]'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Sơ đồ Luồng Dữ liệu (Data Flow)</span>
          </button>
          <button
            onClick={() => setActiveTab('endpoints')}
            className={`px-4 py-2 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'endpoints'
                ? 'border-[#8854c0] text-[#8854c0]'
                : 'border-transparent text-[#737373] hover:text-[#121212]'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Chi tiết Network Requests & Evidence</span>
          </button>
          <button
            onClick={() => setActiveTab('state')}
            className={`px-4 py-2 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'state'
                ? 'border-[#8854c0] text-[#8854c0]'
                : 'border-transparent text-[#737373] hover:text-[#121212]'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Client State & Pinia Store</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#fafafc]">
          {activeTab === 'diagram' && (
            <div className="space-y-6">
              {/* Architecture Explanation Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#e5e5e8] shadow-2xs">
                <h3 className="font-bold text-sm text-[#121212] mb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00a389]"></span>
                  Kiến trúc Luồng dữ liệu Client - Server (ONTIN SPA)
                </h3>
                <p className="text-xs text-[#525252] leading-relaxed">
                  Trang web sử dụng kiến trúc <strong>Single Page Application (SPA)</strong> chạy trên Vue 3 + Pinia Store. 
                  Khi tải URL <code className="bg-[#f1f1f4] px-1 py-0.5 rounded text-[#8854c0]">https://wayground.com/explore/admin?lng=vi</code>, 
                  client thực hiện quy trình nạp dữ liệu song song qua CDN và các microservices backend chuyên biệt.
                </p>
              </div>

              {/* Visual Flow Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 relative">
                {/* Step 1 */}
                <div className="p-4 rounded-2xl bg-white border border-[#e5e5e8] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-[#f3ecfb] text-[#8854c0] font-bold text-xs flex items-center justify-center mb-2">
                      1
                    </div>
                    <h4 className="font-bold text-xs text-[#121212]">User URL & Params</h4>
                    <p className="text-[11px] text-[#737373] mt-1">
                      Query param <code>?lng=vi</code> kích hoạt locale Tiếng Việt và nạp translationsV2.
                    </p>
                  </div>
                  <div className="mt-3 text-[10px] font-semibold text-[#8854c0] bg-[#faf6fd] p-1.5 rounded-lg">
                    Crowdin Translator
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-2xl bg-white border border-[#e5e5e8] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-[#e6f7f4] text-[#00a389] font-bold text-xs flex items-center justify-center mb-2">
                      2
                    </div>
                    <h4 className="font-bold text-xs text-[#121212]">Geo & Config Data</h4>
                    <p className="text-[11px] text-[#737373] mt-1">
                      Endpoint <code>_render/config/geo-data</code> trả về VN-HN để lọc curriculum theo bang/quốc gia.
                    </p>
                  </div>
                  <div className="mt-3 text-[10px] font-semibold text-[#00a389] bg-[#e6f7f4] p-1.5 rounded-lg">
                    Geo Localization
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-2xl bg-white border border-[#e5e5e8] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-[#e6f4fa] text-[#0084bd] font-bold text-xs flex items-center justify-center mb-2">
                      3
                    </div>
                    <h4 className="font-bold text-xs text-[#121212]">Search Server V3</h4>
                    <p className="text-[11px] text-[#737373] mt-1">
                      3 request POST đồng thời đến <code>_sserverv2</code> lấy: Curriculums, Standards và Complete-domains.
                    </p>
                  </div>
                  <div className="mt-3 text-[10px] font-semibold text-[#0084bd] bg-[#e6f4fa] p-1.5 rounded-lg">
                    _sserverv2 Microservice
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-2xl bg-white border border-[#e5e5e8] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-[#fdeeee] text-[#ea5455] font-bold text-xs flex items-center justify-center mb-2">
                      4
                    </div>
                    <h4 className="font-bold text-xs text-[#121212]">Pinia Reactive State</h4>
                    <p className="text-[11px] text-[#737373] mt-1">
                      Dữ liệu được hydrate vào Pinia store, render động dashboard với bộ lọc Môn học & Khối lớp.
                    </p>
                  </div>
                  <div className="mt-3 text-[10px] font-semibold text-[#ea5455] bg-[#fdeeee] p-1.5 rounded-lg">
                    Reactive View Model
                  </div>
                </div>
              </div>

              {/* Data Flow Rules */}
              <div className="p-4 rounded-2xl bg-[#faf6fd] border border-[#e8dcf7] text-xs text-[#525252] space-y-2">
                <h4 className="font-bold text-[#8854c0]">Quy tắc cập nhật trạng thái khi người dùng thao tác:</h4>
                <ul className="list-disc list-inside space-y-1 text-[11px]">
                  <li><strong>Thay đổi Môn học / Lớp:</strong> Kích hoạt mutation trong Pinia store, gửi lại query POST tương ứng đến <code>_sserverv2</code> với payload mới.</li>
                  <li><strong>Nhập từ khóa tìm kiếm:</strong> Client gọi <code>_mlprocessor/query_segmentation</code> để phân tích ngữ nghĩa, sau đó gọi <code>_sserverv2/search/all</code> để trả về kết quả theo loại tài nguyên.</li>
                  <li><strong>Chuyển tab loại tài nguyên:</strong> Lọc mảng kết quả local tức thì (0ms latency) hoặc gọi pagination offset.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'endpoints' && (
            <div className="space-y-4">
              <p className="text-xs text-[#737373]">
                Dưới đây là các network transaction thực tế được trích xuất bằng REA Playwright CDP scenario:
              </p>

              {API_EVIDENCE.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-[#e5e5e8] shadow-2xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#121212]">{item.step}</span>
                    <span className="text-[10px] font-mono bg-[#f1f1f4] text-[#525252] px-2 py-0.5 rounded">
                      {item.txId}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono bg-[#fafafc] px-3 py-1.5 rounded-lg border border-[#f1f1f4] text-[#8854c0]">
                    <span className="font-bold">{item.endpoint}</span>
                  </div>

                  <p className="text-xs text-[#525252]">
                    {item.purpose}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                    <div>
                      <span className="text-[#a3a3a3] block text-[10px] uppercase font-bold mb-1">Payload Gửi đi</span>
                      <pre className="p-2.5 rounded-xl bg-[#121212] text-[#00a389] overflow-x-auto text-[10px]">
                        {item.payload}
                      </pre>
                    </div>
                    <div>
                      <span className="text-[#a3a3a3] block text-[10px] uppercase font-bold mb-1">Response Trả về (Trích dẫn)</span>
                      <pre className="p-2.5 rounded-xl bg-[#121212] text-[#f3ecfb] overflow-x-auto text-[10px]">
                        {item.response}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'state' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-[#e5e5e8] shadow-2xs space-y-3">
                <h3 className="font-bold text-sm text-[#121212] flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#8854c0]" />
                  Mô hình Client-side State (Pinia Store)
                </h3>
                <p className="text-xs text-[#525252]">
                  Từ các file bundle <code>pinia-DNJEkl4f.js</code> và <code>useWolSearch.js</code> thu được qua REA:
                </p>

                <div className="p-3 rounded-xl bg-[#121212] text-white font-mono text-xs overflow-x-auto">
{`// Pinia Store: useExploreStore & useSearchStore
{
  state: () => ({
    // Bộ lọc hiện tại
    selectedSubject: 'mathematics',
    selectedGrade: '6',
    selectedState: 'HN',
    country: 'VN',
    activeTab: 'all', // 'quiz' | 'lesson' | 'video' | 'passage' | 'flashcards'
    
    // Tìm kiếm
    searchQuery: '',
    searchFilters: {
      grades: ['6'],
      duration: 'all',
      difficulty: 'all'
    },

    // Cache kết quả từ API
    curriculums: [...],  // nạp từ list-standard-and-curriculums-v2
    standards: [...],    // nạp từ list-hqrl-sot-standards
    domains: [...],      // nạp từ complete-domains-v2
    searchResults: [],   // nạp từ search/all
    
    // Auth & Feature flags
    user: null,          // unauthenticated state
    featureFlags: { ... }
  }),
  actions: {
    setSubject(sub) { ... },
    setGrade(grade) { ... },
    performSearch(term) { ... }
  }
}`}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#e5e5e8] shadow-2xs space-y-2">
                <h4 className="font-bold text-xs text-[#121212]">Cookies & LocalStorage ghi nhận qua REA:</h4>
                <ul className="text-xs text-[#525252] space-y-1">
                  <li><code>quizizz_uid</code>: Mã định danh thiết bị ẩn danh (UUID)</li>
                  <li><code>crowdinLangCode</code>: Thiết lập ngôn ngữ giao diện (<code>vi</code>)</li>
                  <li><code>wg_cookie_consent_expiry</code>: Hạn chấp thuận cookie</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#f1f1f4] bg-white flex items-center justify-between text-xs text-[#737373]">
          <span>Phân tích trích xuất từ 758 network events và DOM Snapshot bằng REA</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#8854c0] text-white font-semibold hover:bg-[#733bb2] transition-colors"
          >
            Đã hiểu & Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
