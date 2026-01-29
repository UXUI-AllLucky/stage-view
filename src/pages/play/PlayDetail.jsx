// useParams를 쓰면 URL에 있는 id값(예: 1, 2, 3)을 받아올 수 있습니다.
import PlayInfo from '../../components/play/playDetail/PlayInfo';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate 추가 (뒤로가기용)
import { IoIosArrowBack } from 'react-icons/io';

import SeatData from '../../components/play/playDetail/SeatData'; // 좌석 컴포넌트
import { seatMaps } from '../../assets/data/seatData'; // 좌석 데이터 파일
import PlaceBtn from '../../components/play/playDetail/PlaceBtn';

//PlayContentList가 아니라, App.jsx에서 전체 데이터를 받아야 합니다.
/*새로고침 문제 (가장 중요):
만약 PlayContentList에서 클릭할 때 데이터를 넘겨준다면, 사용자가 상세페이지에서 **"새로고침(F5)"**을 누르거나 주소를 복사해서 친구한테 보냈을 때 데이터가 다 날아갑니다.
App.jsx에서 원본을 내려주거나 데이터를 직접 import해야, 주소창의 숫자(id)만 보고도 언제든지 데이터를 다시 찾아낼 수 있습니다.*/

const PlayDetail = ({ work }) => {
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

    // ✅ 3. [추가] 현재 공연에 맞는 좌석 데이터 찾기
    // play 객체 안에 있는 정보(예: ID나 이름, 혹은 별도의 코드)를 이용해 맵을 찾습니다.
    // play.seatKey가 있으면 그걸 쓰고, 없으면 기본값(예: yes24...)을 쓴다
    const mapKey = play.seatKey || 'yes24Stage_num3';
    const currentSeatMap = seatMaps[mapKey];

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

                <PlayInfo play={play} />
                {/* ✅ 4. [추가] 좌석 선택 컴포넌트 배치 */}
                {/* 구분선이나 여백을 주면 더 좋습니다 */}
                <div
                    style={{ marginTop: '100px', borderTop: '1px solid #ddd', paddingTop: '50px' }}
                >
                    <h4
                        className="placeBtn"
                        style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}
                    >
                        {play.place}
                        <PlaceBtn />
                    </h4>

                    {/* 만능 컴포넌트에 데이터 던져주기 */}
                    <SeatData mapData={currentSeatMap} title={play.place} />
                </div>
            </div>
        </div>
    );
};

/*요약
1. 리스트 클릭(이동): <Link>가 최고입니다. (지금 잘하셨어요!)

2. 뒤로 가기 버튼: useNavigate(-1)을 쓰는 게 더 자연스럽습니다.

3. 로그인/글쓰기 완료: 이럴 때 useNavigate를 씁니다.*/
export default PlayDetail;
