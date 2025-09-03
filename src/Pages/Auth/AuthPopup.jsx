import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AuthPopup = ({ showAuthPopup, setShowAuthPopup, onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    onAuthSuccess();
    setShowAuthPopup(false);
  };

  if (!showAuthPopup) return null;

  return (
    <div className="bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-in fade-in duration-300"
      onClick={() => setShowAuthPopup(false)}
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div
        className="bg-white rounded-[6px] shadow-2xl w-full max-w-md transform transition-all duration-500 ease-out animate-in zoom-in-95 slide-in-from-top-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <button
              onClick={() => setShowAuthPopup(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 hover:rotate-90"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Toggle Buttons */}
          <div className="flex bg-gray-50 rounded-[4px] px-2 py-1  mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={classNames(
                "flex-1 py-2 px-4 rounded-[4px] text-sm font-medium transition-all duration-300 transform",
                isLogin
                  ? "bg-indigo-500 text-white  scale-105"
                  : "text-gray-600 hover:text-gray-900 hover:scale-102"
              )}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={classNames(
                "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 transform",
                !isLogin
                  ? "bg-white text-gray-900 shadow-sm scale-105"
                  : "text-gray-600 hover:text-gray-900 hover:scale-102"
              )}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-110"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {isLogin && (
            <div className="mt-4 text-center">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;
