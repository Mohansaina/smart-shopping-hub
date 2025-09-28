#!/bin/bash

# Smart Product Comparator - Local Development Script

echo "🚀 Starting Smart Product Comparator..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."

# Install backend dependencies
cd server
if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
fi

# Install frontend dependencies
cd ../client
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
fi

echo "✅ Dependencies installed!"

# Create .env file if it doesn't exist
cd ../server
if [ ! -f ".env" ]; then
    echo "Creating .env file..."
    cp .env.example .env
fi

echo "🔥 Starting servers..."

# Start backend in background
echo "Starting backend server on port 5000..."
npm run dev &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend
cd ../client
echo "Starting frontend server on port 3000..."
echo "📱 Open your browser and go to: http://localhost:3000"
echo "🔍 Try searching for: iPhone 15, Samsung Galaxy S24, or laptop"
echo ""
echo "Press Ctrl+C to stop both servers"

npm run dev

# Cleanup: kill backend when frontend stops
kill $BACKEND_PID