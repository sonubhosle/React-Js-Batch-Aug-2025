import { useState } from "react";
import { User, Heart, Package, Tag, LogOut, UserRound ,Gift} from "lucide-react";
import AuthPopup from "../../Pages/Auth/AuthPopup";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const userData = {
    name: "John Doe",
    avatar: "/bluetooth-speaker.png",
  };

  const menuItems = [
    { icon: User, label: "Account", href: "/account" },
    { icon: Heart, label: "Wishlist", href: "/wishlist" },
    { icon: Package, label: "Orders", href: "/orders" },
    { icon: Tag, label: "Offers", href: "/offers" },
     { icon: Gift, label: "Gifts", href: "/Giifts" },
    { icon: LogOut, label: "Logout", href: "/logout", variant: "destructive" },
  ];

  return (
    <>
      <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} >
        {isLoggedIn ? (
          <button onClick={() => setIsOpen(!isOpen)} className="group relative flex items-center gap-3 px-4 py-2  text-gray-800 cursor-pointer" aria-label="User menu" >
            <img src={userData.avatar || "/bluetooth-speaker.png"} alt="User avatar"
              className="w-10 h-10 rounded-full border-2 border-white/20" />
            <div className="text-left">
              <p className="text-sm font-medium">Welcome</p>
              <p className="text-xs opacity-90">{userData.name}</p>
            </div>
          </button>
        ) : (
          <button onClick={() => setShowAuthPopup(true)} className="group relative flex items-center justify-center  w-12 h-12 rounded-full bg-gray-800 text-white shadow-lg  transition-all duration-300 "   aria-label="Login or Sign up">
            <UserRound className="w-7 h-7 cursor-pointer transition-transform duration-200 group-hover:scale-110" />
          </button>

        )}

        {isLoggedIn && (
          <div className={classNames("absolute right-0 top-full mt-3 w-56 bg-white  rounded-xl shadow-2xl overflow-hidden transition-all duration-300 ease-out origin-top-right",
              isOpen  ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-4 invisible pointer-events-none"
            )}
          >


            <div className="">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={classNames(
                      "group flex items-center px-4 py-3 text-sm font-medium transition-all duration-200 relative overflow-hidden",
                      item.variant === "destructive"
                        ? "text-gray-300 bg-gray-900 hover:text-white"
                        : "text-gray-700  hover:text-gray-900 hover:bg-gray-100"
                    )}
                    onClick={(e) => {
                      if (item.label === "Logout") {
                        e.preventDefault();
                        setIsLoggedIn(false);
                        setIsOpen(false);
                      }
                    }}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Auth Popup */}
      <AuthPopup
        showAuthPopup={showAuthPopup}
        setShowAuthPopup={setShowAuthPopup}
        onAuthSuccess={() => setIsLoggedIn(true)}
      />
    </>
  );
};

export default UserMenu;
