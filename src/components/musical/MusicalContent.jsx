import MusicalContentList from './MusicalContentList';
import './style.scss';

const MusicalContent = ({ musicalwork }) => {
    return (
        <ul className="musicallist">
            {musicalwork.map((musical) => (
                <MusicalContentList key={musical.id} musical={musical} />
            ))}
        </ul>
    );
};

export default MusicalContent;
