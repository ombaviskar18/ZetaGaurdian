import { ConnectedContent } from '../ConnectedContent';
import { SUPPORTED_CHAINS } from '../constants/chains';
import { DisconnectedContent } from '../DisconnectedContent';
import { useWallet } from '../hooks/useWallet';
import './SendMessagePage.css';

export function SendMessagePage() {
  const { account, selectedProvider, decimalChainId } = useWallet();

  const supportedChain = SUPPORTED_CHAINS.find(
    (chain) => chain.chainId === decimalChainId
  );

  return (
    <div className="send-message-page">
      <div className="send-message-header">
        <div className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Cross-Chain Messaging
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Send messages across different blockchains using ZetaChain's Universal Smart Contracts
          </p>
        </div>
      </div>

      <div className="send-message-content">
        {!account || !selectedProvider ? (
          <DisconnectedContent />
        ) : (
          <ConnectedContent
            selectedProvider={selectedProvider}
            supportedChain={supportedChain}
          />
        )}
      </div>
    </div>
  );
}
