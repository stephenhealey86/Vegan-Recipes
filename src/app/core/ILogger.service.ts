export abstract class ILogger {

    logDebug: (msg: string) => void;
    logInfo: (msg: string) => void;
    logWarning: (msg: string) => void;
    logError: (msg: string) => void;
}
