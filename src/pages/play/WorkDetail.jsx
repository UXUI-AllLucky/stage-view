// useParams를 쓰면 URL에 있는 id값(예: 1, 2, 3)을 받아올 수 있습니다.
import WorkInfo from '../../components/play/workDetail/WorkInfo';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate 추가 (뒤로가기용)
import { IoIosArrowBack } from 'react-icons/io';

import SeatData from '../../components/play/workDetail/SeatData'; // 좌석 컴포넌트
import { seatMaps } from '../../assets/data/seatData'; // 좌석 데이터 파일
import PlaceBtn from '../../components/play/workDetail/PlaceBtn';
import Review from '../../components/play/workDetail/Review';

//PlayContentList가 아니라, App.jsx에서 전체 데이터를 받아야 합니다.
/*새로고침 문제 (가장 중요):
만약 PlayContentList에서 클릭할 때 데이터를 넘겨준다면, 사용자가 상세페이지에서 **"새로고침(F5)"**을 누르거나 주소를 복사해서 친구한테 보냈을 때 데이터가 다 날아갑니다.
App.jsx에서 원본을 내려주거나 데이터를 직접 import해야, 주소창의 숫자(id)만 보고도 언제든지 데이터를 다시 찾아낼 수 있습니다.*/

const WorkDetail = ({ work }) => {
    // URL에서 id를 가져옵니다 (예: /play/1 -> id는 1)
    const { id } = useParams();
    const navigate = useNavigate(); // 뒤로가기

    // 1. 전체 데이터(work)가 아직 안 넘어왔거나 비어있을 때를 대비 (안전장치)
    if (!work) {
        return <div>로딩중...</div>;
    }

    // 2. 전체 데이터 중에서 ID가 일치하는 녀석 하나 찾기 (.find)
    const play = work.find((item) => item.id === Number(id));

    // 3. 만약 없는 ID를 쳤다면?
    if (!play) {
        return <div>해당 공연 정보가 없습니다.</div>;
    }
    // ✅ 카테고리에 따라 한글/영문 제목 변수 설정
    const categoryTitle = play.category === 'musical' ? '뮤지컬' : '연극';
    const categoryEng = play.category === 'musical' ? 'Musical' : 'Play';



/*PlaceBtn을 클릭했을 때 SeatData가 바뀌게 하려면, "어떤 지도가 선택되었는지"를 저장하는 상태(State)를 부모인 WorkDetail에 만들어야 합니다.
<데이터 흐름>
WorkDetail (부모): 전체 지도 목록(현재+과거)을 만들고, activeKey(현재 선택된 지도 키) 상태를 관리합니다.
PlaceBtn (자식): 목록을 받아서 버튼을 그리고, 클릭하면 부모의 activeKey를 바꿔달라고 요청합니다.
SeatData (자식): 바뀐 activeKey에 맞는 지도를 받아 화면을 다시 그립니다.*/ 


    // ✅ [핵심 1] "지도 옵션 목록" 만들기 :  현재 시즌 + 과거 시즌(history)을 합쳐서 하나의 배열로 만듭니다.
    const mapOptions = [
        // 1. 현재 시즌 (수정된 부분)
        {
            // play.season이 있으면 그걸 쓰고, 없으면 '현재 시즌'이라고 뜸 (안전장치)
            label: play.season || '현재 시즌',
            key: play.seatKey || 'yes24Stage_num3',
            title: play.place
        },
        // 2. 과거 시즌 (있다면 추가)
        ...(play.history ? play.history.map(h => ({
            label: h.season, // 예: "2023 재연"
            key: h.seatKey,  // 예: "artHall_s"
            title: `${h.season} - ${h.place}` // 예: "2023 재연 - 두산아트센터"
        })) : [])
    ];



    // ✅ [핵심 2] 현재 선택된 지도의 Key를 관리하는 State
    // 초기값은 리스트의 첫 번째(현재 시즌)의 key로 설정
    const [activeMapKey, setActiveMapKey] = useState(mapOptions[0].key);

    // ✅ 3. 현재 공연에 맞는 좌석 데이터 찾기
    // play 객체 안에 있는 정보(예: ID나 이름, 혹은 별도의 코드)를 이용해 맵을 찾습니다.
    // ✅ [핵심 3] 지도 제목도 바뀌어야 하므로, 현재 선택된 옵션을 찾음. 선택된 옵션이 없으면 초기값(현재 시즌)을 쓴다
    const currentOption = mapOptions.find(opt => opt.key === activeMapKey) || mapOptions[0];
   // ✅ [핵심 4] State에 따라 보여줄 실제 지도 데이터 찾기
    const currentSeatMap = seatMaps[activeMapKey];

    // ✅ 좌석 선택 상태 관리
    const [selectedSeat, setSelectedSeat] = useState(null);

    // 지도가 바뀌면 선택된 좌석 초기화 (버그 방지)
    useEffect(() => {
        setSelectedSeat(null);
    }, [activeMapKey]);

    const handleSeatClick = (seatId) => {
        setSelectedSeat(seatId); // 이미 선택된 좌석을 다시 누르면 닫을지, 아니면 그냥 유지할지 결정 // 여기서는 그냥 선택된 좌석 업데이트
    };

    // 배경 클릭 시 리뷰 닫기 (선택사항)
    const closeReview = () => {
        setSelectedSeat(null);
    };

    return (
        <div className="play-detail-page">
            <div className="inner">
                {/* 뒤로가기 버튼 (선택사항) */}
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <IoIosArrowBack /> 뒤로가기
                </button>

                {/* ✅ 여기가 자동으로 바뀝니다! */}
                <h3>
                    {categoryTitle}
                    <span>{categoryEng}</span>
                </h3>

                <WorkInfo play={play} />
                {/* ✅ 4. [추가] 좌석 선택 컴포넌트 배치 */}
                {/* 구분선*/}
                <div
                    style={{ borderTop: '1px solid #ddd', paddingTop: '50px' }}
                >
                    {/* ✅ PlaceBtn에 데이터와 함수를 넘겨줍니다 */}
                    <div className="place-btn-wrapper" style={{ marginBottom: '20px', textAlign: 'center' }}>
                        <PlaceBtn 
                            options={mapOptions}       // 버튼 목록
                            selected={activeMapKey}    // 현재 선택된 놈 // placeBtn style={{ fontSize: '24px', marginBottom: '10px', textAlign: 'center' }}
                            onSelect={setActiveMapKey} // 클릭 시 부모 state 변경 함수
                        />
                    </div>
                    

                    {/* 만능 컴포넌트에 데이터 던져주기 */}
                    <div className={`seat-view-container ${selectedSeat ? 'mode-review' : ''}`}>
                        <div className="seat-map-section">
                            <SeatData
                                mapData={currentSeatMap}
                                title={currentOption.title} // 선택된 옵션에 따라 버튼 제목 변경
                                onSeatClick={handleSeatClick}
                            />
                        </div>
                        <div className="review-section">
                            <Review seatId={selectedSeat} onClose={closeReview} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/*요약
1. 리스트 클릭(이동): <Link>가 최고입니다. (지금 잘하셨어요!)

2. 뒤로 가기 버튼: useNavigate(-1)을 쓰는 게 더 자연스럽습니다.

3. 로그인/글쓰기 완료: 이럴 때 useNavigate를 씁니다.*/
export default WorkDetail;
