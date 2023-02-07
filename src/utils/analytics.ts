import ReactGA from 'react-ga';

import config from './config';

/**
 * Google Analytics wrapper for the application
 */
export class Analytics {
  _instance: Analytics | null = null;

  public enabled: boolean = false;

  /**
   * Initialize analytics.
   * @param analyticsId The Analytics identifier given by provider.
   * @param debug whether or not analytics is in debug mode.
   */
  constructor ({
    analyticsId,
    debug = true
  }: {
    analyticsId?: string
    debug?: boolean
  }) {
    // Create a singleton instance of
    if (Analytics.prototype._instance) {
      return Analytics.prototype._instance
    }
    Analytics.prototype._instance = this;

    if (analyticsId) {
      this.enabled = true;
      this.initialize(analyticsId, debug);
      this.pageView();
    }
  }

  private initialize (analyticsId: string, debug?: boolean): void {
    ReactGA.initialize(analyticsId, {
      debug,
    });
  };

  /**
   * Trigger a page view of the current page.
   * @param pagePath (optional) The path to register a pageview.
   */
  public pageView (pagePath?: string): void {
    const currentUrl = window.location.pathname + window.location.search;
    ReactGA.pageview(pagePath ?? currentUrl);
  }

  /**
   * TODO: Add event tracking.
   */
}

const analytics = new Analytics({
  analyticsId: config.analyticsId,
  debug: config.debugMode,
});

export default analytics;
