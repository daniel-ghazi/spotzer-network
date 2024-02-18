class Logger {
  // TODO: Change for sentry logging
  static log(message: string, context?: object): void {
    console.log(message, context);
  }

  // TODO: Change for sentry logging
  static error(error: Error, context?: object): void {
    console.error(error.message, error, context);
  }

  // TODO: Change for sentry logging
  static errorMessage(message: string, context?: object): void {
    console.error(message, null, context);
  }
}

export default Logger;
