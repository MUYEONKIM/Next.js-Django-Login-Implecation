import { useContext } from "react";
import UserInfo from "../../src/components/Userinfo/userinfo";
import AuthContext from "../../src/components/AuthContext/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      {user && <UserInfo user={user} />}
      <h1>홈페이지 입니다</h1>
    </section>
  );
};

export default Home;