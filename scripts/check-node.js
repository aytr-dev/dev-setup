#!/usr/bin/env node

/**
 * Check Node.js installation
 * Idempotent - safe to run multiple times
 */

const { execSync } = require('child_process');

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function main() {
    try {
        const version = execSync('node --version', { encoding: 'utf-8' }).trim();
        const majorVersion = parseInt(version.replace('v', '').split('.')[0]);
        
        if (majorVersion >= 20) {
            log(`✅ Node.js ${version} is installed (required: 20+)`, 'green');
        } else {
            log(`⚠️  Node.js ${version} detected. Recommended: 20+`, 'yellow');
        }
        
        // Check npm
        try {
            const npmVersion = execSync('npm --version', { encoding: 'utf-8' }).trim();
            log(`✅ npm ${npmVersion} is installed`, 'green');
        } catch (error) {
            log('❌ npm not found', 'red');
            process.exit(1);
        }
        
    } catch (error) {
        log('❌ Node.js not found. Please install Node.js 20+ from https://nodejs.org/', 'red');
        process.exit(1);
    }
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { main };
