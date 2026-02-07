# 🚀 Aytr Project Setup

This folder contains both the extension (`plugin/`) and website (`web/`) projects. Each will be its own Git repository.

## 📁 Current Structure

```
Aytr/
├── plugin/          # VS Code Extension (aytr-dev/aytr-studio)
├── web/             # Website (aytr-dev/aytr-web)
└── README.md        # This file
```

## 🔧 Setting Up Repositories

### 1. Extension Repository (`plugin/`)

```bash
cd plugin
git init
git remote add origin https://github.com/aytr-dev/aytr-studio.git
git add .
git commit -m "Initial commit: Aytr Studio extension"
git branch -M main
git push -u origin main
```

### 2. Website Repository (`web/`)

```bash
cd web
# Initialize with your framework (Next.js, Astro, etc.)
npm create next-app@latest . --typescript --tailwind --app

git init
git remote add origin https://github.com/aytr-dev/aytr-web.git
git add .
git commit -m "Initial commit: Aytr website"
git branch -M main
git push -u origin main
```

## 📝 Next Steps

1. ✅ Create GitHub organization `aytr-dev`
2. ✅ Create `aytr-studio` repository
3. ✅ Create `aytr-web` repository
4. ✅ Push code to respective repositories
5. ✅ Set up domain DNS for `aytr.dev`
6. ✅ Configure CI/CD workflows

## 📚 Documentation

- **Extension**: See `plugin/README.md`
- **Repository Structure**: See `REPOSITORY_STRUCTURE.md`
- **Migration Guide**: See `MIGRATION_GUIDE.md`

---

**Important**: 
- This root folder (`Aytr/`) is **not a Git repository** - it's just an organizational folder
- Each subfolder (`plugin/` and `web/`) will be initialized as its own separate Git repository
- No root-level `.gitignore` or other git files are needed here
