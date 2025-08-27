import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Scan, AlertTriangle, CheckCircle, Download, Wallet, Search } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import './ContractAnalysisPage.css';

export function ContractAnalysisPage() {
  const [contractAddress, setContractAddress] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  const { account } = useWallet();

  const handleScan = async () => {
    if (!account) {
      setShowWalletConnect(true);
      return;
    }

    if (!contractAddress) return;

    setIsScanning(true);
    
    // Simulate testnet payment and analysis
    setTimeout(() => {
      const mockResult = {
        address: contractAddress,
        riskScore: Math.floor(Math.random() * 100),
        vulnerabilities: [
          'Unlimited minting capability detected',
          'Owner can pause transfers at any time',
          'No liquidity lock mechanism found',
          'Potential honeypot functions identified',
          'Excessive owner privileges detected'
        ],
        recommendations: [
          'Verify contract ownership and renouncement',
          'Check liquidity lock status and duration',
          'Monitor for suspicious transaction patterns',
          'Review token distribution for whale concentration',
          'Analyze recent contract interactions'
        ],
        securityChecks: {
          honeypot: { status: 'warning', score: 65 },
          ownership: { status: 'danger', score: 85 },
          liquidity: { status: 'safe', score: 25 },
          rugpull: { status: 'warning', score: 70 }
        },
        timestamp: new Date().toISOString()
      };
      setScanResult(mockResult);
      setIsScanning(false);
    }, 4000);
  };

  const getRiskLevel = (score: number) => {
    if (score <= 30) return { level: 'Low Risk', color: 'risk-low', bgColor: '#10b981' };
    if (score <= 60) return { level: 'Medium Risk', color: 'risk-medium', bgColor: '#f59e0b' };
    if (score <= 80) return { level: 'High Risk', color: 'risk-high', bgColor: '#f97316' };
    return { level: 'Critical Risk', color: 'risk-critical', bgColor: '#ef4444' };
  };

  const getCheckStatus = (status: string) => {
    switch (status) {
      case 'safe': return { icon: CheckCircle, color: '#10b981', text: 'Safe' };
      case 'warning': return { icon: AlertTriangle, color: '#f59e0b', text: 'Warning' };
      case 'danger': return { icon: AlertTriangle, color: '#ef4444', text: 'Danger' };
      default: return { icon: AlertTriangle, color: '#6b7280', text: 'Unknown' };
    }
  };

  const downloadReport = () => {
    const reportData = {
      ...scanResult,
      generatedAt: new Date().toISOString(),
      reportType: 'Smart Contract Security Analysis',
      platform: 'ZetaGuardian'
    };
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zetaguardian-contract-analysis-${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="contract-analysis-page">
      {/* Hero Section */}
      <section className="analysis-hero">
        <div className="analysis-hero-container">
          <div className="analysis-hero-grid">
            <div className="analysis-hero-content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="analysis-hero-badge"
              >
                <Shield className="hero-badge-icon" />
                <span>AI-Powered Security Analysis</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="analysis-hero-title"
              >
                Smart Contract
                <span className="title-line-2"> Risk Analysis</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="analysis-hero-description"
              >
                Comprehensive security evaluation powered by ZetaChain's cross-chain capabilities and advanced AI analysis. 
                Detect vulnerabilities, honeypots, and malicious patterns before you invest.
              </motion.p>

            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="analysis-hero-video-container"
            >
              <div className="analysis-video-card">
                <video
                  className="analysis-hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/logos/contractsearch.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Analysis Section */}
      <section className="analysis-main">
        <div className="analysis-container">
          {!scanResult ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="analysis-scanner"
            >
              <div className="scanner-card">
                <div className="scanner-header">
                  <h2 className="scanner-title">
                    Contract Security
                    <span className="title-line-2"> Scanner</span>
                  </h2>
                  <p className="scanner-subtitle">
                    Enter a smart contract address to begin comprehensive security analysis
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
                        value={contractAddress}
                        onChange={(e) => setContractAddress(e.target.value)}
                        placeholder="Enter contract address (0x...)"
                        className="contract-input-field"
                      />
                      <Search className="input-search-icon" />
                    </div>
                  </div>
                  
                  <div className="scan-button-container">
                    <button
                      onClick={handleScan}
                      disabled={isScanning || !contractAddress}
                      className={`main-scan-button ${isScanning ? 'scanning' : ''}`}
                    >
                      {isScanning ? (
                        <>
                          <div className="scan-spinner"></div>
                          <span>Analyzing...</span>
                        </>
                      ) : (
                        <>
                          <Shield className="scan-icon" />
                          <span>Analyze Security</span>
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
                        Connect your wallet and pay a small testnet fee (≈$0.01) to perform security analysis.
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="analysis-info">
                  <h3 className="info-title">Comprehensive Analysis Includes:</h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Honeypot & Rugpull Detection</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Owner Privilege Analysis</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Liquidity Lock Verification</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Vulnerability Assessment</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Cross-Chain Risk Analysis</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>AI-Powered Pattern Recognition</span>
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
              className="analysis-results"
            >
              <div className="results-header">
                <div className="results-title-section">
                  <h2 className="results-title">Security Analysis Complete</h2>
                  <p className="results-subtitle">Contract: {scanResult.address}</p>
                  <p className="results-timestamp">
                    Analysis completed on {new Date(scanResult.timestamp).toLocaleString()}
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
                          stroke={getRiskLevel(scanResult.riskScore).bgColor}
                          strokeWidth="8"
                          strokeDasharray={`${scanResult.riskScore * 2.83} 283`}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="risk-score-content">
                        <div className="risk-number">{scanResult.riskScore}</div>
                        <div className="risk-label">Risk Score</div>
                      </div>
                    </div>
                  </div>
                  <div className={`risk-level ${getRiskLevel(scanResult.riskScore).color}`}>
                    {getRiskLevel(scanResult.riskScore).level}
                  </div>
                </div>

                {/* Security Checks Grid */}
                <div className="security-checks">
                  <h3 className="section-title">Security Checks</h3>
                  <div className="checks-grid">
                    {Object.entries(scanResult.securityChecks).map(([key, check]: [string, any]) => {
                      const status = getCheckStatus(check.status);
                      const StatusIcon = status.icon;
                      return (
                        <div key={key} className="check-card">
                          <div className="check-header">
                            <StatusIcon className="check-icon" style={{ color: status.color }} />
                            <span className="check-name">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                          </div>
                          <div className="check-score" style={{ color: status.color }}>
                            {check.score}/100
                          </div>
                          <div className="check-status" style={{ color: status.color }}>
                            {status.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Findings Section */}
                <div className="findings-section">
                  <div className="findings-grid">
                    <div className="findings-card vulnerabilities">
                      <div className="findings-header">
                        <AlertTriangle className="findings-icon danger" />
                        <h3 className="findings-title">Vulnerabilities Detected</h3>
                        <span className="findings-count">{scanResult.vulnerabilities.length}</span>
                      </div>
                      <div className="findings-list">
                        {scanResult.vulnerabilities.map((vuln: string, index: number) => (
                          <div key={index} className="finding-item">
                            <span className="finding-bullet danger"></span>
                            <span className="finding-text">{vuln}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="findings-card recommendations">
                      <div className="findings-header">
                        <CheckCircle className="findings-icon success" />
                        <h3 className="findings-title">Security Recommendations</h3>
                        <span className="findings-count">{scanResult.recommendations.length}</span>
                      </div>
                      <div className="findings-list">
                        {scanResult.recommendations.map((rec: string, index: number) => (
                          <div key={index} className="finding-item">
                            <span className="finding-bullet success"></span>
                            <span className="finding-text">{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions Section */}
                <div className="results-actions">
                  <button onClick={downloadReport} className="download-button">
                    <Download className="action-icon" />
                    <span>Download Full Report</span>
                  </button>
                  <button 
                    onClick={() => {
                      setScanResult(null);
                      setContractAddress('');
                      setShowWalletConnect(false);
                    }}
                    className="scan-another-button"
                  >
                    <Scan className="action-icon" />
                    <span>Analyze Another Contract</span>
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
