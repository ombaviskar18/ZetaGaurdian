import { useState } from 'react';
import { motion } from 'framer-motion';
import { ConnectedContent } from '../ConnectedContent';
import { SUPPORTED_CHAINS } from '../constants/chains';
import { DisconnectedContent } from '../DisconnectedContent';
import { useWallet } from '../hooks/useWallet';
import { MessageSquare, Zap, Shield, Globe, ArrowRight, CheckCircle, Network, Lock, Clock } from 'lucide-react';
import './SendMessagePage.css';

export function SendMessagePage() {
  const { account, selectedProvider, decimalChainId } = useWallet();
  const [activeStep, setActiveStep] = useState(0);

  const supportedChain = SUPPORTED_CHAINS.find(
    (chain) => chain.chainId === decimalChainId
  );

  const blockchainLogos = [
    { name: 'Ethereum', logo: '/logos/ethereum-logo.svg', color: '#627EEA' },
    { name: 'Base', logo: '/logos/base-logo.svg', color: '#0052FF' },
    { name: 'BNB', logo: '/logos/bsc-logo.svg', color: '#F3BA2F' },
    { name: 'Polygon', logo: '/logos/polygon-logo.svg', color: '#8247E5' },
    { name: 'Arbitrum', logo: '/logos/arbitrum-logo.svg', color: '#28A0F0' },
    { name: 'Avalanche', logo: '/logos/avalanche-logo.svg', color: '#E84142' }
  ];

  const workflowSteps = [
    {
      title: 'Universal Blockchain',
      description: 'ZetaChain is the first Universal Blockchain to enable native connection across all blockchain ecosystems',
      icon: Globe,
      details: 'Native access to any blockchain, making crypto as accessible, diverse, and connected as the internet'
    },
    {
      title: 'Universal PoS',
      description: 'Proof of Stake system built on Cosmos SDK and Comet BFT with 5-second finality',
      icon: Shield,
      details: 'Core Validators and Observer-Signer Validators ensure network and cross-chain security'
    },
    {
      title: 'Universal EVM',
      description: 'Execution environment callable from any chain for managing native assets and contracts',
      icon: Network,
      details: 'Create applications with built-in cross-chain capabilities within a familiar EVM environment'
    },
    {
      title: 'Universal Smart Contract',
      description: 'Deployed natively on ZetaChain, can read and write to any connected chains',
      icon: Zap,
      details: 'Orchestrate complex multi-chain actions and access liquidity across different networks'
    }
  ];

  return (
    <div className="send-message-page">
      {/* Hero Section */}
      <section className="message-hero">
        <div className="message-hero-container">
          <div className="message-hero-grid">
            <div className="message-hero-content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="message-hero-badge"
              >
                <MessageSquare className="hero-badge-icon" />
                <span>Cross-Chain Messaging Gateway</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="message-hero-title"
              >
                Universal
                <span className="title-line-2"> Cross-Chain Messaging</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="message-hero-description"
              >
                Send secure messages and transfer tokens across any blockchain using ZetaChain's Universal Smart Contracts. Connect Bitcoin, Ethereum, BNB, Polygon, and more with native interoperability.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="message-features-grid"
              >
                <div className="message-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8" y="16" width="48" height="32" rx="8" stroke="currentColor" strokeWidth="2" fill="rgba(59, 130, 246, 0.1)"/>
                      <path d="M16 28L24 36L40 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="32" cy="8" r="4" fill="currentColor"/>
                      <path d="M28 4L32 0L36 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="12" y="52" width="40" height="8" rx="4" stroke="currentColor" strokeWidth="2" fill="rgba(59, 130, 246, 0.2)"/>
                      <circle cx="20" cy="56" r="2" fill="rgba(59, 130, 246, 0.8)"/>
                      <circle cx="32" cy="56" r="2" fill="rgba(16, 185, 129, 0.8)"/>
                      <circle cx="44" cy="56" r="2" fill="rgba(59, 130, 246, 0.6)"/>
                    </svg>
                  </div>
                  <span>Secure Messaging</span>
                </div>
                <div className="message-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" fill="rgba(59, 130, 246, 0.05)"/>
                      <path d="M20 32L28 40L44 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="rgba(59, 130, 246, 0.1)"/>
                      <circle cx="48" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="rgba(16, 185, 129, 0.1)"/>
                      <circle cx="16" cy="48" r="6" stroke="currentColor" strokeWidth="2" fill="rgba(16, 185, 129, 0.1)"/>
                      <circle cx="48" cy="48" r="6" stroke="currentColor" strokeWidth="2" fill="rgba(59, 130, 246, 0.1)"/>
                      <path d="M22 16L26 32L22 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M42 16L38 32L42 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <text x="32" y="58" textAnchor="middle" fontSize="6" fill="currentColor">CROSS-CHAIN</text>
                    </svg>
                  </div>
                  <span>Cross-Chain Bridge</span>
                </div>
                <div className="message-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="16" y="20" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="rgba(59, 130, 246, 0.1)"/>
                      <circle cx="24" cy="32" r="3" fill="currentColor"/>
                      <circle cx="32" cy="32" r="3" fill="rgba(16, 185, 129, 0.8)"/>
                      <circle cx="40" cy="32" r="3" fill="rgba(59, 130, 246, 0.6)"/>
                      <path d="M20 36L28 40L36 36L44 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="32" cy="8" r="4" fill="currentColor"/>
                      <path d="M28 4L32 0L36 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 16L16 12L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M44 16L48 12L52 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="26" y="52" width="12" height="4" rx="2" fill="rgba(59, 130, 246, 0.5)"/>
                      <text x="32" y="58" textAnchor="middle" fontSize="6" fill="currentColor">TOKEN</text>
                    </svg>
                  </div>
                  <span>Token Transfer</span>
                </div>
                <div className="message-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="rgba(59, 130, 246, 0.05)"/>
                      <path d="M20 28L32 20L44 28L32 36Z" fill="rgba(59, 130, 246, 0.2)" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="32" cy="12" r="3" fill="currentColor"/>
                      <circle cx="32" cy="52" r="3" fill="currentColor"/>
                      <circle cx="12" cy="32" r="3" fill="rgba(16, 185, 129, 0.8)"/>
                      <circle cx="52" cy="32" r="3" fill="rgba(16, 185, 129, 0.8)"/>
                      <path d="M16 20L20 16L24 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M40 20L44 16L48 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M16 44L20 48L24 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M40 44L44 48L48 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>Universal Gateway</span>
                </div>
              </motion.div>
            </div>

           <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="message-hero-image-container"
>
  <div className="message-image-card">
  <video
                  className="monitoring-hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/logos/message.mp4" type="video/mp4" />
                </video>
  </div>
</motion.div>
          </div>
        </div>
      </section>

      {/* Main Messaging Section */}
      <section className="message-main">
        <div className="message-container">
          <div className="messaging-interface">
            {!account || !selectedProvider ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="disconnected-wrapper"
              >
                <DisconnectedContent />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="connected-wrapper"
              >
                <ConnectedContent
                  selectedProvider={selectedProvider}
                  supportedChain={supportedChain}
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ZetaChain Workflow Section */}
      <section className="zetachain-workflow">
        <div className="workflow-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="workflow-header"
          >
            <h2 className="workflow-title">What is ZetaChain?</h2>
            <p className="workflow-subtitle">
              Our mission is to build a Universal Blockchain with native access to any blockchain, 
              making crypto as accessible, diverse, and connected as the internet.
            </p>
          </motion.div>

          <div className="workflow-content">

            <div className="workflow-steps">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className={`workflow-step ${activeStep === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className="step-icon-container">
                    <step.icon className="step-icon" />
                    <div className="step-number">{index + 1}</div>
                  </div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                    <p className="step-details">{step.details}</p>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <ArrowRight className="step-arrow" />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="workflow-solutions"
            >
              <h3 className="solutions-title">Universal Solutions</h3>
              <div className="solutions-grid">
                <div className="solution-card">
                  <div className="solution-icon">
                    <svg viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 2L3 7v10c0 8.284 5.373 15.872 13 18 7.627-2.128 13-9.716 13-18V7L16 2z"/>
                    </svg>
                  </div>
                  <h4>Bitcoin: Unlocking New Possibilities</h4>
                  <p>Brings programmability to Bitcoin, enabling native DeFi interactions without intermediaries and new yield opportunities.</p>
                </div>
                <div className="solution-card">
                  <div className="solution-icon">
                    <svg viewBox="0 0 32 32" fill="currentColor">
                      <path d="M4 6h24v2H4zm0 5h24v2H4zm0 5h24v2H4zm0 5h24v2H4zm0 5h24v2H4z"/>
                    </svg>
                  </div>
                  <h4>DeFi: Unifying Multi-Chain Liquidity</h4>
                  <p>Forms a unified liquidity and execution hub for DEXs, yield aggregators, stablecoins, and money markets across networks.</p>
                </div>
                <div className="solution-card">
                  <div className="solution-icon">
                    <svg viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 24C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11z"/>
                    </svg>
                  </div>
                  <h4>Social, Gaming, NFT: Universal Digital Ownership</h4>
                  <p>Mint, trade, and manage digital assets across any blockchain ecosystems with simple interoperability for creators and players.</p>
                </div>
                <div className="solution-card">
                  <div className="solution-icon">
                    <svg viewBox="0 0 32 32" fill="currentColor">
                      <path d="M26 4H6c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6 26V6h20v20H6z"/>
                    </svg>
                  </div>
                  <h4>Infrastructure: Institutional-Grade Credibility</h4>
                  <p>Built on a decentralized, secure foundation supported by industry-leading validators for Universal Solutions.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
