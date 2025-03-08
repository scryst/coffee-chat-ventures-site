import { NextResponse } from 'next/server';
import { mockCoffeeBotData } from '@/lib/mock-data';

// Discord API endpoints
const DISCORD_API_BASE = "https://discord.com/api/v10";
// Discord bot token - in production, use environment variables
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
// Discord server ID (Coffee Chat server)
const DISCORD_SERVER_ID = process.env.DISCORD_SERVER_ID || "1346747859189633074";

export async function GET() {
  try {
    console.log("Fetching Coffee Bot data...");

    // Add timeout handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

    // Check if we have a bot token
    if (!DISCORD_BOT_TOKEN) {
      console.log("No Discord bot token found, using mock data");
      return NextResponse.json(mockCoffeeBotData);
    }

    // First, fetch bot application info
    const botInfoResponse = await fetch(`${DISCORD_API_BASE}/oauth2/applications/@me`, {
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });

    if (!botInfoResponse.ok) {
      throw new Error(`Failed to fetch bot info: ${botInfoResponse.status}`);
    }

    const botInfo = await botInfoResponse.json();

    // Fetch the guilds (servers) the bot is in
    const guildsResponse = await fetch(`${DISCORD_API_BASE}/users/@me/guilds`, {
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });

    if (!guildsResponse.ok) {
      throw new Error(`Failed to fetch guilds: ${guildsResponse.status}`);
    }

    const guilds = await guildsResponse.json();

    // Format the data according to our expected structure
    const formattedData = {
      version: "1.2.0", // You can store this in your bot's code or database
      serverCount: guilds.length,
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
      uptime: "99.9%", // You can calculate this based on your bot's actual uptime
      commandCount: 24, // You can get this from your bot's command registry
      name: botInfo.name,
      id: botInfo.id,
      avatar: botInfo.avatar ? `https://cdn.discordapp.com/avatars/${botInfo.id}/${botInfo.avatar}.png` : null,
    };

    clearTimeout(timeoutId);
    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("Error in Coffee Bot API:", error);

    // Return mock data in case of error
    console.log("Error occurred, falling back to mock data");
    return NextResponse.json(
      mockCoffeeBotData,
      { status: 200 }
    );
  }
}
