import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.username);
  return (
    <div className=" hidden text-sm font-semibold uppercase md:block">
      {userName}
    </div>
  );
}

export default UserName;
