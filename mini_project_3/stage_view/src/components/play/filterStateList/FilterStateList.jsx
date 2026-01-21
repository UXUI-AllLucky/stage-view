import FilterStateItem from './FilterStateItem';
import './style.scss';

const FilterStateList = ({ state, onShow }) => {
  return (
    <ul className="statemenu">
      {state.map((work) => (
        <FilterStateItem key={work.id} work={work} onShow={onShow} />
      ))}
    </ul>
  );
};

export default FilterStateList;
