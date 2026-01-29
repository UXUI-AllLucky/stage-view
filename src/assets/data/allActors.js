// 1. 각각의 파일에서 데이터를 가져옵니다.
// (export default로 내보냈다면 중괄호 {} 없이, export const로 내보냈다면 {} 써야 함)
import femaleActors from './femaleActors';
import maleActors from './maleActors';

// 2. 두 배열을 하나로 합칩니다.
// 이때 id가 1, 1 겹쳐도 상관없습니다. 그냥 리스트가 길어질 뿐입니다.
const rawActorList = [...femaleActors, ...maleActors];

// 3. ⭐ 핵심: 배열을 "이름: 이미지" 형태의 객체로 변환합니다.
// 이렇게 하면 PlayInfo.js에서 actorData['이름']으로 바로 찾을 수 있습니다.
export const actorData = rawActorList.reduce((acc, cur) => {
    // acc: 쌓이는 객체, cur: 현재 배우 데이터
    acc[cur.name] = cur.profile; // "이름"을 키로, "이미지경로"를 값으로 저장
    return acc;
}, {});

/* 결과적으로 actorData는 이런 모양이 됩니다:
  {
    "이두연": "/images/female/lee.jpg",
    "김민종": "/images/male/kim.jpg",
    ...
  }
*/
