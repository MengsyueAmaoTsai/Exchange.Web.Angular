import { bootstrapApplication } from "@angular/platform-browser";
import {
	allComponents,
	provideFluentDesignSystem,
} from "@fluentui/web-components";
import { appConfig } from "./app/app.config";
import { TerminalComponent } from "./app/terminal.component";

provideFluentDesignSystem().register(allComponents);

bootstrapApplication(TerminalComponent, appConfig).catch((err) =>
	console.error(err),
);
