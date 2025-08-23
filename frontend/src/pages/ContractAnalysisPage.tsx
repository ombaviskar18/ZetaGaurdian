import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Scan, AlertTriangle, CheckCircle, Download, Wallet } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import './FeaturePage.css';

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
          'Owner can pause transfers',
          'No liquidity lock mechanism'
        ],
        recommendations: [
          'Verify contract ownership',
          'Check liquidity lock status',
          'Monitor for suspicious transactions'
        ],
        timestamp: new Date().toISOString()
      };
      setScanResult(mockResult);
      setIsScanning(false);
    }, 3000);
  };

  const getRiskLevel = (score: number) => {
    if (score <= 30) return { level: 'Low', color: 'text-green-400', bg: 'bg-green-500' };
    if (score <= 60) return { level: 'Medium', color: 'text-yellow-400', bg: 'bg-yellow-500' };
    if (score <= 80) return { level: 'High', color: 'text-orange-400', bg: 'bg-orange-500' };
    return { level: 'Critical', color: 'text-red-400', bg: 'bg-red-500' };
  };

  const downloadReport = () => {
    const reportData = JSON.stringify(scanResult, null, 2);
    const blob = new Blob([reportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contract-analysis-${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="feature-page">
      <div className="feature-header">
        <div className="max-w-4xl mx-auto text-center py-16">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Smart Contract Analysis
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            AI-powered vulnerability detection to identify hidden backdoors, honeypot functions, and security risks
          </p>
        </div>
      </div>

      <div className="feature-content">
        <div className="max-w-4xl mx-auto">
          {!scanResult ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="scanner-card"
            >
              <div className="scanner-input">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contract Address
                </label>
                <input
                  type="text"
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                />
              </div>

              {showWalletConnect && (
                <div className="wallet-warning">
                  <div className="flex items-center space-x-2 text-orange-400 mb-2">
                    <Wallet className="h-5 w-5" />
                    <span className="font-medium">Wallet Connection Required</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Connect your wallet and pay a small testnet fee to perform security analysis.
                  </p>
                </div>
              )}

              <button
                onClick={handleScan}
                disabled={isScanning || !contractAddress}
                className="scan-button"
              >
                {isScanning ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Analyzing Contract...</span>
                  </>
                ) : (
                  <>
                    <Scan className="h-5 w-5" />
                    <span>Start Analysis</span>
                  </>
                )}
              </button>

              <div className="analysis-info">
                <h3 className="text-lg font-semibold text-white mb-3">Analysis Includes:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Honeypot Detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Owner Privileges</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Liquidity Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Vulnerability Scan</span>
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
              <div className="results-header">
                <h2 className="text-2xl font-bold text-white mb-2">Analysis Complete</h2>
                <p className="text-gray-400">Contract: {scanResult.address}</p>
              </div>

              <div className="risk-score">
                <div className="risk-meter">
                  <div className="risk-circle">
                    <div className="risk-number">{scanResult.riskScore}</div>
                    <div className="risk-label">Risk Score</div>
                  </div>
                </div>
                <div className={`risk-level ${getRiskLevel(scanResult.riskScore).color}`}>
                  {getRiskLevel(scanResult.riskScore).level} Risk
                </div>
              </div>

              <div className="findings-grid">
                <div className="findings-card">
                  <div className="flex items-center space-x-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <h3 className="font-semibold text-white">Vulnerabilities Found</h3>
                  </div>
                  <ul className="space-y-2">
                    {scanResult.vulnerabilities.map((vuln: string, index: number) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start space-x-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{vuln}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="findings-card">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <h3 className="font-semibold text-white">Recommendations</h3>
                  </div>
                  <ul className="space-y-2">
                    {scanResult.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="results-actions">
                <button onClick={downloadReport} className="download-button">
                  <Download className="h-4 w-4" />
                  <span>Download Report</span>
                </button>
                <button 
                  onClick={() => {
                    setScanResult(null);
                    setContractAddress('');
                  }}
                  className="scan-another-button"
                >
                  Scan Another Contract
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
