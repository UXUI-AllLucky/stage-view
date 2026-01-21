import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WorkData from './assets/api/workData';
import Layout from './components/common/Layout';
import { useState } from 'react';
import { Home, Musical, Play, SearchPage } from './pages';

const App = () => {
    const [work, setWork] = useState(WorkData);
    return (
        <BrowserRouter>
            <div id="wrap">
                <Routes>
                    <Route path="/" element={<Layout work={work} />}>
                        <Route index element={<Home />} />
                        <Route path="/play" element={<Play WorkData={WorkData} />} />
                        <Route path="/musical" element={<Musical WorkData={WorkData} />} />
                        {/* 검색 결과 페이지 */}
                        <Route path="/searchpage" element={<SearchPage work={work} />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
