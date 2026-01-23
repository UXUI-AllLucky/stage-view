import { useState } from 'react';
// Hook 파일 안에서 메뉴 데이터를 가져옵니다!
import stateMenuData from '../assets/api/stateMenu';
import filterMenuData from '../assets/api/filterMenu';

// 매개변수로 사용할 데이터 (originalList)
// 데이터 import는 데이터 사용하는 컴포넌트에서 improt할 것! 이번같은 경우엔 app.jsx에서 props로 내림
const useContentControl = (originalList) => {
    // 1. 초기값 설정 (새로고침 했을 때 딱 한 번 실행) // "처음엔 'underway'만 보여줌
    const [data, setData] = useState(() => {
        if (!originalList) return [];
        return originalList.filter((work) => work.current === 'underway');
    });

    const [stateMenu, setStateMenu] = useState(stateMenuData);
    const [sortMenu, setSortMenu] = useState(filterMenuData);

    // 1. [상태 필터] 공연중, 공연예정, 공연종료 버튼 클릭 시
    const onShow = (current) => {
        // 원본 데이터(originalList)에서 해당 상태(current)와 일치하는 데이터만 걸러 보여줌
        // 예: work.current('underway') === 'underway'
        const filtered = originalList.filter((work) => work.current === current);
        setData(filtered);

        // 버튼 활성화 (누른 버튼만 true)
        setStateMenu(
            stateMenu.map((item) =>
                item.current === current ? { ...item, isClass: true } : { ...item, isClass: false }
            )
        );

        // 정렬 초기화 (전체보기로)
        setSortMenu(
            sortMenu.map((item) =>
                item.current === current ? { ...item, isClass: true } : { ...item, isClass: false }
            )
        );
    };

    // 2. [정렬] 전체(기본순), 인기순(리뷰순)
    const onSort = (type) => {
        const sorted = [...data]; // 현재 보고 있는 데이터 복사

        if (type === 'review') {
            // 리뷰 많은 순 (내림차순)
            sorted.sort((a, b) => b.review - a.review);
            // 기본 순서 (ID 오름차순) 복구
        } else if (type === 'all') {
            sorted.sort((a, b) => a.id - b.id);
        }

        setData(sorted);

        // 정렬 버튼 활성화
        setSortMenu(
            sortMenu.map((item) =>
                item.type === type ? { ...item, isClass: true } : { ...item, isClass: false }
            )
        );
    };

    // 컴포넌트에서 사용할 변수와 함수들을 리턴
    return {
        data, // 화면에 뿌려줄 데이터(data) // const data =  useContentControl( )
        stateMenu, // 필터 메뉴 상태
        sortMenu, // 정렬 메뉴 상태
        onShow, // 필터 함수
        onSort, // 정렬 함수
    };
};

export default useContentControl;
