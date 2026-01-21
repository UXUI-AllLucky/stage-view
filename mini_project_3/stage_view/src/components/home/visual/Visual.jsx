import MusicalSlider from '../musicalSlider/MusicalSlider';
import PlaySlider from '../playSlider/PlaySlider';
import '../playSlider/playSlider.css';
import '../musicalSlider/musicalSlider.css';
import './style.scss';

const Visual = () => {
    return (
        <div id="visual">
            <div className="main_visual">
                <PlaySlider />
                <MusicalSlider />
            </div>
        </div>
    );
};

export default Visual;
