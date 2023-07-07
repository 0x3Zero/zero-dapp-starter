import React, { createContext, useContext } from 'react'
import { getNftsByWalletAddress } from 'services/nft'

interface ApiContextProps {
  getNftsByWalletAddress: typeof getNftsByWalletAddress;
}

interface ApiProviderProps {
  children: React.ReactNode;
}

export const ApiContext = createContext<ApiContextProps | undefined>({ getNftsByWalletAddress });

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within a ApiProvider');
  }
  return context;
};

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  return (
    <ApiContext.Provider value={{ getNftsByWalletAddress }}>
      {children}
    </ApiContext.Provider>
  )
};