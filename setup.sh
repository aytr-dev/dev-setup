#!/bin/bash
# Minimal bootstrap script - checks Node.js and runs setup.js
# All logic is in setup.js (this folder)

set -e

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 20+ from https://nodejs.org/"
    exit 1
fi

# Run Node.js setup script
node setup.js
