# 📁 Aytr Project Structure Summary

## ✅ Current Organization

```
Aytr/                              # Root folder (not a git repo)
├── dev-setup/                     # → aytr-dev/aytr-dev-setup (setup scripts)
│   ├── setup.js                   # Main setup script
│   ├── scripts/                   # All setup scripts
│   └── docs/                      # Documentation
├── plugin/                        # → aytr-dev/aytr-studio (extension)
│   ├── src/                       # Extension source code
│   ├── packages/                  # Component packages
│   ├── builtin/                   # System packages
│   └── docs/                      # Documentation
└── web/                           # → aytr-dev/aytr-web (website)
    └── docs/                      # Documentation
```

## ✅ Fixed Issues

1. **Import Paths**: Fixed AButton.ts import paths
2. **Folder Structure**: All extension files in `plugin/` folder
3. **Documentation**: Organized in `docs/` folders
4. **Organization**: Clear separation between all three repos

## 🚀 Next Steps

### 1. Initialize Dev-Setup Repository

```bash
cd dev-setup
git init
git remote add origin https://github.com/aytr-dev/aytr-dev-setup.git
git add .
git commit -m "Initial commit: Development setup scripts"
git branch -M main
git push -u origin main
```

### 2. Initialize Plugin Repository

```bash
cd plugin
git init
git remote add origin https://github.com/aytr-dev/aytr-studio.git
git add .
git commit -m "Initial commit: Aytr Studio extension"
git branch -M main
git push -u origin main
```

### 3. Initialize Web Repository

```bash
cd web
# Choose your framework (Next.js recommended)
npm create next-app@latest . --typescript --tailwind --app

git init
git remote add origin https://github.com/aytr-dev/aytr-web.git
git add .
git commit -m "Initial commit: Aytr website"
git branch -M main
git push -u origin main
```

## 📝 Notes

- The root `Aytr/` folder is **not** a git repository
- Each subfolder (`dev-setup/`, `plugin/`, and `web/`) will be its own repository
- All documentation is organized in `docs/` folders
- README.md files remain in root of each repo

---

**Status**: ✅ Structure is organized and ready for repository setup
