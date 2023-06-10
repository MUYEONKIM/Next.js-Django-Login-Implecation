export default function UserInfo({ user }) {
  console.log(user)
  return (
    <div>
      <h1>Hello, {user.username}</h1>
    </div>
  );
}

