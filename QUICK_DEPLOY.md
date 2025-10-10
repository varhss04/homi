# 🚀 Quick Deploy to Vercel (5 Minutes)

## What You Need
- MongoDB connection string (from your .env file)
- GitHub account
- Vercel account (free)

## Deploy Steps

### 1. Push to GitHub (if not already)
```bash
git init
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/yourusername/homi-lunch.git
git push -u origin main
```

### 2. Deploy to Vercel

**Go to:** https://vercel.com/new

1. **Import Git Repository**
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Import"

2. **Configure Build Settings**
   - Framework: **Vite** (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Leave everything else as default

3. **Add Environment Variable**
   - Click "Environment Variables"
   - Name: `MONGODB_URI`
   - Value: Your MongoDB connection string from .env
     ```
     mongodb+srv://homi_admin:%40nirudh1612@homireg.rm4lkkr.mongodb.net/homi_lunch?retryWrites=true&w=majority
     ```
   - Click "Add"

4. **Deploy!**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

### 3. Get Your Live URL
Your site will be live at:
```
https://your-project-name.vercel.app
```

### 4. Update MongoDB Network Access
1. Go to MongoDB Atlas
2. Network Access → Add IP Address
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Confirm

## Test Your Deployment

1. Visit your live URL
2. Fill out registration form
3. Submit
4. Check MongoDB Atlas → Browse Collections → registrations

## That's It!

Your Homi Lunch app is now live! 🚀

### Future Updates
Just push to GitHub:
```bash
git add .
git commit -m "Update"
git push
```
Vercel auto-deploys on every push!

## Troubleshooting

**If registration doesn't work:**
1. Check Vercel → Functions → Logs
2. Verify MONGODB_URI in Vercel settings
3. Ensure MongoDB allows 0.0.0.0/0

**Need help?**
- Check DEPLOYMENT.md for detailed guide
- View Vercel function logs for errors
