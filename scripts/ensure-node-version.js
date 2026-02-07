#!/usr/bin/env node

/**
 * Ensure correct Node.js version is installed
 * Checks .nvmrc, .node-version, volta.json, or package.json engines
 * Idempotent - safe to run multiple times
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function getRequiredVersion(dir) {
    // Check volta.json (highest priority)
    const voltaPath = path.join(dir, 'volta.json');
    if (fs.existsSync(voltaPath)) {
        try {
            const volta = JSON.parse(fs.readFileSync(voltaPath, 'utf-8'));
            if (volta.node) {
                return volta.node;
            }
        } catch (e) {
            // Ignore parse errors
        }
    }
    
    // Check .nvmrc
    const nvmrcPath = path.join(dir, '.nvmrc');
    if (fs.existsSync(nvmrcPath)) {
        return fs.readFileSync(nvmrcPath, 'utf-8').trim();
    }
    
    // Check .node-version
    const nodeVersionPath = path.join(dir, '.node-version');
    if (fs.existsSync(nodeVersionPath)) {
        return fs.readFileSync(nodeVersionPath, 'utf-8').trim();
    }
    
    // Check package.json engines
    const packageJsonPath = path.join(dir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
        try {
            const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
            if (pkg.engines && pkg.engines.node) {
                return pkg.engines.node;
            }
        } catch (e) {
            // Ignore parse errors
        }
    }
    
    return null;
}

function checkCurrentVersion() {
    try {
        const version = execSync('node --version', { encoding: 'utf-8' }).trim();
        return version;
    } catch (error) {
        return null;
    }
}

function main() {
    const projectDir = process.argv[2] || process.cwd();
    const required = getRequiredVersion(projectDir);
    const current = checkCurrentVersion();
    
    if (!required) {
        log('⚠️  No Node.js version specified. Using current version.', 'yellow');
        if (current) {
            log(`   Current: ${current}`, 'cyan');
        }
        return true;
    }
    
    log(`📋 Required Node.js version: ${required}`, 'cyan');
    
    if (!current) {
        log('❌ Node.js not found. Please install Node.js.', 'red');
        log(`   Required: ${required}`, 'red');
        log('   Install: https://nodejs.org/', 'cyan');
        return false;
    }
    
    log(`✅ Current Node.js version: ${current}`, 'green');
    
    // Simple version check (major version)
    const requiredMajor = parseInt(required.replace(/[^0-9]/g, '').substring(0, 2));
    const currentMajor = parseInt(current.replace(/[^0-9]/g, '').substring(0, 2));
    
    if (currentMajor < requiredMajor) {
        log(`⚠️  Node.js version mismatch!`, 'yellow');
        log(`   Required: ${required} (major: ${requiredMajor})`, 'yellow');
        log(`   Current: ${current} (major: ${currentMajor})`, 'yellow');
        log('   Please update Node.js or use nvm/volta to switch versions.', 'cyan');
        return false;
    }
    
    log('✅ Node.js version check passed', 'green');
    return true;
}

// Run if executed directly
if (require.main === module) {
    const success = main();
    process.exit(success ? 0 : 1);
}

module.exports = { getRequiredVersion, checkCurrentVersion, main };
