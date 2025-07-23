// components/Navbar.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'

const Navbar = () => {
  const [user, setUser] = useState(null)
  const [count, setCount] = useState(4)
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <nav className=" absolute top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md text-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Left Section */}
        <div className="flex items-center gap-6">

          {/* Logo */}
          <Link to="/" className="text-2xl mb-1 font-bold text-blue-600 tracking-wide">
            eShop
          </Link>

          {/* Dropdown with hover state */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="text-sm font-medium hover:text-blue-600">
              Categories ▼
            </button>

            {showDropdown && (
              <div className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md w-48 z-50">
                <Link to="/category/home" className="block px-4 py-2 text-sm hover:bg-gray-100">Fashion</Link>
                <Link to="/category/beauty" className="block px-4 py-2 text-sm hover:bg-gray-100">Sports</Link>
                <Link to="/category/sports" className="block px-4 py-2 text-sm hover:bg-gray-100">Gaming</Link>
              </div>
            )}
          </div>

          {/* Static Links */}
          <Link to="/shop" className="text-sm hover:text-blue-600 font-medium">
            Shop
          </Link>
          <Link to="/contact" className="text-sm hover:text-blue-600 font-medium">
            Contact
          </Link>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-grow max-w-md mx-6">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 px-4 text-white text-sm font-medium rounded-r-md hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/profile" className="text-sm hover:text-blue-600 font-medium">
              <img src={user.image} alt="" />
              </Link>
              <Link to="/notifications" className="text-sm hover:text-blue-600 font-medium">
                🔔
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm hover:text-blue-600 font-medium">
                Login
              </Link>
              <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-blue-700">
                Sign Up
              </Link>
            </>
          )}

          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
              {count}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
  )
}

export default Navbar
