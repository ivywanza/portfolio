import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Video } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const projects = [
  {
    title: 'Online Course Platform',
    icon: <Users className="w-8 h-8" />,
    challenge: 'Create a scalable learning platform for remote education',
    solution: 'Built a custom LMS with Wordpress and payment gateway integration, featuring live sessions and progress tracking',
    results: [
      '',
      '95% completion rate',
      '4.8/5 average course rating',
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    title: 'Local Business SEO Success',
    icon: <TrendingUp className="w-8 h-8" />,
    challenge: 'Improve local search visibility for a retail chain',
    solution: 'Implemented comprehensive local SEO strategy across 12 locations',
    results: [
      '150% increase in local search visibility',
      '200% increase in store visits',
      '85% increase in local conversions',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  },
  {
    title: 'Video Marketing Campaign',
    icon: <Video className="w-8 h-8" />,
    challenge: 'Create viral marketing content for product launch',
    solution: 'Produced series of engaging social media videos with strong CTA',
    results: [
      '1M+ views across platforms',
      '25% engagement rate',
      '300% ROI on ad spend',
    ],
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Digital Expert</title>
        <meta
          name="description"
          content="Case studies and success stories showcasing digital expertise across development, SEO, and video marketing."
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
            <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Real results for real businesses. Explore our case studies and success stories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="order-2 md:order-1">
                  <div className="text-primary mb-4">{project.icon}</div>
                  <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Challenge</h3>
                      <p className="text-foreground/80">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Solution</h3>
                      <p className="text-foreground/80">{project.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">Results</h3>
                      <ul className="space-y-2">
                        {project.results.map((result) => (
                          <li key={result} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    View Details
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-xl"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;