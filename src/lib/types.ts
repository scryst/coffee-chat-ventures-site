// Coffee Bot API Types
export interface CoffeeBotData {
  version: string;
  serverCount: number;
  status: string;
  lastUpdated: string;
  features: string[];
  uptime: string;
  commandCount: number;
}

// Mock data type
export interface ApiResponse {
  data: CoffeeBotData | null;
  error: string | null;
  isMockData: boolean;
}
