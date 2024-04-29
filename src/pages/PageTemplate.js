import { Link, Outlet } from "react-router-dom";
import styled from './PageTemplate.module.css';


const PageTemplate = function () {
  // 전체 페이지 레이아웃 완성
  return (
    <div>
      <header className={styled.header}>
        <ul>
          <li><Link to="/">홈으로</Link></li>
          <li><Link to="/about?id=bangry&name=김기정">사이트소개</Link></li>
          <li><Link to="/profile/bangry">사용자 프로필</Link></li>
          <li><Link to="/article">게시글목록</Link></li>
        </ul>

        <div>
          <button><Link to="/member/login">로그인</Link></button>
          <button>회원가입</button>
          <button><Link to="/mypage">마이페이지</Link></button>
        </div>
      </header>

      <section>
        <Outlet />
      </section>

      <footer>공통적으로 들어가는 바닥글입니다..</footer>
    </div>


  );
}

export default PageTemplate;