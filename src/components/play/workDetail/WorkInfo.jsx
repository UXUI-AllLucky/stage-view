import React from 'react';
import './style.scss';
import stateInfo from '../../../assets/api/stateMenu';
import { actorData } from '../../../assets/data/allActors';
import { FaStar } from 'react-icons/fa6';

const WorkInfo = ({ play }) => {
    const { id, img, title, place, current, date, review, category, cast, ticket } = play;

    // 2. 전체 메뉴 데이터 중에서 내 current('underway')와 같은 것을 찾습니다.
    const stateItem = stateInfo.find((item) => item.current === current);

    // 3. 찾았으면 그 안의 text('공연중')를 꺼내고, 없으면 그냥 current를 보여줍니다.
    const stateText = stateItem ? stateItem.text : current;

    return (
        <div className="play-info">
            <div className="play-img-box">
                <img className="play-img" src={img} alt={title} />
            </div>
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
                <li className="ticket">
                    <span>예매처</span>
                    {/* ticket 데이터가 있을 때만 실행 */}
                    {play.ticket && (
                        <div className="ticket-list">
                            {play.ticket.map((work, index) => (
                                <a
                                    key={index}
                                    href={work.link}
                                    target="_blank"        // 링크를 클릭했을 때, **현재 페이지는 그대로 두고, 새 창을 열어서 보여주기**
                                    rel="noopener noreferrer" // 보안 필수 옵션 // No Opener: 우리창 못열게 하기. 안그럼 우리창 해킹위험있음 // 누가(STAGE VIEW) 보냈는지도 모르게하기(noreferrer) // 수수료 받는 경우는 noreferrer 쓰면 안됨
                                    className="ticket-link"
                                >
                                    <img src={work.logo} alt={work.name} className={work.name} />
                                </a>
                            ))}
                        </div>
                    )}
                </li>
                <li className="review">
                    <span>관람후기</span>
                    <i className="review-i">
                        <FaStar />
                    </i>
                    {review}개
                </li>
                <li className="actor">
                    <span className="cast">출연</span>
                    {/* cast 배열이 있을 때만 실행 */}
                    {play.cast && (
                        <ul className="cast-list">
                            {/* name은 "이석준", "신성민" 같은 텍스트입니다 */}
                            {play.cast.map((name, index) => {
                                // 2. 배우 이름(name)으로 이미지 주소 찾기
                                // actorData["이석준"] -> 이미지 경로가 나옴
                                // 만약 등록된 사진이 없으면 기본 이미지(default.png) 보여주기
                                const actorImg =
                                    actorData[name] || '/images/actors/default_profile.png';
                                return (
                                    <li key={index} className="actor-item">
                                        <div className="img-box">
                                            <img src={actorImg} alt={name} />
                                        </div>
                                        <strong className="name">{name}</strong>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default WorkInfo;
