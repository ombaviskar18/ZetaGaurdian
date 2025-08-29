# 🛡️ ZetaGuardian - DeFi Security & Analysis Platform

A comprehensive blockchain security and social analysis platform built on ZetaChain, providing real-time contract analysis, social sentiment tracking, tokenomics insights, and automated monitoring for DeFi investors.

![ZetaGuardian](https://img.shields.io/badge/ZetaGuardian-DeFi%20Security-blue)
![ZetaChain](https://img.shields.io/badge/Built%20on-ZetaChain-purple)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)

## 🚀 Features

### 🔍 **Contract Analysis**
- **Smart Contract Security Audit**: Analyze contract bytecode for vulnerabilities
- **Risk Assessment**: Comprehensive risk scoring and security checks
- **ABI Analysis**: Detect suspicious functions (owner controls, blacklists, etc.)
- **AI-Powered Insights**: Get AI recommendations and security scores
- **Multi-Chain Support**: Ethereum, Base, Polygon, BSC, Avalanche

### 📊 **Social Analysis**
- **Real-time News Integration**: Google News API for latest crypto updates
- **Sentiment Analysis**: AI-powered sentiment scoring and trend analysis
- **SWOT Analysis**: Dynamic strengths, weaknesses, opportunities, threats
- **Social Media Trends**: Track social sentiment and community engagement
- **Telegram Bot Integration**: Automated news alerts via @Social_Alertbot

### 📈 **Tokenomics Analysis**
- **Market Data**: Real-time price, volume, market cap from CoinGecko
- **Supply Analysis**: Total supply, circulating supply, token distribution
- **Whale Tracking**: Monitor large holder movements and concentration
- **AI Insights**: Intelligent analysis of tokenomics metrics
- **Portfolio Analysis**: Wallet address analysis with asset breakdown

### ⚡ **Real-time Monitoring**
- **Live Token Tracking**: Monitor any token by symbol or address
- **Price Alerts**: Real-time price changes and market movements
- **AI Predictions**: Machine learning-based buy/sell recommendations
- **Market Metrics**: Volume, liquidity, holder count tracking
- **Chart Visualization**: Interactive charts for data analysis

### 🎨 **User Experience**
- **Modern UI/UX**: Beautiful, responsive design with dark theme
- **Print Reports**: Generate PDF reports for analysis results
- **Mobile Responsive**: Optimized for all device sizes
- **Real-time Updates**: Live data refresh and notifications
- **Interactive Charts**: Chart.js and Recharts integration

## 🏗️ Architecture

### **Frontend (React + Vite)**
```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Main application pages
│   ├── hooks/              # Custom React hooks
│   ├── context/            # React context providers
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
└── dist/                   # Build output
```

### **Backend (Serverless Functions)**
```
api/
├── index.js               # Main API handler
├── package.json           # API dependencies
└── endpoints/
    ├── /api/inspect       # Contract analysis
    ├── /api/social/insights # Social analysis
    ├── /api/token/supply  # Token data
    └── /api/health        # Health check
```

### **Smart Contracts (ZetaChain)**
```
contracts/
├── ContractAnalysis.sol   # Contract security analysis
├── SocialAnalysis.sol     # Social sentiment tracking
├── Tokenomics.sol         # Tokenomics analysis
└── Monitoring.sol         # Real-time monitoring
```

## 🛠️ Technology Stack

### **Frontend**
- **React 19** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Framer Motion** - Smooth animations
- **Chart.js & Recharts** - Data visualization
- **Ethers.js** - Blockchain interaction
- **Lucide React** - Icon library

### **Backend**
- **Node.js** - Server runtime
- **Express.js** - API framework
- **Vercel Functions** - Serverless deployment
- **Axios** - HTTP client
- **CORS** - Cross-origin support

### **Blockchain**
- **ZetaChain** - Cross-chain infrastructure
- **Solidity** - Smart contract language
- **Hardhat** - Development framework
- **Ethers.js** - Blockchain interaction

### **APIs & Services**
- **Google News API** - News aggregation
- **CoinGecko API** - Crypto market data
- **Gemini AI** - AI insights and analysis
- **Telegram Bot API** - Automated alerts

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+
- npm or yarn
- MetaMask wallet
- API keys (Google News, CoinGecko, Gemini)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hello
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd frontend && npm install
   cd ../api && npm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env file in root directory
   VITE_GOOGLE_NEWS=your_google_news_api_key
   VITE_TELE_TOKEN=your_telegram_bot_token
   GEMINI_API_KEY=your_gemini_api_key
   COINGECKO_API_KEY=your_coingecko_api_key
   ```

4. **Start Development**
   ```bash
   # Start frontend
   npm run dev --prefix frontend
   
   # Start backend (in another terminal)
   npm run server
   ```

## 🌐 Deployment

### **Vercel Deployment**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set **Root Directory** to `hello`
   - Configure environment variables
   - Deploy

### **Environment Variables (Vercel)**
```bash
VITE_GOOGLE_NEWS=your_google_news_api_key
VITE_TELE_TOKEN=your_telegram_bot_token
GEMINI_API_KEY=your_gemini_api_key
COINGECKO_API_KEY=your_coingecko_api_key
ALCHEMY_ETH_MAINNET_URL=your_alchemy_url
ETHERSCAN_API_KEY=your_etherscan_key
```

### **Smart Contract Deployment**
```bash
# Deploy to ZetaChain
npx hardhat compile
npx hardhat deploy --network zeta
```

## 📱 Usage

### **Contract Analysis**
1. Navigate to Contract Analysis page
2. Enter contract address or select chain
3. Click "Analyze Contract"
4. Review security score and recommendations
5. Download detailed report

### **Social Analysis**
1. Go to Social Analysis page
2. Enter token symbol or project name
3. Click "Start Social Analysis"
4. View sentiment, trends, and news
5. Join Telegram bot for alerts

### **Tokenomics Analysis**
1. Visit Tokenomics page
2. Enter token symbol or address
3. Analyze supply, distribution, metrics
4. View AI insights and recommendations
5. Check portfolio analysis

### **Real-time Monitoring**
1. Access Monitoring page
2. Enter token symbol or address
3. Monitor live metrics and charts
4. Get AI predictions and alerts
5. Track market movements

## 🔧 Configuration

### **API Keys Setup**

1. **Google News API**
   - Visit [Google Cloud Console](https://console.cloud.google.com)
   - Enable News API
   - Get API key

2. **CoinGecko API**
   - Visit [CoinGecko](https://www.coingecko.com/en/api)
   - Sign up for free API access
   - Get API key

3. **Gemini AI**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create API key

4. **Telegram Bot**
   - Message [@BotFather](https://t.me/botfather)
   - Create new bot
   - Get bot token

### **Smart Contract Configuration**
```bash
# Update contract addresses in frontend/src/utils/contracts.ts
# Update deployment scripts in scripts/
# Configure network settings in hardhat.config.ts
```

## 📊 API Endpoints

### **Contract Analysis**
- `GET /api/inspect?chain=ethereum&address=0x...`
- Returns: Security analysis, risk score, recommendations

### **Social Insights**
- `GET /api/social/insights?project=ethereum`
- Returns: Sentiment analysis, news, trends

### **Token Data**
- `GET /api/token/total-supply?symbol=eth`
- Returns: Token supply, decimals, market data

### **Health Check**
- `GET /api/health`
- Returns: API status

## 🔒 Security Features

- **Smart Contract Auditing**: Automated vulnerability detection
- **Risk Scoring**: Comprehensive risk assessment
- **Real-time Monitoring**: Live threat detection
- **AI Analysis**: Intelligent security insights
- **Multi-chain Support**: Cross-chain security analysis

## 🎯 Key Benefits

### **For Investors**
- **Risk Assessment**: Evaluate investment risks before investing
- **Real-time Monitoring**: Track portfolio performance
- **Market Insights**: AI-powered market analysis
- **Social Sentiment**: Community sentiment tracking

### **For Developers**
- **Contract Security**: Audit smart contracts
- **Cross-chain Support**: Multi-chain analysis
- **API Access**: Programmatic access to data
- **Custom Integrations**: Extensible architecture

### **For Analysts**
- **Comprehensive Data**: Multiple data sources
- **AI Insights**: Automated analysis
- **Report Generation**: Professional reports
- **Real-time Updates**: Live data feeds

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the code comments and inline docs
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Join community discussions
- **Telegram**: [@Social_Alertbot](https://t.me/Social_Alertbot)

## 🚀 Roadmap

- [ ] **Advanced AI Models**: Enhanced prediction algorithms
- [ ] **More Chains**: Additional blockchain support
- [ ] **Mobile App**: Native mobile application
- [ ] **API Marketplace**: Third-party integrations
- [ ] **Institutional Features**: Enterprise-grade tools
- [ ] **DeFi Integration**: Direct DeFi protocol analysis

---

**Built with ❤️ on ZetaChain**

*ZetaGuardian - Your DeFi Security Companion*