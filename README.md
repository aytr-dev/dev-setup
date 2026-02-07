# 🛠️ Aytr Development Setup

This repository contains all setup scripts and documentation for the Aytr project.

## Quick Start

### From Root Folder (Easiest)

**Mac/Linux:**
```bash
cd dev-setup
./setup.sh
```

**Windows:**
```batch
cd dev-setup
setup.bat
```

### From This Repository

**Mac/Linux:**
```bash
make setup
```

**All Platforms:**
```bash
node setup.js
# or
npm run setup
```

## Prerequisites

- **Node.js** 20+ (required)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

## What Gets Set Up

The setup scripts will:

1. ✅ Verify Node.js installation and version
2. ✅ Check and install VS Code extension dependencies
3. ✅ Set up plugin development environment
4. ✅ Initialize git repositories (if not already done)
5. ✅ Install all required npm packages (auto-detects npm/pnpm/yarn)
6. ✅ Verify TypeScript compilation
7. ✅ Set up development tools

## Scripts

All scripts in `scripts/` are **idempotent** - you can run them multiple times safely.

### Available Scripts

- `setup.js` - Main entry point (checks Node.js, runs init.js)
- `scripts/init.js` - Orchestrator, runs all setup scripts
- `scripts/ensure-node-version.js` - Checks Node version from .nvmrc/.node-version/volta.json
- `scripts/check-node.js` - Verifies Node.js installation
- `scripts/check-git.js` - Checks Git installation (optional)
- `scripts/detect-package-manager.js` - Auto-detects npm/pnpm/yarn
- `scripts/setup-plugin.js` - Sets up the VS Code extension
- `scripts/setup-web.js` - Sets up the website project
- `scripts/install-deps.js` - Installs dependencies with detected package manager
- `scripts/verify-build.js` - Verifies TypeScript compilation

## Repository Structure

```
dev-setup/                # This repository (aytr-dev/aytr-dev-setup)
├── setup.js              # Main Node.js entry point
├── Makefile              # Make targets
├── package.json          # Node.js package config
├── scripts/              # All setup scripts
└── [docs]/               # Documentation files
```

## Project Structure

This repository is part of the Aytr project structure:

```
Aytr/
├── dev-setup/            # This repository
├── plugin/               # → aytr-dev/aytr-studio
└── web/                  # → aytr-dev/aytr-web
```

## 📚 Documentation

All documentation is in the [`docs/`](docs/) folder:

- **[Migration Guide](docs/MIGRATION_GUIDE.md)** - Moving to separate repos
- **[Repository Structure](docs/REPOSITORY_STRUCTURE.md)** - Repo organization
- **[Project Summary](docs/PROJECT_SUMMARY.md)** - Quick reference
- **[Setup Instructions](docs/SETUP.md)** - Detailed setup guide
- **[Structure Summary](docs/STRUCTURE_SUMMARY.md)** - Project structure overview

## Troubleshooting

### Node.js Not Found

If you see "Node.js not found":
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Or use a version manager: [nvm](https://github.com/nvm-sh/nvm) (Mac/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows)

### Permission Errors

On Mac/Linux, you may need `sudo` for global installs. However, the setup scripts use local installs by default.

### Windows Issues

If `make` doesn't work on Windows:
- Use `node setup.js` instead
- Or use `setup.bat` from the root folder

## Next Steps

After setup completes:

1. **Extension Development**: `cd ../plugin && npm run compile`
2. **Website Development**: `cd ../web && npm run dev`
3. **Read Documentation**: See `../plugin/README.md` for extension details

---

**All setup scripts are idempotent - run them as many times as needed!**
