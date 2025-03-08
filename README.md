# Coffee Chat Ventures Site

A modern, responsive website for Coffee Chat Ventures, showcasing the Coffee Discord bot that helps facilitate professional networking and community connections through structured coffee chats.

## About

Coffee Chat Ventures is a platform centered around a Discord bot named "Coffee" that enhances community experiences by facilitating meaningful connections and conversations. The bot enables users to create and participate in structured coffee chats across different Discord servers, expanding networking opportunities for professionals. This website serves as the landing page and information hub for the Coffee bot and community.

## Features

- **Modern Design**: Clean, responsive design with a cozy café aesthetic using a coffee-themed color palette
- **Bot Integration**: Real-time connection to the Coffee Discord bot API
- **Feature Showcase**: Highlights the key features of the Coffee bot with detailed descriptions and visual icons
- **Command Documentation**: Lists available bot commands and their usage
- **Community Channels**: Comprehensive overview of all available community channels organized by category
- **Testimonials**: Showcases community feedback and success stories
- **Legal Pages**: Includes comprehensive Terms of Service and Privacy Policy
- **Responsive Layout**: Optimized for all device sizes from mobile to desktop
- **High-Quality Imagery**: Professional coffee-themed images throughout the site
- **Cross-Server Functionality**: Information about how the bot connects users across different Discord servers
- **Animated Components**: Custom animations that enhance user experience and engagement

## Recent Updates

- **Animated Components**: Replaced static placeholder images with engaging animations:
  - **CoffeeCup**: An animated coffee cup with rising steam
  - **ChatBubbles**: An animation demonstrating user interactions with the Coffee Chat Bot
  - **CommunityNetwork**: A network visualization representing community connections
  - **EventCard**: Dynamic event cards with category-specific animations
- **Local Image Storage**: All images are now stored locally in the `/public/images` and `/public/events` directories for improved reliability and faster loading
- **Consistent Button Styling**: Updated Discord button colors to match the site's coffee-themed color scheme
- **Fixed Image Display Issues**: Resolved issues with images not displaying properly on the home page and coffee bot page
- **Added Favicon**: Custom coffee cup favicon for better brand recognition in browser tabs
- **Simplified Contact Page**: Streamlined the contact page to focus on direct communication channels

## Tech Stack

- **Framework**: Next.js 14.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: React Icons for consistent visual elements
- **Image Optimization**: Next.js Image component for optimized loading
- **Animation**: Framer Motion for smooth, interactive animations
- **API**: Custom API endpoints to connect with the Discord bot
- **Deployment**: Configured for Vercel deployment

## Discord Bot Information

- **Application ID**: 1346747859189633074
- **Public Key**: 28a85824f5ec69afcf8edbb4452f4341cb7144990ba29f020525a5656a2bfd79
- **OAuth URL**: https://discord.com/oauth2/authorize?client_id=1346747859189633074&permissions=2147601408&scope=bot%20applications.commands
- **Community Server**: [Join our Discord community](https://discord.gg/KGE8BfruV4)
- **Required Permissions**: VIEW_CHANNEL, SEND_MESSAGES, EMBED_LINKS, ATTACH_FILES, READ_MESSAGE_HISTORY, USE_APPLICATION_COMMANDS

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/scryst/coffee-chat-ventures.git
   cd coffee-chat-ventures
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   DISCORD_BOT_TOKEN=your_discord_bot_token
   DISCORD_SERVER_ID=your_discord_server_id
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This site is configured to be deployed on Vercel with the domain coffeechatventures.com. The deployment process is automated through GitHub integration with Vercel.

## Project Structure

- `/src/app`: Next.js App Router pages
  - `/`: Home page with key sections about the community and bot
  - `/coffee`: Coffee Bot feature page with detailed information
  - `/channels`: Community channels showcase with searchable categories
  - `/events`: Upcoming community events page
  - `/contact`: Contact form and information
  - `/privacy-policy`: Privacy Policy page
  - `/terms-of-service`: Terms of Service page
- `/src/components`: Reusable React components
  - `Navbar.tsx`: Site navigation with mobile responsiveness
  - `Footer.tsx`: Site footer with social links and navigation
  - `Button.tsx`: Reusable button component with variants
  - `Card.tsx`: Card component for feature displays
  - `/animations`: Custom animated components
    - `CoffeeCup.tsx`: Animated coffee cup with steam
    - `ChatBubbles.tsx`: Interactive chat bubble animations
    - `CommunityNetwork.tsx`: Dynamic network visualization
    - `EventCard.tsx`: Animated event card with category-specific effects
- `/src/lib`: Utility functions, API clients, and types
  - `api.ts`: Functions for fetching data from Discord API
  - `types.ts`: TypeScript type definitions
- `/public`: Static assets and images
- `next.config.js`: Next.js configuration including image domains

## Key Pages

### Home Page
The landing page features sections on:
- Community introduction with call-to-action
- Discord channel categories
- Coffee Bot overview
- Testimonials from community members
- Join community CTA

### Coffee Bot Page
Detailed information about the Coffee Bot including:
- Feature list with icons and descriptions
- How it works step-by-step guide
- Technical specifications
- Add to Discord button

### Channels Page
Overview of all community channels with:
- Searchable interface
- Categorized channel listings
- Channel descriptions
- Join server button

### Legal Pages
Comprehensive legal documentation:
- **Privacy Policy**: Details how user data is collected, used, and protected
- **Terms of Service**: Outlines the rules and guidelines for using the Coffee Bot and website

## API Endpoints

- `/api/coffee`: Returns information about the Coffee bot, including version, server count, and features
- `/api/channels`: Returns information about community channels and categories
- `/api/events`: Returns upcoming community events

## Images and Assets

The site uses high-quality images from Unsplash that match the coffee chat and community theme. The Next.js configuration allows for image optimization from both local sources and external domains (Unsplash and Discord CDN).

## Future Development Plans

- User dashboard for managing coffee chat preferences
- Integration with calendar apps for scheduling
- Analytics dashboard for community managers
- Mobile app companion for the Discord bot

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created by [scryst](https://github.com/scryst)

## Contact & Social Media

- **Email**: coffeechatventures@gmail.com
- **X/Twitter**: [@CoffeeChatVent](https://twitter.com/CoffeeChatVent)
- **Instagram**: [@coffeechatventures](https://instagram.com/coffeechatventures)
- **Discord**: [Join our community](https://discord.gg/KGE8BfruV4)

## Acknowledgements

- Images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Deployed on [Vercel](https://vercel.com)
