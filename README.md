# Connection Collective Website

A warm, editorial website for Connection Collective — a modern social club for women in their 20s-30s in Toronto.

## 📁 File Structure

```
connection-collective/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive features
├── README.md           # This file
└── assets/             # CREATE THIS FOLDER - Put all your images here
    ├── logo.png        # Your logo
    ├── hero-image.jpg  # Main hero image
    ├── founder-photo.jpg
    ├── events/         # Event photos
    │   ├── event1.jpg
    │   ├── event2.jpg
    │   └── etc...
    └── testimonials/   # Testimonial/event moment photos
        ├── moment1.jpg
        ├── moment2.jpg
        └── etc...
```

## 🎨 Adding Your Images

### Step 1: Create the Assets Folder
In the same folder as your HTML file, create a new folder called `assets`.

### Step 2: Add Your Images
Place your images in the assets folder following this structure:

```
assets/
├── logo.png                    # Your Connection Collective logo
├── hero-image.jpg              # Hero section image (1200x800px recommended)
├── founder-photo.jpg           # Your photo for About section (800x1000px)
├── events/
│   ├── winter-social.jpg       # Each event needs a photo (800x600px)
│   ├── book-club.jpg
│   ├── pilates.jpg
│   ├── vision-board.jpg
│   ├── wine-paint.jpg
│   └── trivia.jpg
└── testimonials/
    ├── moment1.jpg             # Candid event photos (600x600px)
    ├── moment2.jpg
    ├── moment3.jpg
    └── moment4.jpg
```

### Step 3: Update HTML References

**For the Logo** (Line 50 in index.html):
Replace this:
```html
<a href="#home">Connection Collective</a>
```
With this:
```html
<a href="#home"><img src="assets/logo.png" alt="Connection Collective" style="height: 40px;"></a>
```

**For Hero Image** (Line 96):
Replace this entire div:
```html
<div class="hero-image-placeholder">
    <p class="placeholder-note">📸 Add your hero image here...</p>
</div>
```
With this:
```html
<img src="assets/hero-image.jpg" alt="Women connecting at Connection Collective event">
```

**For Event Images** (Lines 230, 253, 276, etc.):
Replace each:
```html
<div class="event-image-placeholder">📸 Event photo</div>
```
With:
```html
<img src="assets/events/winter-social.jpg" alt="Winter Social event">
```
(Update the filename for each event)

**For Testimonial Photos** (Lines 395-410):
Replace each:
```html
<div class="photo-placeholder">📸 Event moment 1</div>
```
With:
```html
<img src="assets/testimonials/moment1.jpg" alt="Event moment">
```

**For Founder Photo** (Line 492):
Replace this entire div:
```html
<div class="founder-photo-placeholder">
    <p>📸 Founder photo...</p>
</div>
```
With:
```html
<img src="assets/founder-photo.jpg" alt="Connection Collective Founder">
```

## 📧 Setting Up Flodesk Newsletter

### Option 1: Using Flodesk Form Embed (Recommended)

1. **Get Your Flodesk Embed Code:**
   - Log into your Flodesk account
   - Go to Forms → Select your form
   - Click "Embed" or "Share"
   - Copy the full embed code

2. **Add to Your Website:**
   - Find the newsletter section in `index.html` (around line 525)
   - Look for the comment that says `<!-- PASTE YOUR FLODESK EMBED CODE HERE -->`
   - Paste your Flodesk embed code there
   - Delete or comment out the simple form above it

### Option 2: Using Direct Form Action

1. **Get Your Flodesk Form URL:**
   - In Flodesk, go to your form settings
   - Find the form submission URL (should look like: `https://app.flodesk.com/submit/...`)

2. **Update the Form:**
   - Find line 537 in `index.html`
   - Replace `YOUR_FLODESK_FORM_URL_HERE` with your actual Flodesk URL:
   ```html
   <form class="newsletter-form" action="https://app.flodesk.com/submit/YOUR_FORM_ID" method="POST">
   ```

3. **Update Input Names:**
   - Flodesk typically uses `email` as the field name
   - Make sure your input has `name="email"`:
   ```html
   <input type="email" name="email" placeholder="Your email address" required>
   ```

## 🎯 Customizing Content

### Update Event Details
Find the events section (starting around line 216) and update:
- Event dates and times
- Event titles
- Locations
- Prices
- Tags ("Great for first-timers", "Low-key", "Active")
- Event photo paths

### Update Testimonials
Find the testimonials section (starting around line 345) and replace with real quotes from your members.

### Update Founder Section
Find the mission section (around line 498) and update:
- Your story/bio
- Your name
- Your background
- The reason you started CC

### Update Social Links
Find the footer section (around line 633) and add your actual social media links:
```html
<a href="https://instagram.com/yourhandle" aria-label="Instagram">📷</a>
<a href="https://tiktok.com/@yourhandle" aria-label="TikTok">🎵</a>
<a href="mailto:hello@connectioncollective.ca" aria-label="Email">✉️</a>
```

### Update Contact Email
Search for `hello@connectioncollective.ca` in the HTML and replace with your actual email.

## 🌐 Hosting Options

### Free Options:

**1. GitHub Pages (Recommended for beginners)**
- Create a GitHub account
- Create a new repository called `connection-collective`
- Upload all your files (index.html, styles.css, script.js, assets folder)
- Go to Settings → Pages
- Select your branch (usually "main")
- Your site will be live at: `yourusername.github.io/connection-collective`

**2. Netlify**
- Sign up at netlify.com
- Drag and drop your entire folder
- Get a free subdomain or connect your custom domain

**3. Vercel**
- Similar to Netlify
- Sign up at vercel.com
- Import your files
- Deploy instantly

### Paid Options (for custom domain):

**1. Namecheap (~$3-5/month)**
- Buy domain + hosting together
- Use their cPanel to upload files
- Very beginner-friendly

**2. Hostinger (~$2-4/month)**
- Cheap and reliable
- Good customer support
- Easy file upload

### Steps to Upload:
1. Get hosting (choose one above)
2. Connect via FTP/File Manager or drag-and-drop
3. Upload all files maintaining the folder structure
4. Make sure `index.html` is in the root directory
5. Test that all images load correctly

## 🎨 Design Notes

### Color Palette
- Warm White: `#FFFDFB`
- Cream: `#FAF7F2`
- Soft Peach: `#F4E0D6`
- Clay: `#D4A59A`
- Terracotta: `#C97D60` (Main accent)
- Sage: `#A8B5A0`
- Forest: `#697A5C`
- Warm Black: `#2A2520`

### Fonts Used
- **Display (headings):** Crimson Pro (serif)
- **Body (paragraphs):** DM Sans (sans-serif)
- Both loaded from Google Fonts automatically

### Image Recommendations
- **Hero Image:** 1200x800px, warm lighting, candid moment
- **Event Photos:** 800x600px, show activities/spaces
- **Testimonial Grid:** 600x600px, square crops
- **Founder Photo:** 800x1000px, professional but warm
- **Format:** JPG for photos, PNG for logo with transparency
- **Optimization:** Use TinyPNG.com to compress before uploading

## 📱 Mobile Responsive

The site automatically adjusts for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

Everything is already coded to work beautifully on all devices!

## ✨ Features Included

✅ Sticky navigation header
✅ Smooth scroll to sections
✅ Mobile hamburger menu
✅ FAQ accordion dropdowns
✅ Hover effects on cards and buttons
✅ Scroll-triggered animations
✅ Newsletter form integration
✅ Event cards with tags
✅ Testimonial showcase
✅ Recurring series section
✅ Fully responsive design

## 🔧 Need to Make Quick Text Changes?

Just open `index.html` in any text editor (even Notepad!) and:
1. Find the text you want to change
2. Update it
3. Save the file
4. Upload to your hosting

The CSS and JS files rarely need editing unless you're changing design or functionality.

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths are correct (case-sensitive!)
- Make sure assets folder is uploaded
- Verify image file extensions (.jpg vs .jpeg)

**Newsletter form not working?**
- Double-check your Flodesk form URL
- Make sure input name is "email"
- Test the form submission

**Mobile menu not working?**
- Make sure script.js is uploaded
- Check browser console for errors
- Verify the file path to script.js is correct

**Layout looks broken?**
- Ensure styles.css is uploaded
- Clear your browser cache (Ctrl+F5)
- Check file path to styles.css

## 📞 Support

If you get stuck:
1. Check this README thoroughly
2. Google the specific error message
3. Check that all files are uploaded correctly
4. Verify file paths are correct

## 🚀 Going Live Checklist

Before launching:
- [ ] Replace all placeholder images with real photos
- [ ] Update all event details with current events
- [ ] Add real testimonials
- [ ] Connect Flodesk newsletter form
- [ ] Update contact email
- [ ] Add real social media links
- [ ] Update founder bio and photo
- [ ] Test on mobile device
- [ ] Test all links work
- [ ] Test newsletter signup
- [ ] Check all images load
- [ ] Proofread all text
- [ ] Set up Google Analytics (optional)

## 📄 License

This website was custom-built for Connection Collective. All code is yours to use and modify as needed!

---

**Built with ❤️ for Connection Collective**

Good luck with your launch! 🎉