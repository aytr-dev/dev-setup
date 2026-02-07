#!/usr/bin/env node

/**
 * Setup Website project
 * Idempotent - safe to run multiple times
 */

const fs = require('fs');
const path = require('path');

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

const WEB_DIR = path.join(__dirname, '../../web');

function main() {
    log('Setting up Website project...', 'cyan');
    
    // Check if web directory exists
    if (!fs.existsSync(WEB_DIR)) {
        log('⚠️  Web directory not found. Creating...', 'yellow');
        fs.mkdirSync(WEB_DIR, { recursive: true });
    }
    
    // Check if package.json exists
    const packageJsonPath = path.join(WEB_DIR, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
        log('⚠️  Website not initialized. Run: npm create next-app@latest . --typescript --tailwind --app', 'yellow');
        log('   Or use your preferred framework.', 'yellow');
    } else {
        log('✅ Website project found', 'green');
        
        // Check if node_modules exists
        const nodeModulesPath = path.join(WEB_DIR, 'node_modules');
        if (fs.existsSync(nodeModulesPath)) {
            log('✅ Website dependencies already installed', 'green');
        } else {
            log('📦 Website dependencies will be installed by install-deps.js', 'cyan');
        }
    }
    
    log('✅ Website setup complete', 'green');
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { main };
