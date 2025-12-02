# 🚀 AI Multimodal Product Description Generator

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-doodax.com-blue?style=for-the-badge)](https://doodax.com/tools/ai-multimodal-product-description-generator/index.html) [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Doodax.com** is a state-of-the-art e-commerce tool that leverages the power of **Google Gemini 2.5 Multimodal AI**. It allows merchants, marketers, and content creators to instantly generate high-converting, SEO-optimized product descriptions by simply uploading an image and defining their target audience.

The interface features a stunning, immersive galaxy-themed UI built with **Glassmorphism** principles, ensuring a premium user experience.

---

## ✨ Key Features

*   **🧠 Advanced Multimodal AI:** Uses `gemini-2.5-flash` to "see" product images and understand visual context.
*   **🎯 Laser-Focused Targeting:** Customizes tone and style based on your specific audience demographics.
*   **⚡ Instant Generation:** Transforms raw inputs into polished marketing copy in seconds.
*   **🎨 Immersive UI:** A fully responsive, animated galaxy background with glassmorphism effects for a modern feel.
*   **🌑 Dark/Light Mode:** Seamless theme switching with persistent user preferences.
*   **📱 Mobile Optimized:** Works perfectly on all devices, from desktops to smartphones.
*   **🔒 Privacy Focused:** No permanent storage of user images; real-time processing only.
*   **🔍 SEO Ready:** Generates content structure that search engines love.

---

## 📂 Project Structure

```bash
ai-product-description-generator/
├── public/                 # Static assets
│   ├── favicon.svg         # Site Icon
│   ├── robots.txt          # SEO Crawler Directives
│   └── sitemap.xml         # SEO Sitemap
├── components/             # React Components
│   ├── Header.tsx          # Navigation Bar
│   ├── InputPanel.tsx      # Image Upload & Form Inputs
│   ├── OutputPanel.tsx     # Markdown Rendering Display
│   ├── SeoContent.tsx      # SEO Article & Guide
│   ├── LegalModals.tsx     # Privacy, Terms, Contact Modals
│   ├── ThemeToggle.tsx     # Dark Mode Switcher
│   └── icons.tsx           # SVG Icon Set
├── services/               # API Integration
│   └── geminiService.ts    # Google GenAI Client Logic
├── hooks/                  # Custom React Hooks
│   └── useLocalStorage.ts  # Persist Settings
├── App.tsx                 # Main Application Layout
├── index.html              # Entry HTML with Galaxy CSS
├── index.tsx               # Entry Point
├── metadata.json           # App Configuration
└── types.ts                # TypeScript Interfaces
```

---

## 🚀 Quick Start

1.  **Clone the Repo**
    ```bash
    git clone https://github.com/hsinidev/ai-product-description-generator.git
    cd ai-product-description-generator
    ```

2.  **Serve the App**
    Since this project uses modern ES modules and CDN imports, you don't need `npm install`. Just serve the directory.
    ```bash
    npx serve .
    ```

3.  **Configure API Key**
    Ensure your hosting environment or local setup injects `process.env.API_KEY` for the Google Gemini API.

---

## 👨‍💻 Author

**Hsini Mohamed**

*   Website: [doodax.com](https://doodax.com)
*   GitHub: [@hsinidev](https://github.com/hsinidev)
*   Email: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
