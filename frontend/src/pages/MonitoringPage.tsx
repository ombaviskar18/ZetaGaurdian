import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Scan, AlertTriangle, CheckCircle, Download, Wallet, Play, Pause, Bell } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import './FeaturePage.css';

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
      holders: Math.floor(Math.random() * 10000) + 1000
    };
    
    setMonitoringData(mockData);
    
    // Simulate real-time alerts
    const alertInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const alertTypes = ['warning', 'danger', 'info'];
        const alertMessages = [
          'Large transaction detected: $50,000 sell order',
          'Unusual trading volume spike: +300%',
          'New whale wallet identified',
          'Liquidity pool change detected',
          'Social sentiment shift: Negative trend'
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
    <div className="feature-page">
      <div className="feature-header">
        <div className="max-w-4xl mx-auto text-center py-16">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 mb-6">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Real-Time Monitoring
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Continuous surveillance with instant alerts for suspicious trading patterns and malicious behavior
          </p>
        </div>
      </div>

      <div className="feature-content">
        <div className="max-w-4xl mx-auto">
          {!isMonitoring ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="scanner-card"
            >
              <div className="scanner-input">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Token Contract Address
                </label>
                <input
                  type="text"
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-colors"
                />
              </div>

              {showWalletConnect && (
                <div className="wallet-warning">
                  <div className="flex items-center space-x-2 text-orange-400 mb-2">
                    <Wallet className="h-5 w-5" />
                    <span className="font-medium">Wallet Connection Required</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Connect your wallet and pay a small testnet fee to start real-time monitoring.
                  </p>
                </div>
              )}

              <button
                onClick={startMonitoring}
                disabled={!tokenAddress}
                className="scan-button"
              >
                <Play className="h-5 w-5" />
                <span>Start Monitoring</span>
              </button>

              <div className="analysis-info">
                <h3 className="text-lg font-semibold text-white mb-3">Monitoring Features:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Price Movement Alerts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Large Transaction Detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Liquidity Changes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Whale Activity Tracking</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="results-card"
            >
              <div className="monitoring-status">
                <div className="status-indicator status-active">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Monitoring Active</span>
                </div>
                <p className="text-gray-400">Token: {monitoringData.token}</p>
                <p className="text-sm text-gray-500">Started: {new Date(monitoringData.startTime).toLocaleString()}</p>
              </div>

              <div className="findings-grid mb-6">
                <div className="findings-card">
                  <h3 className="font-semibold text-white mb-3">Live Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Current Price</span>
                      <span className="text-white">${monitoringData.currentPrice.toFixed(4)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">24h Change</span>
                      <span className={`${monitoringData.priceChange24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {monitoringData.priceChange24h >= 0 ? '+' : ''}{monitoringData.priceChange24h.toFixed(2)}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">24h Volume</span>
                      <span className="text-white">${monitoringData.volume24h.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Liquidity</span>
                      <span className="text-white">${monitoringData.liquidityUSD.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Holders</span>
                      <span className="text-white">{monitoringData.holders.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="findings-card">
                  <div className="flex items-center space-x-2 mb-3">
                    <Bell className="h-5 w-5 text-orange-400" />
                    <h3 className="font-semibold text-white">Recent Alerts</h3>
                  </div>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {alerts.length === 0 ? (
                      <p className="text-gray-400 text-sm">No alerts yet...</p>
                    ) : (
                      alerts.map((alert) => (
                        <div key={alert.id} className={`alert-item ${alert.type}`}>
                          <div className="flex items-start space-x-2">
                            <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-sm font-medium">{alert.message}</p>
                              <p className="text-xs text-gray-400 mt-1">
                                {new Date(alert.timestamp).toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              <div className="results-actions">
                <button 
                  onClick={() => {
                    const reportData = {
                      ...monitoringData,
                      alerts,
                      exportTime: new Date().toISOString()
                    };
                    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `monitoring-report-${Date.now()}.json`;
                    a.click();
                  }}
                  className="download-button"
                >
                  <Download className="h-4 w-4" />
                  <span>Export Data</span>
                </button>
                <button 
                  onClick={stopMonitoring}
                  className="scan-another-button"
                >
                  <Pause className="h-4 w-4" />
                  <span>Stop Monitoring</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
