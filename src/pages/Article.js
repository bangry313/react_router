import { useParams } from "react-router-dom";

const Article = () => {
  const { articleId } = useParams();
  // API 호출을 이용하여 서버로부터 상세정보 수신....
  return (
    <>
      <div>
        <h2>게시글 상세내용입니다..</h2>
        <p>{articleId}번글 상세정보입니다..</p>
      </div>
    </>

  );
}
export default Article;