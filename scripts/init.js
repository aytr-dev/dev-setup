#!/usr/bin/env node

/**
 * Main initialization script
 * Runs all setup scripts in order
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

// List of scripts to run in order
const setupScripts = [
    'ensure-node-version.js',
    'check-node.js',
    'check-git.js',
    'setup-plugin.js',
    'setup-web.js',
    'install-deps.js',
    'verify-build.js',
];

function main() {
    log('\n📋 Running initialization scripts...', 'bright');
    
    let allSuccess = true;
    
    for (const script of setupScripts) {
        const scriptPath = path.join(__dirname, script);
        
        if (!fs.existsSync(scriptPath)) {
            log(`⚠️  Skipping ${script} (not found)`, 'yellow');
            continue;
        }
        
        try {
            log(`\n▶️  Running ${script}...`, 'cyan');
            execSync(`node "${scriptPath}"`, {
                stdio: 'inherit',
                cwd: __dirname,
            });
            log(`✅ ${script} completed`, 'green');
        } catch (error) {
            log(`❌ ${script} failed`, 'red');
            allSuccess = false;
        }
    }
    
    if (allSuccess) {
        log('\n✅ All initialization scripts completed successfully!', 'green');
    } else {
        log('\n⚠️  Some scripts had issues. Check output above.', 'yellow');
    }
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { main };
