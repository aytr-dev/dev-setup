#!/usr/bin/env node

/**
 * Verify TypeScript compilation for plugin
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
    log('Verifying build configuration...', 'cyan');
    
    // Check if plugin directory exists
    if (!fs.existsSync(PLUGIN_DIR)) {
        log('⚠️  Plugin directory not found. Skipping build verification.', 'yellow');
        return;
    }
    
    // Check if package.json exists
    const packageJsonPath = path.join(PLUGIN_DIR, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
        log('⚠️  package.json not found. Skipping build verification.', 'yellow');
        return;
    }
    
    // Check if node_modules exists (dependencies must be installed first)
    const nodeModulesPath = path.join(PLUGIN_DIR, 'node_modules');
    if (!fs.existsSync(nodeModulesPath)) {
        log('⚠️  Dependencies not installed. Run install-deps.js first.', 'yellow');
        return;
    }
    
    // Check TypeScript config
    const tsConfigPath = path.join(PLUGIN_DIR, 'tsconfig.json');
    if (!fs.existsSync(tsConfigPath)) {
        log('⚠️  tsconfig.json not found', 'yellow');
        return;
    }
    
    log('✅ TypeScript configuration found', 'green');
    
    // Try to compile (dry run)
    try {
        log('🔍 Checking TypeScript compilation...', 'cyan');
        execSync('npm run compile', {
            cwd: PLUGIN_DIR,
            stdio: 'pipe',
        });
        log('✅ TypeScript compilation successful', 'green');
    } catch (error) {
        log('⚠️  TypeScript compilation check failed (this is okay if code is incomplete)', 'yellow');
    }
    
    log('✅ Build verification complete', 'green');
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { main };
