import { bootstrapApplication } from "@angular/platform-browser";
import {
	allComponents,
	provideFluentDesignSystem,
} from "@fluentui/web-components";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/terminal.component";

provideFluentDesignSystem().register(allComponents);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
	console.error(err),
);
