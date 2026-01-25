import './style.scss';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const PlayContentList = ({ play }) => {
  const { id, title, place, img, date, review, alt } = play;
  return (
    <li className="playcontent">
      {/* li 안에서 Link로 전체 내용을 감싸줍니다. 
         <Link> 태그는 렌더링 되면 <a> 태그로 변합니다.
         클릭 시 /play/1, /play/2 등으로 이동하게 됩니다.
         <a> 태그는 기본적으로 파란 글씨 + 밑줄이 생기고 인라인 속성이라 레이아웃이 깨질 수 있어 스타일을 꼭 추가해주셔야 디자인이 유지됩니다.*/}
      <Link to={`/play/${id}`}>
        {/* ✅ 수정 포인트: img-wrap 안에 리뷰 배지를 넣습니다 */}
        <div className="img-wrap">
          <img src={img} alt={alt} />

          {/* 👇 여기로 이동! (포스터 위에 얹기 위해) */}
          <p className="review-wrap">
            <i className="review-i">
              <FaStar />
            </i>
            <span className="review">review {review}</span>
          </p>
        </div>

        <h6>{title}</h6>
        <p className="place">{place}</p>

        {/* 원래 여기 있던 review-wrap은 위로 올렸으므로 삭제 */}
        <div>
          <p className="date">{date}</p>
        </div>
      </Link>
    </li>
  );
};

{
  /* <span>
                {date}
                <strong>후기 {review.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong>
            </span> */
}

export default PlayContentList;
