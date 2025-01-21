import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VehicleCard } from './components/VehicleCard';
import { motion } from 'framer-motion';

const vehicles = [
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
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <section className="py-16 px-4 max-w-7xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-center mb-12"
                >
                  Nos Véhicules Disponibles
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {vehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle.id}
                      vehicle={vehicle}
                      onClick={() => console.log('Vehicle clicked:', vehicle.id)}
                    />
                  ))}
                </div>
              </section>
            </>
          } />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;