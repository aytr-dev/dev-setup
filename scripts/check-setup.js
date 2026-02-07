#!/usr/bin/env node

/**
 * Check if dev-setup has been run
 * Called by preinstall scripts in plugin and web
 * Idempotent - safe to run multiple times
 */

const fs = require('fs');
const path = require('path');

const colors = {
    reset: '\x1b[0m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    red: '\x1b[31m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkSetup() {
    const currentDir = process.cwd();
    const projectName = path.basename(currentDir);
    
    // Check if we're in plugin or web
    if (projectName !== 'plugin' && projectName !== 'web') {
        return true; // Not in a project that needs setup check
    }
    
    const devSetupDir = path.join(currentDir, '..', 'dev-setup');
    
    // Check if dev-setup exists
    if (!fs.existsSync(devSetupDir)) {
        log('\n⚠️  dev-setup directory not found!', 'yellow');
        log('   Please ensure dev-setup is in the parent directory.', 'yellow');
        return false;
    }
    
    // Check if setup has been run (look for node_modules in dev-setup or a marker file)
    const devSetupNodeModules = path.join(devSetupDir, 'node_modules');
    const pluginNodeModules = path.join(currentDir, '..', 'plugin', 'node_modules');
    const webNodeModules = path.join(currentDir, '..', 'web', 'node_modules');
    
    // If neither plugin nor web has node_modules, setup probably hasn't been run
    const pluginHasDeps = fs.existsSync(pluginNodeModules);
    const webHasDeps = fs.existsSync(webNodeModules);
    
    if (!pluginHasDeps && !webHasDeps) {
        log('\n⚠️  Development setup has not been run!', 'yellow');
        log('', 'reset');
        log('   Before installing dependencies, please run:', 'cyan');
        log('', 'reset');
        log('   cd ../dev-setup', 'cyan');
        log('   ./setup.sh        # Mac/Linux', 'cyan');
        log('   setup.bat         # Windows', 'cyan');
        log('   make setup        # Mac/Linux', 'cyan');
        log('   node setup.js     # All platforms', 'cyan');
        log('', 'reset');
        log('   This will set up the development environment and install dependencies.', 'cyan');
        log('', 'reset');
        return false;
    }
    
    return true;
}

// Run if executed directly
if (require.main === module) {
    const success = checkSetup();
    if (!success) {
        process.exit(1);
    }
}

module.exports = { checkSetup };
