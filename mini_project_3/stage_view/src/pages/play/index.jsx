import { useState } from 'react';
import FilterStateList from '../../components/play/filterStateList/FilterStateList';
import FilterMenuList from '../../components/play/filterMenuList/FilterMenuList';
import PlayContent from '../../components/play/playContent/PlayContent';

import playStateData from '../../assets/api/playStateData';
import filterMenuData from '../../assets/api/filterMenu';

import './style.scss';

const Play = ({ playwork, setPlaywork, playListData }) => {
  const [state, setState] = useState(playStateData);
  const [menu, setMenu] = useState(filterMenuData);

  // 1. [상태 필터] 공연중, 공연예정, 공연종료 버튼 클릭 시
  const onShow = (current) => {
    // (1) playListData(원본)에서 해당 상태(current)와 일치하는 데이터만 걸러냅니다.
    // 예: work.current('underway') === 'underway'
    const filtered = playListData.filter((work) => work.current === current);

    setPlaywork(filtered);
    // (2) 걸러진 데이터를 화면용 state(playwork)에 넣어줍니다.
    setState(
      state.map((item) =>
        item.current === current // (3) 버튼 색상 활성화 (누른 버튼만 true)
          ? { ...item, isClass: true }
          : { ...item, isClass: false },
      ),
    );

    // (4) 상태 필터를 누르면 정렬은 '전체(기본순)'로 초기화해주는 것이 좋습니다.
    setMenu(
      menu.map((item) =>
        item.type === 'all'
          ? { ...item, isClass: true }
          : { ...item, isClass: false },
      ),
    );
  };

  // 2. [정렬] 전체(기본순), 인기순(리뷰순)
  const onSort = (type) => {
    // (1) 현재 보고 있는 데이터(playwork)를 복사해서 정렬합니다.
    // 원본(playListData)이 아니라 'playwork'를 쓰는 이유는 필터링된 상태(예: 공연중) 내에서 인기순 정렬을 하기 위함입니다.
    const sorted = [...playwork];

    if (type === 'review') {
      // 리뷰 많은 순 (내림차순)
      sorted.sort((a, b) => b.review - a.review);
    } else if (type === 'all') {
      // 기본 순서 (ID 오름차순) 복구
      sorted.sort((a, b) => a.id - b.id);
    }

    setPlaywork(sorted);

    // (2) 정렬 버튼 활성화 스타일 처리
    setMenu(
      menu.map((item) =>
        item.type === type
          ? { ...item, isClass: true }
          : { ...item, isClass: false },
      ),
    );
  };

  return (
    <div className="play-inner">
      <h3>
        연극<span>play</span>
      </h3>

      <FilterStateList state={state} onShow={onShow} />
      <FilterMenuList menu={menu} onSort={onSort} />
      <PlayContent playwork={playwork} />
    </div>
  );
};

export default Play;
