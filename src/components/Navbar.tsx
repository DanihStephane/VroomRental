import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, User, Menu } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">AutoLoc</span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/vehicles" className="text-gray-600 hover:text-blue-600 transition-colors">
              Nos Véhicules
            </Link>
            <Link to="/reservations" className="text-gray-600 hover:text-blue-600 transition-colors">
              Réservations
            </Link>
            <Link to="/admin" className="text-gray-600 hover:text-blue-600 transition-colors">
              Administration
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/vehicles"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Nos Véhicules
            </Link>
            <Link
              to="/reservations"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Réservations
            </Link>
            <Link
              to="/admin"
              className="block px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Administration
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};