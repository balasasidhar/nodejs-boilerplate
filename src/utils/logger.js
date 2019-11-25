import jsLogger from 'js-logger';
import Chalk from 'chalk';

jsLogger.useDefaults();

export default class Logger {
  static log(...msgs) {
    jsLogger.log(Chalk.whiteBright(...msgs));
  }

  static info(...msgs) {
    jsLogger.info(Chalk.cyan(...msgs));
  }

  static warn(...msgs) {
    jsLogger.warn(Chalk.yellow(...msgs));
  }

  static error(...msgs) {
    jsLogger.error(Chalk.red(...msgs));
  }

  static success(...msgs) {
    jsLogger.log(Chalk.green(...msgs));
  }
}
