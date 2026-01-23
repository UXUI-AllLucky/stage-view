import NextWorkVisual from '../../components/home/nextWorkVisual/NextWorkVisual';
import SearchForm from '../../components/home/searchForm/SearchForm';
import Visual from '../../components/home/visual/Visual';

const Home = ({ onSearch, WorkData }) => {
    // 1. [핵심] 훅에 넣기 전에!!, 여기서 '연극(play)'만 미리 걸러냅니다.
    const nextWork = WorkData.filter((item) => item.current === 'expected');
    return (
        <>
            <SearchForm onSearch={onSearch} />
            <Visual />
            <NextWorkVisual nextWork={nextWork} />
        </>
    );
};

export default Home;
