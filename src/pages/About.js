import { useSearchParams } from "react-router-dom";

// /about?id=bangry&name=김기정
const About = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  return (
    <div>
      <h1>소개 페이지</h1>
      <p>잘 나가는 사이트입니다.</p>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  );
}
export default About;

