import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/login"}>
        <button>로그인</button>
      </Link>
      <Link to={"/mypage"}>
        <button>마이페이지</button>
      </Link>
    </div>
  );
};

export default Home;