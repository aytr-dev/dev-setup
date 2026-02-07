@echo off
REM Minimal bootstrap script - checks Node.js and runs setup.js
REM All logic is in setup.js (this folder)

REM Check Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js not found. Please install Node.js 20+ from https://nodejs.org/
    exit /b 1
)

REM Run Node.js setup script
node setup.js
