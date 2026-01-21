import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="gnb">
        <li className="playmenu">
          <Link to="/play">연극</Link>
        </li>
        <li>
          <Link to="/musical">뮤지컬</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
