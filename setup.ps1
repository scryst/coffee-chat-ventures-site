# Setup script for Coffee Chat Ventures Site

Write-Host "Setting up Coffee Chat Ventures Site..." -ForegroundColor Green

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# Create next-env.d.ts file
Write-Host "Creating TypeScript declaration file..." -ForegroundColor Yellow
$nextEnvContent = @"
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
"@

Set-Content -Path "next-env.d.ts" -Value $nextEnvContent

Write-Host "Setup complete!" -ForegroundColor Green
Write-Host "You can now run 'npm run dev' to start the development server." -ForegroundColor Cyan
