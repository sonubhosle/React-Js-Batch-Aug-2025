import {  Heart, Search, ShoppingBag, UserRound } from "lucide-react";
import {Link} from 'react-router-dom'
import Navbar from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="flex sticky top-0 z-50 font-roboto  border-b border-gray-100 justify-between items-center bg-white px-5 p-2">
        <Link >
            <p className="text-3xl font-bold bg-[linear-gradient(148deg,#ed02c2_0%,#ffc400_64%)] bg-clip-text text-transparent  uppercase">Flavoro</p>
            <div className="flex text-gray-800">Flavors of India</div>
        </Link>
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex items-center mr-5 w-[300px] h-[42px] relative bg-gray-50 border border-gray-100 rounded-md">
            <input type="text" className="w-full h-full pl-4 outline-0" placeholder="Search Clothing..." />
            <Search size={28} className="mr-3 text-gray-600 " />
          </div>
          <div className="relative cursor-pointer">
            <ShoppingBag size={28} className="mr-3 text-gray-500 hover:text-amber-400 transition duration-300" />
          </div>
          <div className="relative cursor-pointer">
            <Heart size={28} className="mr-3 text-gray-500 hover:text-amber-400 transition duration-300" />
          </div>
             <div className="relative cursor-pointer">
            <UserRound size={28} className="mr-3 text-gray-500 hover:text-amber-400 transition duration-300" />
          </div>
        </div>
      </div>
    <Navbar />
    </header>
  );
};

export default Header