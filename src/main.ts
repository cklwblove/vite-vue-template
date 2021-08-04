import './assets/style/app.less';

import { createApp } from 'vue';
import App from './App.vue';
import router, { setupRouter } from './router';
import { setupRouterGuard } from '/@/router/guard';
import { setGlobalProperties } from '/@/services';

// Register icon Sprite
import 'virtual:svg-icons-register';

(async () => {
  const app = createApp(App);

  setGlobalProperties(app);
  setupRouter(app);
  // router-guard
  setupRouterGuard();

  // Mount when the route is ready
  // https://next.router.vuejs.org/api/#isready
  await router.isReady();

  app.mount('#app', true);

  if (import.meta.env.DEV) {
    window.__APP__ = app;
  }
})();
