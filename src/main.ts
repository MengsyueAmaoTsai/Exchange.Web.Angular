import { bootstrapApplication } from "@angular/platform-browser";
import {
	allComponents,
	provideFluentDesignSystem,
} from "@fluentui/web-components";
import { appConfig } from "./app.config";
import { TerminalComponent } from "./terminal.component";

provideFluentDesignSystem().register(allComponents);

bootstrapApplication(TerminalComponent, appConfig).catch((err) =>
	console.error(err),
);
