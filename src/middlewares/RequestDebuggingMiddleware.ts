import type { NextFunction, Request, Response } from "express";

export class RequestDebuggingMiddleware {
	public invoke(req: Request, res: Response, next: NextFunction): void {
		const start = performance.now();

		res.on("finish", () => {
			const elapsedMilliseconds = Math.round(performance.now() - start);
			const method = req.method;
			const path = req.originalUrl;
			const statusCode = res.statusCode;
			const remoteIpAddress = req.ip;

			console.log(
				`Status ${statusCode} for ${method} ${path}, from ${remoteIpAddress}. Elapsed: ${elapsedMilliseconds}ms`,
			);
		});

		next();
	}
}
