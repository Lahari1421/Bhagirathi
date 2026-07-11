/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { NavSection } from './types';

// Importing View Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import StoryView from './components/StoryView';
import AboutView from './components/AboutView';
import ProductsView from './components/ProductsView';
import ManufacturingView from './components/ManufacturingView';
import OemView from './components/OemView';
import QualityView from './components/QualityView';
import SustainabilityView from './components/SustainabilityView';
import CareersView from './components/CareersView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';

import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<NavSection>(NavSection.Home);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Helper callbacks to swap sections and sync product details
  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    setSelectedProductId(null); // Reset product selection on general tab change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId: string | null) => {
    setSelectedProductId(productId);
    setCurrentSection(NavSection.Products);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (currentSection) {
      case NavSection.Home:
        return (
          <HomeView 
            onNavigate={handleNavigate} 
            onSelectProduct={handleSelectProduct} 
          />
        );
      case NavSection.Story:
        return <StoryView onNavigate={handleNavigate} />;
      case NavSection.About:
        return <AboutView onNavigate={handleNavigate} />;
      case NavSection.Products:
        return (
          <ProductsView 
            onNavigate={handleNavigate} 
            selectedProductId={selectedProductId}
            onSelectProduct={setSelectedProductId}
          />
        );
      case NavSection.Manufacturing:
        return <ManufacturingView onNavigate={handleNavigate} />;
      case NavSection.Oem:
        return <OemView onNavigate={handleNavigate} />;
      case NavSection.Quality:
        return <QualityView onNavigate={handleNavigate} />;
      case NavSection.Sustainability:
        return <SustainabilityView onNavigate={handleNavigate} />;
      case NavSection.Careers:
        return <CareersView onNavigate={handleNavigate} />;
      case NavSection.Blog:
        return <BlogView onNavigate={handleNavigate} />;
      case NavSection.Contact:
        return <ContactView onNavigate={handleNavigate} />;
      default:
        return (
          <HomeView 
            onNavigate={handleNavigate} 
            onSelectProduct={handleSelectProduct} 
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar currentSection={currentSection} onNavigate={handleNavigate} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
