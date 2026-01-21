import PlayContentList from './PlayContentList';
import './style.scss';

const PlayContent = ({ playwork }) => {
    return (
        <ul className="playlist">
            {playwork.map((play) => (
                <PlayContentList key={play.id} play={play} />
            ))}
        </ul>
    );
};

export default PlayContent;
