/**
 * The configuration file will define all the environment variables and
 * any other configurable values. Configs should be considered immutable during
 * runtime and should not change once set.
 *
 * Configurations can be set by:
 *  - Querystrings: Use lowercase prefixed with debug-${configuration} to match.
 *  - Environment: Use uppercase prefixed with REACT_APP_${configuration} to match.
 * _Note: Querystrings will overwrite environment configurations.
 */
import pkg from '../package.json';

const env = process.env;
const envPrefix = 'REACT_APP';
const queryPrefix = 'debug';

const params = new URLSearchParams(window.location.search.toLowerCase());

const config = {
  environment: (env.NODE_ENV || 'development'),
  version: (pkg.version || '0.0.0'),
  publicUrl: (params.get(`${queryPrefix}-public-url`) ?? env[`${envPrefix}_PUBLIC_URL`]) ?? '/'
}

export default config;
