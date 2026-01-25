import FilterMenuList from './FilterMenuList';
import './style.scss';

const FilterSortMenu = ({ menu, onSort }) => {
  return (
    <ul className="filter-menu">
      {menu.map((item) => (
        <FilterMenuList key={item.id} menu={item} onSort={onSort} />
      ))}
    </ul>
  );
};

export default FilterSortMenu;
