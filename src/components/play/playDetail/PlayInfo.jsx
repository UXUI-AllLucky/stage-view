import React from 'react';
import './style.scss';
import stateInfo from '../../../assets/api/stateMenu';

const PlayInfo = ({ play }) => {
  const { id, img, title, place, current, date, review, category } = play;

  // 2. 전체 메뉴 데이터 중에서 내 current('underway')와 같은 것을 찾습니다.
  const stateItem = stateInfo.find((item) => item.current === current);

  // 3. 찾았으면 그 안의 text('공연중')를 꺼내고, 없으면 그냥 current를 보여줍니다.
  const stateText = stateItem ? stateItem.text : current;

  return (
    <div className="play-info">
      <img className="play-img" src={img} alt={title} />
      <ul className="play-info-list">
        <li className={`state ${current}`}>{stateText}</li>
        <li className="title">{title}</li>
        <li className="place">
          <span>장소</span>
          {place}
        </li>
        <li className="date">
          <span>공연기간</span> {date}
        </li>
        <li className="review">
          <span>관람후기</span> {review}
        </li>
        <li className="actor">
          <span>출연</span>
        </li>
      </ul>
    </div>
  );
};

export default PlayInfo;
