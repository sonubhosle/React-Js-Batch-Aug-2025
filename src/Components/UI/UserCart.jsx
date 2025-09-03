
import { ShoppingCart, Plus, Minus, X, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useMobile } from "../../hooks/useMobile"
import { useNavigate } from "react-router-dom"


const mockCartItems = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299.99,
        quantity: 2,
        image: "/wireless-headphones.png",
    },
    {
        id: 2,
        name: "Smart Watch Series X",
        price: 399.99,
        quantity: 1,
        image: "/smartwatch-lifestyle.png",
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 89.99,
        quantity: 3,
        image: "/bluetooth-speaker.png",
    },
]

const UserCart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState(mockCartItems)
    const isMobile = useMobile();
    const navigate = useNavigate();

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const updateQuantity = (id, change) => {
        setCartItems((items) =>
            items
                .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
                .filter((item) => item.quantity > 0),
        )
    }

    const removeItem = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id))
    }

    return (
        <div className="relative">
            <div
                className="relative cursor-pointer"
                onMouseEnter={() => !isMobile && setIsCartOpen(true)}
                onMouseLeave={() => !isMobile && setIsCartOpen(false)}
                onClick={() => isMobile && setIsCartOpen(!isCartOpen)}
            >
                <motion.div
                    className="relative p-3 rounded-[6px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/cart')}
                >
                    <ShoppingCart className="h-6 w-6 text-gray-600 " />
                    {totalItems > 0 && (
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 15 }}
                            className="absolute -top-0 -right-0 h-6 w-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold border-2 border-white"
                        >
                            {totalItems > 99 ? "99+" : totalItems}
                        </motion.div>
                    )}
                </motion.div>

                <AnimatePresence>
                    {isCartOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.9, rotateX: -10 }}
                            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                            exit={{ opacity: 0, y: -20, scale: 0.9, rotateX: -10 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute right-0 top-full mt-3 w-96 max-w-[90vw] bg-white border border-gray-50  rounded-[6px] shadow-2xl overflow-hidden backdrop-blur-xl "
                            onMouseEnter={() => !isMobile && setIsCartOpen(true)}
                            onMouseLeave={() => !isMobile && setIsCartOpen(false)}
                            style={{
                                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
                            }}
                        //   className="dark:bg-gradient-to-br dark:from-gray-900/95 dark:to-gray-800/95"
                        >
                            <div className="flex items-center justify-between p-4 bg-white  border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                        <ShoppingCart className="h-3 w-3 text-white" />
                                    </div>
                                    <h3 className="font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Shopping Cart
                                    </h3>
                                </div>
                                {isMobile && (
                                    <button variant="ghost" size="sm" onClick={() => setIsCartOpen(false)} className="rounded-full">
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                            </div>

                            {/* Cart Items */}
                            <div className="max-h-96 overflow-y-auto">
                                {cartItems.length === 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-8 text-center text-muted-foreground"
                                    >
                                        <div className="h-16 w-16 mx-auto mb-4 rounded-[6px]  flex items-center justify-center">
                                            <ShoppingCart className="h-8 w-8 opacity-50" />
                                        </div>
                                        <p className="text-sm">Your cart is empty</p>
                                        <p className="text-xs text-muted-foreground/70 mt-1">Add some items to get started!</p>
                                    </motion.div>
                                ) : (
                                    <div className="p-3 space-y-2 bg-white">
                                        {cartItems.map((item, index) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                                transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                                                className="flex items-center gap-3 p-3 rounded-[6px]    transition-all duration-300 group border border-gray-100 "
                                            >
                                                <div className="relative overflow-hidden rounded-xl shadow-md">
                                                    <img
                                                        src={item.image || "/placeholder.svg"}
                                                        alt={item.name}
                                                        className="h-14 w-14 object-cover transition-transform duration-300 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-medium text-sm truncate text-gray-900 ">{item.name}</h4>
                                                    <p className="text-gray-500 font-semibold text-sm">${item.price}</p>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <button
                                                        variant="outline"
                                                        size="sm"
                                                        className="h-7 w-7 p-0 rounded-full bg-white border flex items-center justify-center border-gray-300  transition-all duration-200"
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        variant="outline"
                                                        size="sm"
                                                        className="h-7 w-7 p-0 rounded-full  bg-white border flex items-center justify-center border-gray-300  transition-all duration-200"
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                    <button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="h-7 w-7 p-0 rounded-full border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400"
                                                        onClick={() => removeItem(item.id)}
                                                    >
                                                        <X className="h-3 w-3" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {cartItems.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, type: "spring" }}
                                    className="border-t border-gray-100  bg-white  p-4 space-y-4"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-gray-800 ">Total:</span>
                                        <span className="text-2xl font-bold  text-gray-900">
                                            ${totalPrice.toFixed(2)}
                                        </span>
                                    </div>
                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <button
                                            className="w-full  bg-gray-900 text-white font-semibold py-3 rounded-[6px] transition-all duration-300 border-0 relative overflow-hidden group"
                                            size="lg"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <span className="relative flex items-center justify-center gap-2">
                                                <Sparkles className="h-4 w-4" />
                                                Checkout ({totalItems} items)
                                                <Sparkles className="h-4 w-4" />
                                            </span>
                                        </button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}


export default UserCart