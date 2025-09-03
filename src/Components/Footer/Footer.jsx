import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white ">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
           <Link >
          <p className="text-3xl font-bold text-white  uppercase">Buyzaar</p>
          <div className="flex text-gray-400  items-center gap-1 mb-3">Explore Plus <Sparkles className="w-4 h-4 text-amber-400"/></div>
        </Link>
            <p className="text-slate-300 leading-relaxed">
              Your ultimate destination for fashion, beauty, and lifestyle. Discover the latest trends for men, women,
              kids, and more.
            </p>
            <div className="flex space-x-4">
              <Link className="text-slate-400 bg-[rgba(255,255,255,0.090)] p-3 rounded-[3px] hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link className="text-slate-400 bg-[rgba(255,255,255,0.090)] p-3 rounded-[3px] hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link className="text-slate-400 bg-[rgba(255,255,255,0.090)] p-3 rounded-[3px] hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link to='/' className="text-slate-400 bg-[rgba(255,255,255,0.090)] p-3 rounded-[3px] hover:text-red-400 transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Men's Fashion
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Women's Fashion
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Kids Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Beauty Products
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Special Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-slate-400" />
                <span className="text-slate-300 text-sm">123 Fashion Street, Style City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-slate-400" />
                <span className="text-slate-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-slate-400" />
                <span className="text-slate-300 text-sm">hello@Buyzaar.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-slate-300 text-sm">Subscribe to get special offers, free giveaways, and updates.</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">© 2024 Buyzaar. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer