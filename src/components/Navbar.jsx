// src/components/Navbar.jsx

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/reviews" className="hover:text-gray-300">
              Reviews
            </Link>
          </li>
          <li>
            <Link href="/foods" className="hover:text-gray-300">
              Foods
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>

      </div>
    </nav>
  );
};

export default Navbar;