# 📋 Aytr Studio - Project Summary

Quick reference for the Aytr Studio project structure and organization.

## 🏢 Organization

- **GitHub Org**: [`aytr-dev`](https://github.com/aytr-dev)
- **Domain**: [`aytr.dev`](https://aytr.dev)
- **Extension Repo**: [`aytr-dev/aytr-studio`](https://github.com/aytr-dev/aytr-studio)
- **Website Repo**: [`aytr-dev/aytr-web`](https://github.com/aytr-dev/aytr-web)

## 📁 Repository Structure

### `aytr-dev/aytr-studio` (Extension)

VS Code/Cursor extension for visual RAD development.

**Key Files:**
- `docs/AYTR_STUDIO_SPEC.md` - Complete technical specification
- `docs/CURSOR_IMPLEMENTATION_GUIDE.md` - Step-by-step build guide
- `.cursorrules` - Brand safety and coding standards
- `README.md` - Public documentation
- `docs/CONTRIBUTING.md` - Contribution guidelines

**Structure:**
```
aytr-studio/
├── src/              # Extension source code
├── packages/         # Component packages
├── builtin/          # System packages
└── .github/          # CI/CD and templates
```

### `aytr-dev/aytr-web` (Website)

Marketing website and documentation.

**Structure:**
```
aytr-web/
├── src/              # Website source
├── docs/             # Documentation
├── blog/             # Blog posts
└── public/           # Static assets
```

## 🎯 Brand Guidelines

- **Component Classes**: `AButton`, `APanel`, `AInput` (A prefix)
- **HTML Tags**: `<ay-button>`, `<ay-panel>`, `<ay-input>` (ay- prefix)
- **File Extensions**: `.aytr` (designer), `.base.ts` (generated)
- **Never Use**: "Delphi", "VCL", "TForm", or any legacy terminology

## 🚀 Quick Start

### For Extension Development

1. Clone: `git clone https://github.com/aytr-dev/aytr-studio.git`
2. Install: `npm install`
3. Build: `npm run compile`
4. Debug: Press F5 in VS Code

### For Website Development

1. Clone: `git clone https://github.com/aytr-dev/aytr-web.git`
2. Install: `npm install`
3. Dev: `npm run dev`
4. Build: `npm run build`

## 📚 Documentation

- **Specification**: See `docs/AYTR_STUDIO_SPEC.md`
- **Implementation Guide**: See `docs/CURSOR_IMPLEMENTATION_GUIDE.md`
- **Repository Setup**: See `docs/REPOSITORY_STRUCTURE.md`
- **Migration Guide**: See `docs/MIGRATION_GUIDE.md`

## 🔗 Important Links

- Website: https://aytr.dev
- Extension Repo: https://github.com/aytr-dev/aytr-studio
- Website Repo: https://github.com/aytr-dev/aytr-web
- Issues: https://github.com/aytr-dev/aytr-studio/issues

## 📝 Next Steps

1. ✅ Create GitHub organization `aytr-dev`
2. ✅ Set up `aytr-studio` repository
3. ✅ Set up `aytr-web` repository
4. ✅ Configure domain DNS
5. ⏳ Start building the extension (follow `docs/CURSOR_IMPLEMENTATION_GUIDE.md`)

---

**Last Updated**: 2024
