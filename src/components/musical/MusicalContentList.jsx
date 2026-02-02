import './style.scss';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
// import { RiChatSmile3Fill } from 'react-icons/ri';
// import { FaFaceGrinHearts } from 'react-icons/fa6';

const MusicalContentList = ({ musical }) => {
  const { id,title, place, img, date, review, alt } = musical;
  return (
    <li className="musicalcontent">
       <Link to={`/musical/${id}`}>
      <div className="img-wrap">
        <img src={img} alt={alt} />


       <p className="review-wrap">
            <i className="review-i">
              <FaStar />
            </i>
            <span className="review">{review}</span>
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


export default MusicalContentList;
