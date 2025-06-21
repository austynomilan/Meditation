// cache.ts
import * as SecureStore from 'expo-secure-store';
import type { TokenCache } from '@clerk/clerk-expo';

export const tokenCache: TokenCache = {
  async getToken(key: string): Promise<string | null> {
    return SecureStore.getItemAsync(key) ?? null;
  },
  async saveToken(key: string, value: string): Promise<void> {
    SecureStore.setItemAsync(key, value);
  },
};
