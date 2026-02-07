#!/usr/bin/env node

/**
 * Setup VS Code Extension (plugin)
 * Idempotent - safe to run multiple times
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

const PLUGIN_DIR = path.join(__dirname, '../../plugin');

function main() {
    log('Setting up VS Code Extension...', 'cyan');
    
    // Check if plugin directory exists
    if (!fs.existsSync(PLUGIN_DIR)) {
        log('⚠️  Plugin directory not found. Skipping plugin setup.', 'yellow');
        return;
    }
    
    // Check if package.json exists
    const packageJsonPath = path.join(PLUGIN_DIR, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
        log('⚠️  package.json not found in plugin directory.', 'yellow');
        return;
    }
    
    // Check if node_modules exists (indicates dependencies are installed)
    const nodeModulesPath = path.join(PLUGIN_DIR, 'node_modules');
    if (fs.existsSync(nodeModulesPath)) {
        log('✅ Plugin dependencies already installed', 'green');
    } else {
        log('📦 Plugin dependencies will be installed by install-deps.js', 'cyan');
    }
    
    // Verify TypeScript config exists
    const tsConfigPath = path.join(PLUGIN_DIR, 'tsconfig.json');
    if (fs.existsSync(tsConfigPath)) {
        log('✅ TypeScript configuration found', 'green');
    } else {
        log('⚠️  tsconfig.json not found', 'yellow');
    }
    
    log('✅ Plugin setup complete', 'green');
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { main };
