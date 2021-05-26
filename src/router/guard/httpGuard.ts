import type { Router } from 'vue-router';
import { clearPending } from '/@/services/pending';

/**
 * The interface used to close the current page to complete the request when the route is switched
 * @param router
 */
export function createHttpGuard(router: Router) {
  router.beforeEach(async () => {
    // Switching the route will delete the previous request
    clearPending();
    return true;
  });
}
