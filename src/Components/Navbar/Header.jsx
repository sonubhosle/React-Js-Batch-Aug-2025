import { Heart, Search, ShoppingBag, Sparkles, UserRound } from "lucide-react";
import { Link } from 'react-router-dom'
import Navbar from "./Navigation";
import UserMenu from "../UI/UserMenu";
import UserCart from "../UI/UserCart";

const Header = () => {
  return (
    <header>
      <div className="flex sticky top-0 z-50 font-roboto  border-b border-gray-100 justify-between items-center bg-white px-5 p-2">
        <Link >
          <p className="text-3xl font-bold text-gray-800  uppercase">Buyzaar</p>
          <div className="flex text-gray-800  items-center gap-1">Explore Plus <Sparkles className="w-4 h-4 text-amber-400"/></div>
        </Link>
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex items-center mr-5 w-[300px] h-[42px] relative bg-gray-50 border border-gray-100 rounded-md">
            <input type="text" className="w-full h-full pl-4 outline-0" placeholder="Search Clothing..." />
            <Search size={28} className="mr-3 text-gray-600 " />
          </div>
          {/* User Menu */}
          <UserMenu />
          {/* User Cart */}
          <UserCart/>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header