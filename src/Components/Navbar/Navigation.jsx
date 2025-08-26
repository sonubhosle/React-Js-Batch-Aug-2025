
import { useState } from "react"
import { ChevronDown, Menu, Search, X } from "lucide-react"



const megaMenuData= {
  Mens: {
    categories: [
      {
        title: "Clothing",
        items: ["T-Shirts", "Shirts", "Jeans", "Jackets", "Suits", "Sweaters"],
      },
      {
        title: "Shoes",
        items: ["Sneakers", "Dress Shoes", "Boots", "Sandals", "Athletic"],
      },
      {
        title: "Accessories",
        items: ["Watches", "Belts", "Wallets", "Sunglasses", "Bags"],
      },
    ],
    images: [
      {
        src: "../../assets/images/mens-fashion-collection.png",
        alt: "Men's Fashion",
        title: "New Collection",
      },
      {
        src: "../../assets/images/mens-casual-wear.png",
        alt: "Men's Casual",
        title: "Casual Wear",
      },
    ],
  },
  Women: {
    categories: [
      {
        title: "Clothing",
        items: ["Dresses", "Tops", "Jeans", "Skirts", "Jackets", "Blouses"],
      },
      {
        title: "Shoes",
        items: ["Heels", "Flats", "Sneakers", "Boots", "Sandals"],
      },
      {
        title: "Accessories",
        items: ["Handbags", "Jewelry", "Scarves", "Sunglasses", "Watches"],
      },
    ],
    images: [
      {
        src: "../../assets/images/womens-fashion-collection.png",
        alt: "Women's Fashion",
        title: "Spring Collection",
      },
      {
        src: "../../assets/images/placeholder-jxsla.png",
        alt: "Women's Elegant",
        title: "Elegant Styles",
      },
    ],
  },
  Kids: {
    categories: [
      {
        title: "Boys",
        items: ["T-Shirts", "Shorts", "Jeans", "Jackets", "Shoes", "Accessories"],
      },
      {
        title: "Girls",
        items: ["Dresses", "Tops", "Skirts", "Jeans", "Shoes", "Accessories"],
      },
      {
        title: "Baby",
        items: ["Onesies", "Sleepwear", "Shoes", "Accessories", "Toys"],
      },
    ],
    images: [
      {
        src: "../../assets/images/placeholder-xvjn6.png",
        alt: "Kids Fashion",
        title: "Kids Collection",
      },
      {
        src: "../../assets/images/playful-childrens-clothing.png",
        alt: "Kids Play",
        title: "Playful Styles",
      },
    ],
  },
  Beauty: {
    categories: [
      {
        title: "Makeup",
        items: ["Foundation", "Lipstick", "Eyeshadow", "Mascara", "Blush"],
      },
      {
        title: "Skincare",
        items: ["Cleanser", "Moisturizer", "Serum", "Sunscreen", "Masks"],
      },
      {
        title: "Fragrance",
        items: ["Perfume", "Cologne", "Body Spray", "Candles", "Diffusers"],
      },
    ],
    images: [
      {
        src: "../../assets/images/beauty-products-collection.png",
        alt: "Beauty Products",
        title: "Beauty Essentials",
      },
      {
        src: "../../assets/images/luxury-skincare.png",
        alt: "Luxury Beauty",
        title: "Luxury Line",
      },
    ],
  },
  Gifts: {
    categories: [
      {
        title: "For Her",
        items: ["Jewelry", "Handbags", "Perfume", "Scarves", "Gift Cards"],
      },
      {
        title: "For Him",
        items: ["Watches", "Wallets", "Cologne", "Ties", "Gift Cards"],
      },
      {
        title: "Special Occasions",
        items: ["Birthday", "Anniversary", "Valentine's", "Christmas", "Wedding"],
      },
    ],
    images: [
      {
        src: "../../assets/images/luxury-gift-collection.png",
        alt: "Gift Collection",
        title: "Perfect Gifts",
      },
      {
        src: "../../assets/images/holiday-gift-wrapping.png",
        alt: "Holiday Gifts",
        title: "Holiday Special",
      },
    ],
  },
}

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null)

  const menuItems = ["Mens", "Women", "Kids", "Beauty", "Gifts"]

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    setActiveMenu(null)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMobileMenuOpen) {
      setExpandedMobileMenu(null)
    }
  }

  const toggleMobileSubmenu = (menu) => {
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu)
  }

  return (
    <>
      <nav className="bg-white text-gray-700 border-b border-gray-200 relative z-40">
          <div className="flex justify-between items-center  ">
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-baseline ">
                {menuItems.map((item) => (
                  <div key={item} className="relative" onMouseEnter={() => handleMouseEnter(item)}  onMouseLeave={handleMouseLeave} >
                    <button className="px-5 h-full cursor-pointer py-4 text-sm font-medium hover:text-blue-400 transition-colors duration-200 flex items-center gap-1">
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
                     <div className="md:hidden flex items-center  py-3 px-4">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-400"
            >
              <Menu className="w-8 h-8 text-amber-300" />
            </button>
          </div>
          <div className="md:hidden pr-5 py-2">
             <div className="flex items-center  w-[300px] h-[42px] relative bg-gray-50 border border-gray-100 rounded-md">
            <input type="text" className="w-full h-full pl-4 outline-0" placeholder="Search Clothing..." />
            <Search size={28} className="mr-3 text-gray-600 " />
          </div>
          </div>

          </div>

        {/* Desktop Mega Menu */}
        {activeMenu && (
          <div className="absolute top-full left-0 w-full bg-white  z-30 animate-in slide-in-from-top-2 duration-300"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="sm:px-6  py-8">
              <div className="grid grid-cols-5 gap-8">
                {/* Categories */}
                {megaMenuData[activeMenu]?.categories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="font-semibold text-lg text-gray-900 border-b border-gray-50 pb-2">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Images */}
                {megaMenuData[activeMenu]?.images.map((image, index) => (
                  <div key={index} className="space-y-4">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-48 object-cover rounded-lg bg-gray-100 transition-shadow duration-200"
                    />
                    <h4 className="font-medium text-gray-900 text-center">{image.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[rgba(0,0,0,0.26)] z-50" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-white w-80 h-full shadow-2xl">
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button variant="ghost" size="sm" onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900">
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

                      {/* Mobile Images */}
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        {megaMenuData[item]?.images.map((image, index) => (
                          <div key={index} className="space-y-2">
                            <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              className="w-full h-32 object-cover rounded-lg shadow-md"
                            />
                            <p className="text-sm font-medium text-center text-gray-900">{image.title}</p>
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
