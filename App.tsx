import React, { useState, useEffect, useCallback } from 'react';
import { InputPanel } from './components/InputPanel';
import { OutputPanel } from './components/OutputPanel';
import { Header } from './components/Header';
import { ThemeToggle } from './components/ThemeToggle';
import { generateDescription } from './services/geminiService';
import useLocalStorage from './hooks/useLocalStorage';
import type { AppSettings } from './types';
import { GenerateIcon } from './components/icons';
import { SeoContent } from './components/SeoContent';
import { Modal, AboutContent, ContactContent, GuideContent, PrivacyContent, TermsContent, DMCAContent } from './components/LegalModals';

const App: React.FC = () => {
  const [settings, setSettings] = useLocalStorage<AppSettings>('ecommerce_settings', {
    features: "Material: 100% Organic Cotton\nColor: Deep Navy Blue\nFit: Athletic, breathable\nBenefit: Lasts 5x longer than standard shirts",
    audience: "Environmentally conscious millennials",
    darkMode: true,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [features, setFeatures] = useState<string>(settings.features);
  const [audience, setAudience] = useState<string>(settings.audience);
  const [generatedDescription, setGeneratedDescription] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(settings.darkMode);

  // Modal State
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setSettings(prev => ({ ...prev, darkMode }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview(null);
    }
  }, [imageFile]);
  
  const handleSaveSettings = useCallback(() => {
    setSettings(prev => ({...prev, features, audience}));
  }, [features, audience, setSettings]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
        handleSaveSettings();
    }, 1000); 

    return () => clearTimeout(timer);
  }, [features, audience, handleSaveSettings]);

  const handleGenerate = async () => {
    if (!imageFile) {
      setError('Please upload a product image.');
      return;
    }
    setError(null);
    setIsLoading(true);
    setGeneratedDescription('');

    try {
      const description = await generateDescription(imageFile, features, audience);
      setGeneratedDescription(description);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleClear = () => {
    setImageFile(null);
    setImagePreview(null);
    setGeneratedDescription('');
    setError(null);
  }

  const renderModalContent = () => {
    switch(activeModal) {
        case 'about': return <AboutContent />;
        case 'contact': return <ContactContent />;
        case 'guide': return <GuideContent />;
        case 'privacy': return <PrivacyContent />;
        case 'terms': return <TermsContent />;
        case 'dmca': return <DMCAContent />;
        default: return null;
    }
  };

  const getModalTitle = () => {
      switch(activeModal) {
          case 'about': return 'About Us';
          case 'contact': return 'Contact Us';
          case 'guide': return 'User Guide';
          case 'privacy': return 'Privacy Policy';
          case 'terms': return 'Terms of Service';
          case 'dmca': return 'DMCA & Copyright';
          default: return '';
      }
  };

  const footerLinks = [
      { id: 'about', label: 'About' },
      { id: 'guide', label: 'Guide' },
      { id: 'contact', label: 'Contact' },
      { id: 'privacy', label: 'Privacy Policy' },
      { id: 'terms', label: 'Terms of Service' },
      { id: 'dmca', label: 'DMCA' },
  ];

  return (
    <div className="min-h-screen text-light-text dark:text-dark-text font-sans transition-colors duration-300 flex flex-col">
      <Header>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </Header>
      
      <main className="flex-grow p-4 sm:p-6 lg:p-8 flex flex-col items-center">
        <div className="container mx-auto max-w-7xl w-full flex flex-col gap-12">
            
            {/* Main Application Area */}
            <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <InputPanel
                    imagePreview={imagePreview}
                    onImageChange={setImageFile}
                    features={features}
                    onFeaturesChange={setFeatures}
                    audience={audience}
                    onAudienceChange={setAudience}
                    onClear={handleClear}
                    />
                    <OutputPanel
                    description={generatedDescription}
                    isLoading={isLoading}
                    error={error}
                    />
                </div>
                <div className="mt-8 max-w-2xl mx-auto">
                    <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-3 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white rounded-xl px-8 py-4 shadow-lg shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-primary/50"
                    >
                    {isLoading ? (
                        <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating Magic...
                        </>
                    ) : (
                        <>
                        <GenerateIcon />
                        Generate Description
                        </>
                    )}
                    </button>
                </div>
            </div>

            {/* SEO Content Section */}
            <SeoContent />

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-black/80 backdrop-blur-md border-t border-white/10 text-gray-400">
        <div className="container mx-auto max-w-7xl px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                
                {/* Brand */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-white mb-2">Doodax.com</h3>
                    <p className="text-sm">AI-Powered E-commerce Solutions.</p>
                </div>

                {/* Legal Links */}
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {footerLinks.map(link => (
                        <button 
                            key={link.id}
                            onClick={() => setActiveModal(link.id)}
                            className="hover:text-primary transition-colors duration-200"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Developer Credit */}
                <div className="text-center md:text-right">
                    <p className="text-sm mb-1">Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-primary transition-colors">HSINI MOHAMED</a></p>
                    <p className="text-xs text-gray-500">© {new Date().getFullYear()} All Rights Reserved</p>
                </div>
            </div>

            {/* Google Policy Disclaimer */}
            <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-xs text-yellow-200/80 text-center max-w-3xl mx-auto">
                <span className="font-bold text-yellow-500">Notice:</span> This application uses Google's Gemini API for content generation. We are transparent about our data handling practices. No user images are permanently stored. By using this service, you agree to comply with our Terms of Service and Privacy Policy.
            </div>
        </div>
      </footer>

      {/* Dynamic Modal */}
      <Modal 
        title={getModalTitle()} 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)}
      >
        {renderModalContent()}
      </Modal>

    </div>
  );
};

export default App;