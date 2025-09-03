
import { useState, useEffect } from "react"
import { ShoppingCart, CreditCard, Package, Truck, Heart, Star, Gift, Tag } from "lucide-react"

const ecommerceIcons = [
  { Icon: ShoppingCart, color: "text-blue-500", bgColor: "bg-blue-500", borderColor: "border-blue-500" },
  { Icon: CreditCard, color: "text-green-500", bgColor: "bg-green-500", borderColor: "border-green-500" },
  { Icon: Package, color: "text-purple-500", bgColor: "bg-purple-500", borderColor: "border-purple-500" },
  { Icon: Truck, color: "text-orange-500", bgColor: "bg-orange-500", borderColor: "border-orange-500" },
  { Icon: Heart, color: "text-red-500", bgColor: "bg-red-500", borderColor: "border-red-500" },
  { Icon: Star, color: "text-yellow-500", bgColor: "bg-yellow-500", borderColor: "border-yellow-500" },
  { Icon: Gift, color: "text-pink-500", bgColor: "bg-pink-500", borderColor: "border-pink-500" },
  { Icon: Tag, color: "text-indigo-500", bgColor: "bg-indigo-500", borderColor: "border-indigo-500" },
]

const Loader = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % ecommerceIcons.length)
    }, 600) 

    return () => clearInterval(interval)
  }, [])

  const { Icon, color, bgColor, borderColor } = ecommerceIcons[currentIconIndex]

  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
      <div className="relative">
        <div
          className={`w-20 h-20 border-4 border-gray-200 ${borderColor} border-t-transparent rounded-full animate-spin transition-colors duration-300`}
        ></div>

        <div
          className={`absolute inset-2 ${bgColor} opacity-10 rounded-full animate-pulse transition-colors duration-300`}
        ></div>

        {/* Icon container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-8 h-8 ${color} transition-all duration-300 animate-bounce`} strokeWidth={2} />
        </div>


        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
          <div
            className={`w-1 h-1 ${bgColor} rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 opacity-60`}
          ></div>
          <div className={`w-1 h-1 ${bgColor} rounded-full absolute top-2 right-2 opacity-40`}></div>
          <div className={`w-1 h-1 ${bgColor} rounded-full absolute bottom-2 left-2 opacity-20`}></div>
        </div>
      </div>
    </div>
  )
}

export default Loader