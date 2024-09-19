export interface ILogger<T> {
	logInformation(message: string): void;
	logError(message: string): void;
	logDebug(message: string): void;
	logWarning(message: string): void;
}

export class DefaultLogger<T> implements ILogger<T> {
	public constructor(private readonly typeT: new (...args: object[]) => T) {}

	public logError(message: string): void {
		this.log("ERR", message, console.error);
	}

	public logDebug(message: string): void {
		this.log("DBG", message, console.debug);
	}

	public logWarning(message: string): void {
		this.log("WRN", message, console.warn);
	}

	public logInformation(message: string): void {
		this.log("INF", message, console.info);
	}

	private log(
		level: string,
		message: string,
		handleLog: (message: string) => void,
	): void {
		const logMessage = `[${this.getCurrentTime()} ${level}] ${this.typeT.name.replace(
			"_",
			"",
		)} - ${message}`;

		handleLog(logMessage);
	}

	private getCurrentTime(): string {
		return new Date().toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: false,
		});
	}
}
