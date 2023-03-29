import './style.css';
// COMPONENTS
import Search from '../../organisms/Search/Search';

const Home = () => {
    return(
        <div className="home fixed-full-height">
            <Search />
        </div>
    )
};

export default Home;