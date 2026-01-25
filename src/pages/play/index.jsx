import FilterStateList from '../../components/common/filterStateMenu/FilterStateMenu';
import FilterMenuList from '../../components/common/filterSortMenu/FilterSortMenu';
import PlayContent from '../../components/play/playContent/PlayContent';
import Pagenation from '../../components/common/pagenation/Pagenation';
import usePagenation from '../../hooks/usePagenation';
import useContentControl from '../../hooks/useContentControl';

import './style.scss';

// hook 사용 >> 이제 setWork나 work(화면용)는 부모에게 받을 필요가 없습니다. 원본 데이터(WorkData)만 받으면 됩니다.
const Play = ({ WorkData }) => {
  // 1. [핵심] 훅에 넣기 전에!!, 여기서 '연극(play)'만 미리 걸러냅니다.
  const playListData = WorkData.filter((item) => item.category === 'play');

  // 2. 정렬/상태 메뉴 훅에는 전체 데이터(WorkData)가 아니라, 걸러낸 데이터(playListData)를 줍니다.
  // Hook
  // hook에 적용하는 data이름 playList로 변경함
  const {
    data: playList,
    stateMenu,
    sortMenu,
    onShow,
    onSort,
  } = useContentControl(playListData);

  // 3. 페이지네이션 훅 (필터링된 데이터 -> 현재 페이지 데이터)
  const { currentData, currentPage, totalPage, setCurrentPage } = usePagenation(
    playList,
    10,
  );
  // playList->currentData에 담음

  return (
    <div className="play-inner">
      <h3>
        연극<span>play</span>
      </h3>

      {/* Hook에서 받은 변수와 함수를 그대로 넣어줍니다 */}
      <FilterStateList state={stateMenu} onShow={onShow} />
      <FilterMenuList menu={sortMenu} onSort={onSort} />
      {/* 4. PlayContent에는 전체(playList)가 아니라 현재 페이지 데이터(currentData)를 줍니다 */}
      <PlayContent playwork={currentData} />

      <Pagenation
        totalPage={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Play;
