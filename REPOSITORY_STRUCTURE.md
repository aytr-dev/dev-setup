# 📁 Aytr Repository Structure

## Recommended Organization

**GitHub Organization:** `aytr-dev`  
**Domain:** `aytr.dev`

### Repository Strategy: Separate Repos (Recommended)

For maximum flexibility and cleaner separation, use **two separate repositories**:

1. **`aytr-dev/aytr-studio`** - VS Code/Cursor Extension
   - The complete extension codebase
   - Component packages
   - Designer UI
   - Marketplace integration

2. **`aytr-dev/aytr-web`** - Website & Documentation
   - Marketing website (aytr.dev)
   - Documentation site
   - Blog
   - Landing pages

### Why Separate Repos?

✅ **Different Deployment Cycles**
- Extension updates via VS Code Marketplace
- Website updates independently

✅ **Different Access Controls**
- Extension repo: Core contributors only
- Website repo: Marketing/content team access

✅ **Cleaner CI/CD**
- Separate build pipelines
- Independent versioning
- Easier to manage dependencies

✅ **Better GitHub Features**
- Separate issue tracking
- Independent releases
- Clearer contribution guidelines

---

## Alternative: Monorepo Structure

If you prefer a monorepo approach, use this structure:

```
aytr-dev/aytr/
├── packages/
│   ├── studio/          # VS Code extension
│   └── web/             # Website
├── package.json          # Root workspace config
└── README.md
```

**Tools:** Use npm/yarn workspaces or pnpm workspaces.

---

## Repository Details

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
├── webpack.config.js
├── README.md
├── AYTR_STUDIO_SPEC.md
└── CURSOR_IMPLEMENTATION_GUIDE.md
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

### 2. Create Extension Repository

```bash
# In your current Aytr folder
cd /Users/jameymcelveen/Developer/Aytr

# Initialize git if not already done
git init

# Add remote
git remote add origin https://github.com/aytr-dev/aytr-studio.git

# Create initial commit
git add .
git commit -m "Initial commit: Aytr Studio extension"

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Create Website Repository

```bash
# Create new directory
mkdir ../aytr-web
cd ../aytr-web

# Initialize (choose your framework)
npm create next-app@latest . --typescript --tailwind --app

# Initialize git
git init
git remote add origin https://github.com/aytr-dev/aytr-web.git

# Add basic structure
# ... (create initial website files)

git add .
git commit -m "Initial commit: Aytr website"
git branch -M main
git push -u origin main
```

---

## GitHub Organization Settings

### Recommended Settings

1. **Profile**
   - Display name: "Aytr"
   - Description: "Visual RAD for the Modern Web"
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

**For Extension (optional):**
- CNAME: `marketplace` → (if you host your own marketplace)

### Recommended Hosting

- **Website:** Vercel, Netlify, or Cloudflare Pages
- **Documentation:** Vercel, Netlify, or GitHub Pages
- **Email:** Google Workspace or Cloudflare Email Routing

---

## Next Steps

1. ✅ Create `aytr-dev` organization on GitHub
2. ✅ Create `aytr-studio` repository
3. ✅ Create `aytr-web` repository
4. ✅ Update all documentation with new org name
5. ✅ Set up domain DNS
6. ✅ Configure CI/CD workflows
7. ✅ Set up issue templates
8. ✅ Create contribution guidelines

---

**Last Updated:** 2024
