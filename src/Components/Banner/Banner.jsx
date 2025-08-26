
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Sparkles, Star, Gift, Shirt, Heart } from "lucide-react"

const slides= [
  {
    id: "men",
    title: "Unleash Your Style",
    subtitle: "Men's Premium Collection",
    description:
      "From boardroom to weekend adventures, discover clothing that moves with your ambition. Crafted for the modern gentleman.",
    buttonText: "Explore Collection",
    secondaryButtonText: "Style Guide",
    category: "men",
    bgGradient: "from-slate-900 via-blue-900 to-slate-900",
    accentColor: "text-blue-400",
    icon: <Shirt className="w-5 h-5" />,

  },
  {
    id: "women",
    title: "Embrace Power",
    subtitle: "Women's Luxury Line",
    description:
      "Confidence meets comfort in every thread. Elevate your wardrobe with pieces that celebrate your unique story.",
    buttonText: "Shop Now",
    secondaryButtonText: "Lookbook",
    category: "women",
    bgGradient: "from-rose-900 via-pink-800 to-purple-900",
    accentColor: "text-rose-300",
    icon: <Heart className="w-5 h-5" />,

  },
  {
    id: "kids",
    title: "Adventure Awaits",
    subtitle: "Kids' Playful Collection",
    description:
      "Durable designs for endless play. Watch them explore the world in comfort and style that keeps up with their imagination.",
    buttonText: "Discover Fun",
    secondaryButtonText: "Size Guide",
    category: "kids",
    bgGradient: "from-orange-800 via-yellow-700 to-red-800",
    accentColor: "text-yellow-300",
    icon: <Star className="w-5 h-5" />,

  },
  {
    id: "beauty",
    title: "Radiate Confidence",
    subtitle: "Beauty Essentials",
    description:
      "Unlock your natural glow with premium formulations. Self-care rituals that transform your daily routine into luxury.",
    buttonText: "Glow Up",
    secondaryButtonText: "Beauty Tips",
    category: "beauty",
    bgGradient: "from-purple-900 via-indigo-800 to-pink-900",
    accentColor: "text-purple-300",
    icon: <Sparkles className="w-5 h-5" />,
 
  },
  {
    id: "offers",
    title: "Limited Time Magic",
    subtitle: "Exclusive Deals Inside",
    description:
      "Your favorite brands at unbeatable prices. Don't let these incredible savings slip away – luxury for less ends soon!",
    buttonText: "Claim Deals",
    secondaryButtonText: "View All",
    category: "offers",
    bgGradient: "from-emerald-900 via-teal-800 to-green-900",
    accentColor: "text-emerald-300",
    icon: <Gift className="w-5 h-5" />,
  },
]

const Banner =() => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <div className="h-full relative">
              <div
                className={`flex flex-col justify-center px-8 lg:px-16 py-12 bg-gradient-to-br ${slide.bgGradient} relative overflow-hidden h-full`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40" />
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full -translate-x-1/2 -translate-y-1/2" />
          
                <div className="max-w-2xl relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-white/10 ${slide.accentColor} backdrop-blur-sm`}>
                      {slide.icon}
                    </div>
                    <span className={`text-sm font-semibold uppercase tracking-wider ${slide.accentColor}`}>
                      {slide.category}
                    </span>
                  </div>
                  <h2 className={`text-2xl lg:text-3xl font-semibold mb-3 ${slide.accentColor}`}>{slide.subtitle}</h2>
                  <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">{slide.title}</h1>
                  <p className="text-gray-200 text-xl mb-10 leading-relaxed max-w-xl">{slide.description}</p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <button
                      size="lg"
                      className="bg-white cursor-pointer text-gray-900 hover:bg-gray-100 px-10 py-2 text-[20px]  rounded-[4px] shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                    >
                      {slide.buttonText}
                    </button>
                    <button
                      variant="outline"
                      size="lg"
                      className="border-2 cursor-pointer border-white/40 text-white hover:bg-white/15 px-10 py-2 text-xl bg-transparent rounded-[4px] backdrop-blur-sm hover:border-white/60 transition-all duration-300"
                    >
                      {slide.secondaryButtonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="absolute bottom-5 right-5 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-3 bg-white shadow-lg"
                : "w-3 h-3 bg-white/50 hover:bg-white/80 hover:scale-125"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
      <div className="absolute top-8 right-8 bg-white/90 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm">
        <span className="text-sm font-bold text-gray-900 capitalize flex items-center gap-2">
          {slides[currentSlide].icon}
          {slides[currentSlide].category}
        </span>
      </div>
    </div>
  )
}


export default Banner