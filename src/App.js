import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import PageTemplate from "./pages/PageTemplate";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route element={<PageTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/article" element={<ArticleList />}>
          {/* 라우터 중첩을 이용하여 한 페이지 내에서 보여주기 */}
          <Route path="/article/:articleId" element={<Article />} />
        </Route>
        <Route path="/mypage" element={<MyPage/>}/>
      </Route>

      <Route path="/member/login" element={<Login />} />

    </Routes>

  );
}

export default App;
