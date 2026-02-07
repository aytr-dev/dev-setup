#!/usr/bin/env node

/**
 * Detect which package manager to use
 * Checks for lock files in order: pnpm-lock.yaml, yarn.lock, package-lock.json
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

function detectPackageManager(dir) {
    const pnpmLock = path.join(dir, 'pnpm-lock.yaml');
    const yarnLock = path.join(dir, 'yarn.lock');
    const npmLock = path.join(dir, 'package-lock.json');
    
    if (fs.existsSync(pnpmLock)) {
        return 'pnpm';
    } else if (fs.existsSync(yarnLock)) {
        return 'yarn';
    } else if (fs.existsSync(npmLock)) {
        return 'npm';
    }
    
    // Default to npm if no lock file exists
    return 'npm';
}

function main() {
    const projectDir = process.argv[2] || process.cwd();
    const pm = detectPackageManager(projectDir);
    
    log(`📦 Detected package manager: ${pm}`, 'cyan');
    
    // Output for use in scripts
    console.log(pm);
    
    return pm;
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = { detectPackageManager, main };
