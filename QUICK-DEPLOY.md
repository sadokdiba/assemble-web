# 🚀 Quick Start - Cloudflare Pages Deployment

## Required GitHub Secrets

Add these to **Settings** → **Secrets and variables** → **Actions**:

### 1. CLOUDFLARE_API_TOKEN
**Where to get it:**
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click your profile (top right) → **My Profile**
3. **API Tokens** tab → **Create Token**
4. Use template: **Edit Cloudflare Workers**
5. Or create custom with permissions:
   - Account → Cloudflare Pages → Edit
6. Copy the token (you won't see it again!)

### 2. CLOUDFLARE_ACCOUNT_ID
**Where to get it:**
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages**
3. Look for **Account ID** on the right sidebar
4. Copy the ID

## How to Add Secrets to GitHub

```bash
# Go to your repository on GitHub
https://github.com/YOUR_USERNAME/assemble

# Then navigate:
Settings → Secrets and variables → Actions → New repository secret
```

For each secret:
1. Click **New repository secret**
2. Name: `CLOUDFLARE_API_TOKEN` (or `CLOUDFLARE_ACCOUNT_ID`)
3. Value: Paste your token/ID
4. Click **Add secret**

## Domain Setup

### In Cloudflare Pages:
1. **Workers & Pages** → **assemble-web** → **Custom domains**
2. Add: `assembleapp.org`
3. Add: `www.assembleapp.org` (optional)

DNS is configured automatically by Cloudflare.

## Deploy

Once secrets are set up, just push to main:
```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

The GitHub Action will automatically build and deploy!

## Verify Deployment

1. Check workflow: **GitHub repo** → **Actions** tab
2. View site: `https://assembleapp.org`
3. Cloudflare dashboard: **Workers & Pages** → **assemble-web** → **Deployments**

---

**Full detailed guide:** See [CLOUDFLARE-DEPLOYMENT-GUIDE.md](../CLOUDFLARE-DEPLOYMENT-GUIDE.md)
