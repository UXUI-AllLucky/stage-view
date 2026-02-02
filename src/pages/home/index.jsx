import NextWorkVisual from '../../components/home/nextWorkVisual/NextWorkVisual';
import SearchForm from '../../components/home/searchForm/SearchForm';
import Visual from '../../components/home/visual/Visual';

const Home = ({ WorkData }) => {
 
  // 1. '연극(play)'만 미리 걸러냅니다.
  const playListData = WorkData.filter((item) => item.category === 'play');

  // 2. '뮤지컬(musical)'만 미리 걸러냅니다.
  const musicalListData = WorkData.filter((item) => item.category === 'musical');

   const expectedListData = WorkData.filter((item) => item.current === 'expected');

  return (
    <>
      <SearchForm />
      <Visual playListData={playListData} musicalListData={musicalListData} />
      <NextWorkVisual expectedListData={expectedListData} />
    </>
  );
};

export default Home;
