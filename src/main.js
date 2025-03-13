// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import 'prismjs/themes/prism.css'
import '~/assets/scss/main.scss'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function (Vue, { router, head, isClient }) {

    // Add Google Analytics script
    head.script.push({
      src: "https://www.googletagmanager.com/gtag/js?id=G-5ZPCG88RLL",
      async: true
    });

    head.script.push({
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5ZPCG88RLL');
      `,
      type: "text/javascript"
    });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
