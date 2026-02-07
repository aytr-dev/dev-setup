# 📁 Aytr Repository Structure

## Recommended Organization

**GitHub Organization:** `aytr-dev`  
**Domain:** `aytr.dev`

### Repository Strategy: Separate Repos (Recommended)

For maximum flexibility and cleaner separation, use **three separate repositories**:

1. **`aytr-dev/aytr-dev-setup`** - Development setup scripts
   - Setup automation
   - Dependency management
   - Build verification

2. **`aytr-dev/aytr-studio`** - VS Code/Cursor Extension
   - The complete extension codebase
   - Component packages
   - Designer UI
   - Marketplace integration

3. **`aytr-dev/aytr-web`** - Website & Documentation
   - Marketing website (aytr.dev)
   - Documentation site
   - Blog
   - Landing pages

### Why Separate Repos?

✅ **Different Deployment Cycles**
- Extension updates via VS Code Marketplace
- Website updates independently
- Setup scripts updated separately

✅ **Different Access Controls**
- Extension repo: Core contributors only
- Website repo: Marketing/content team access
- Setup repo: Shared tooling

✅ **Cleaner CI/CD**
- Separate build pipelines
- Independent versioning
- Easier to manage dependencies

✅ **Better GitHub Features**
- Separate issue tracking
- Independent releases
- Clearer contribution guidelines

---

## Repository Details

### `aytr-dev/aytr-dev-setup`

**Purpose:** Development setup scripts and tooling

**Structure:**
```
aytr-dev-setup/
├── setup.js              # Main entry point
├── Makefile              # Make targets
├── package.json          # Node.js config
├── scripts/               # Setup scripts
└── docs/                 # Documentation
```

**GitHub Topics:** `development-tools`, `setup-scripts`, `nodejs`, `automation`

### `aytr-dev/aytr-studio`

**Purpose:** VS Code/Cursor Extension

**Structure:**
```
aytr-studio/
├── .cursorrules
├── .github/
│   ├── workflows/       # CI/CD for extension
│   └── ISSUE_TEMPLATE/
├── src/
│   ├── extension.ts
│   ├── providers/
│   ├── core/
│   └── designer/
├── packages/
│   └── aytr-standard-ui/
├── builtin/
├── package.json
├── tsconfig.json
├── README.md
└── docs/                # Documentation
```

**GitHub Topics:** `vscode-extension`, `cursor`, `rad`, `web-components`, `typescript`, `visual-designer`

### `aytr-dev/aytr-web`

**Purpose:** Marketing Website & Documentation

**Structure:**
```
aytr-web/
├── .github/
│   └── workflows/       # CI/CD for website
├── src/
│   ├── pages/
│   ├── components/
│   └── styles/
├── public/
├── docs/                # Documentation
├── blog/                # Blog posts
├── package.json
├── README.md
└── vercel.json          # or netlify.toml
```

**Tech Stack Suggestions:**
- **Next.js** (React, SEO-friendly, great for docs)
- **Astro** (Fast, content-focused)
- **VitePress** (Documentation-first)

**GitHub Topics:** `website`, `documentation`, `nextjs`, `marketing`

---

## Initial Setup Steps

### 1. Create GitHub Organization

1. Go to GitHub → Create Organization
2. Name: `aytr-dev`
3. Plan: Free (upgrade later if needed)

### 2. Create Repositories

Create three repositories in the `aytr-dev` organization:
- `aytr-dev-setup`
- `aytr-studio`
- `aytr-web`

---

## GitHub Organization Settings

### Recommended Settings

1. **Profile**
   - Display name: "Aytr"
   - Description: "Visual RAD platform for TypeScript and Web Components"
   - Website: `https://aytr.dev`
   - Location: (your location)

2. **Repositories**
   - Default visibility: Private (change to public when ready)
   - Allow forking: Yes
   - Allow private forks: Yes

3. **Member privileges**
   - Repository creation: Members can create
   - Repository deletion: Only owners

4. **Third-party access**
   - Enable OAuth App access restrictions (for security)

---

## Domain Setup

### DNS Configuration

Point `aytr.dev` to your hosting:

**For Website:**
- A Record: `@` → (your hosting IP)
- CNAME: `www` → `aytr.dev`

**For Documentation (optional subdomain):**
- CNAME: `docs` → (docs hosting)

### Recommended Hosting

- **Website:** Vercel, Netlify, or Cloudflare Pages
- **Documentation:** Vercel, Netlify, or GitHub Pages
- **Email:** Google Workspace or Cloudflare Email Routing

---

## Next Steps

1. ✅ Create `aytr-dev` organization on GitHub
2. ✅ Create `aytr-dev-setup` repository
3. ✅ Create `aytr-studio` repository
4. ✅ Create `aytr-web` repository
5. ✅ Update all documentation with new org name
6. ✅ Set up domain DNS
7. ✅ Configure CI/CD workflows
8. ✅ Set up issue templates
9. ✅ Create contribution guidelines

---

**Last Updated:** 2024
