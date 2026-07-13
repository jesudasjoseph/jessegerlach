import * as Sentry from '@sentry/svelte';
import { env } from '$env/dynamic/public';

export const prerender = true;

if (env.PUBLIC_SENTRY_DSN)
	Sentry.init({
		dsn: env.PUBLIC_SENTRY_DSN,
		sendDefaultPii: true
	});
