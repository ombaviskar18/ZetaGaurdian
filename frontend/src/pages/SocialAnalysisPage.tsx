import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, AlertTriangle, CheckCircle, Download, Wallet, Twitter, MessageCircle, Hash, Search, TrendingUp } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import './SocialAnalysisPage.css';

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
    { id: 'discord', name: 'Discord', icon: Hash },
    { id: 'google', name: 'Google Trends', icon: TrendingUp }
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
        overallSentiment: Math.random() > 0.6 ? 'Positive' : Math.random() > 0.3 ? 'Neutral' : 'Negative',
        credibilityScore: Math.floor(Math.random() * 100),
        socialMetrics: {
          followers: Math.floor(Math.random() * 500000) + 50000,
          engagement: Math.floor(Math.random() * 15) + 2,
          botPercentage: Math.floor(Math.random() * 40),
          communityGrowth: Math.floor(Math.random() * 300) - 100,
          mentionVolume: Math.floor(Math.random() * 10000) + 1000,
          influencerEndorsements: Math.floor(Math.random() * 20)
        },
        platformData: {
          twitter: { followers: 125000, engagement: 4.2, sentiment: 'Positive' },
          telegram: { members: 35000, activity: 'High', sentiment: 'Neutral' },
          discord: { members: 15000, activity: 'Medium', sentiment: 'Positive' },
          google: { searchVolume: 85000, trend: 'Rising' }
        },
        redFlags: [
          'Sudden follower spike detected in last 48 hours',
          'High bot engagement ratio (>25%)',
          'Pump-and-dump keywords in recent posts',
          'Coordinated posting patterns detected',
          'Fake influencer endorsements identified'
        ],
        positiveSignals: [
          'Consistent organic community engagement',
          'Verified team members with clean history',
          'Regular development updates and transparency',
          'Strong community moderation policies',
          'Authentic user-generated content'
        ],
        riskScore: Math.floor(Math.random() * 100),
        timestamp: new Date().toISOString()
      };
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 5000);
  };

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  return (
    <div className="social-analysis-page">
      {/* Hero Section */}
      <section className="social-hero">
        <div className="social-hero-container">
          <div className="social-hero-grid">
            <div className="social-hero-content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="social-hero-badge"
              >
                <Eye className="hero-badge-icon" />
                <span>Cross-Platform Social Forensics</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="social-hero-title"
              >
                Social &
                <span className="title-line-2"> Community Forensics</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="social-hero-description"
              >
                Advanced sentiment analysis and community forensics across Twitter, Telegram, Discord, and Google Trends to detect pump-and-dump schemes, fake engagement, and social manipulation tactics.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="social-features-grid"
              >
                <div className="social-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8" y="16" width="48" height="32" rx="6" stroke="currentColor" strokeWidth="2" fill="rgba(59, 130, 246, 0.1)"/>
                      <circle cx="18" cy="26" r="4" fill="currentColor"/>
                      <path d="M26 24H46M26 28H42M26 32H48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 12L20 8L28 12L36 8L44 12L52 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="20" cy="8" r="2" fill="rgba(59, 130, 246, 0.8)"/>
                      <circle cx="36" cy="8" r="2" fill="rgba(59, 130, 246, 0.6)"/>
                      <circle cx="52" cy="8" r="2" fill="rgba(59, 130, 246, 0.4)"/>
                      <path d="M12 52L20 56L28 52L36 56L44 52L52 56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>Twitter/X Analysis</span>
                </div>
                <div className="social-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" fill="rgba(59, 130, 246, 0.1)"/>
                      <path d="M20 28L32 20L44 28L32 36L20 28Z" fill="currentColor"/>
                      <circle cx="24" cy="40" r="3" fill="rgba(59, 130, 246, 0.8)"/>
                      <circle cx="32" cy="44" r="2" fill="rgba(59, 130, 246, 0.6)"/>
                      <circle cx="40" cy="40" r="3" fill="rgba(59, 130, 246, 0.8)"/>
                      <path d="M24 37L32 32L40 37" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2"/>
                      <circle cx="32" cy="12" r="2" fill="currentColor"/>
                      <path d="M30 10L32 8L34 10" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span>Telegram Groups</span>
                </div>
                <div className="social-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="12" y="16" width="40" height="32" rx="8" stroke="currentColor" strokeWidth="2" fill="rgba(59, 130, 246, 0.1)"/>
                      <circle cx="24" cy="28" r="4" fill="currentColor"/>
                      <circle cx="40" cy="28" r="4" fill="rgba(59, 130, 246, 0.7)"/>
                      <path d="M16 36C16 34 18 32 24 32C30 32 32 34 32 36" stroke="currentColor" strokeWidth="2"/>
                      <path d="M32 36C32 34 34 32 40 32C46 32 48 34 48 36" stroke="currentColor" strokeWidth="2"/>
                      <rect x="20" y="40" width="24" height="4" rx="2" fill="rgba(59, 130, 246, 0.5)"/>
                      <circle cx="32" cy="8" r="3" fill="currentColor"/>
                      <path d="M28 6L32 4L36 6" stroke="currentColor" strokeWidth="2"/>
                      <path d="M18 52L22 56L26 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M38 52L42 56L46 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>Discord Communities</span>
                </div>
                <div className="social-feature-item">
                  <div className="feature-icon">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="rgba(59, 130, 246, 0.05)"/>
                      <path d="M16 32L24 20L32 36L40 16L48 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="24" cy="20" r="3" fill="rgba(59, 130, 246, 0.8)"/>
                      <circle cx="32" cy="36" r="3" fill="currentColor"/>
                      <circle cx="40" cy="16" r="3" fill="rgba(59, 130, 246, 0.6)"/>
                      <circle cx="48" cy="28" r="3" fill="rgba(59, 130, 246, 0.7)"/>
                      <text x="32" y="52" textAnchor="middle" fontSize="8" fill="currentColor">TRENDS</text>
                      <path d="M8 48L16 52L24 48L32 52L40 48L48 52L56 48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3"/>
                    </svg>
                  </div>
                  <span>Google Trends</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="social-hero-video-container"
            >
              <div className="social-video-card">
                <video
                  className="social-hero-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/logos/social.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Analysis Section */}
      <section className="social-main">
        <div className="social-container">
          {!analysisResult ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="social-scanner"
            >
              <div className="scanner-card">
                <div className="scanner-header">
                  <h2 className="scanner-title">
                    Social
                    <span className="title-line-2"> Forensics Scanner</span>
                  </h2>
                  <p className="scanner-subtitle">
                    Enter a project name and select platforms for comprehensive cross-platform social analysis
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
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        placeholder="Enter project name or token symbol..."
                        className="contract-input-field"
                      />
                      <Search className="input-search-icon" />
                    </div>
                  </div>

                  <div className="platform-selection">
                    <h3 className="platform-title">Select Platforms to Analyze</h3>
                    <div className="platforms-grid">
                      {platforms.map((platform) => (
                        <div
                          key={platform.id}
                          onClick={() => togglePlatform(platform.id)}
                          className={`platform-card ${
                            selectedPlatforms.includes(platform.id) ? 'platform-active' : ''
                          }`}
                        >
                          <platform.icon className="platform-icon" />
                          <span className="platform-name">{platform.name}</span>
                          <div className="platform-check">
                            {selectedPlatforms.includes(platform.id) && (
                              <CheckCircle className="check-icon" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="scan-button-container">
                    <button
                      onClick={handleAnalysis}
                      disabled={isAnalyzing || !projectName || selectedPlatforms.length === 0}
                      className={`main-scan-button ${isAnalyzing ? 'scanning' : ''}`}
                    >
                      {isAnalyzing ? (
                        <>
                          <div className="scan-spinner"></div>
                          <span>Analyzing Social Signals...</span>
                        </>
                      ) : (
                        <>
                          <Eye className="scan-icon" />
                          <span>Start Social Analysis</span>
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
                        Connect your wallet and pay a small testnet fee (≈$0.01) to perform social forensics analysis.
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="analysis-info">
                  <h3 className="info-title">Comprehensive Social Forensics Includes:</h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Cross-Platform Sentiment Analysis</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Bot & Fake Account Detection</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Community Growth Pattern Analysis</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Engagement Quality Assessment</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Influencer Endorsement Verification</span>
                    </div>
                    <div className="info-item">
                      <CheckCircle className="info-icon" />
                      <span>Pump-and-Dump Pattern Detection</span>
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
              className="social-results"
            >
              <div className="results-header">
                <div className="results-title-section">
                  <h2 className="results-title">Social Forensics Analysis Complete</h2>
                  <p className="results-subtitle">Project: {analysisResult.project}</p>
                  <p className="results-timestamp">
                    Analysis completed on {new Date(analysisResult.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="results-content">
                {/* Credibility Score Section */}
                <div className="credibility-score-section">
                  <div className="credibility-meter">
                    <div className="credibility-circle">
                      <svg className="credibility-progress" viewBox="0 0 100 100">
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
                          stroke={analysisResult.credibilityScore <= 30 ? '#ef4444' : analysisResult.credibilityScore <= 60 ? '#f59e0b' : analysisResult.credibilityScore <= 80 ? '#10b981' : '#3b82f6'}
                          strokeWidth="8"
                          strokeDasharray={`${analysisResult.credibilityScore * 2.83} 283`}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="credibility-score-content">
                        <div className="credibility-number">{analysisResult.credibilityScore}</div>
                        <div className="credibility-label">Credibility</div>
                      </div>
                    </div>
                  </div>
                  <div className="sentiment-level">
                    <span className="sentiment-text">{analysisResult.overallSentiment} Sentiment</span>
                  </div>
                </div>

                {/* Social Metrics */}
                <div className="social-metrics">
                  <h3 className="section-title">Cross-Platform Social Metrics</h3>
                  <div className="metrics-grid">
                    <div className="metric-card">
                      <div className="metric-value">{analysisResult.socialMetrics.followers.toLocaleString()}</div>
                      <div className="metric-label">Total Followers</div>
                    </div>
                    <div className="metric-card">
                      <div className={`metric-value ${analysisResult.socialMetrics.engagement > 5 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {analysisResult.socialMetrics.engagement}%
                      </div>
                      <div className="metric-label">Engagement Rate</div>
                    </div>
                    <div className="metric-card">
                      <div className={`metric-value ${analysisResult.socialMetrics.botPercentage > 25 ? 'text-red-400' : 'text-green-400'}`}>
                        {analysisResult.socialMetrics.botPercentage}%
                      </div>
                      <div className="metric-label">Bot Percentage</div>
                    </div>
                    <div className="metric-card">
                      <div className={`metric-value ${analysisResult.socialMetrics.communityGrowth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {analysisResult.socialMetrics.communityGrowth > 0 ? '+' : ''}{analysisResult.socialMetrics.communityGrowth}%
                      </div>
                      <div className="metric-label">Growth Rate</div>
                    </div>
                  </div>
                </div>

                {/* Platform Analysis */}
                <div className="platform-analysis">
                  <h3 className="section-title">Platform-Specific Analysis</h3>
                  <div className="platform-results-grid">
                    {Object.entries(analysisResult.platformData).map(([platform, data]: [string, any]) => (
                      <div key={platform} className="platform-result-card">
                        <div className="platform-result-header">
                          <div className="platform-result-icon">
                            {platform === 'twitter' && <Twitter />}
                            {platform === 'telegram' && <MessageCircle />}
                            {platform === 'discord' && <Hash />}
                            {platform === 'google' && <TrendingUp />}
                          </div>
                          <h4 className="platform-result-name">{platform.charAt(0).toUpperCase() + platform.slice(1)}</h4>
                        </div>
                        <div className="platform-result-data">
                          {Object.entries(data).map(([key, value]) => (
                            <div key={key} className="platform-data-item">
                              <span className="data-key">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                              <span className="data-value">{String(value)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Findings Section */}
                <div className="findings-section">
                  <div className="findings-grid">
                    <div className="findings-card">
                      <div className="findings-header">
                        <AlertTriangle className="findings-icon text-red-400" />
                        <h3 className="findings-title">Red Flags Detected</h3>
                        <span className="findings-count">{analysisResult.redFlags.length}</span>
                      </div>
                      <div className="findings-list">
                        {analysisResult.redFlags.map((flag: string, index: number) => (
                          <div key={index} className="finding-item">
                            <span className="finding-bullet red"></span>
                            <span className="finding-text">{flag}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="findings-card">
                      <div className="findings-header">
                        <CheckCircle className="findings-icon text-green-400" />
                        <h3 className="findings-title">Positive Signals</h3>
                        <span className="findings-count">{analysisResult.positiveSignals.length}</span>
                      </div>
                      <div className="findings-list">
                        {analysisResult.positiveSignals.map((signal: string, index: number) => (
                          <div key={index} className="finding-item">
                            <span className="finding-bullet green"></span>
                            <span className="finding-text">{signal}</span>
                          </div>
                        ))}
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
                        reportType: 'Social Forensics Analysis Report',
                        platform: 'ZetaGuardian'
                      };
                      const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `zetaguardian-social-forensics-${Date.now()}.json`;
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
                      setProjectName('');
                      setShowWalletConnect(false);
                    }}
                    className="scan-another-button"
                  >
                    <Eye className="action-icon" />
                    <span>Analyze Another Project</span>
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
