// vite-plugin-no-spa-fallback.js
export default function noSpaFallback() {
    return {
      name: 'no-spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.endsWith('.html')) {
            return next();
          }
          res.statusCode = 404;
          res.end('Not Found');
        });
      },
    };
  }
  