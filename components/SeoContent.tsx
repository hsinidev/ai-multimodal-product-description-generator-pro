import React, { useState } from 'react';

export const SeoContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 dark:border-white/5 transition-all duration-500">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ultimate Guide:</span> AI Multimodal Product Description Generator
        </h2>
      </div>

      <div className={`relative transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-24 overflow-hidden'}`}>
        
        <article className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-primary mb-8 not-prose">
             <h3 className="text-xl font-bold mb-2">In This Article</h3>
             <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li><a href="#what-is" className="hover:text-primary underline">What is an AI Description Generator?</a></li>
                <li><a href="#benefits" className="hover:text-primary underline">5 Key Benefits for E-commerce</a></li>
                <li><a href="#how-it-works" className="hover:text-primary underline">How Multimodal AI Works</a></li>
                <li><a href="#faq" className="hover:text-primary underline">Frequently Asked Questions</a></li>
             </ul>
          </div>

          <h3 id="what-is" className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What is an AI Multimodal Product Description Generator?</h3>
          <p>
            An <strong>AI Multimodal Product Description Generator</strong> is a cutting-edge tool that transforms the way e-commerce businesses create content. Unlike traditional text-based AI tools that rely solely on your written prompts, a <em>multimodal</em> system like the one powering <strong>Doodax.com</strong> can "see" and "understand" images.
          </p>
          <p>
            By combining visual data from your product photos with the textual features you provide, the AI generates a cohesive, accurate, and emotionally resonant description. This ensures that visual details—like texture, color nuances, and design aesthetics—are captured in the text, even if you forgot to mention them in your keywords.
          </p>

          <h3 id="benefits" className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Why You Need AI for E-commerce Copywriting</h3>
          <p>
            In the competitive world of online retail, your product description is your 24/7 salesperson. Here is why switching to an AI-powered solution is a game-changer:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Boost SEO Rankings:</strong> The AI is trained to include relevant keywords naturally, helping your products rank higher on Google and Amazon.</li>
            <li><strong>Save Time & Money:</strong> Write hundreds of unique descriptions in minutes, not days. No need to hire expensive freelance copywriters.</li>
            <li><strong>Consistent Brand Voice:</strong> Whether you need a luxury tone or a fun, quirky vibe, the AI maintains consistency across your entire catalog.</li>
            <li><strong>Reduce Returns:</strong> Accurate, detailed descriptions set the right expectations for customers, leading to higher satisfaction and fewer returns.</li>
          </ul>

          <h3 id="how-it-works" className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How Doodax.com Uses Gemini AI</h3>
          <p>
            Our platform utilizes Google's advanced <strong>Gemini 2.5 Flash</strong> model. This model is unique because it processes information similarly to a human brain—integrating visual and textual inputs simultaneously.
          </p>
          <p>
            When you upload an image, the AI analyzes millions of parameters, identifying shapes, materials, and contexts. It then weaves this visual understanding with your specified key features and target audience to craft persuasive copy that converts browsers into buyers.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Step-by-Step Guide to the Perfect Description</h3>
          <ol className="list-decimal pl-6 space-y-2">
             <li><strong>High-Quality Image:</strong> Start with a clear, well-lit photo. The AI can detect subtle details, so quality matters.</li>
             <li><strong>Specific Features:</strong> Don't just say "durable." Say "made from aerospace-grade aluminum." The more specific your inputs, the better the output.</li>
             <li><strong>Know Your Audience:</strong> A description for a "skateboard" should sound very different if you are targeting teenagers versus parents buying a gift. Use the "Audience" field to guide the AI's tone.</li>
          </ol>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <h3 id="faq" className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions (FAQ)</h3>
          
          <div className="space-y-6">
            <details className="group p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                <summary className="font-bold cursor-pointer flex justify-between items-center text-gray-900 dark:text-white">
                    Is this tool free to use?
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Yes, Doodax.com provides free access to its AI generation features for all users.</p>
            </details>

            <details className="group p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                <summary className="font-bold cursor-pointer flex justify-between items-center text-gray-900 dark:text-white">
                    Does the AI support multiple languages?
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Currently, the tool is optimized for English, but the Gemini model is capable of understanding and generating content in many major languages. Feel free to test with other language inputs!</p>
            </details>

            <details className="group p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                <summary className="font-bold cursor-pointer flex justify-between items-center text-gray-900 dark:text-white">
                    How does the image analysis work?
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-gray-600 dark:text-gray-300">We convert your uploaded image into a secure data format that is sent to the Gemini API. The AI "looks" at the image pixels to identify objects, colors, and styles before generating text.</p>
            </details>

            <details className="group p-4 bg-gray-50 dark:bg-slate-800 rounded-lg">
                <summary className="font-bold cursor-pointer flex justify-between items-center text-gray-900 dark:text-white">
                    Is the content SEO friendly?
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Absolutely. The generated descriptions are structured to be readable and keyword-rich, which are key factors for ranking on search engines like Google and Bing.</p>
            </details>
          </div>
          
          <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
            <p className="text-green-800 dark:text-green-200 font-semibold">
                Ready to transform your e-commerce store? Scroll up and generate your first description now!
            </p>
          </div>
        </article>

        {!isExpanded && (
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-900 dark:via-slate-900/80 dark:to-transparent pointer-events-none flex items-end justify-center pb-2">
            </div>
        )}
      </div>

      <div className="mt-4 flex justify-center">
        <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 px-6 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 text-primary font-semibold"
        >
            {isExpanded ? 'Show Less' : 'Read Full Guide'}
            <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
      </div>
    </section>
  );
};