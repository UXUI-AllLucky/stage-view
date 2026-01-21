import FilterMenuItem from './FilterMenuItem';
import './style.scss';

const FilterMenuList = ({ menu, onSort }) => {
  return (
    <ul className="filter-menu">
      {menu.map((item) => (
        <FilterMenuItem key={item.id} menu={item} onSort={onSort} />
      ))}
    </ul>
  );
};

export default FilterMenuList;
