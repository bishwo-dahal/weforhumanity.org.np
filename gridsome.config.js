var embedConfig = {
  enabledProviders: ['Youtube', 'Vimeo', 'Gist', 'Codepen', 'JSFiddle', 'Giphy'],
  Youtube: {
    template: './src/embedTemplates/Youtube.hbs'
  },
  Vimeo: {
    template: './src/embedTemplates/Vimeo.hbs'
  },
  Giphy: {
    template: './src/embedTemplates/Giphy.hbs'
  },
  JSFiddle: {
    template: './src/embedTemplates/JSFiddle.hbs',
    secureConnection: true
  },
  Codepen: {
    template: './src/embedTemplates/Codepen.hbs'
  },
  Gist: {
    omitStylesheet: false
  }

};

module.exports = {
  siteName: 'We for Humanity',
  siteDescription:"",
  siteUrl:"https://weforhumanity.org.np",
  permalinks: {
    trailingSlash: false
  },
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: './src/favicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // 10 minutes
        exclude: ['/404', '/search'],
        config: {
          '/': {
            changefreq: 'weekly',
            priority: 1.0
          },
          '/donors': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/articles': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/news': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/credits': {
            changefreq: 'monthly',
            priority: 0.6
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'CustomPage',
        baseDir: './content/pages',
        path: '*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article',
        baseDir: './content/articles',
        path: '**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'News',
        baseDir: './content/news',
        path: '*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Credit',
        baseDir: './content/credits',
        path: '*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Donor',
        baseDir: './content/donors',
        path: '*.md'
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'excerpt', 'content'],
        collections: [
          {
            typeName: 'Article',
            indexName: 'Article',
            fields: ['title', 'content', 'path']
          },
          {
            typeName: 'News',
            indexName: 'News',
            fields: ['title', 'content', 'path']
          }
        ]
      }
    }
  ],
  templates: {
    Article: [{
      path: '/articles/:title'
    }],
    Tag: [
      {
        path: '/tag/:title',
        component: './src/templates/Tag.vue'
      }
    ],
    News: [
      {
        path: '/news/:title',
        component: './src/templates/News.vue'
      }
    ],
    CustomPage: [
      {
        path: '/pages/:title',
        component: './src/templates/CustomPage.vue'
      }
    ],
    Donor: [
      {
        path: '/donors/:title',
        component: './src/templates/Donor.vue'
      }
    ],
  },
  transformers: {
    remark: {
      plugins: [
        ['@noxify/gridsome-plugin-remark-embed', embedConfig],
        ['gridsome-plugin-remark-prismjs-all', {
          noInlineHighlight: false,
          showLineNumbers: true
        }]
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@customPageImage', '@/../content/pages');
  }
}
