import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative h-full flex items-center justify-center text-white px-4">
        <div className="max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Location de Véhicules Premium
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Découvrez notre sélection de véhicules haut de gamme pour tous vos besoins
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 mx-auto"
          >
            <span>Réserver maintenant</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};