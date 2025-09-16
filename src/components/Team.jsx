import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Hitesh Khurana",
      role: "CEO & Founder",
  image: "/team/hitesh.jpg"
    },
    {
      name: "Karan Gogia",
      role: "Managing Director",
  image: "/team/karan.jpg"
    },
    {
      name: "Seema Gupta",
      role: "IT Lead Manager",
  image: "/team/seema.jpg"
    },
    {
      name: "Prashant Sah",
      role: "Senior Accounts Manager",
  image: "/team/prashant.jpg"
    },
    {
      name: "Shweta Pandey",
      role: "Talent Acquisition Manager",
  image: "/team/shweta.jpg"
    },
    {
      name: "Kamal Chhabra",
      role: "Accounts Manager",
  image: "/team/kamal.jpg"
    }
  ];

  return (
  <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-900">Meet Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            The <span className="gradient-text">People Behind</span> Planning Pros & Consultant
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of experts is committed to connecting you with the best talent and ensuring your staffing success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide whitespace-nowrap">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="flex-none w-64 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 p-6 rounded-2xl text-center shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-center border-4 border-white shadow-md"
                />
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <div className="flex items-center justify-center mt-3 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
