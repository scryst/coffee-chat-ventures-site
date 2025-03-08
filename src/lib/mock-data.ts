import { CoffeeBotData } from './types';

export const mockCoffeeBotData: CoffeeBotData = {
  version: "1.2.0",
  serverCount: 42,
  status: "Online",
  lastUpdated: new Date().toISOString(),
  features: [
    "Coffee Chat Scheduling",
    "Community Welcome Messages",
    "Event Management",
    "Role Assignment",
    "Conversation Starters",
    "Custom Commands"
  ],
  uptime: "99.9%",
  commandCount: 24
};
