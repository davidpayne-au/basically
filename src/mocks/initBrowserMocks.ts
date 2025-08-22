// src/mocks/initBrowserMocks.ts
// Start the MSW worker when VITE_USE_MSW is explicitly enabled.
// This allows enabling MSW in production builds (e.g. GitHub Pages)
// while still keeping it off by default.
if (import.meta.env.VITE_USE_MSW === 'true') {
  import('./browser').then(({ worker }) => {
    // Ensure the service worker URL accounts for the app base path
    // (important when deployed to GitHub Pages or any subpath).
    const swUrl = `${import.meta.env.BASE_URL}mockServiceWorker.js`;

    worker.start({
      serviceWorker: {
        url: swUrl,
      },
    });
  });
}
