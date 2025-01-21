import React from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Bell, Lock, Globe, CreditCard, Users } from 'lucide-react';

export const Settings = () => {
  const settingsSections = [
    {
      title: 'Notifications',
      icon: Bell,
      description: 'Gérez vos préférences de notifications par email et SMS'
    },
    {
      title: 'Sécurité',
      icon: Lock,
      description: 'Paramètres de sécurité et authentification'
    },
    {
      title: 'Localisation',
      icon: Globe,
      description: 'Configuration régionale et fuseaux horaires'
    },
    {
      title: 'Paiements',
      icon: CreditCard,
      description: 'Méthodes de paiement et facturations'
    },
    {
      title: 'Utilisateurs',
      icon: Users,
      description: 'Gestion des utilisateurs et des rôles'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center space-x-3 mb-8">
        <SettingsIcon className="h-8 w-8 text-gray-700" />
        <h1 className="text-2xl font-bold text-gray-800">Paramètres</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <section.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Informations système
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Version</span>
            <span className="text-gray-800 font-medium">1.0.0</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Dernière mise à jour</span>
            <span className="text-gray-800 font-medium">15 Mars 2024</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Environnement</span>
            <span className="text-gray-800 font-medium">Production</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};