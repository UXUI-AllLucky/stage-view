import './style.scss';
import { FaStar } from 'react-icons/fa6';
// import { RiChatSmile3Fill } from 'react-icons/ri';
// import { FaFaceGrinHearts } from 'react-icons/fa6';

const MusicalContentList = ({ musical }) => {
  const { title, place, img, date, review, alt } = musical;
  return (
    <li className="musicalcontent">
      <div className="img-wrap">
        <img src={img} alt={alt} />
      </div>

      <div className="title-wrap">
        <h6>
          {title}
          <span className="review-wrap">
            {/* ( */}
            <i className="review-i">
              <FaStar />
              {/* <HiPencilSquare /> */}
              {/* <RiChatSmile3Fill /> */}
              {/* <FaFaceGrinHearts /> */}
            </i>
            <span className="review"> {review} </span>
            {/* ) */}
          </span>
        </h6>
      </div>

      <p className="place">{place}</p>
      <span>
        {date}
        {/* <p>후기 {review.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p> */}
      </span>
    </li>
  );
};

export default MusicalContentList;
