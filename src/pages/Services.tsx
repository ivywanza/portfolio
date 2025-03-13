import React from 'react';
import { motion } from 'framer-motion';
import { Code, Megaphone, Search, Video, Layout } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    icon: <Code className="w-12 h-12" />,
    title: 'Software Development',
    description: 'Custom software solutions tailored to business needs',
    features: [
      'Backend system architecture and development',
      'Automation and business process optimization',
      'API development and integration',
      'Database design and management',
      'Scalable and secure web applications',
    ],
  },
  {
    icon: <Megaphone className="w-12 h-12" />,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions driving measurable results',
    features: [
      'Data-driven campaign strategy and execution',
      'Social media management and growth',
      'PPC campaign optimization',
      'ROI-focused email marketing',
      'Analytics and performance tracking',
    ],
  },
  {
    icon: <Search className="w-12 h-12" />,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO services to boost your online visibility',
    features: [
      'Strategic keyword research and analysis',
      'Technical SEO implementation',
      'Content strategy development',
      'Local SEO optimization',
      'Regular performance reporting',
    ],
  },
  {
    icon: <Video className="w-12 h-12" />,
    title: 'Video Creation',
    description: 'Professional video content that tells your brand story',
    features: [
      'Marketing campaign videos',
      'Brand storytelling content',
      'Professional editing (Premiere Pro)',
      'Social media optimized content',
      'Motion graphics and animations',
    ],
  },
  {
    icon: <Layout className="w-12 h-12" />,
    title: 'WordPress Development',
    description: 'Custom WordPress solutions for optimal performance',
    features: [
      'Bespoke theme development',
      'Plugin customization',
      'Speed optimization',
      'Security implementation',
      'Mobile-first responsive design',
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services - Digital Expert</title>
        <meta
          name="description"
          content="Comprehensive digital services including development, marketing, SEO, video creation, and WordPress solutions."
        />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">Digital Services</h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to drive your business growth
              and online success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="text-primary mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-foreground/60 mb-6">{service.description}</p>
                {service.features.length > 0 && (
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-foreground/80"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;