import { Link, NavLink, Outlet } from "react-router-dom";

const ArticleList = () => {
  
  const activeStyle = {
    background : 'red'
  };
  
  return (
    <>
      <div>
        <h2>게시글 목록</h2>
        <ul>
          <li><Link to="/article/10">게시글1</Link></li>
          <li><NavLink to="/article/11" style={({isActive})=> isActive ? activeStyle : undefined}>게시글2</NavLink></li>
          <li>게시글3</li>
          <li>게시글4</li>
          <li>게시글5</li>
        </ul>
      </div>
      {/* 게시글 상세 컴포넌트 보여주기 위한 Outlet 위치 설정 */}
      <section><Outlet /></section>
    </>
  );
}
export default ArticleList;