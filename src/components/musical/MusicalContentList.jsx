import './style.scss';

const MusicalContentList = ({ musical }) => {
    const { title, place, current, img, date, review, alt } = musical;
    return (
        <li className="musicalcontent">
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

export default MusicalContentList;
