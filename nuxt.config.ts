// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },




   app: {
    head: {
      title: 'Home',
      link: [
        // 🔸 Favicon
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/images/favicon.png' },

        // 🔸 Google Fonts
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.css'},
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap' },

        // 🔸 CSS Files (from /public/css)
        { rel: 'stylesheet', href: '/css/vendor/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/vendor/animate.min.css' },
        { rel: 'stylesheet', href: '/css/plugins/swiper.min.css' },
        { rel: 'stylesheet', href: '/css/vendor/magnific-popup.css' },
        { rel: 'stylesheet', href: '/css/vendor/fontawesome-pro.css' },
        { rel: 'stylesheet', href: '/css/plugins/nouislider.min.css' },
        { rel: 'stylesheet', href: '/css/vendor/icomoon.css' },
        { rel: 'stylesheet', href: '/css/vendor/spacing.css' },
        { rel: 'stylesheet', href: '/css/plugins/apexcharts.css' },
        { rel: 'stylesheet', href: '/css/main.css' },
      ],

      script: [
        
// 🔹 MUST load jQuery FIRST
  { src: '/js/vendor/jquery-3.7.1.min.js', tagPosition: 'bodyClose', defer: true },
        // ✅ Other JS (in same order as HTML theme)
        { src: '/js/plugins/waypoints.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/vendor/bootstrap.bundle.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/plugins/swiper.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/plugins/wow.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/vendor/magnific-popup.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/vendor/isotope.pkgd.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/vendor/imagesloaded.pkgd.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/plugins/nice-select.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/vendor/ajax-form.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/plugins/easypie.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/vendor/purecounter.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/plugins/nouislider.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/plugins/apexcharts.min.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/plugins/typed.js', tagPosition: 'bodyClose', defer: true },
        { src: '/js/main.js', tagPosition: 'bodyClose', defer: true },
      ],
    },
  },
})
