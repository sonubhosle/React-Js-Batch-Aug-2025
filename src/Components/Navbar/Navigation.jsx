import { useState } from "react"
import { Menu, Search } from "lucide-react"
import MegaMenu from "../UI/MegaMenu"
import MobileMenu from "../UI/MobileMenu"
import megaMenu from "../../Data/navCategory"




export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null)

  const menuItems = ["Mens", "Women", "Kids", "Beauty", "Gifts"]

  const handleMouseEnter = (menu) => setActiveMenu(menu)
  const handleMouseLeave = () => setActiveMenu(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMobileMenuOpen) setExpandedMobileMenu(null)
  }

  const toggleMobileSubmenu = (menu) =>
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu)

  return (
    <>
      <nav className="bg-white text-gray-700 border-b border-gray-200 relative z-40">
        <div className="flex justify-between items-center">
          <div className="hidden md:block">
            <div className="flex items-baseline">
              {menuItems.map((item) => (
                <div key={item} className="relative" onMouseEnter={() => handleMouseEnter(item)} onMouseLeave={handleMouseLeave} >
                  <button className="px-5 h-full py-4 cursor-pointer text-sm font-medium hover:text-blue-400 transition-colors duration-200 flex items-center gap-1">
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center py-3 px-4">
            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-blue-400">
              <Menu className="w-8 h-8 text-amber-300" />
            </button>
          </div>
          <div className="md:hidden pr-5 py-2">
            <div className="flex items-center w-[300px] h-[42px] relative bg-gray-50 border border-gray-100 rounded-md">
              <input  type="text" className="w-full h-full pl-4 outline-0" placeholder="Search Clothing..." />
              <Search size={28} className="mr-3 text-gray-600 " />
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        <MegaMenu
          activeMenu={activeMenu}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          megaMenuData={megaMenu}
        />
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        expandedMobileMenu={expandedMobileMenu}
        toggleMobileSubmenu={toggleMobileSubmenu}
        menuItems={menuItems}
        megaMenuData={megaMenu}
      />
    </>
  )
}
