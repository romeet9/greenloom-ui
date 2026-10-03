type LogType = 'error' | 'warn' | 'log';

type LoggerOptions = {
  message: string;
  moduleName?: string;
  type: LogType;
};

type ThrowLoomErrorOptions = {
  message: string;
  moduleName?: string;
};

type ThrowBladeErrorOptions = ThrowLoomErrorOptions;

const PREFIX = '[Loom]:';

const throwLoomError = ({ message, moduleName }: ThrowLoomErrorOptions): void | never => {
  if (__DEV__) {
    const prefix = moduleName ? `[Loom: ${moduleName}]:` : PREFIX;
    throw new Error(`${prefix} ${message}`);
  }
};

const throwBladeError = throwLoomError;

const getCommonLogger = (
  type: LogType,
): typeof console.log | typeof console.error | typeof console.warn => {
  switch (type) {
    case 'error':
      return console.error;
    case 'warn':
      return console.warn;
    case 'log':
    default:
      return console.log;
  }
};

const logger = ({ message, moduleName, type }: LoggerOptions): void => {
  if (__DEV__) {
    const prefix = moduleName ? `[Loom: ${moduleName}]:` : PREFIX;
    getCommonLogger(type)(`${prefix} ${message}`);
  }
};

export { throwLoomError, throwBladeError, logger };
export type { ThrowLoomErrorOptions, ThrowBladeErrorOptions, LoggerOptions };
