import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Scan, AlertTriangle, CheckCircle, Download, Wallet, Play, Pause, Bell, Search, Activity, Shield, TrendingUp } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import './MonitoringPage.css';

export function MonitoringPage() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [monitoringData, setMonitoringData] = useState<any>(null);
  const [alerts, setAlerts] = useState<any[]>([]);
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  const { account } = useWallet();

  const startMonitoring = async () => {
    if (!account) {
      setShowWalletConnect(true);
      return;
    }

    if (!tokenAddress) return;

    setIsMonitoring(true);
    
    const mockData = {
      token: tokenAddress,
      startTime: new Date().toISOString(),
      currentPrice: Math.random() * 100,
      priceChange24h: (Math.random() - 0.5) * 20,
      volume24h: Math.floor(Math.random() * 1000000),
      liquidityUSD: Math.floor(Math.random() * 10000000),
      holders: Math.floor(Math.random() * 10000) + 1000,
      marketCap: Math.floor(Math.random() * 100000000) + 10000000,
      transactions24h: Math.floor(Math.random() * 5000) + 500,
      riskLevel: Math.random() > 0.7 ? 'High' : Math.random() > 0.4 ? 'Medium' : 'Low',
      monitoringStatus: 'Active',
      lastUpdate: new Date().toISOString(),
      networkActivity: {
        buys: Math.floor(Math.random() * 100) + 50,
        sells: Math.floor(Math.random() * 80) + 30,
        transfers: Math.floor(Math.random() * 200) + 100
      }
    };
    
    setMonitoringData(mockData);
    
    // Simulate real-time alerts
    const alertInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const alertTypes = ['warning', 'danger', 'info'];
        const alertMessages = [
          'Large transaction detected: $50,000 sell order',
          'Unusual trading volume spike: +300% in last 15 minutes',
          'New whale wallet identified holding 2.5% of supply',
          'Liquidity pool change detected: -15% liquidity removed',
          'Social sentiment shift: Negative trend on Twitter',
          'Suspicious contract interaction detected',
          'Price manipulation pattern identified',
          'Multiple large sells from same wallet cluster',
          'Honeypot mechanism activated in contract',
          'Cross-chain bridge activity unusual spike'
        ];
        
        const newAlert = {
          id: Date.now(),
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: alertMessages[Math.floor(Math.random() * alertMessages.length)],
          timestamp: new Date().toISOString()
        };
        
        setAlerts(prev => [newAlert, ...prev.slice(0, 9)]); // Keep last 10 alerts
      }
    }, 3000);

    return () => clearInterval(alertInterval);
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
    setMonitoringData(null);
    setAlerts([]);
  };

  return (
    <div className="monitoring-page">
      {/* Hero Section */}
      <section className="monitoring-hero">
        <div className="monitoring-hero-container">
          <div className="monitoring-hero-grid">
            <div className="monitoring-hero-content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="monitoring-hero-badge"
              >
                <Zap className="hero-badge-icon" />
                <span>Real-Time Protection & Alerts</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="monitoring-hero-title"
              >
                Real-Time
                <span className="title-line-2"> Protection & Alerts</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="monitoring-hero-description"
              >
                Continuous 24/7 surveillance with instant alerts for suspicious trading patterns, whale movements, liquidity changes, and malicious behavior across all major blockchains.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="monitoring-features-grid"
              >
                <div className="monitoring-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="rgba(249, 115, 22, 0.1)"/>
                      <path d="M20 32L28 40L44 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="32" cy="16" r="4" fill="currentColor"/>
                      <path d="M28 12L32 8L36 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="16" cy="48" r="2" fill="rgba(249, 115, 22, 0.8)"/>
                      <circle cx="48" cy="48" r="2" fill="rgba(249, 115, 22, 0.8)"/>
                      <circle cx="32" cy="52" r="2" fill="rgba(249, 115, 22, 0.6)"/>
                      <path d="M16 46L32 50L48 46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2"/>
                      <rect x="28" y="28" width="8" height="8" rx="2" fill="rgba(249, 115, 22, 0.3)"/>
                    </svg>
                  </div>
                  <span>Price Monitoring</span>
                </div>
                <div className="monitoring-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="12" y="20" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="rgba(249, 115, 22, 0.1)"/>
                      <circle cx="24" cy="32" r="6" fill="currentColor"/>
                      <path d="M32 26L40 32L32 38" fill="rgba(249, 115, 22, 0.8)"/>
                      <circle cx="44" cy="32" r="3" fill="rgba(249, 115, 22, 0.6)"/>
                      <path d="M8 12L16 8L24 12L32 8L40 12L48 8L56 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="16" cy="8" r="2" fill="rgba(249, 115, 22, 0.8)"/>
                      <circle cx="32" cy="8" r="2" fill="rgba(249, 115, 22, 0.6)"/>
                      <circle cx="48" cy="8" r="2" fill="rgba(249, 115, 22, 0.8)"/>
                      <path d="M8 52L16 56L24 52L32 56L40 52L48 56L56 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <text x="32" y="58" textAnchor="middle" fontSize="6" fill="currentColor">WHALE</text>
                    </svg>
                  </div>
                  <span>Whale Tracking</span>
                </div>
                <div className="monitoring-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" fill="rgba(249, 115, 22, 0.05)"/>
                      <path d="M24 24L40 40M40 24L24 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      <circle cx="32" cy="12" r="3" fill="currentColor"/>
                      <path d="M28 8L32 4L36 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="20" y="48" width="24" height="8" rx="4" stroke="currentColor" strokeWidth="2" fill="rgba(249, 115, 22, 0.2)"/>
                      <circle cx="26" cy="52" r="2" fill="rgba(249, 115, 22, 0.8)"/>
                      <circle cx="32" cy="52" r="2" fill="rgba(249, 115, 22, 0.6)"/>
                      <circle cx="38" cy="52" r="2" fill="rgba(249, 115, 22, 0.8)"/>
                      <path d="M16 20L20 16L24 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M40 20L44 16L48 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>Threat Detection</span>
                </div>
                <div className="monitoring-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="16" y="24" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="rgba(249, 115, 22, 0.1)"/>
                      <circle cx="24" cy="36" r="2" fill="currentColor"/>
                      <circle cx="32" cy="36" r="2" fill="rgba(249, 115, 22, 0.8)"/>
                      <circle cx="40" cy="36" r="2" fill="rgba(249, 115, 22, 0.6)"/>
                      <path d="M20 40L28 44L36 40L44 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="32" cy="12" r="4" fill="currentColor"/>
                      <path d="M28 8L32 4L36 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 20L16 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M44 20L48 16L52 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="26" y="52" width="12" height="4" rx="2" fill="rgba(249, 115, 22, 0.5)"/>
                      <text x="32" y="58" textAnchor="middle" fontSize="6" fill="currentColor">ALERT</text>
                    </svg>
                  </div>
                  <span>Instant Alerts</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="monitoring-hero-video-container"
            >
              <div className="monitoring-video-card">
                <video
                  className="monitoring-hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/logos/monitor.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div> 
        </div>
      </section>

      {/* Main Monitoring Section */}
      <section className="monitoring-main">
        <div className="monitoring-container">
          {!isMonitoring ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="monitoring-scanner"
            >
              <div className="scanner-card">
                <div className="scanner-header">
                  <h2 className="scanner-title">
                    Real-Time
                    <span className="title-line-2"> Monitoring Center</span>
                  </h2>
                  <p className="scanner-subtitle">
                    Enter a token address to begin 24/7 real-time monitoring and threat detection
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
                        placeholder="Enter token contract address (0x...)"
                        className="contract-input-field"
                      />
                      <Search className="input-search-icon" />
                    </div>
                  </div>
                  
                  <div className="scan-button-container">
                    <button
                      onClick={startMonitoring}
                      disabled={!tokenAddress}
                      className="main-scan-button"
                    >
                      <Play className="scan-icon" />
                      <span>Start Real-Time Monitoring</span>
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
                        Connect your wallet and pay a small testnet fee (≈$0.01) to start real-time monitoring.
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="analysis-info">
                  <h3 className="info-title">Real-Time Monitoring Features:</h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Price Movement & Volatility Alerts</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Large Transaction Detection</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Whale Activity Tracking</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Liquidity Pool Changes</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Contract Interaction Monitoring</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Cross-Chain Bridge Activity</span>
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
              className="monitoring-results"
            >
              <div className="monitoring-status-header">
                <div className="status-section">
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <span className="status-text">Monitoring Active</span>
                  </div>
                  <div className="status-info">
                    <p className="token-info">Token: {monitoringData.token}</p>
                    <p className="start-time">Started: {new Date(monitoringData.startTime).toLocaleString()}</p>
                    <p className="last-update">Last Update: {new Date(monitoringData.lastUpdate).toLocaleTimeString()}</p>
                  </div>
                </div>
                <div className="risk-indicator">
                  <span className={`risk-badge risk-${monitoringData.riskLevel.toLowerCase()}`}>
                    {monitoringData.riskLevel} Risk
                  </span>
                </div>
              </div>

              <div className="monitoring-content">
                {/* Live Metrics */}
                <div className="live-metrics">
                  <h3 className="section-title">Live Token Metrics</h3>
                  <div className="metrics-grid">
                    <div className="metric-card">
                      <div className="metric-value">${monitoringData.currentPrice.toFixed(4)}</div>
                      <div className="metric-label">Current Price</div>
                    </div>
                    <div className="metric-card">
                      <div className={`metric-value ${monitoringData.priceChange24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {monitoringData.priceChange24h >= 0 ? '+' : ''}{monitoringData.priceChange24h.toFixed(2)}%
                      </div>
                      <div className="metric-label">24h Change</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-value">${monitoringData.volume24h.toLocaleString()}</div>
                      <div className="metric-label">24h Volume</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-value">${monitoringData.liquidityUSD.toLocaleString()}</div>
                      <div className="metric-label">Liquidity</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-value">{monitoringData.holders.toLocaleString()}</div>
                      <div className="metric-label">Holders</div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-value">${monitoringData.marketCap.toLocaleString()}</div>
                      <div className="metric-label">Market Cap</div>
                    </div>
                  </div>
                </div>

                {/* Network Activity */}
                <div className="network-activity">
                  <h3 className="section-title">Network Activity (Last Hour)</h3>
                  <div className="activity-grid">
                    <div className="activity-card">
                      <div className="activity-header">
                        <TrendingUp className="activity-icon text-green-400" />
                        <span className="activity-label">Buys</span>
                      </div>
                      <div className="activity-value">{monitoringData.networkActivity.buys}</div>
                    </div>
                    <div className="activity-card">
                      <div className="activity-header">
                        <TrendingUp className="activity-icon text-red-400" style={{ transform: 'rotate(180deg)' }} />
                        <span className="activity-label">Sells</span>
                      </div>
                      <div className="activity-value">{monitoringData.networkActivity.sells}</div>
                    </div>
                    <div className="activity-card">
                      <div className="activity-header">
                        <Activity className="activity-icon text-blue-400" />
                        <span className="activity-label">Transfers</span>
                      </div>
                      <div className="activity-value">{monitoringData.networkActivity.transfers}</div>
                    </div>
                  </div>
                </div>

                {/* Real-Time Alerts */}
                <div className="alerts-section">
                  <div className="alerts-header">
                    <div className="alerts-title-section">
                      <Bell className="alerts-icon" />
                      <h3 className="section-title">Real-Time Security Alerts</h3>
                    </div>
                    <div className="alerts-count">
                      {alerts.length} Alert{alerts.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                  
                  <div className="alerts-container">
                    {alerts.length === 0 ? (
                      <div className="no-alerts">
                        <Shield className="no-alerts-icon" />
                        <p className="no-alerts-text">All systems secure. No threats detected.</p>
                      </div>
                    ) : (
                      <div className="alerts-list">
                        {alerts.map((alert) => (
                          <div key={alert.id} className={`alert-item alert-${alert.type}`}>
                            <div className="alert-indicator">
                              <AlertTriangle className="alert-icon" />
                            </div>
                            <div className="alert-content">
                              <p className="alert-message">{alert.message}</p>
                              <p className="alert-timestamp">
                                {new Date(alert.timestamp).toLocaleTimeString()}
                              </p>
                            </div>
                            <div className={`alert-severity alert-severity-${alert.type}`}>
                              {alert.type.toUpperCase()}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions Section */}
                <div className="monitoring-actions">
                  <button 
                    onClick={() => {
                      const reportData = {
                        ...monitoringData,
                        alerts,
                        exportTime: new Date().toISOString(),
                        reportType: 'Real-Time Monitoring Report',
                        platform: 'ZetaGuardian'
                      };
                      const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `zetaguardian-monitoring-${Date.now()}.json`;
                      a.click();
                    }}
                    className="download-button"
                  >
                    <Download className="action-icon" />
                    <span>Export Monitoring Data</span>
                  </button>
                  <button 
                    onClick={stopMonitoring}
                    className="stop-button"
                  >
                    <Pause className="action-icon" />
                    <span>Stop Monitoring</span>
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
