import { useSearchParams } from 'react-router-dom';
import PlayContentList from '../../components/play/playContent/PlayContentList';
import './style.scss';

const SearchPage = ({ playwork }) => {
  // 1. URL의 쿼리 파라미터(?q=검색어)를 읽어옵니다.
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); // 'q'에 담긴 검색어를 가져옴

  // 2. 검색 로직 수행
  // 검색어가 없으면 빈 배열, 있으면 제목(title)이나 장소(place)에 검색어가 포함된 항목 필터링
  const searchList = playwork.filter((item) => {
    if (!query) return false;

    const lowerQuery = query.toLowerCase(); // 검색어가 없으면 빈 배열
    const lowerTitle = item.title.toLowerCase(); //제목(title)
    const lowerPlace = item.place.toLowerCase(); // 장소(place)

    return lowerTitle.includes(lowerQuery) || lowerPlace.includes(lowerQuery);
  });

  return (
    <div className="search-page inner">
      <h2>
        '{query}'<span>Search Result</span>
      </h2>

      <p className="search-info">
        <strong>'{query}'</strong> 에 대한 검색 결과입니다.
        <span>(총 {searchList.length}건)</span>
      </p>

      {/* 3. 결과 렌더링 */}
      <ul className="playlist">
        {searchList.length > 0 ? (
          // 검색 결과가 있을 때
          searchList.map((item) => (
            <PlayContentList key={item.id} play={item} />
          ))
        ) : (
          // 검색 결과가 없을 때
          <li className="no-data">검색된 결과가 없습니다.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchPage;
