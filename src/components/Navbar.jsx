import React from 'react';
import { useTranslation } from 'react-i18next';
import { DiscIcon as Discord, Languages } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`t-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="t-nav-left">
        <div className="t-nav-logo">
          <img src="/img/logo.png" alt="AQS Logo" />
          <div className="t-logo-divider"></div>
          <div className="t-nav-brand">
            <span className="t-brand-name">T-TEAM STUDIO</span>
            <span className="t-brand-sub">FiveM Resources Store</span>
          </div>
        </div>
      </div>

      <div className="t-nav-center">
        <a href="#home" className="t-nav-item active">Trong chủ</a>
        <a href="#features" className="t-nav-item">Hộ thuật</a>
        <a href="#projects" className="t-nav-item">Dự án</a>
        <a href="#contact" className="t-nav-item">Liên hệ</a>
      </div>

      <div className="t-nav-right">
        <div className="t-nav-divider"></div>
        <button onClick={toggleLanguage} className="t-lang-btn" title="Change Language">
          <Languages size={18} />
        </button>
        <a href="https://discord.gg/CXCAQzH3k8" className="t-discord-btn">
          Discord
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

