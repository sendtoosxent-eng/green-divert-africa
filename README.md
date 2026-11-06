# Green Divert for Africa — clickable prototype

A responsive, static HTML prototype for the farmer marketplace and Green Divert operations workspace.

## Open locally

Open `index.html` in a modern browser. For a local web server, use any static server, such as `python3 -m http.server 8000`, then open `http://localhost:8000`.

## Demo paths

- The login page has one-click **Farmer demo** and **Staff demo** access. No credentials are required.
- Farmer: browse supplies, add quantities, place an order, and track its delivery status.
- Staff: update order status, edit or add inventory listings, and log collections. Passing collection checks add stock; confirming an order deducts stock.
- Prototype data is saved in `localStorage` in the current browser. Open another tab in the same browser to present the farmer and staff sides; refreshes preserve demo changes.
- To reset the demo, clear site data/local storage for the deployed domain or run `localStorage.removeItem('gdfa-demo-v1')` in the browser console, then reload.

## Deploy to Vercel

Import this folder as a static project or deploy it with the Vercel CLI. No build command is required; set the output directory to `.`. `vercel.json` includes a catch-all rewrite so hash routes continue to serve the prototype entry page.

## Install on a phone

Deploy over HTTPS (the Vercel URL works), then open the site in the phone browser. On Android/Chrome, choose **Install app** or **Add to Home screen** from the browser menu. On iPhone, use **Share → Add to Home Screen** in Safari. The app shell and interface assets are cached for basic offline reopening; product photos and Google Fonts still need an internet connection.

## Prototype scope

This is a front-end presentation prototype. It uses browser-local sample data, simulated order state changes, and illustrative delivery maps. Authentication, cross-device synchronization, real payment processing, SMS, and production dispatch integrations require a backend and service credentials. Product photos and Google Fonts load from external CDNs.
