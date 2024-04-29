import { Navigate } from "react-router-dom";

// 현재 컴포넌트는 로그인하여야 보여지는 컴포넌트라 가정
const MyPage = function(){
  let isLogged = true;
  if(!isLogged){
    // 로그인 컴포넌트로 이동
    return <Navigate to="/member/login" />
  }

  return(
    <div>
      <h1>마이페이지 입니다...</h1>
    </div>
  );

}
export default MyPage;