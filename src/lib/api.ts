import { ApiResponse } from './types';
import { mockCoffeeBotData } from './mock-data';

// The URL for the Coffee Bot API
const COFFEE_BOT_API_URL = 'https://discord-to-site-api.onrender.com/api/coffee';

/**
 * Fetches data from the Coffee Bot API with retry mechanism
 */
export async function fetchCoffeeData(): Promise<ApiResponse> {
  let attempts = 0;
  const maxAttempts = 3;
  const retryDelay = 2000; // 2 seconds

  while (attempts < maxAttempts) {
    try {
      console.log(`Fetching Coffee Bot data... (Attempt ${attempts + 1}/${maxAttempts})`);
      
      // Create an AbortController to handle timeouts
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 second timeout
      
      const response = await fetch(COFFEE_BOT_API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        cache: 'no-store',
      });
      
      // Clear the timeout
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Coffee Bot data fetched successfully');
      
      return {
        data,
        error: null,
        isMockData: false
      };
    } catch (error) {
      attempts++;
      console.error(`Error fetching Coffee Bot data (Attempt ${attempts}/${maxAttempts}):`, error);
      
      // If we have more attempts to go, wait before retrying
      if (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      } else {
        console.log('All attempts failed, using mock data');
        // Return mock data after all attempts fail
        return {
          data: mockCoffeeBotData,
          error: error instanceof Error ? error.message : 'Unknown error occurred',
          isMockData: true
        };
      }
    }
  }
  
  // This should never be reached due to the return in the catch block above
  // but TypeScript requires a return statement
  return {
    data: mockCoffeeBotData,
    error: 'Maximum retry attempts reached',
    isMockData: true
  };
}
