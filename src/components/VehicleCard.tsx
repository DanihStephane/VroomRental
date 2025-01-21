import React from 'react';
import { motion } from 'framer-motion';
import { Car, Users, Fuel, Settings } from 'lucide-react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  onClick: () => void;
}

export const VehicleCard = ({ vehicle, onClick }: VehicleCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
        />
        {!vehicle.available && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1">
            Non disponible
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
        <p className="text-gray-600 mb-4">{vehicle.description}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-gray-500" />
            <span>4 places</span>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="h-5 w-5 text-gray-500" />
            <span>Automatique</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fuel className="h-5 w-5 text-gray-500" />
            <span>Diesel</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">
            {vehicle.price}€ <span className="text-sm text-gray-500">/jour</span>
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
            Réserver
          </button>
        </div>
      </div>
    </motion.div>
  );
};