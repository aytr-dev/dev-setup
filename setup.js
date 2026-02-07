#!/usr/bin/env node

/**
 * Aytr Development Setup Script
 * Cross-platform setup script that works on Mac, Windows, and Linux
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SCRIPTS_DIR = path.join(__dirname, 'scripts');

// Colors for terminal output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkNode() {
    try {
        const version = execSync('node --version', { encoding: 'utf-8' }).trim();
        const majorVersion = parseInt(version.replace('v', '').split('.')[0]);
        
        if (majorVersion < 20) {
            log(`⚠️  Warning: Node.js version ${version} detected. Recommended: 20+`, 'yellow');
        } else {
            log(`✅ Node.js found: ${version}`, 'green');
        }
        return true;
    } catch (error) {
        log('❌ Node.js not found. Please install Node.js 20+ from https://nodejs.org/', 'red');
        process.exit(1);
    }
}

function runScript(scriptName) {
    const scriptPath = path.join(SCRIPTS_DIR, scriptName);
    
    if (!fs.existsSync(scriptPath)) {
        log(`⚠️  Script not found: ${scriptName}`, 'yellow');
        return false;
    }
    
    try {
        log(`\n📦 Running ${scriptName}...`, 'cyan');
        execSync(`node "${scriptPath}"`, { 
            stdio: 'inherit',
            cwd: __dirname 
        });
        log(`✅ ${scriptName} completed`, 'green');
        return true;
    } catch (error) {
        log(`❌ ${scriptName} failed`, 'red');
        return false;
    }
}

function main() {
    log('\n🌌 Aytr Development Setup', 'bright');
    log('='.repeat(50), 'cyan');
    
    // Check Node.js
    log('\n🔍 Checking prerequisites...', 'cyan');
    checkNode();
    
    // Check npm
    try {
        const npmVersion = execSync('npm --version', { encoding: 'utf-8' }).trim();
        log(`✅ npm found: ${npmVersion}`, 'green');
    } catch (error) {
        log('❌ npm not found. Please install npm.', 'red');
        process.exit(1);
    }
    
    // Run init script
    log('\n🚀 Starting setup process...', 'cyan');
    const success = runScript('init.js');
    
    if (success) {
        log('\n' + '='.repeat(50), 'cyan');
        log('✅ Setup completed successfully!', 'green');
        log('\nNext steps:', 'bright');
        log('  cd ../plugin && npm run compile  # Build extension', 'cyan');
        log('  cd ../web && npm run dev         # Start website', 'cyan');
        log('', 'reset');
    } else {
        log('\n❌ Setup encountered errors. Please check the output above.', 'red');
        process.exit(1);
    }
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { main, checkNode, runScript };
