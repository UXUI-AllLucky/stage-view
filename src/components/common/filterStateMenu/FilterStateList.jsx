const FilterStateList = ({ item, onShow }) => {
  const { text, current, isClass } = item;
  return (
    // 클릭 시 'underway', 'expected', 'end' 중 하나가 onShow로 전달됨
    <li className={isClass ? 'on' : ''} onClick={() => onShow(current)}>
      {text}
    </li>
  );
};
export default FilterStateList;
