import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Megaphone, Search, Video, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Software Development',
    description: 'Custom solutions built with modern technologies',
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that deliver results',
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'SEO Optimization',
    description: 'Boost your online visibility and rankings',
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Video Creation',
    description: 'Engaging content that tells your story',
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'WordPress Development',
    description: 'Custom WordPress solutions for your business',
  },
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Digital Expert - Full-Stack Digital Solutions</title>
        <meta
          name="description"
          content="Full-Stack Digital Expert offering development, training, marketing, SEO, video, and WordPress services. Building digital solutions that drive results."
        />
      </Helmet>

      <div>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="hero-gradient" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                  Building Digital Solutions that{' '}
                  <span className="gradient-text">Drive Results</span>
                </h1>
                <p className="text-xl sm:text-2xl text-foreground/60 mb-8">
                  Full-Stack Digital Expert: Development | Marketing | SEO | Video | WordPress | Training
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    View My Work
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                  >
                    Let's Collaborate
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                  alt="Professional headshot"
                  className="rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Expert Digital Services</h2>
              <p className="text-xl text-foreground/60">
                Comprehensive solutions for your digital needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="service-card"
                >
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-foreground/60">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl text-foreground/60 mb-8">
                Subscribe to receive digital insights and exclusive content
              </p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;