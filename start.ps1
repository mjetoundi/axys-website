# AXYS AUDIT Website - Startup Script
# This script handles the startup of the AXYS AUDIT website development server

Write-Host "🚀 Starting AXYS AUDIT Website..." -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js detected: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm --version
    Write-Host "✓ npm detected: v$npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm not found. Please install npm." -ForegroundColor Red
    exit 1
}

# Navigate to project directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

# Check if node_modules exists
if (!(Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "✓ Dependencies already installed" -ForegroundColor Green
}

# Start the development server
Write-Host "" -ForegroundColor White
Write-Host "🌐 Starting development server..." -ForegroundColor Cyan
Write-Host "   Access the website at: http://localhost:5173" -ForegroundColor White
Write-Host "   Press Ctrl+C to stop the server" -ForegroundColor White
Write-Host "" -ForegroundColor White

npm run dev