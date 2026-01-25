// useParams를 쓰면 URL에 있는 id값(예: 1, 2, 3)을 받아올 수 있습니다.
import React from 'react';
import { useParams } from 'react-router-dom';

//PlayContentList가 아니라, App.jsx에서 전체 데이터를 받아야 합니다.
/*새로고침 문제 (가장 중요):
만약 PlayContentList에서 클릭할 때 데이터를 넘겨준다면, 사용자가 상세페이지에서 **"새로고침(F5)"**을 누르거나 주소를 복사해서 친구한테 보냈을 때 데이터가 다 날아갑니다.
App.jsx에서 원본을 내려주거나 데이터를 직접 import해야, 주소창의 숫자(id)만 보고도 언제든지 데이터를 다시 찾아낼 수 있습니다.*/

const PlayDetail = ({ work }) => {
  // URL에서 id를 가져옵니다 (예: /play/1 -> id는 1)
  const { id } = useParams();

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

  return (
    <div className="play-detail-page">
      {/* 이제 play 변수에 모든 정보가 있으니 마음껏 쓰세요! */}
      <img className="play-img" src={play.img} alt={play.title} />
      <p>{play.category}</p>
      <h1>{play.title}</h1>
      <p>{play.place}</p>
      <p>{play.current}</p>
      <p>{play.date}</p>
      <p>{play.review}</p>

      {/* ... */}
    </div>
  );
};

/*요약
1. 리스트 클릭(이동): <Link>가 최고입니다. (지금 잘하셨어요!)

2. 뒤로 가기 버튼: useNavigate(-1)을 쓰는 게 더 자연스럽습니다.

3. 로그인/글쓰기 완료: 이럴 때 useNavigate를 씁니다.*/
export default PlayDetail;
