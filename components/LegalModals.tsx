import React from 'react';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col overflow-hidden animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-slate-800/50">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto prose dark:prose-invert max-w-none">
          {children}
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-800/50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const AboutContent = () => (
    <div className="space-y-4">
        <p>Welcome to <strong>Doodax.com</strong>, the premier AI-powered product description generator designed to streamline your e-commerce workflow.</p>
        <p>Our mission is to help merchants, marketers, and creators generate high-converting, SEO-friendly copy in seconds using advanced multimodal AI technology.</p>
        <p>Developed by <strong>Hsini Mohamed</strong>, this tool leverages the latest in Gemini AI to "see" your product and "write" like a professional copywriter.</p>
    </div>
);

export const ContactContent = () => (
    <div className="space-y-4">
        <p>We'd love to hear from you! Whether you have questions, feedback, or partnership inquiries, please reach out.</p>
        <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-semibold">Email:</p>
            <a href="mailto:hsini.web@gmail.com" className="text-primary hover:underline">hsini.web@gmail.com</a>
        </div>
        <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg">
            <p className="font-semibold">Website:</p>
            <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">doodax.com</a>
        </div>
    </div>
);

export const GuideContent = () => (
    <div className="space-y-4">
        <h3 className="text-lg font-bold">How to Use</h3>
        <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Upload Image:</strong> Drag & drop your product photo. Clearer images yield better results.</li>
            <li><strong>Add Features:</strong> List key selling points (e.g., "Waterproof," "organic cotton," "2-year warranty").</li>
            <li><strong>Select Audience:</strong> Define who you are selling to (e.g., "Busy moms," "Tech enthusiasts").</li>
            <li><strong>Generate:</strong> Click the button and watch the AI work its magic.</li>
            <li><strong>Copy & Edit:</strong> Use the copy button to grab the text. Minor edits are recommended to match your brand voice perfectly.</li>
        </ol>
    </div>
);

export const PrivacyContent = () => (
    <div className="space-y-4">
        <p>At Doodax.com, we prioritize your privacy.</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Data Collection:</strong> We do not store your uploaded images or generated text on our servers permanently. Processing happens in real-time.</li>
            <li><strong>Third-Party Services:</strong> We use Google Gemini API for content generation. Please refer to Google's Privacy Policy for how they handle API data.</li>
            <li><strong>Cookies:</strong> We use local storage to save your preferences (like dark mode and recent inputs) for your convenience.</li>
        </ul>
        <p className="text-sm text-gray-500 mt-4">Last Updated: May 2024</p>
    </div>
);

export const TermsContent = () => (
    <div className="space-y-4">
        <p>By using this tool, you agree to the following terms:</p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Usage:</strong> You are free to use the generated content for commercial and personal purposes.</li>
            <li><strong>Limitations:</strong> Do not use this tool to generate illegal, harmful, or misleading content.</li>
            <li><strong>Availability:</strong> The service is provided "as is" without guarantees of uptime or accuracy.</li>
            <li><strong>Liability:</strong> Doodax.com is not liable for any damages arising from the use of generated content.</li>
        </ul>
    </div>
);

export const DMCAContent = () => (
    <div className="space-y-4">
        <p>We respect the intellectual property rights of others. If you believe that material available on Doodax.com infringes on your copyright(s), please notify us.</p>
        <p>Send a detailed notice to <a href="mailto:hsini.web@gmail.com" className="text-primary">hsini.web@gmail.com</a> including:</p>
        <ul className="list-disc pl-5">
            <li>Identification of the copyrighted work.</li>
            <li>Identification of the infringing material.</li>
            <li>Your contact information.</li>
        </ul>
    </div>
);

export { Modal };