import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Scan, AlertTriangle, CheckCircle, Download, Wallet, Twitter, MessageCircle, Hash } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import './FeaturePage.css';

export function SocialAnalysisPage() {
  const [projectName, setProjectName] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['twitter', 'telegram']);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [showWalletConnect, setShowWalletConnect] = useState(false);
  const { account } = useWallet();

  const platforms = [
    { id: 'twitter', name: 'Twitter/X', icon: Twitter },
    { id: 'telegram', name: 'Telegram', icon: MessageCircle },
    { id: 'discord', name: 'Discord', icon: Hash }
  ];

  const handleAnalysis = async () => {
    if (!account) {
      setShowWalletConnect(true);
      return;
    }

    if (!projectName || selectedPlatforms.length === 0) return;

    setIsAnalyzing(true);
    
    setTimeout(() => {
      const mockResult = {
        project: projectName,
        platforms: selectedPlatforms,
        overallSentiment: 'Positive',
        credibilityScore: Math.floor(Math.random() * 100),
        socialMetrics: {
          followers: Math.floor(Math.random() * 100000) + 10000,
          engagement: Math.floor(Math.random() * 10) + 1,
          botPercentage: Math.floor(Math.random() * 30),
          communityGrowth: Math.floor(Math.random() * 200) - 50
        },
        redFlags: [
          'Sudden follower spike detected',
          'High bot engagement ratio',
          'Pump-and-dump keywords in recent posts'
        ],
        positiveSignals: [
          'Consistent community engagement',
          'Verified team members',
          'Regular development updates'
        ],
        riskScore: Math.floor(Math.random() * 100),
        timestamp: new Date().toISOString()
      };
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 4000);
  };

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
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
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 mb-6">
            <Eye className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Social Forensics
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sentiment analysis and community forensics to detect pump-and-dump schemes and fake engagement
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
              <div className="scanner-input">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Name or Token Symbol
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name..."
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Select Platforms to Analyze
                </label>
                <div className="social-platforms">
                  {platforms.map((platform) => (
                    <div
                      key={platform.id}
                      onClick={() => togglePlatform(platform.id)}
                      className={`platform-card cursor-pointer ${
                        selectedPlatforms.includes(platform.id) ? 'active' : ''
                      }`}
                    >
                      <platform.icon className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                      <div className="font-medium text-white">{platform.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              {showWalletConnect && (
                <div className="wallet-warning">
                  <div className="flex items-center space-x-2 text-orange-400 mb-2">
                    <Wallet className="h-5 w-5" />
                    <span className="font-medium">Wallet Connection Required</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Connect your wallet and pay a small testnet fee to perform social analysis.
                  </p>
                </div>
              )}

              <button
                onClick={handleAnalysis}
                disabled={isAnalyzing || !projectName || selectedPlatforms.length === 0}
                className="scan-button"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Analyzing Social Signals...</span>
                  </>
                ) : (
                  <>
                    <Eye className="h-5 w-5" />
                    <span>Start Social Analysis</span>
                  </>
                )}
              </button>

              <div className="analysis-info">
                <h3 className="text-lg font-semibold text-white mb-3">Analysis Includes:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Sentiment Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Bot Detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Community Growth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-gray-300">Engagement Quality</span>
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
                <h2 className="text-2xl font-bold text-white mb-2">Social Analysis Complete</h2>
                <p className="text-gray-400">Project: {analysisResult.project}</p>
              </div>

              <div className="risk-score">
                <div className="risk-meter">
                  <div className="risk-circle">
                    <div className="risk-number">{analysisResult.credibilityScore}</div>
                    <div className="risk-label">Credibility</div>
                  </div>
                </div>
                <div className={`risk-level ${getRiskLevel(100 - analysisResult.credibilityScore).color}`}>
                  {analysisResult.overallSentiment} Sentiment
                </div>
              </div>

              <div className="findings-grid">
                <div className="findings-card">
                  <h3 className="font-semibold text-white mb-3">Social Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Total Followers</span>
                      <span className="text-white">{analysisResult.socialMetrics.followers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Engagement Rate</span>
                      <span className="text-white">{analysisResult.socialMetrics.engagement}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Bot Percentage</span>
                      <span className={`${analysisResult.socialMetrics.botPercentage > 20 ? 'text-red-400' : 'text-green-400'}`}>
                        {analysisResult.socialMetrics.botPercentage}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Growth Rate</span>
                      <span className={`${analysisResult.socialMetrics.communityGrowth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {analysisResult.socialMetrics.communityGrowth > 0 ? '+' : ''}{analysisResult.socialMetrics.communityGrowth}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="findings-card">
                  <div className="flex items-center space-x-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                    <h3 className="font-semibold text-white">Red Flags</h3>
                  </div>
                  <ul className="space-y-2">
                    {analysisResult.redFlags.map((flag: string, index: number) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start space-x-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="findings-card mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <h3 className="font-semibold text-white">Positive Signals</h3>
                </div>
                <ul className="space-y-2">
                  {analysisResult.positiveSignals.map((signal: string, index: number) => (
                    <li key={index} className="text-gray-300 text-sm flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="results-actions">
                <button 
                  onClick={() => {
                    const reportData = JSON.stringify(analysisResult, null, 2);
                    const blob = new Blob([reportData], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `social-analysis-${Date.now()}.json`;
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
                    setProjectName('');
                  }}
                  className="scan-another-button"
                >
                  Analyze Another Project
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
