# 🚀 Aytr Project Setup

This folder contains the development setup scripts for both the extension (`plugin/`) and website (`web/`) projects. Each will be its own Git repository.

## 📁 Current Structure

```
Aytr/
├── dev-setup/          # This repository (aytr-dev/aytr-dev-setup)
├── plugin/             # → aytr-dev/aytr-studio
└── web/                # → aytr-dev/aytr-web
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
2. ✅ Create `aytr-dev-setup` repository
3. ✅ Create `aytr-studio` repository
4. ✅ Create `aytr-web` repository
5. ✅ Push code to respective repositories
6. ✅ Set up domain DNS for `aytr.dev`
7. ✅ Configure CI/CD workflows

## 📚 Documentation

- **Extension**: See `../plugin/README.md`
- **Repository Structure**: See [REPOSITORY_STRUCTURE.md](REPOSITORY_STRUCTURE.md)
- **Migration Guide**: See [MIGRATION_GUIDE.md](MIGRATION_GUIDE.md)

---

**Important**: 
- This root folder (`Aytr/`) is **not a Git repository** - it's just an organizational folder
- Each subfolder (`dev-setup/`, `plugin/`, and `web/`) will be initialized as its own separate Git repository
- No root-level `.gitignore` or other git files are needed here
