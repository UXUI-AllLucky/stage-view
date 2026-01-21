import './style.scss';

const PlayContentList = ({ play }) => {
  const { title, place, current, img, date, review, alt } = play;
  return (
    <li className="palycontent">
      <img src={img} alt={alt} />
      <h6>{title}</h6>
      <p className="place">{place}</p>
      <span>
        {date}
        <p>후기 {review}</p>
      </span>
      <div className="hidden">{current}</div>
    </li>
  );
};

export default PlayContentList;
