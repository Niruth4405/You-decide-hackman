import React from 'react';
import { motion } from 'framer-motion';
// We'll use lucide-react for high-quality icons
import {
  Zap,
  BrainCircuit,
  LayoutDashboard,
  Database,
  ShieldAlert,
  Users,
} from 'lucide-react';

// --- Feature Data ---
// We define our 6 key features based on your project description.
const keyFeatures = [
  {
    title: 'Real-time Log Analysis',
    description:
      'Monitor IT system activities as they happen, allowing experts to respond to incidents instantly.',
    icon: Zap,
  },
  {
    title: 'AI-Powered Threat Detection',
    description:
      'Advanced algorithms and ML models detect potential threats, anomalies, and security breaches.',
    icon: BrainCircuit,
  },
  {
    title: 'Interactive Dashboards',
    description:
      'Interactive graphs, charts, and data visualizations provide actionable insights from complex log data.',
    icon: LayoutDashboard,
  },
  {
    title: 'Centralized Log Management',
    description:
      'Securely collect, store, and organize log data from all CRPF units in a structured, searchable database.',
    icon: Database,
  },
  {
    title: 'Automated IP & Action Blocking',
    description:
      'Suspicious IP addresses are automatically blocked, and high-risk actions are restricted based on ML predictions.',
    icon: ShieldAlert,
  },
  {
    title: 'Role-Based Access Control',
    description:
      'Ensure only authorized personnel can access sensitive log data and analysis settings with granular permissions.',
    icon: Users,
  },
];

// --- Framer Motion Variants ---

// This variant will make the whole grid container "stagger" its children.
// Each child will appear 0.2 seconds after the previous one.
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// This variant defines how each individual card will animate in.
// It will fade in and move up slightly.
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

// --- Feature Card Component ---
const FeatureCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="
        bg-black/30       
        backdrop-blur-lg  
        border            
        border-blue-500/30
        rounded-xl
        p-8                /* Increased padding for bigger boxes */
        shadow-lg
        flex flex-col
        items-center
        text-center
        h-full
        transition-all duration-300 ease-in-out /* Added transition for hover effects */
      "
    >
      <div className="bg-blue-500/80 p-5 rounded-full mb-6"> {/* Increased icon padding */}
        <Icon className="w-12 h-12 text-white" /> {/* Increased icon size */}
      </div>
      <h3 className="text-3xl font-bold mb-4 text-blue-100 leading-tight">{title}</h3> {/* Enhanced heading */}
      <p className="text-blue-200 text-lg leading-relaxed">{description}</p> {/* Slightly larger text */}
    </motion.div>
  );
};

// --- Main App Component ---
export default function Features() {
  return (
    // This main container is transparent, allowing the page background to show through.
    // We assume a dark or image background, so we use 'text-blue-50' as the base.
    <div className="w-full min-h-screen bg-transparent text-blue-50 font-sans p-4 md:p-8 flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* === Hero Section === */}
       

        {/* === Features Grid Section === */}
        <section className="py-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-100" /* Bigger, bolder features heading */
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            CORE FEATURES
          </motion.h2>

          {/* This motion.div is the grid container.
            It uses the 'gridContainerVariants' to stagger the animation
            of its children (the FeatureCards).
          */}
          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" /* Increased gap for larger cards */
          >
            {keyFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}

