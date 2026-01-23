import './style.scss';

const PlayContentList = ({ play }) => {
    const { title, place, img, date, review, alt } = play;
    return (
        <li className="playcontent">
            <img src={img} alt={alt} />
            <h6>{title}</h6>
            <p className="place">{place}</p>
            <span>
                {date}
                <strong>후기 {review.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong>
            </span>
        </li>
    );
};

export default PlayContentList;
