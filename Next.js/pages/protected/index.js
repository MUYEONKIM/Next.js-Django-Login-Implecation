import { useContext, useEffect, useState } from "react";
import useAxios from "../../src/components/Axios/axios";
import AuthContext from "../../src/components/AuthContext/AuthContext";
import { useRouter } from "next/router";

export default function ProtectedPage() {
  const router = useRouter()
  let { user } = useContext(AuthContext);
  const [res, setRes] = useState("");
  const api = useAxios;

  useEffect(() => {
    if(!user){
      router.push('/login')
    }
  }, [user, router])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
      } catch {
        setRes("Something went wrong");
      }
    };
    fetchData();

  }, []);

  return (
    <div>
      <h1>로그인 해야만 볼수있습니다</h1>
      <p>{res}</p>
    </div>
  );
}

