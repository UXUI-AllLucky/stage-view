import MusicalSlider from '../musicalSlider/MusicalSlider';
import PlaySlider from '../playSlider/PlaySlider';
import '../playSlider/playSlider.css';
import '../musicalSlider/musicalSlider.css';
import './style.scss';

const Visual = ({ playListData, musicalListData }) => {
    return (
        <div id="visual">
            <div className="main_visual">
                <PlaySlider playListData={playListData}/>
                <MusicalSlider musicalListData={musicalListData}/>
            </div>
        </div>
    );
};

export default Visual;
