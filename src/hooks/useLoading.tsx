import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Loading } from '../components';

const LoadingContext = createContext<{
  setLoading: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      {loading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const loadingContext = useContext(LoadingContext);
  if (!loadingContext) {
    throw new Error('No loadingContext found.');
  }

  return loadingContext;
}
