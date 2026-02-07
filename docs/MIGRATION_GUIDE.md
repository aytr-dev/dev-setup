# 🔄 Migration Guide: Setting Up Aytr Repositories

This guide helps you reorganize your current `Aytr` folder into the proper repository structure.

## Current State

You're currently in: `/Users/jameymcelveen/Developer/Aytr`

This folder contains:
- Documentation files (specs, guides)
- Planning documents
- `.cursorrules`

## Recommended Action: Keep Current Folder as Extension Repo

Since you already have the extension documentation here, **this folder should become `aytr-studio`**.

### Step 1: Prepare Current Folder for Extension Repo

```bash
# You're already in the right place
cd /Users/jameymcelveen/Developer/Aytr

# Initialize git if not already done
git init

# Create .gitignore if it doesn't exist
cat > .gitignore << EOF
node_modules/
out/
dist/
*.vsix
.DS_Store
.vscode-test/
*.log
EOF

# Stage all current files
git add .

# Create initial commit
git commit -m "Initial commit: Aytr Studio extension documentation and structure"
```

### Step 2: Create GitHub Organization

1. Go to https://github.com/organizations/new
2. Choose "Create a free organization"
3. Organization name: `aytr-dev`
4. Contact email: (your email)
5. Complete setup

### Step 3: Create Extension Repository

1. Go to https://github.com/organizations/aytr-dev/repositories/new
2. Repository name: `aytr-studio`
3. Description: "Visual RAD extension for VS Code and Cursor"
4. Visibility: Private (change to public when ready)
5. **Don't** initialize with README (you already have one)
6. Click "Create repository"

### Step 4: Connect Local Folder to GitHub

```bash
# Still in /Users/jameymcelveen/Developer/Aytr
git remote add origin https://github.com/aytr-dev/aytr-studio.git
git branch -M main
git push -u origin main
```

### Step 5: Create Website Repository

```bash
# Go up one level
cd /Users/jameymcelveen/Developer

# Create new folder for website
mkdir aytr-web
cd aytr-web

# Initialize with your preferred framework
# Option 1: Next.js (Recommended)
npm create next-app@latest . --typescript --tailwind --app --no-git

# Option 2: Astro
# npm create astro@latest .

# Initialize git
git init
git add .
git commit -m "Initial commit: Aytr website"

# Create repo on GitHub (same process as Step 3)
# Repository name: aytr-web

# Connect to GitHub
git remote add origin https://github.com/aytr-dev/aytr-web.git
git branch -M main
git push -u origin main
```

## Final Structure

After migration, you'll have:

```
Developer/
├── Aytr/                    # → aytr-dev/aytr-studio (extension)
│   ├── src/                 # (to be created)
│   ├── packages/            # (to be created)
│   ├── .cursorrules
│   ├── AYTR_STUDIO_SPEC.md
│   ├── README.md
│   └── ...
└── aytr-web/                # → aytr-dev/aytr-web (website)
    ├── src/
    ├── public/
    └── ...
```

## Next Steps After Migration

### For Extension Repo (`aytr-studio`)

1. ✅ Update `package.json` with correct repository URL:
   ```json
   {
     "repository": {
       "type": "git",
       "url": "https://github.com/aytr-dev/aytr-studio.git"
     }
   }
   ```

2. ✅ Add GitHub Actions workflow (already created in `.github/workflows/ci.yml`)

3. ✅ Set up branch protection rules:
   - Go to Settings → Branches
   - Add rule for `main` branch
   - Require pull request reviews
   - Require status checks

### For Website Repo (`aytr-web`)

1. ✅ Set up domain on hosting provider (Vercel/Netlify)
2. ✅ Configure DNS for `aytr.dev`
3. ✅ Add basic landing page
4. ✅ Set up documentation structure

## Verification Checklist

- [ ] GitHub organization `aytr-dev` created
- [ ] Repository `aytr-dev/aytr-studio` created and connected
- [ ] Repository `aytr-dev/aytr-web` created and connected
- [ ] All files pushed to respective repos
- [ ] Domain `aytr.dev` DNS configured
- [ ] CI/CD workflows set up
- [ ] Branch protection enabled

## Troubleshooting

### "Repository already exists" error
- The folder might already be a git repo
- Run `git remote -v` to check
- If needed, remove old remote: `git remote remove origin`

### Permission denied
- Make sure you're logged into GitHub CLI or have SSH keys set up
- Use HTTPS with personal access token if needed

### Want to rename the local folder?
```bash
# Rename to match repo name
cd /Users/jameymcelveen/Developer
mv Aytr aytr-studio
cd aytr-studio
# Git will still work fine
```

---

**Once complete, you'll have a professional two-repo setup ready for development!** 🚀
