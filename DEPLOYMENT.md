# Deployment Guide - Homi Lunch Delivery

## Prerequisites

1. **MongoDB Atlas Account** (Free)
   - Go to https://mongodb.com/cloud/atlas
   - Create a free M0 cluster
   - Get your connection string

2. **Vercel Account** (Free)
   - Go to https://vercel.com
   - Sign up with GitHub

3. **GitHub Repository**
   - Push your code to GitHub

## Step 1: Setup MongoDB Atlas

1. **Create Cluster**
   - Login to MongoDB Atlas
   - Create new M0 (free) cluster
   - Choose a region close to you

2. **Create Database User**
   - Go to Database Access
   - Add new database user
   - Username: `homi_admin`
   - Password: (create a strong password)
   - Built-in Role: Read and write to any database

3. **Whitelist IP Addresses**
   - Go to Network Access
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
   - This allows Vercel to connect

4. **Get Connection String**
   - Go to Database → Connect
   - Choose "Connect your application"
   - Copy the connection string:
   ```
   mongodb+srv://homi_admin:<password>@cluster.mongodb.net/homi_lunch
   ```
   - Replace `<password>` with your actual password
   - Replace `cluster` with your cluster name

## Step 2: Prepare Local Environment

1. **Create .env.local file** (for local testing)
   ```bash
   echo "MONGODB_URI=mongodb+srv://homi_admin:yourpassword@cluster.mongodb.net/homi_lunch" > .env.local
   ```

2. **Install Vercel CLI** (optional, for local testing)
   ```bash
   npm i -g vercel
   ```

3. **Test locally with Vercel**
   ```bash
   vercel dev
   ```
   - Site runs at http://localhost:3000
   - API at http://localhost:3000/api/registrations/create

## Step 3: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add Environment Variable**
   ```bash
   vercel env add MONGODB_URI
   ```
   - Paste your MongoDB connection string when prompted
   - Select: Production, Preview, Development

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option B: Using Vercel Dashboard

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "New Project"

2. **Import Repository**
   - Connect GitHub
   - Select your homi-lunch-easy-main repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Add Environment Variables**
   - Click "Environment Variables"
   - Add:
     - Name: `MONGODB_URI`
     - Value: `mongodb+srv://homi_admin:yourpassword@cluster.mongodb.net/homi_lunch`
   - Select all environments (Production, Preview, Development)

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes

## Step 4: Verify Deployment

1. **Check your live site**
   - Vercel will provide a URL: `https://your-project-name.vercel.app`

2. **Test Registration**
   - Go to your site
   - Fill out registration form
   - Submit

3. **Verify in MongoDB**
   - Go to MongoDB Atlas
   - Browse Collections
   - Check `registrations` collection

## Step 5: Custom Domain (Optional)

1. **In Vercel Dashboard**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## API Endpoints

After deployment, your APIs will be:
- **Create Registration**: `https://your-site.vercel.app/api/registrations/create`
- **Update Payment**: `https://your-site.vercel.app/api/registrations/{id}/payment`

## Troubleshooting

### MongoDB Connection Issues
- Verify connection string in Vercel env variables
- Check MongoDB Atlas IP whitelist (should include 0.0.0.0/0)
- Ensure database user has correct permissions

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies in package.json
- Run `npm run build` locally to test

### CORS Errors
- CORS headers are already configured in API functions
- If issues persist, check browser console

### API Not Working
- Check Vercel function logs
- Verify environment variables are set
- Test API endpoint directly in browser

## Costs

- **Vercel Free Tier**: Unlimited bandwidth, 100GB/month
- **MongoDB Atlas M0**: 512MB storage, free forever
- **Total**: $0/month 🎉

## Support

If you have issues:
1. Check Vercel function logs
2. Check MongoDB Atlas connection
3. Review browser console for errors
