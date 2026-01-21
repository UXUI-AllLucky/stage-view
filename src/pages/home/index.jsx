import SearchForm from '../../components/home/searchForm/SearchForm';
import Visual from '../../components/home/visual/Visual';

const Home = ({ onSearch }) => {
    return (
        <>
            <SearchForm onSearch={onSearch} />
            <Visual />
        </>
    );
};

export default Home;
