import FilterStateList from '../../components/common/filterStateList/FilterStateList';
import FilterMenuList from '../../components/common/filterMenuList/FilterMenuList';

import Pagenation from '../../components/common/pagenation/Pagenation';
import usePagenation from '../../hooks/usePagenation';
import useContentControl from '../../hooks/useContentControl';
import './style.scss';
import MusicalContent from '../../components/musical/MusicalContent';

// hook 사용 >> 이제 setWork나 work(화면용)는 부모에게 받을 필요가 없습니다. 원본 데이터(WorkData)만 받으면 됩니다.
const Musical = ({ WorkData }) => {
    // 1. [핵심] 훅에 넣기 전에!!, 여기서 '연극(play)'만 미리 걸러냅니다.
    const musicalListData = WorkData.filter((item) => item.category === 'musical');

    // 2. 훅에는 전체 데이터(WorkData)가 아니라, 걸러낸 데이터(musicalListData)를 줍니다.
    const {
        data: musicalList, // hook에 적용하는 data -> musicalList로 이름변경함
        stateMenu,
        sortMenu,
        onShow,
        onSort,
    } = useContentControl(musicalListData); // 훅에게 걸러낸 데이터(musicalListData)를 던져줍니다.

    // 3. 페이지네이션 훅 (필터링된 데이터 -> 현재 페이지 데이터)
    const { currentData, currentPage, totalPage, setCurrentPage } = usePagenation(musicalList, 10);
    // musicalList로->currentData에 담음

    return (
        <div className="musical-inner">
            <h3>
                뮤지컬<span>Musical</span>
            </h3>

            {/* Hook에서 받은 변수와 함수를 그대로 넣어줍니다 */}
            <FilterStateList state={stateMenu} onShow={onShow} />
            <FilterMenuList menu={sortMenu} onSort={onSort} />
            {/* 4. PlayContent에는 전체(musicalList)가 아니라 현재 페이지 데이터(currentData)를 줍니다 */}
            <MusicalContent musicalwork={currentData} />

            <Pagenation
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default Musical;
