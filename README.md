# StartNation landing page

A small, static, responsive one-page website. No framework, build step, or paid service is required.

## Add your Google Form

1. Publish your Google Form and copy its public responder URL.
2. Open `config.js`.
3. Replace the empty string in `window.STARTNATION_FORM_URL = "";` with your URL.
4. Both orange “Request Help / Get Started” buttons will automatically open the form in a new tab.

Until you add a URL, the buttons scroll to the contact area and display a "form available soon" message.

## Preview locally

Open `index.html` in a browser. Or, from this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000 .

## Deploy to startnation.ai

Commit these files to your GitHub repository. Deploy the repository as a static site using GitHub Pages, Cloudflare Pages, Netlify, or another static host, and point your domain `startnation.ai` to the host using the DNS instructions that host provides. For GitHub Pages with a custom domain, enter `startnation.ai` in the repository's Pages settings and follow GitHub's displayed DNS instructions; do not guess DNS values.

## Files

- `index.html` — all page content
- `styles.css` — layout, responsive styling, brand colors
- `config.js` — the one place to add the Google Form URL
- `script.js` — makes both buttons use the URL
- `assets/startnation-logo.png` — your supplied logo
- `assets/founder-support.jpg` — crop from the previously approved AI-generated mockup

The laptop graphic is implemented in HTML/CSS, not as a screenshot. The page includes no analytics or visitor tracking. The form itself, when connected, is hosted by Google.
