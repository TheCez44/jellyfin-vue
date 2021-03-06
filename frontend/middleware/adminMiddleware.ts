import { Context } from '@nuxt/types';
import { authStore } from '~/store';

/**
 * Middleware providing a redirect to the home page in case the
 * User is not Admin and tries to access the admin page.
 *
 * @param {Context} context - Nuxt application context
 * @returns {void}
 */
export default function (context: Context): void {
  const auth = authStore();

  if (!auth.currentUser?.Policy?.IsAdministrator) {
    return context.redirect('/');
  }
}
