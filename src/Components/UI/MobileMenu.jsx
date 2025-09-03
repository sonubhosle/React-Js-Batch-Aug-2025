import { ChevronDown, X } from "lucide-react"

const  MobileMenu = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  expandedMobileMenu,
  toggleMobileSubmenu,
  menuItems,
  megaMenuData,
}) => {
  return (
    <>
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-[rgba(0,0,0,0.26)] z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-white w-80 h-full shadow-2xl">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="py-4 px-4 space-y-1 max-h-screen overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item} className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileSubmenu(item)}
                  className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      expandedMobileMenu === item ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Submenu */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedMobileMenu === item ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4">
                    <div className="grid grid-cols-1 gap-6">
                      {megaMenuData[item]?.categories.map((category, index) => (
                        <div key={index} className="space-y-3">
                          <h4 className="font-semibold text-gray-900 border-l-4 border-blue-500 pl-3">
                            {category.title}
                          </h4>
                          <ul className="space-y-2 pl-3">
                            {category.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href="#"
                                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 block py-1"
                                >
                                  {subItem}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Images */}
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        {megaMenuData[item]?.images.map((image, index) => (
                          <div key={index} className="space-y-2">
                            <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              className="w-full h-32 object-cover rounded-lg shadow-md"
                            />
                            <p className="text-sm font-medium text-center text-gray-900">
                              {image.title}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu