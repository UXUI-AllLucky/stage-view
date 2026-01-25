import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WorkData from './assets/api/workData';
import Layout from './components/common/Layout';
import { useState } from 'react';
import { Home, Musical, Play, SearchPage } from './pages';
import { SearchProvider } from './context/SearchContext';
import PlayDetail from './pages/play/PlayDetail';

const App = () => {
  const [work, setWork] = useState(WorkData);
  return (
    <BrowserRouter>
      {/* ✅ 여기서 감싸기. useNavigate() 쓰는 Context는 반드시 <BrowserRouter> 안에 있어야 해. */}
      <SearchProvider>
        <div id="wrap">
          <Routes>
            <Route path="/" element={<Layout work={work} />}>
              <Route index element={<Home WorkData={WorkData} />} />
              <Route path="/play" element={<Play WorkData={WorkData} />} />
              <Route path="/play/:id" element={<PlayDetail work={work} />} />
              <Route
                path="/musical"
                element={<Musical WorkData={WorkData} />}
              />
              {/* 검색 결과 페이지 */}
              <Route path="/searchpage" element={<SearchPage work={work} />} />
            </Route>
          </Routes>
        </div>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
