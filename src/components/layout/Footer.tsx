import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github as GitHub, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="EcoThinkers Logo" className="h-8 w-8 mr-2" />
              <h3 className="font-display font-semibold text-xl text-primary-600 dark:text-primary-400">
                EcoThinkers
              </h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
              Analyzing the environmental impact of e-commerce returns in India and developing sustainable solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 text-neutral-800 dark:text-neutral-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/cld-analysis" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  CLD Analysis
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4 text-neutral-800 dark:text-neutral-200">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Full Research Paper
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Environmental Impact Report
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  E-commerce Best Practices
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About EcoThinkers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500 dark:text-neutral-500">
          <p>© {new Date().getFullYear()} EcoThinkers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;