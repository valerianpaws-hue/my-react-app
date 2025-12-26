# Netlify Deployment Fix Guide

## Problem Summary
Your Netlify deployment was failing with a `neon` native extension error. The error occurred because Netlify was trying to install a native Rust-based module that requires a Rust toolchain, which is not available by default in the Netlify build environment.

## Root Cause
The `miaoda-sc-plugin` development plugin was being loaded during the production build, which may have triggered unnecessary dependency installations. Additionally, the build scripts were not properly configured for production deployment.

## Solution Implemented

### 1. Created Production Vite Configuration (`vite.config.prod.ts`)
- Excludes development-only plugins that might cause build issues
- Optimizes bundle splitting for better performance
- Configures proper build output settings
- Excludes `miaoda-sc-plugin` from optimization dependencies

### 2. Updated `package.json`
- Added proper build scripts:
  - `dev`: Runs Vite development server
  - `build`: Standard Vite build
  - `build:prod`: Production build using `vite.config.prod.ts`
  - `preview`: Preview production build locally

### 3. Created `netlify.toml` Configuration
- Specifies Node.js version 20 (LTS) for stability
- Sets proper build command: `pnpm install && pnpm run build:prod`
- Configures publish directory as `dist`
- Adds SPA routing redirects (all routes → `/index.html`)
- Includes security headers (X-Frame-Options, CSP, etc.)
- Adds caching headers for static assets
- Disables automatic plugin detection

### 4. Created `.nvmrc` File
- Locks Node.js version to 20 for consistency across environments

### 5. Created `.npmrc` File
- Configures npm/pnpm behavior for Netlify
- Sets legacy peer deps to avoid conflicts
- Increases fetch timeout for slow networks

## Files Created/Modified

### New Files:
1. **`netlify.toml`** - Netlify build configuration
2. **`vite.config.prod.ts`** - Production-specific Vite config
3. **`.nvmrc`** - Node version specification
4. **`.npmrc`** - NPM configuration

### Modified Files:
1. **`package.json`** - Updated build scripts

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)
1. **Commit and push all changes to your repository:**
   ```bash
   git add netlify.toml vite.config.prod.ts .nvmrc .npmrc package.json
   git commit -m "Fix Netlify deployment: Add production build config"
   git push origin main
   ```

2. **Netlify will automatically detect the changes and rebuild**
   - The new `netlify.toml` will be used automatically
   - Build should complete successfully in 2-5 minutes

### Option 2: Manual Deploy via Netlify CLI
1. **Install Netlify CLI (if not already installed):**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Build locally:**
   ```bash
   pnpm run build:prod
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Option 3: Deploy via Drag & Drop
1. **Build locally:**
   ```bash
   pnpm run build:prod
   ```

2. **Go to Netlify Dashboard** → Your Site → Deploys

3. **Drag and drop the `dist` folder** to the deploy area

## Verification

After deployment, verify the following:

### 1. Check Build Logs
- Go to Netlify Dashboard → Deploys → Latest Deploy
- Verify no errors in the build log
- Confirm "Build succeeded" message

### 2. Test the Website
- Visit your Netlify URL (e.g., `https://incandescent-treacle-f6d036.netlify.app`)
- Test all pages:
  - Home page
  - About page
  - Prehistoric Collections
  - Ethnographic Exhibits
  - Exhibitions
  - Blog
  - Contact form
- Test navigation between pages
- Test responsive design on mobile

### 3. Check Performance
- Run Lighthouse audit in Chrome DevTools
- Verify good scores for Performance, Accessibility, Best Practices, SEO

## Troubleshooting

### If Build Still Fails:

#### 1. Check Node Version
Ensure Node 20 is being used:
- Check build log for "Node version" line
- Should show: `Node v20.x.x`

#### 2. Clear Netlify Cache
In Netlify Dashboard:
- Go to Site Settings → Build & Deploy → Build Settings
- Click "Clear cache and retry deploy"

#### 3. Check Environment Variables
Ensure all required environment variables are set:
- Go to Site Settings → Environment Variables
- Verify `VITE_APP_ID` and other required variables are present

#### 4. Enable Detailed Logging
Add to `netlify.toml`:
```toml
[build.environment]
  DEBUG = "*"
  VERBOSE = "true"
```

### If Specific Pages Don't Load:

#### 1. Check Redirects
Verify the redirect rule in `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 2. Check React Router Configuration
Ensure `BrowserRouter` is used (not `HashRouter`)

### If Assets Don't Load:

#### 1. Check Base Path
In `vite.config.prod.ts`, ensure base path is correct:
```typescript
export default defineConfig({
  base: '/', // or your custom base path
  // ...
});
```

#### 2. Check Asset Paths
Verify all asset imports use relative paths or the `@/` alias

## Performance Optimization

### Current Optimizations:
- ✅ Code splitting (React vendor, UI vendor chunks)
- ✅ Minification (esbuild)
- ✅ Asset caching headers (1 year)
- ✅ Gzip compression (automatic by Netlify)

### Additional Optimizations (Optional):
1. **Enable Brotli Compression:**
   Add to `netlify.toml`:
   ```toml
   [[headers]]
     for = "/*"
     [headers.values]
       Content-Encoding = "br"
   ```

2. **Add Preload Headers:**
   ```toml
   [[headers]]
     for = "/index.html"
     [headers.values]
       Link = "</assets/index.css>; rel=preload; as=style"
   ```

3. **Enable Asset Optimization:**
   In Netlify Dashboard:
   - Go to Site Settings → Build & Deploy → Post Processing
   - Enable "Bundle CSS" and "Minify JS"

## Security Headers Included

The `netlify.toml` includes these security headers:
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer info

## Build Configuration Summary

| Setting | Value | Purpose |
|---------|-------|---------|
| Node Version | 20 | LTS stability |
| Package Manager | pnpm | Fast, efficient |
| Build Command | `pnpm run build:prod` | Production build |
| Publish Directory | `dist` | Vite output |
| Build Time | ~2-5 minutes | Typical duration |

## Support Resources

- **Netlify Documentation:** https://docs.netlify.com/
- **Vite Documentation:** https://vitejs.dev/
- **React Router Documentation:** https://reactrouter.com/

## Contact

If you continue to experience issues:
1. Check the full build log in Netlify Dashboard
2. Copy the exact error message
3. Search Netlify Community Forums: https://answers.netlify.com/
4. Contact Netlify Support with your site ID

---

## Quick Reference Commands

```bash
# Local development
pnpm dev

# Production build (local)
pnpm run build:prod

# Preview production build
pnpm preview

# Lint code
pnpm lint

# Deploy to Netlify (CLI)
netlify deploy --prod --dir=dist

# Check Netlify status
netlify status

# View Netlify logs
netlify logs
```

## Success Indicators

✅ Build completes without errors  
✅ All pages load correctly  
✅ Navigation works smoothly  
✅ Images and assets load  
✅ Forms submit properly  
✅ Mobile responsive design works  
✅ No console errors in browser  
✅ Lighthouse score > 90  

---

**Last Updated:** 2025-12-26  
**Status:** Ready for deployment ✅
