import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Car, Calendar, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export const AdminLayout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-64 bg-white shadow-lg h-[calc(100vh-4rem)] fixed"
        >
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-8">Administration</h2>
            <nav className="space-y-2">
              <Link
                to="/admin/vehicles"
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                  isActive('/admin/vehicles')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Car className="h-5 w-5" />
                <span>Véhicules</span>
              </Link>
              <Link
                to="/admin/reservations"
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                  isActive('/admin/reservations')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Calendar className="h-5 w-5" />
                <span>Réservations</span>
              </Link>
              <Link
                to="/admin/settings"
                className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                  isActive('/admin/settings')
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Settings className="h-5 w-5" />
                <span>Paramètres</span>
              </Link>
            </nav>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};