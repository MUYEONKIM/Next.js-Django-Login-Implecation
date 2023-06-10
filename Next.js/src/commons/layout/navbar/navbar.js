import { useContext } from "react";
import AuthContext from "../../../../src/components/AuthContext/AuthContext";
import Link from "next/link.js";

export default function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);


  return (
    <nav>
      <div>
        <h1>App Name</h1>
        <div>
          {user ? (
            <>
              <Link href="/home"><a>Home</a></Link>
              <Link href="/protected"><a>Protected page</a></Link>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login"><a>Login</a></Link>
              <Link href="/register"><a>Register</a></Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

