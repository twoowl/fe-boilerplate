import config from './config';

/** Signature of a logging function */
export type LogFn = (message?: any, ...optionalParams: any[]) => void;

/** Basic logger interface */
export interface Logger {
  log: LogFn
  warn: LogFn
  error: LogFn
}

const NO_OP: LogFn = (message?: any, ...optionalParams: any[]) => {};

/** Logger which outputs to the browser console */
export class ConsoleLogger implements Logger {
  readonly log: LogFn;
  readonly warn: LogFn;
  readonly error: LogFn;

  constructor (options?: { level?: string }) {
    const { level } = options ?? {};

    this.error = console.error.bind(console);

    if (level?.toLowerCase() === 'error') {
      this.warn = NO_OP;
      this.log = NO_OP;

      return;
    }

    this.warn = console.warn.bind(console);

    if (level?.toLowerCase() === 'warn') {
      this.log = NO_OP;

      return;
    }

    this.log = console.log.bind(console);
  }
}

export const logger = new ConsoleLogger({ level: config.logging });
