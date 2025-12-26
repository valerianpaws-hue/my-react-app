# 🚀 Netlify Deployment Checklist

## Pre-Deployment Checklist

### ✅ Files to Commit
- [ ] `netlify.toml` - Netlify configuration
- [ ] `vite.config.prod.ts` - Production Vite config
- [ ] `.nvmrc` - Node version lock
- [ ] `.npmrc` - NPM configuration
- [ ] `package.json` - Updated build scripts
- [ ] `NETLIFY_DEPLOYMENT_GUIDE.md` - Deployment documentation

### ✅ Environment Variables (Set in Netlify Dashboard)
Check if these are set in: **Site Settings → Environment Variables**

Required variables:
- [ ] `VITE_APP_ID` - Your application ID
- [ ] `VITE_API_ENV` - API environment (production/staging)
- [ ] `VITE_SUPABASE_URL` - Supabase project URL
- [ ] `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

### ✅ Build Settings (Verify in Netlify Dashboard)
Go to: **Site Settings → Build & Deploy → Build Settings**

- [ ] **Build command:** `pnpm install && pnpm run build:prod`
- [ ] **Publish directory:** `dist`
- [ ] **Node version:** 20 (set via `.nvmrc` or environment variable)

## Deployment Steps

### Step 1: Commit Changes
```bash
git add netlify.toml vite.config.prod.ts .nvmrc .npmrc package.json NETLIFY_DEPLOYMENT_GUIDE.md
git commit -m "Fix: Configure Netlify deployment with production build settings"
git push origin main
```

### Step 2: Monitor Deployment
1. Go to Netlify Dashboard
2. Navigate to **Deploys** tab
3. Watch the build log in real-time
4. Wait for "Published" status (typically 2-5 minutes)

### Step 3: Verify Deployment
- [ ] Site loads successfully
- [ ] All pages are accessible
- [ ] Navigation works correctly
- [ ] Images load properly
- [ ] Forms function correctly
- [ ] No console errors
- [ ] Mobile responsive design works

## Troubleshooting Quick Fixes

### If Build Fails:

#### 1. Clear Cache
```bash
# In Netlify Dashboard:
Site Settings → Build & Deploy → Clear cache and retry deploy
```

#### 2. Check Build Log
Look for these common issues:
- ❌ Node version mismatch → Check `.nvmrc`
- ❌ Missing dependencies → Check `package.json`
- ❌ Environment variables → Check Netlify settings
- ❌ Build command error → Verify `netlify.toml`

#### 3. Test Build Locally
```bash
# Clean install
rm -rf node_modules dist
pnpm install

# Build
pnpm run build:prod

# Preview
pnpm preview
```

### If Site Loads But Pages Don't Work:

#### Check Redirects
Verify in `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Check React Router
Ensure using `BrowserRouter` (not `HashRouter`)

### If Assets Don't Load:

#### Check Asset Paths
All assets should be in `/dist/assets/` after build

#### Check Base URL
In `vite.config.prod.ts`:
```typescript
base: '/'
```

## Post-Deployment Checklist

### ✅ Functionality Tests
- [ ] Home page loads
- [ ] About page loads
- [ ] Prehistoric Collections page loads
- [ ] Ethnographic Exhibits page loads
- [ ] Exhibitions page loads
- [ ] Blog page loads
- [ ] Contact form works
- [ ] Navigation menu works
- [ ] Mobile menu works
- [ ] All images load
- [ ] All links work

### ✅ Performance Tests
- [ ] Run Lighthouse audit
- [ ] Check page load time (< 3 seconds)
- [ ] Verify mobile performance
- [ ] Test on different browsers

### ✅ SEO & Accessibility
- [ ] Meta tags present
- [ ] Open Graph tags present
- [ ] Alt text on images
- [ ] Proper heading hierarchy
- [ ] ARIA labels where needed

## Success Metrics

| Metric | Target | Status |
|--------|--------|--------|
| Build Time | < 5 minutes | ⏱️ |
| Page Load | < 3 seconds | ⚡ |
| Lighthouse Performance | > 90 | 📊 |
| Lighthouse Accessibility | > 90 | ♿ |
| Lighthouse Best Practices | > 90 | ✅ |
| Lighthouse SEO | > 90 | 🔍 |

## Deployment URLs

### Production
- **URL:** https://incandescent-treacle-f6d036.netlify.app
- **Status:** 🟢 Live

### Preview Deploys
- **Branch deploys:** Automatic for all branches
- **Pull request deploys:** Automatic for all PRs

## Rollback Procedure

If deployment fails or has issues:

### Option 1: Rollback in Netlify UI
1. Go to **Deploys** tab
2. Find the last working deploy
3. Click **"Publish deploy"** on that version

### Option 2: Revert Git Commit
```bash
git revert HEAD
git push origin main
```

### Option 3: Deploy Specific Commit
```bash
git checkout <commit-hash>
git push origin main --force
```

## Monitoring

### Check Site Status
```bash
netlify status
```

### View Recent Deploys
```bash
netlify deploys
```

### View Build Logs
```bash
netlify logs
```

## Support Contacts

### Netlify Support
- **Community Forum:** https://answers.netlify.com/
- **Support Email:** support@netlify.com
- **Status Page:** https://www.netlifystatus.com/

### Project Maintainer
- **Email:** abd-errhman@gmail.com
- **GitHub:** [Your GitHub Profile]

## Additional Resources

- 📖 [Netlify Documentation](https://docs.netlify.com/)
- 📖 [Vite Documentation](https://vitejs.dev/)
- 📖 [React Router Documentation](https://reactrouter.com/)
- 📖 [Deployment Guide](./NETLIFY_DEPLOYMENT_GUIDE.md)

---

## Quick Command Reference

```bash
# Build locally
pnpm run build:prod

# Preview build
pnpm preview

# Deploy via CLI
netlify deploy --prod --dir=dist

# Check status
netlify status

# View logs
netlify logs

# Open site in browser
netlify open:site

# Open admin dashboard
netlify open:admin
```

---

**Last Updated:** 2025-12-26  
**Next Review:** After successful deployment  
**Status:** ✅ Ready for deployment
