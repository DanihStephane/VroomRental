import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Check, X } from 'lucide-react';
import { Vehicle } from '../../types';

export const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: '1',
      name: 'Mercedes Classe C',
      category: 'Berline',
      price: 120,
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Élégante berline parfaite pour les voyages d\'affaires',
      features: ['Automatique', '4 places', 'Climatisation'],
      available: true
    },
    {
      id: '2',
      name: 'BMW X5',
      category: 'SUV',
      price: 150,
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'SUV luxueux avec tout le confort nécessaire',
      features: ['Automatique', '5 places', '4x4'],
      available: true
    },
    {
      id: '3',
      name: 'Audi A4',
      category: 'Berline',
      price: 110,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Berline sportive et confortable',
      features: ['Automatique', '4 places', 'GPS'],
      available: false
    },
    {
      id: '4',
      name: 'Tesla Model 3',
      category: 'Électrique',
      price: 130,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Véhicule électrique haute performance',
      features: ['Autopilot', '5 places', 'Écran tactile'],
      available: true
    },
    {
      id: '5',
      name: 'Range Rover Sport',
      category: 'SUV',
      price: 200,
      image: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'SUV de luxe tout-terrain',
      features: ['4x4', '5 places', 'Cuir premium'],
      available: true
    },
    {
      id: '6',
      name: 'Porsche 911',
      category: 'Sport',
      price: 300,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Voiture de sport emblématique',
      features: ['Manuelle', '2 places', 'Mode Sport+'],
      available: true
    },
    {
      id: '7',
      name: 'Volkswagen Golf',
      category: 'Compacte',
      price: 80,
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Compacte polyvalente et fiable',
      features: ['Manuelle', '5 places', 'Bluetooth'],
      available: true
    },
    {
      id: '8',
      name: 'Lexus ES',
      category: 'Berline',
      price: 160,
      image: 'https://images.unsplash.com/photo-1549925862-990f4c0e415b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Berline luxueuse hybride',
      features: ['Hybride', '5 places', 'Toit ouvrant'],
      available: false
    },
    {
      id: '9',
      name: 'Mini Cooper',
      category: 'Citadine',
      price: 90,
      image: 'https://images.unsplash.com/photo-1617624085810-3df2165bd11b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Citadine stylée et agile',
      features: ['Automatique', '4 places', 'Caméra recul'],
      available: true
    },
    {
      id: '10',
      name: 'Jaguar F-PACE',
      category: 'SUV',
      price: 180,
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'SUV sportif britannique',
      features: ['4x4', '5 places', 'Cuir premium'],
      available: true
    }
  ]);

  const [isAddingVehicle, setIsAddingVehicle] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<string | null>(null);

  const handleAddVehicle = () => {
    setIsAddingVehicle(true);
  };

  const handleEditVehicle = (vehicleId: string) => {
    setEditingVehicle(vehicleId);
  };

  const handleDeleteVehicle = (vehicleId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce véhicule ?')) {
      setVehicles(vehicles.filter(v => v.id !== vehicleId));
    }
  };

  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Gestion des Véhicules</h1>
          <button
              onClick={handleAddVehicle}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span>Ajouter un véhicule</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Véhicule
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Catégorie
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prix/Jour
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Disponibilité
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {vehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={vehicle.image}
                            alt={vehicle.name}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {vehicle.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{vehicle.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{vehicle.price}€</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          vehicle.available
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                      }`}
                  >
                    {vehicle.available ? 'Disponible' : 'Indisponible'}
                  </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                          onClick={() => handleEditVehicle(vehicle.id)}
                          className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit2 className="h-5 w-5" />
                      </button>
                      <button
                          onClick={() => handleDeleteVehicle(vehicle.id)}
                          className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </motion.div>
  );
};