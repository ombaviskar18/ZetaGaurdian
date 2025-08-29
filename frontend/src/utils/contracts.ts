import { ethers } from 'ethers';

// Contract addresses from deployment
export const CONTRACT_ADDRESSES = {
  ContractAnalysis: "0xdb5fC412a5515033265Dc9e8d383f9C2b551c747",
  Tokenomics: "0xdAeB7bAc9606598f14F4382Fc3E95278ed2317db",
  SocialAnalysis: "0x74BAd0e70daaD1D12Fd97170aE6D65bDaE77a982",
  Monitoring: "0x0CeA3f0aD00C20F1824373635474c4d72a5E6B82",
  Gateway: "0x6c533f7fe93fae114d0954697069df33c9b74fd7"
};

// Network configuration
export const NETWORK_CONFIG = {
  name: "ZetaChain Athens 3",
  rpcUrl: "https://zetachain-athens-evm.blockpi.network/v1/rpc/public",
  chainId: 7001,
  currency: "aZETA",
  explorer: "https://athens3.zetascan.io"
};

// Contract ABIs (simplified for the main functions)
export const CONTRACT_ABI = [
  // Request analysis with payment
  "function requestContractAnalysis(string memory contractAddress) external payable",
  "function requestTokenomicsAnalysis(string memory tokenAddress) external payable",
  "function requestSocialAnalysis(string memory projectName) external payable",
  "function requestMonitoring(string memory targetAddress) external payable",
  

  
  // Get user requests
  "function getUserRequests(address user) external view returns (tuple(address user, string target, uint256 payment, bool completed, uint256 riskScore, string analysis, uint256 timestamp)[])",
  
  // Events
  "event ContractAnalysisRequested(address indexed user, string contractAddress, uint256 payment)",
  "event TokenomicsAnalysisRequested(address indexed user, string tokenAddress, uint256 payment)",
  "event SocialAnalysisRequested(address indexed user, string projectName, uint256 payment)",
  "event MonitoringRequested(address indexed user, string targetAddress, uint256 payment)",
  
  "event ContractAnalysisCompleted(address indexed user, string contractAddress, uint256 riskScore, string analysis)",
  "event TokenomicsAnalysisCompleted(address indexed user, string tokenAddress, uint256 riskScore, string analysis)",
  "event SocialAnalysisCompleted(address indexed user, string projectName, uint256 riskScore, string analysis)",
  "event MonitoringCompleted(address indexed user, string targetAddress, uint256 riskScore, string analysis)",
  
  "event PaymentReceived(address indexed user, uint256 amount)",
  "event AlertTriggered(address indexed user, string targetAddress, string alertType, string message)"
];

// Contract interaction utilities
export class ContractService {
  private provider: ethers.BrowserProvider | null = null;
  private signer: ethers.JsonRpcSigner | null = null;

  async connect() {
    if (typeof window.ethereum !== 'undefined') {
      this.provider = new ethers.BrowserProvider(window.ethereum);
      this.signer = await this.provider.getSigner();
      return true;
    }
    return false;
  }

  async requestContractAnalysis(contractAddress: string) {
    if (!this.signer) throw new Error("Wallet not connected");
    
    const contract = new ethers.Contract(
      CONTRACT_ADDRESSES.ContractAnalysis,
      CONTRACT_ABI,
      this.signer
    );

    const payment = ethers.parseEther("0.01");
    const tx = await contract.requestContractAnalysis(contractAddress, { value: payment });
    return await tx.wait();
  }

  async requestTokenomicsAnalysis(tokenAddress: string) {
    if (!this.signer) throw new Error("Wallet not connected");
    const contract = new ethers.Contract(
      CONTRACT_ADDRESSES.Tokenomics,
      CONTRACT_ABI,
      this.signer
    );

    const payment = ethers.parseEther("0.01");
    const tx = await contract.requestTokenomicsAnalysis(tokenAddress, { value: payment });
    return await tx.wait();
  }

  async requestSocialAnalysis(projectName: string) {
    if (!this.signer) throw new Error("Wallet not connected");
    
    const contract = new ethers.Contract(
      CONTRACT_ADDRESSES.SocialAnalysis,
      CONTRACT_ABI,
      this.signer
    );

    const payment = ethers.parseEther("0.01");
    const tx = await contract.requestSocialAnalysis(projectName, { value: payment });
    return await tx.wait();
  }

  async requestMonitoring(targetAddress: string) {
    if (!this.signer) throw new Error("Wallet not connected");
    
    const contract = new ethers.Contract(
      CONTRACT_ADDRESSES.Monitoring,
      CONTRACT_ABI,
      this.signer
    );

    const payment = ethers.parseEther("0.01");
    const tx = await contract.requestMonitoring(targetAddress, { value: payment });
    return await tx.wait();
  }

  async checkPaymentStatus(contractType: 'ContractAnalysis' | 'Tokenomics' | 'SocialAnalysis' | 'Monitoring', userAddress: string) {
    if (!this.provider) throw new Error("Provider not connected");
    
    const contract = new ethers.Contract(
      CONTRACT_ADDRESSES[contractType],
      CONTRACT_ABI,
      this.provider
    );

    return await contract.checkPaymentStatus(userAddress);
  }

  async getUserRequests(contractType: 'ContractAnalysis' | 'Tokenomics' | 'SocialAnalysis' | 'Monitoring', userAddress: string) {
    if (!this.provider) throw new Error("Provider not connected");
    
    const contract = new ethers.Contract(
      CONTRACT_ADDRESSES[contractType],
      CONTRACT_ABI,
      this.provider
    );

    return await contract.getUserRequests(userAddress);
  }

  async getCurrentAddress(): Promise<string | null> {
    if (!this.signer) return null;
    return await this.signer.getAddress();
  }

  async getNetwork() {
    if (!this.provider) return null;
    return await this.provider.getNetwork();
  }
}

// Export singleton instance
export const contractService = new ContractService();

// Utility functions
export const formatEther = (wei: bigint) => ethers.formatEther(wei);
export const parseEther = (ether: string) => ethers.parseEther(ether);

// Network switching utility
export async function switchToZetaChain() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${NETWORK_CONFIG.chainId.toString(16)}` }],
      });
      return true;
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: `0x${NETWORK_CONFIG.chainId.toString(16)}`,
              chainName: NETWORK_CONFIG.name,
              nativeCurrency: {
                name: NETWORK_CONFIG.currency,
                symbol: NETWORK_CONFIG.currency,
                decimals: 18
              },
              rpcUrls: [NETWORK_CONFIG.rpcUrl],
              blockExplorerUrls: [NETWORK_CONFIG.explorer]
            }],
          });
          return true;
        } catch (addError) {
          console.error('Failed to add ZetaChain to MetaMask:', addError);
          return false;
        }
      }
      return false;
    }
  }
  return false;
}
