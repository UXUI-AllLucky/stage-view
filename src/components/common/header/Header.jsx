import { Link } from 'react-router-dom';
import Nav from './Nav';
import Info from './Info';
import './style.scss';

const Header = ({ onOpenSearch }) => {
  return (
    <header id="header">
      <div className="inner">
        <h1 className="logo">
          <Link to="/">
            <img src="./images/stage_view_logo.svg" alt="stage review 로고" />
          </Link>
        </h1>
        <Nav />

        <Info onOpenSearch={onOpenSearch} />
      </div>
    </header>
  );
};

export default Header;
