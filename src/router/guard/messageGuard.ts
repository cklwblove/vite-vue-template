import type { Router } from 'vue-router';

/**
 * Used to close the message instance when the route is switched
 * @param router
 */
export function createMessageGuard(router: Router) {
  router.beforeEach(async () => {
    try {
      // 这里设置关闭弹框
      // 尤其是页面切换的时候，上一个页面有弹框展示时
      // Modal.destroyAll();
      // notification.destroy();
    } catch (error) {
      console.warn('message guard error:' + error);
    }
    return true;
  });
}
