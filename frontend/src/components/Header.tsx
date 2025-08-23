import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Home, Scan, BarChart3, Eye, Zap, MessageCircle } from 'lucide-react';

import { useWallet } from '../hooks/useWallet';
import { ConnectWallet } from './ConnectWallet';
import { ThemeToggle } from './ThemeToggle';
import { WalletControls } from './WalletControls';

export const Header = () => {
  const { account } = useWallet();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/contract-analysis', label: 'Contract Analysis', icon: Shield },
    { path: '/tokenomics', label: 'Tokenomics', icon: BarChart3 },
    { path: '/social-analysis', label: 'Social Analysis', icon: Eye },
    { path: '/monitoring', label: 'Monitoring', icon: Zap },
    { path: '/send-message', label: 'Send Message', icon: MessageCircle },
  ];

  return (
    <div className="header-container">
      <div className="header-nav">
        <Link to="/" className="header-logo">
          <img src="/logos/logo.png" alt="ZetaGuardian Logo" className="header-logo-img" />
          <span className="title-line-2">ZetaGuardian</span>
        </Link>
        
        <nav className="header-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`header-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              <link.icon className="h-4 w-4" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="header-controls">
        {!account ? (
          <div className="lg-only">
            <ConnectWallet />
          </div>
        ) : (
          <WalletControls />
        )}
        <ThemeToggle />
      </div>
    </div>
  );
};
