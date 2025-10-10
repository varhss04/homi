# ✅ Post-Deployment Test Checklist

## After deploying to Vercel, test these:

### 1. Basic Site Load
- [ ] Visit your Vercel URL
- [ ] All images load correctly
- [ ] Navigation works
- [ ] Mobile menu works (on phone/small screen)

### 2. Registration Form
- [ ] Fill out all required fields:
  - Parent Name
  - Student Name
  - Grade (select from dropdown)
  - Phone number
  - Email
  - Address fields
  
- [ ] Click "Use Current Location" button
  - Browser should ask for location permission
  - Allow it
  - Map should center on your location
  - Address fields should auto-fill
  
- [ ] OR Click on map to select location
  - Click anywhere on the map
  - Address fields should auto-fill
  
- [ ] Submit the form
  - Should show success message
  - Should redirect to payment page

### 3. Payment Page
- [ ] QR code displays correctly
- [ ] Payment details show (Anirudh Muralidhar, UPI)
- [ ] Upload a screenshot image
- [ ] Click "Submit Payment Proof"
- [ ] Should show: "Thank You for Choosing Homi!"
- [ ] Should redirect to home after 3 seconds

### 4. Verify Database (MongoDB Atlas)
- [ ] Login to MongoDB Atlas
- [ ] Go to Database → Browse Collections
- [ ] Click on `homi_lunch` database
- [ ] Click on `registrations` collection
- [ ] Should see your test registration with all data

### 5. Contact Section
- [ ] Scroll to "Get in Touch" section
- [ ] Verify email: homidelivery@gmail.com
- [ ] Verify phone: +91 9886757800

## Common Issues & Fixes

### ❌ Location button doesn't work
**Cause:** HTTPS required for geolocation
**Fix:** This only works on deployed site (not localhost)
**Action:** Make sure you're testing on the Vercel URL (https://...)

### ❌ Form submission fails
**Cause:** API not found or MongoDB connection issue
**Fix Steps:**
1. Check Vercel → Functions → Logs
2. Look for errors in the logs
3. Verify MONGODB_URI env variable is set correctly
4. Check MongoDB Atlas Network Access allows 0.0.0.0/0
5. Redeploy after any changes

### ❌ Map doesn't load
**Cause:** Leaflet CSS or library issue
**Fix:** Already fixed in the code, should work on fresh deployment

### ❌ QR code doesn't show
**Cause:** Image file not uploaded or wrong path
**Fix:** Ensure `payment_qr.png` is in `/public` folder and pushed to GitHub

## Quick Debug Commands

### View Vercel Function Logs
1. Go to Vercel Dashboard
2. Select your project
3. Click "Functions" tab
4. Click on function name to see logs

### Test API Directly
Open in browser:
```
https://your-site.vercel.app/api/registrations/create
```
Should return: `{"success":false,"error":"Method not allowed"}` (because it needs POST)

### Check MongoDB Connection
In MongoDB Atlas:
1. Go to Database → Connect
2. Test connection with "Connect with MongoDB Compass" or shell

## Success Criteria ✅

Your deployment is successful when:
- [x] Registration form submits successfully
- [x] Data appears in MongoDB
- [x] Payment upload works
- [x] Maps work (on HTTPS site)
- [x] All features work on mobile
- [x] No console errors

## After Testing Successfully

1. **Clear test data from MongoDB** (optional)
2. **Share the live URL** with your team
3. **Set up monitoring** (optional - Vercel provides basic analytics)

## Need to Redeploy?

If you made any changes:
```bash
git add .
git commit -m "Fixed issues"
git push
```
Vercel auto-deploys on every push!

Or manually:
1. Go to Vercel Dashboard
2. Deployments tab
3. Click "Redeploy" on latest deployment
