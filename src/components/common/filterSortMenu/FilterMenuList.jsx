import './style.scss';

const FilterMenuList = ({ menu, onSort }) => {
  const { type, isClass, text } = menu;

  return (
    <li
      className={isClass ? 'on' : ''}
      // 클릭 시 type ('all' 또는 'review')을 전달
      onClick={() => onSort(type)}
    >
      {text}
    </li>
  );
};

export default FilterMenuList;
