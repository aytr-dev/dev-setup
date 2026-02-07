#!/usr/bin/env node

/**
 * Check Git installation
 * Idempotent - safe to run multiple times
 */

const { execSync } = require('child_process');

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function main() {
    try {
        const version = execSync('git --version', { encoding: 'utf-8' }).trim();
        log(`✅ ${version}`, 'green');
    } catch (error) {
        log('⚠️  Git not found. Optional but recommended for version control.', 'yellow');
    }
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { main };
