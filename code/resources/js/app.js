import '../css/app.css';
import './bootstrap';

import { createInertiaApp,Head, Link } from '@inertiajs/vue3';
import { createApp, h } from 'vue';
import Layout from './Layouts/Layout.vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => import.meta.env.VITE_APP_NAME+` | ${title}`,
    resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page = pages[`./Pages/${name}.vue`];
    page.default.layout = page.default.layout || Layout;
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .component("Head", Head)
      .component("Link", Link)
      .mount(el)
  },
  progress: {
    delay: 100,
    color: "#ffffff",
    includeCSS: true,
    showSpinner: false,
  }
})
