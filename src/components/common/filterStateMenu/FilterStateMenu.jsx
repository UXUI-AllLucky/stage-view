import FilterStateList from './FilterStateList';
import './style.scss';

const FilterStateMenu = ({ state, onShow }) => {
  return (
    <ul className="statemenu">
      {state.map((item) => (
        <FilterStateList key={item.id} item={item} onShow={onShow} />
      ))}
    </ul>
  );
};

export default FilterStateMenu;
