import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Briefcase, Headphones, Database, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const handleLearnMore = () => {
    const phoneNumber = '+918076536172';
  const message = encodeURIComponent('Hello Planning Pros & Consultant!!, I would like a custom quote for your IT services.');
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const services = [
    {
      icon: Code,
  title: "Software Developers",
      description: "Full-stack developers, mobile app specialists, and DevOps engineers ready to accelerate your projects.",
      features: ["Frontend & Backend", "Mobile Development", "DevOps & Cloud", "Quality Assurance"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
  title: "Data Engineers",
      description: "Data scientists, analysts, and engineers to transform your data into actionable business insights.",
      features: ["Data Science", "Business Intelligence", "Machine Learning", "Database Management"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
  title: "Cyber Security Specialists",
      description: "Security specialists and compliance experts to protect your digital assets and ensure regulatory compliance.",
      features: ["Security Auditing", "Penetration Testing", "Compliance Management", "Risk Assessment"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
  title: "Project Managers",
      description: "Certified project managers and scrum masters to keep your initiatives on track and within budget.",
      features: ["Agile Methodology", "Resource Planning", "Risk Management", "Stakeholder Communication"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Briefcase,
  title: "Business Specialists",
      description: "Operations specialists, business analysts, and process improvement experts for operational excellence.",
      features: ["Process Optimization", "Business Analysis", "Operations Management", "Strategic Planning"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Headphones,
  title: "Customer Support Specialists",
      description: "Multilingual support specialists and customer success managers to enhance your customer experience.",
      features: ["Technical Support", "Customer Success", "Quality Assurance", "Training & Development"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
  <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Expert Talent</span> <span className="text-white">for Every Need</span>
          </h2>
          <p className="text-[11px] md:text-sm text-slate-600 max-w-xl mx-auto leading-tight">
            <span className="text-slate-200">From cutting-edge technology roles to essential business functions, we provide pre-vetted professionals who integrate seamlessly with your team.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="service-card p-6 rounded-xl group bg-gradient-to-br from-white via-slate-100 to-slate-200 shadow-2xl border border-slate-200"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4 leading-normal text-sm md:text-base">{service.description}</p>
              
              <ul className="space-y-1 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-slate-700">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="glass-effect p-6 md:p-7 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-3">One-Time Fee Model</h3>
            <p className="text-sm md:text-base text-slate-600 mb-5">
              No recurring charges, no hidden fees. Pay once and get access to our entire network of pre-vetted professionals for your specific project needs.
            </p>
            <Button
              onClick={handleLearnMore}
              size="default"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 text-sm md:text-base"
            >
              Get Custom Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;