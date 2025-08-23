import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Scan, AlertTriangle, CheckCircle, Download, Wallet, PieChart } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import './FeaturePage.css';

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
        whaleConcentration: 45,
        topHolders: [
          { address: '0x1234...5678', percentage: 15.2 },
          { address: '0x9abc...def0', percentage: 12.8 },
          { address: '0x5555...7777', percentage: 8.9 }
        ],
        liquidityLocked: true,
        mintingRights: 'Limited',
        taxStructure: {
          buyTax: 3,
          sellTax: 5,
          modifiable: false
        },
        riskScore: Math.floor(Math.random() * 100),
        timestamp: new Date().toISOString()
      };
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  const getRiskLevel = (score: number) => {
    if (score <= 30) return { level: 'Low', color: 'text-green-400' };
    if (score <= 60) return { level: 'Medium', color: 'text-yellow-400' };
    if (score <= 80) return { level: 'High', color: 'text-orange-400' };
    return { level: 'Critical', color: 'text-red-400' };
  };

  return (
    <div className="feature-page">
      <div className="feature-header">
        <div className="max-w-4xl mx-auto text-center py-16">
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 mb-6">
            <BarChart3 className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Tokenomics Evaluation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Deep analysis of token distribution, whale concentration, and economic manipulation indicators
          </p>
        </div>
      </div>

      <div className="feature-content">
        <div className="max-w-4xl mx-auto">
          {!analysisResult ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="scanner-card"
            >
              <div className="token-input-grid">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Token Contract Address
                  </label>
                  <input
                    type="text"
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                    placeholder="0x..."
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Or Token Symbol
                  </label>
                  <input
                    type="text"
                    value={tokenSymbol}
                    onChange={(e) => setTokenSymbol(e.target.value)}
                    placeholder="ETH, BTC, etc."
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-colors"
                  />
                </div>
              </div>

              {showWalletConnect && (
                <div className="wallet-warning">
                  <div className="flex items-center space-x-2 text-orange-400 mb-2">
                    <Wallet className="h-5 w-5" />
                    <span className="font-medium">Wallet Connection Required</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Connect your wallet and pay a small testnet fee to perform tokenomics analysis.
                  </p>
                </div>
              )}

              <button
                onClick={handleAnalysis}
                disabled={isAnalyzing || (!tokenAddress && !tokenSymbol)}
                className="scan-button"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Analyzing Tokenomics...</span>
                  </>
                ) : (
                  <>
                    <PieChart className="h-5 w-5" />
                    <span>Start Analysis</span>
                  </>
                )}
              </button>

              <div className="analysis-info">
                <h3 className="text-lg font-semibold text-white mb-3">Analysis Includes:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Whale Concentration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Liquidity Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Tax Structure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Minting Rights</span>
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
                <h2 className="text-2xl font-bold text-white mb-2">Tokenomics Analysis Complete</h2>
                <p className="text-gray-400">Token: {analysisResult.token}</p>
              </div>

              <div className="risk-score">
                <div className="risk-meter">
                  <div className="risk-circle">
                    <div className="risk-number">{analysisResult.riskScore}</div>
                    <div className="risk-label">Risk Score</div>
                  </div>
                </div>
                <div className={`risk-level ${getRiskLevel(analysisResult.riskScore).color}`}>
                  {getRiskLevel(analysisResult.riskScore).level} Risk
                </div>
              </div>

              <div className="findings-grid">
                <div className="findings-card">
                  <h3 className="font-semibold text-white mb-3">Token Distribution</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Total Supply</span>
                        <span className="text-white">{analysisResult.totalSupply}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Whale Concentration</span>
                        <span className={`${analysisResult.whaleConcentration > 40 ? 'text-red-400' : 'text-green-400'}`}>
                          {analysisResult.whaleConcentration}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">Liquidity Locked</span>
                        <span className={`${analysisResult.liquidityLocked ? 'text-green-400' : 'text-red-400'}`}>
                          {analysisResult.liquidityLocked ? 'Yes' : 'No'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="findings-card">
                  <h3 className="font-semibold text-white mb-3">Top Holders</h3>
                  <div className="space-y-2">
                    {analysisResult.topHolders.map((holder: any, index: number) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-300 font-mono">{holder.address}</span>
                        <span className="text-white">{holder.percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="findings-card mb-6">
                <h3 className="font-semibold text-white mb-3">Tax Structure</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">{analysisResult.taxStructure.buyTax}%</div>
                    <div className="text-sm text-gray-300">Buy Tax</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-400">{analysisResult.taxStructure.sellTax}%</div>
                    <div className="text-sm text-gray-300">Sell Tax</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${analysisResult.taxStructure.modifiable ? 'text-red-400' : 'text-green-400'}`}>
                      {analysisResult.taxStructure.modifiable ? 'Yes' : 'No'}
                    </div>
                    <div className="text-sm text-gray-300">Modifiable</div>
                  </div>
                </div>
              </div>

              <div className="results-actions">
                <button 
                  onClick={() => {
                    const reportData = JSON.stringify(analysisResult, null, 2);
                    const blob = new Blob([reportData], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `tokenomics-analysis-${Date.now()}.json`;
                    a.click();
                  }}
                  className="download-button"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Report</span>
                </button>
                <button 
                  onClick={() => {
                    setAnalysisResult(null);
                    setTokenAddress('');
                    setTokenSymbol('');
                  }}
                  className="scan-another-button"
                >
                  Analyze Another Token
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
