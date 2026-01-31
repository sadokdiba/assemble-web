# Cloudflare Pages Deployment Setup

## 🚀 Quick Setup Guide

### Step 1: Get Cloudflare Credentials

1. **Login to Cloudflare**
   - Go to https://dash.cloudflare.com
   - Login with your account

2. **Get Account ID**
   - Click on "Workers & Pages" in the left sidebar
   - Your Account ID is displayed in the right sidebar
   - Copy this ID (format: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

3. **Create API Token**
   - Go to https://dash.cloudflare.com/profile/api-tokens
   - Click "Create Token"
   - Use "Edit Cloudflare Workers" template OR create custom token with:
     - **Permissions**:
       - Account - Cloudflare Pages - Edit
     - **Account Resources**:
       - Include - Your Account
   - Click "Continue to summary" → "Create Token"
   - **IMPORTANT**: Copy the token immediately (you won't see it again!)

### Step 2: Add GitHub Secrets

1. **Go to your GitHub repository**
   - Navigate to `https://github.com/YOUR_USERNAME/YOUR_REPO/settings/secrets/actions`

2. **Add these secrets** (Click "New repository secret" for each):

   - **Name**: `CLOUDFLARE_API_TOKEN`
     - **Value**: The API token you copied from Cloudflare
   
   - **Name**: `CLOUDFLARE_ACCOUNT_ID`
     - **Value**: Your Account ID from Cloudflare dashboard

### Step 3: Configure Custom Domain (assembleapp.org)

1. **In Cloudflare Dashboard**
   - Go to "Workers & Pages"
   - Wait for first deployment to complete (will happen automatically after you push)
   - Click on "assemble-web" project
   - Go to "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter: `assembleapp.org`
   - Click "Continue"
   - Cloudflare will automatically configure DNS

2. **Add www subdomain (optional)**
   - In same "Custom domains" section
   - Click "Set up a custom domain"
   - Enter: `www.assembleapp.org`
   - This will redirect to main domain

### Step 4: Deploy

```bash
# From the root of your repository
cd /Users/sadokdiba/Documents/coding-project/assemble

# Commit all changes
git add .
git commit -m "Add Cloudflare Pages deployment"

# Push to GitHub (workflow will run automatically)
git push origin main
```

### Step 5: Monitor Deployment

1. **GitHub Actions**
   - Go to your repo's "Actions" tab
   - Watch the "Deploy to Cloudflare Pages" workflow run
   - Should complete in 2-3 minutes

2. **Cloudflare Dashboard**
   - Go to "Workers & Pages"
   - Click "assemble-web"
   - See deployment status and logs
   - Get the `*.pages.dev` URL

## 📋 Verification Checklist

- [ ] Cloudflare Account ID added to GitHub Secrets
- [ ] Cloudflare API Token added to GitHub Secrets
- [ ] Code pushed to main branch
- [ ] GitHub Action completed successfully
- [ ] Site accessible at `https://assemble-web.pages.dev`
- [ ] Custom domain `assembleapp.org` configured
- [ ] DNS propagated (may take 5-10 minutes)
- [ ] Site accessible at `https://assembleapp.org`

## 🔧 Troubleshooting

### Workflow fails with "401 Unauthorized"
- Check that `CLOUDFLARE_API_TOKEN` is correct
- Ensure token has "Cloudflare Pages - Edit" permission

### Workflow fails with "Account not found"
- Verify `CLOUDFLARE_ACCOUNT_ID` is correct
- Check it's the 32-character hex string

### Build fails
- Check build logs in GitHub Actions
- Test locally: `cd assemble-web && pnpm install && pnpm run build`

### Custom domain not working
- Wait 5-10 minutes for DNS propagation
- Check DNS settings in Cloudflare dashboard
- Ensure domain is added to your Cloudflare account

## 🎯 URLs After Deployment

- **Cloudflare Pages**: `https://assemble-web.pages.dev`
- **Custom Domain**: `https://assembleapp.org`
- **With www**: `https://www.assembleapp.org` (redirects to main)

## 🔄 Future Deployments

Every push to `main` branch will automatically:
1. Build the project
2. Deploy to Cloudflare Pages
3. Update your live site

No manual intervention needed!

## 📊 Cloudflare Pages Features You Get

- ✅ Unlimited bandwidth
- ✅ Unlimited requests
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Auto minification
- ✅ DDoS protection
- ✅ Web Analytics (enable in dashboard)
- ✅ Deploy previews for PRs

## 🔗 Useful Links

- **Cloudflare Dashboard**: https://dash.cloudflare.com
- **Pages Documentation**: https://developers.cloudflare.com/pages
- **API Tokens**: https://dash.cloudflare.com/profile/api-tokens
- **Your Domain DNS**: https://dash.cloudflare.com/YOUR_ACCOUNT_ID/assembleapp.org/dns
