import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  {
    name: 'Libas',
    logo: '/clients/libas.png'
  },
  {
    name: 'DMI Finance',
    logo: '/clients/dmi-finance.png'
  },
  {
    name: 'Lakshita Fashions',
    logo: '/clients/lakshita-fashions.png'
  },
  {
    name: 'Dot One Solutions',
    logo: '/clients/dot-one-solutions.png'
  },
  {
    name: 'Donyati',
    logo: '/clients/donyati.png'
  },
  {
    name: 'Art Housing Finance',
    logo: '/clients/art-housing-finance.png'
  }
];

const Clients = () => (
  <section className="py-16 bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center gradient-text mb-8">
        Our Happy <span className="text-white">Clients</span>
      </h2>
      <div className="overflow-hidden">
        <div className="flex gap-12 py-4 px-2 whitespace-nowrap overflow-x-auto scrollbar-hide">
          {clientLogos.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="flex flex-col items-center w-48"
            >
              <img src={client.logo} alt={client.name + ' logo'} className="h-32 w-32 object-contain mb-4 bg-white rounded-xl p-4 shadow-lg transition-transform duration-500 hover:scale-105" />
              <span className="text-lg text-slate-200 text-center font-semibold">{client.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Clients;
