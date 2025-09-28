@echo off
echo 🚀 Starting Smart Product Comparator...

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

echo 📦 Installing dependencies...

REM Install backend dependencies
cd server
if not exist "node_modules\" (
    echo Installing backend dependencies...
    npm install
)

REM Install frontend dependencies
cd ..\client
if not exist "node_modules\" (
    echo Installing frontend dependencies...
    npm install
)

echo ✅ Dependencies installed!

REM Create .env file if it doesn't exist
cd ..\server
if not exist ".env" (
    echo Creating .env file...
    copy .env.example .env
)

echo 🔥 Starting servers...

REM Start backend in background
echo Starting backend server on port 5000...
start /b npm run dev

REM Wait a moment for backend to start
timeout /t 3 >nul

REM Start frontend
cd ..\client
echo Starting frontend server on port 3000...
echo 📱 Open your browser and go to: http://localhost:3000
echo 🔍 Try searching for: iPhone 15, Samsung Galaxy S24, or laptop
echo.
echo Press Ctrl+C to stop servers

npm run dev

pause