import './style.scss';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="inner">
        <div>
          <img src="./images/stage_view_logo.svg" alt="stage view 로고" />
          <ul className="footerMenu">
            <li>서비스 소개</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>FAQ</li>
          </ul>
        </div>
        <p className="copy">©Copyright 2026 stage view All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
