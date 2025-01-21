import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Filter } from 'lucide-react';
import { Reservation } from '../../types';

export const ReservationManagement = () => {
  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: '1',
      vehicleId: '1',
      startDate: '2024-03-15',
      endDate: '2024-03-20',
      customerName: 'Jean Dupont',
      customerEmail: 'jean.dupont@email.com',
      status: 'pending'
    },
    {
      id: '2',
      vehicleId: '2',
      startDate: '2024-03-18',
      endDate: '2024-03-25',
      customerName: 'Marie Lambert',
      customerEmail: 'marie.lambert@email.com',
      status: 'confirmed'
    },
    {
      id: '3',
      vehicleId: '3',
      startDate: '2024-03-20',
      endDate: '2024-03-22',
      customerName: 'Pierre Martin',
      customerEmail: 'pierre.martin@email.com',
      status: 'cancelled'
    },
    {
      id: '4',
      vehicleId: '1',
      startDate: '2024-04-01',
      endDate: '2024-04-05',
      customerName: 'Sophie Bernard',
      customerEmail: 'sophie.bernard@email.com',
      status: 'pending'
    },
    {
      id: '5',
      vehicleId: '4',
      startDate: '2024-04-10',
      endDate: '2024-04-15',
      customerName: 'Lucas Petit',
      customerEmail: 'lucas.petit@email.com',
      status: 'confirmed'
    },
    {
      id: '6',
      vehicleId: '2',
      startDate: '2024-04-12',
      endDate: '2024-04-14',
      customerName: 'Emma Dubois',
      customerEmail: 'emma.dubois@email.com',
      status: 'pending'
    },
    {
      id: '7',
      vehicleId: '5',
      startDate: '2024-04-20',
      endDate: '2024-04-25',
      customerName: 'Thomas Moreau',
      customerEmail: 'thomas.moreau@email.com',
      status: 'confirmed'
    },
    {
      id: '8',
      vehicleId: '3',
      startDate: '2024-05-01',
      endDate: '2024-05-03',
      customerName: 'Julie Rousseau',
      customerEmail: 'julie.rousseau@email.com',
      status: 'cancelled'
    },
    {
      id: '9',
      vehicleId: '4',
      startDate: '2024-05-10',
      endDate: '2024-05-15',
      customerName: 'Antoine Leroy',
      customerEmail: 'antoine.leroy@email.com',
      status: 'pending'
    },
    {
      id: '10',
      vehicleId: '5',
      startDate: '2024-05-20',
      endDate: '2024-05-25',
      customerName: 'Claire Girard',
      customerEmail: 'claire.girard@email.com',
      status: 'confirmed'
    }
  ]);

  const getStatusBadgeClass = (status: Reservation['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Reservation['status']) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmée';
      case 'pending':
        return 'En attente';
      case 'cancelled':
        return 'Annulée';
      default:
        return status;
    }
  };

  const handleConfirmReservation = (reservationId: string) => {
    setReservations(reservations.map(reservation =>
      reservation.id === reservationId
        ? { ...reservation, status: 'confirmed' as const }
        : reservation
    ));
  };

  const handleCancelReservation = (reservationId: string) => {
    if (confirm('Êtes-vous sûr de vouloir annuler cette réservation ?')) {
      setReservations(reservations.map(reservation =>
        reservation.id === reservationId
          ? { ...reservation, status: 'cancelled' as const }
          : reservation
      ));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Gestion des Réservations</h1>
        <div className="flex space-x-4">
          <button className="bg-white px-4 py-2 rounded-lg flex items-center space-x-2 border border-gray-300 hover:bg-gray-50 transition-colors">
            <Filter className="h-5 w-5 text-gray-500" />
            <span>Filtrer</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dates
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reservations.map((reservation) => (
              <tr key={reservation.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {reservation.customerName}
                  </div>
                  <div className="text-sm text-gray-500">
                    {reservation.customerEmail}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Du {new Date(reservation.startDate).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="text-sm text-gray-500">
                    Au {new Date(reservation.endDate).toLocaleDateString('fr-FR')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                      reservation.status
                    )}`}
                  >
                    {getStatusText(reservation.status)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    {reservation.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleConfirmReservation(reservation.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Check className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleCancelReservation(reservation.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </>
                    )}
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