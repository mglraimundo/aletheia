const UPDATE_INTERVAL_MS = 4 * 60 * 60 * 1000;
const LAST_UPDATE_CHECK_KEY = 'aletheia_sw_last_update_check';

function lastSuccessfulCheck(): number {
  try {
    const value = Number(localStorage.getItem(LAST_UPDATE_CHECK_KEY));
    return Number.isFinite(value) ? value : 0;
  } catch {
    return 0;
  }
}

function recordSuccessfulCheck(timestamp: number): void {
  try {
    localStorage.setItem(LAST_UPDATE_CHECK_KEY, String(timestamp));
  } catch {
    // Storage can be unavailable in private browsing; update checks still work.
  }
}

export async function registerServiceWorker(): Promise<void> {
  if (!('serviceWorker' in navigator)) return;

  const pageWasControlled = navigator.serviceWorker.controller !== null;
  let reloading = false;
  let updateInProgress: Promise<void> | undefined;

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!pageWasControlled || reloading) return;
    reloading = true;
    window.location.reload();
  });

  try {
    const serviceWorkerUrl = new URL(
      `${import.meta.env.BASE_URL}sw.js`,
      window.location.origin,
    );
    serviceWorkerUrl.searchParams.set('build', import.meta.env.APP_BUILD_ID);

    const registration = await navigator.serviceWorker.register(
      serviceWorkerUrl,
      {
        scope: import.meta.env.BASE_URL,
        updateViaCache: 'none',
      },
    );

    const updateIfDue = (): Promise<void> => {
      if (Date.now() - lastSuccessfulCheck() < UPDATE_INTERVAL_MS) {
        return Promise.resolve();
      }

      if (!updateInProgress) {
        updateInProgress = registration.update()
          .then(() => recordSuccessfulCheck(Date.now()))
          .finally(() => {
            updateInProgress = undefined;
          });
      }

      return updateInProgress;
    };

    await updateIfDue();

    window.setInterval(() => {
      void updateIfDue();
    }, UPDATE_INTERVAL_MS);

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        void updateIfDue();
      }
    });
  } catch (error) {
    console.error('Service worker registration failed:', error);
  }
}
