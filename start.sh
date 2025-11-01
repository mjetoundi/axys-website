#!/bin/bash

# AXYS AUDIT Website - Startup Script
# This script handles the startup of the AXYS AUDIT website development server

echo "🚀 Starting AXYS AUDIT Website..."
echo "====================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js detected: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install npm."
    exit 1
fi

echo "✓ npm detected: v$(npm --version)"

# Navigate to script directory
cd "$(dirname "$0")"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    echo "✓ Dependencies installed successfully"
else
    echo "✓ Dependencies already installed"
fi

# Start the development server
echo ""
echo "🌐 Starting development server..."
echo "   Access the website at: http://localhost:5173"
echo "   Press Ctrl+C to stop the server"
echo ""

npm run dev