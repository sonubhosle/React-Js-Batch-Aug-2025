import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const MegaMenu = ({ activeMenu, onMouseEnter, onMouseLeave, megaMenuData }) => {
  if (!activeMenu) return null

  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute top-full left-0 w-full bg-white shadow-lg z-30 border-t border-gray-200"
          onMouseEnter={() => onMouseEnter(activeMenu)}
          onMouseLeave={onMouseLeave}
        >
          <div className="sm:px-6 py-8">
            <div className="grid grid-cols-5 gap-8">
              {/* Categories */}
              {megaMenuData[activeMenu]?.categories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-semibold text-lg text-gray-900 border-b border-gray-50 pb-2">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => {
                      const slug = item.toLowerCase().replace(/\s+/g, "-") // make URL-friendly
                      return (
                        <li key={itemIndex}>
                          <Link
                            to={`/category/${slug}`}
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                          >
                            {item}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}

              {/* Images */}
              {megaMenuData[activeMenu]?.images.map((image, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="font-medium text-gray-900 text-center">{image.title}</h4>
                  <img src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-72 object-cover rounded-[4px] bg-gray-100 transition-shadow duration-200"
                  />

                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MegaMenu