import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, CheckCircle, Download, Wallet,  TrendingUp, Users, Search } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import './TokenomicsPage.css';

export function TokenomicsPage() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  const { account } = useWallet();

  const handleAnalysis = async () => {
    if (!account) {
      setShowWalletConnect(true);
      return;
    }

    if (!tokenAddress && !tokenSymbol) return;

    setIsAnalyzing(true);
    
    setTimeout(() => {
      const mockResult = {
        token: tokenAddress || tokenSymbol,
        totalSupply: '1,000,000,000',
        whaleConcentration: Math.floor(Math.random() * 60) + 20,
        topHolders: [
          { address: '0x1234...5678', percentage: 15.2 },
          { address: '0x9abc...def0', percentage: 12.8 },
          { address: '0x5555...7777', percentage: 8.9 },
          { address: '0xaaaa...bbbb', percentage: 6.5 },
          { address: '0xcccc...dddd', percentage: 5.1 }
        ],
        liquidityLocked: Math.random() > 0.5,
        mintingRights: Math.random() > 0.5 ? 'Limited' : 'Unlimited',
        taxStructure: {
          buyTax: Math.floor(Math.random() * 8) + 1,
          sellTax: Math.floor(Math.random() * 12) + 2,
          modifiable: Math.random() > 0.6
        },
        crossChainData: {
          ethereum: { holders: 1250, liquidity: '2.5M' },
          bsc: { holders: 890, liquidity: '1.8M' },
          polygon: { holders: 650, liquidity: '1.2M' }
        },
        riskScore: Math.floor(Math.random() * 100),
        timestamp: new Date().toISOString()
      };
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 4000);
  };

  const getRiskLevel = (score: number) => {
    if (score <= 30) return { level: 'Low', color: 'text-green-400' };
    if (score <= 60) return { level: 'Medium', color: 'text-yellow-400' };
    if (score <= 80) return { level: 'High', color: 'text-orange-400' };
    return { level: 'Critical', color: 'text-red-400' };
  };

  return (
    <div className="tokenomics-page">
      {/* Hero Section */}
      <section className="tokenomics-hero">
        <div className="tokenomics-hero-container">
          <div className="tokenomics-hero-grid">
            <div className="tokenomics-hero-content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="tokenomics-hero-badge"
              >
                <BarChart3 className="hero-badge-icon" />
                <span>Cross-Chain Tokenomics Analysis</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="tokenomics-hero-title"
              >
                Cross-Chain
                <span className="title-line-2"> Tokenomics Evaluation</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="tokenomics-hero-description"
              >
                Comprehensive multi-chain analysis of token distribution, whale concentration, liquidity patterns, and economic manipulation indicators across all major blockchains.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="tokenomics-features-grid"
              >
                <div className="tokenomics-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" fill="rgba(16, 185, 129, 0.1)"/>
                      <path d="M32 8L40 24H24L32 8Z" fill="currentColor"/>
                      <circle cx="32" cy="32" r="12" fill="currentColor"/>
                      <path d="M16 45L24 35H40L48 45" stroke="currentColor" strokeWidth="2" fill="rgba(16, 185, 129, 0.2)"/>
                      <circle cx="20" cy="48" r="3" fill="currentColor"/>
                      <circle cx="44" cy="48" r="3" fill="currentColor"/>
                      <path d="M28 52C28 50 30 48 32 48C34 48 36 50 36 52" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Whale Analysis</span>
                </div>
                <div className="tokenomics-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8" y="12" width="48" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="rgba(16, 185, 129, 0.1)"/>
                      <path d="M8 20H56" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="20" cy="16" r="2" fill="currentColor"/>
                      <circle cx="28" cy="16" r="2" fill="currentColor"/>
                      <circle cx="36" cy="16" r="2" fill="currentColor"/>
                      <rect x="16" y="28" width="12" height="8" rx="2" fill="currentColor"/>
                      <rect x="36" y="28" width="12" height="8" rx="2" fill="rgba(16, 185, 129, 0.6)"/>
                      <path d="M16 40L20 44L28 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M36 40L48 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <text x="32" y="48" textAnchor="middle" fontSize="8" fill="currentColor">TAX</text>
                    </svg>
                  </div>
                  <span>Tax Structure</span>
                </div>
                <div className="tokenomics-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="rgba(16, 185, 129, 0.05)"/>
                      <circle cx="20" cy="20" r="6" fill="currentColor"/>
                      <circle cx="44" cy="20" r="5" fill="rgba(16, 185, 129, 0.8)"/>
                      <circle cx="32" cy="32" r="4" fill="rgba(16, 185, 129, 0.6)"/>
                      <circle cx="16" cy="44" r="4" fill="rgba(16, 185, 129, 0.7)"/>
                      <circle cx="48" cy="44" r="3" fill="rgba(16, 185, 129, 0.5)"/>
                      <path d="M20 26L32 28L44 25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2"/>
                      <path d="M32 36L16 40L32 36L48 41" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2"/>
                      <text x="20" y="18" textAnchor="middle" fontSize="6" fill="white">45%</text>
                      <text x="44" y="18" textAnchor="middle" fontSize="5" fill="white">12%</text>
                      <text x="32" y="31" textAnchor="middle" fontSize="4" fill="white">8%</text>
                    </svg>
                  </div>
                  <span>Holder Distribution</span>
                </div>
                <div className="tokenomics-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="12" y="24" width="40" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="rgba(16, 185, 129, 0.1)"/>
                      <rect x="26" y="16" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="rgba(16, 185, 129, 0.2)"/>
                      <circle cx="32" cy="36" r="6" stroke="currentColor" strokeWidth="2" fill="rgba(16, 185, 129, 0.1)"/>
                      <path d="M29 36L31 38L35 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="20" y="46" width="8" height="2" rx="1" fill="currentColor"/>
                      <rect x="36" y="46" width="8" height="2" rx="1" fill="currentColor"/>
                      <path d="M16 28L20 32L16 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M48 28L44 32L48 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="32" cy="12" r="3" fill="currentColor"/>
                      <path d="M29 9L32 6L35 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Liquidity Lock</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="tokenomics-hero-video-container"
            >
              <div className="tokenomics-video-card">
                <video
                  className="tokenomics-hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/logos/tokens.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Analysis Section */}
      <section className="tokenomics-main">
        <div className="tokenomics-container">
          {!analysisResult ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="tokenomics-scanner"
            >
              <div className="scanner-card">
                <div className="scanner-header">
                  <h2 className="scanner-title">
                    Tokenomics
                    <span className="title-line-2"> Analyzer</span>
                  </h2>
                  <p className="scanner-subtitle">
                    Enter a token address or symbol to begin comprehensive cross-chain tokenomics analysis
                  </p>
                </div>

                <div className="scanner-form">
                  <div className="input-row">
                    <div className="input-checkbox">
                      <label htmlFor="terms" className="checkbox-label"></label>
                    </div>
                    <div className="input-field-container">
                      <input
                        type="text"
                        value={tokenAddress}
                        onChange={(e) => setTokenAddress(e.target.value)}
                        placeholder="Enter token address (0x...) or symbol (ETH, BTC)"
                        className="contract-input-field"
                      />
                      <Search className="input-search-icon" />
                    </div>
                  </div>
                  
                  <div className="scan-button-container">
                    <button
                      onClick={handleAnalysis}
                      disabled={isAnalyzing || (!tokenAddress && !tokenSymbol)}
                      className={`main-scan-button ${isAnalyzing ? 'scanning' : ''}`}
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="scan-spinner"></div>
                          <span>Analyzing...</span>
                        </>
                      ) : (
                        <>
                          <BarChart3 className="scan-icon" />
                          <span>Analyze Tokenomics</span>
                        </>
                      )}
                    </button>
                  </div>

                  {showWalletConnect && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="wallet-warning"
                    >
                      <div className="warning-header">
                        <Wallet className="warning-icon" />
                        <span className="warning-title">Wallet Connection Required</span>
                      </div>
                      <p className="warning-text">
                        Connect your wallet and pay a small testnet fee (≈$0.01) to perform tokenomics analysis.
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="analysis-info">
                  <h3 className="info-title">Comprehensive Analysis Includes:</h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Cross-Chain Whale Analysis</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Liquidity Lock Verification</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Tax Structure Analysis</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Holder Distribution Mapping</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Minting Rights Assessment</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Multi-Chain Risk Scoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="tokenomics-results"
            >
              <div className="results-header">
                <div className="results-title-section">
                  <h2 className="results-title">Tokenomics Analysis Complete</h2>
                  <p className="results-subtitle">Token: {analysisResult.token}</p>
                  <p className="results-timestamp">
                    Analysis completed on {new Date(analysisResult.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="results-content">
                {/* Risk Score Section */}
                <div className="risk-score-section">
                  <div className="risk-meter">
                    <div className="risk-circle">
                      <svg className="risk-progress" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="8"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke={analysisResult.riskScore <= 30 ? '#10b981' : analysisResult.riskScore <= 60 ? '#f59e0b' : analysisResult.riskScore <= 80 ? '#f97316' : '#ef4444'}
                          strokeWidth="8"
                          strokeDasharray={`${analysisResult.riskScore * 2.83} 283`}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="risk-score-content">
                        <div className="risk-number">{analysisResult.riskScore}</div>
                        <div className="risk-label">Risk Score</div>
                      </div>
                    </div>
                  </div>
                  <div className={`risk-level ${getRiskLevel(analysisResult.riskScore).color}`}>
                    {getRiskLevel(analysisResult.riskScore).level} Risk
                  </div>
                </div>

                {/* Token Metrics */}
                <div className="token-metrics">
                  <h3 className="section-title">Token Metrics</h3>
                  <div className="metrics-grid">
                    <div className="metric-card">
                      <div className="metric-value">{analysisResult.totalSupply}</div>
                      <div className="metric-label">Total Supply</div>
                    </div>
                    <div className="metric-card">
                      <div className={`metric-value ${analysisResult.whaleConcentration > 40 ? 'text-red-400' : 'text-green-400'}`}>
                        {analysisResult.whaleConcentration}%
                      </div>
                      <div className="metric-label">Whale Concentration</div>
                    </div>
                    <div className="metric-card">
                      <div className={`metric-value ${analysisResult.liquidityLocked ? 'text-green-400' : 'text-red-400'}`}>
                        {analysisResult.liquidityLocked ? 'Locked' : 'Unlocked'}
                      </div>
                      <div className="metric-label">Liquidity Status</div>
                    </div>
                    <div className="metric-card">
                      <div className={`metric-value ${analysisResult.mintingRights === 'Limited' ? 'text-green-400' : 'text-red-400'}`}>
                        {analysisResult.mintingRights}
                      </div>
                      <div className="metric-label">Minting Rights</div>
                    </div>
                  </div>
                </div>

                {/* Findings Section */}
                <div className="findings-section">
                  <div className="findings-grid">
                    <div className="findings-card">
                      <div className="findings-header">
                        <Users className="findings-icon" />
                        <h3 className="findings-title">Top Holders</h3>
                        <span className="findings-count">{analysisResult.topHolders.length}</span>
                      </div>
                      <div className="holders-list">
                        {analysisResult.topHolders.map((holder: any, index: number) => (
                          <div key={index} className="holder-item">
                            <span className="holder-address">{holder.address}</span>
                            <span className="holder-percentage">{holder.percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="findings-card">
                      <div className="findings-header">
                        <TrendingUp className="findings-icon" />
                        <h3 className="findings-title">Tax Structure</h3>
                      </div>
                      <div className="tax-structure">
                        <div className="tax-item">
                          <span className="tax-label">Buy Tax</span>
                          <span className="tax-value buy-tax">{analysisResult.taxStructure.buyTax}%</span>
                        </div>
                        <div className="tax-item">
                          <span className="tax-label">Sell Tax</span>
                          <span className="tax-value sell-tax">{analysisResult.taxStructure.sellTax}%</span>
                        </div>
                        <div className="tax-item">
                          <span className="tax-label">Modifiable</span>
                          <span className={`tax-value ${analysisResult.taxStructure.modifiable ? 'text-red-400' : 'text-green-400'}`}>
                            {analysisResult.taxStructure.modifiable ? 'Yes' : 'No'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions Section */}
                <div className="results-actions">
                  <button 
                    onClick={() => {
                      const reportData = {
                        ...analysisResult,
                        generatedAt: new Date().toISOString(),
                        reportType: 'Tokenomics Analysis Report',
                        platform: 'ZetaGuardian'
                      };
                      const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `zetaguardian-tokenomics-${Date.now()}.json`;
                      a.click();
                    }}
                    className="download-button"
                  >
                    <Download className="action-icon" />
                    <span>Download Full Report</span>
                  </button>
                  <button 
                    onClick={() => {
                      setAnalysisResult(null);
                      setTokenAddress('');
                      setTokenSymbol('');
                      setShowWalletConnect(false);
                    }}
                    className="scan-another-button"
                  >
                    <BarChart3 className="action-icon" />
                    <span>Analyze Another Token</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
