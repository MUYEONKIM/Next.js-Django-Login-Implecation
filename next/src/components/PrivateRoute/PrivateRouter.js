import { Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { useRouter } from "next/router";

export default function PrivateRoute() {
    const router = useRouter()
    let { user } = useContext(AuthContext);
    return !user ? router.push("/login") : <Outlet />;
};

