#!/usr/bin/env node

/**
 * Install npm dependencies for all projects
 * Idempotent - safe to run multiple times
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { detectPackageManager } = require('./detect-package-manager');

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function installDependencies(dir, name) {
    const packageJsonPath = path.join(dir, 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
        log(`⚠️  ${name}: package.json not found, skipping`, 'yellow');
        return false;
    }
    
    const nodeModulesPath = path.join(dir, 'node_modules');
    
    if (fs.existsSync(nodeModulesPath)) {
        log(`✅ ${name}: Dependencies already installed`, 'green');
        return true;
    }
    
    // Detect package manager
    const pm = detectPackageManager(dir);
    log(`📦 ${name}: Installing dependencies with ${pm}...`, 'cyan');
    
    let installCommand;
    switch (pm) {
        case 'pnpm':
            installCommand = 'pnpm install';
            break;
        case 'yarn':
            installCommand = 'yarn install';
            break;
        case 'npm':
        default:
            installCommand = 'npm install';
            break;
    }
    
    try {
        execSync(installCommand, {
            cwd: dir,
            stdio: 'inherit',
        });
        log(`✅ ${name}: Dependencies installed successfully`, 'green');
        return true;
    } catch (error) {
        log(`❌ ${name}: Failed to install dependencies`, 'yellow');
        return false;
    }
}

function main() {
    log('Installing dependencies for all projects...', 'cyan');
    
    const PLUGIN_DIR = path.join(__dirname, '../../plugin');
    const WEB_DIR = path.join(__dirname, '../../web');
    
    let allSuccess = true;
    
    // Install plugin dependencies
    if (fs.existsSync(PLUGIN_DIR)) {
        if (!installDependencies(PLUGIN_DIR, 'Plugin')) {
            allSuccess = false;
        }
    } else {
        log('⚠️  Plugin directory not found', 'yellow');
    }
    
    // Install web dependencies
    if (fs.existsSync(WEB_DIR)) {
        const webPackageJson = path.join(WEB_DIR, 'package.json');
        if (fs.existsSync(webPackageJson)) {
            if (!installDependencies(WEB_DIR, 'Web')) {
                allSuccess = false;
            }
        } else {
            log('⚠️  Web: package.json not found (website not initialized)', 'yellow');
        }
    } else {
        log('⚠️  Web directory not found', 'yellow');
    }
    
    if (allSuccess) {
        log('✅ All dependencies installed successfully', 'green');
    } else {
        log('⚠️  Some dependencies had issues. Check output above.', 'yellow');
    }
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { main, installDependencies };
