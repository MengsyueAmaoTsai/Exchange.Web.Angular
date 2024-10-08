import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { APP_BASE_HREF } from "@angular/common";
import { CommonEngine } from "@angular/ssr";
import express from "express";
import bootstrap from "./main.server";
import { RequestDebuggingMiddleware } from "./middlewares";

export function app(): express.Express {
	const server = express();
	const serverDistFolder = dirname(fileURLToPath(import.meta.url));
	const browserDistFolder = resolve(serverDistFolder, "../browser");
	const indexHtml = join(serverDistFolder, "index.server.html");

	const commonEngine = new CommonEngine();

	server.set("view engine", "html");
	server.set("views", browserDistFolder); // Example Express Rest API endpoints

	server.use(new RequestDebuggingMiddleware().invoke);

	// (useStaticFiles)
	server.get(
		"**",
		express.static(browserDistFolder, {
			maxAge: "1y",
			index: "index.html",
		}),
	);

	// All regular routes use the Angular engine (mapAngularPages)
	server.get("**", (req, res, next) => {
		const { protocol, originalUrl, baseUrl, headers } = req;

		commonEngine
			.render({
				bootstrap,
				documentFilePath: indexHtml,
				url: `${protocol}://${headers.host}${originalUrl}`,
				publicPath: browserDistFolder,
				providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
			})
			.then((html) => res.send(html))
			.catch((err) => next(err));
	});

	return server;
}

function run(): void {
	const port = process.env["PORT"] || 9996;

	// Start up the Node server
	const server = app();

	server.listen(port, () => {
		console.log(`Now listening on http://localhost:${port}`);
	});
}

run();
