import { useParams } from "react-router-dom";

// 서버 API를 이용하여 회원 목록 정보를 읽어왔다고 가정
const members = [
  {id: "bangry", name: "김기정", description: "허접한 풀스택 강사입니다.."}, 
  {id: "gildong", name: "홍길동", description: "잘나가는 리액트 개발자입니다.."}, 
]
const Profile = () => {
  const {id} = useParams();
  const member = (id === 'bangry') ? members[0] : members[1];

  return (
    <div>
      <h1>프로필 페이지</h1>
      <p>{member.name}</p>
      <p>{member.description}</p>
    </div>
  );
}
export default Profile;

