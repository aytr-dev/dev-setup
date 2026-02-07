.PHONY: setup check-node help

# Default target
help:
	@echo "Aytr Development Setup"
	@echo ""
	@echo "Available targets:"
	@echo "  make setup      - Run full setup (checks Node.js, runs setup.js)"
	@echo "  make check-node - Check if Node.js is installed"
	@echo "  make help       - Show this help message"
	@echo ""
	@echo "Note: On Windows, use 'setup.bat' instead of 'make setup'"

# Check for Node.js
check-node:
	@echo "Checking for Node.js..."
	@which node > /dev/null 2>&1 || (echo "❌ Node.js not found. Please install Node.js 20+ from https://nodejs.org/" && exit 1)
	@node --version | grep -q "v2[0-9]\|v3[0-9]" || (echo "⚠️  Warning: Node.js version should be 20+ (found: $$(node --version))" || true)
	@echo "✅ Node.js found: $$(node --version)"
	@which npm > /dev/null 2>&1 || (echo "❌ npm not found. Please install npm." && exit 1)
	@echo "✅ npm found: $$(npm --version)"

# Main setup target
setup: check-node
	@echo ""
	@echo "🚀 Starting Aytr development setup..."
	@echo ""
	@node setup.js
