import { BrowserRouter, Route, Routes } from 'react-router-dom';

import playListData from '../src/assets/api/playData';
import Layout from './components/common/Layout';
import { useState } from 'react';
import { Home, Musical, Play, SearchPage } from './pages';

const App = () => {
  const [playwork, setPlaywork] = useState(playListData);
  return (
    <BrowserRouter>
      <div id="wrap">
        <Routes>
          <Route path="/" element={<Layout playwork={playwork} />}>
            <Route index element={<Home />} />
            <Route
              path="/play"
              element={
                <Play
                  playwork={playwork}
                  setPlaywork={setPlaywork}
                  playListData={playListData}
                />
              }
            />
            <Route path="/musical" element={<Musical />} />
            {/* 검색 결과 페이지 */}
            <Route
              path="/searchpage"
              element={<SearchPage playwork={playwork} />}
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
