import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "./UserName";

function Header() {
  return (
    <header className=" font-pizza flex items-center justify-between border-b border-stone-400 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link className=" tracking-widest" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
