import NextWorkVisual from '../../components/home/nextWorkVisual/NextWorkVisual';
import SearchForm from '../../components/home/searchForm/SearchForm';
import Visual from '../../components/home/visual/Visual';

const Home = ({ WorkData }) => {
  return (
    <>
      <SearchForm />
      <Visual />
      <NextWorkVisual WorkData={WorkData} />
    </>
  );
};

export default Home;
