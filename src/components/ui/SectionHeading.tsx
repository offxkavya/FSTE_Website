import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  center = false 
}) => {
  return (
    <motion.div 
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;