import FilterStateItem from './FilterStateItem';
import './style.scss';

const FilterStateList = ({ state, onShow }) => {
    return (
        <ul className="statemenu">
            {state.map((item) => (
                <FilterStateItem key={item.id} item={item} onShow={onShow} />
            ))}
        </ul>
    );
};

export default FilterStateList;
