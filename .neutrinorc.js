module.exports = {
  options: {
    tests: 'src'
  },
  use: [
    [
      '@domachine/neutrino-preset-app',
      {
        entry: './src/index.tsx',
        html: {
          title: 'Project Squid',
          links: [
            { href: '/static/manifest.json', rel: 'manifest' },
            {
              link: '/static/images/icons/icon-72x72.png',
              rel: 'shortcut icon'
            },
            {
              href:
                'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;subset=latin',
              rel: 'stylesheet'
            },
            { href: '/static/css/bootstrap.min.css', rel: 'stylesheet' },
            { href: '/static/css/nifty.min.css', rel: 'stylesheet' },
            {
              href:
                '/static/premium/icon-sets/icons/line-icons/premium-line-icons.min.css',
              rel: 'stylesheet'
            },
            {
              href:
                '/static/premium/icon-sets/icons/solid-icons/premium-solid-icons.min.css',
              rel: 'stylesheet'
            },
            {
              href:
                '/static/plugins/datatables/media/css/dataTables.bootstrap.min.css',
              rel: 'stylesheet'
            },
            {
              href:
                '/static/plugins/datatables/extensions/Responsive/css/responsive.dataTables.min.css',
              rel: 'stylesheet'
            },
            {
              href:
                '/static/plugins/datatables/extensions/Responsive/css/responsive.bootstrap.min.css',
              rel: 'stylesheet'
            }
          ],
          scripts: [
            '/static/js/jquery.min.js',
            '/static/js/bootstrap.min.js',
            '/static/js/nifty.js',
            '/static/plugins/datatables/media/js/jquery.dataTables.min.js',
            '/static/plugins/datatables/media/js/dataTables.bootstrap.min.js',
            '/static/plugins/datatables/extensions/Responsive/js/dataTables.responsive.min.js',
            '/static/plugins/datatables/extensions/Responsive/js/responsive.bootstrap.min.js'
          ]
        }
      }
    ]
    // neutrino => {
    //   const path = require('path')
    //   neutrino.config.resolve.fallback = path.join(__dirname, 'node_modules')
    //   neutrino.config.resolveLoader.fallback = path.join(
    //     __dirname,
    //     'node_modules'
    //   )
    // resolve: { fallback: path.join(__dirname, "node_modules") },
    // resolveLoader: { fallback: path.join(__dirname, "node_modules") }
    // }
  ]
}
