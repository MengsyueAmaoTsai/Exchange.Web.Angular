import { bootstrapApplication } from "@angular/platform-browser";
import {
	allComponents,
	provideFluentDesignSystem,
} from "@fluentui/web-components";
import { AppComponent } from "./app/app.component";
import { appConfig } from "./app/app.config";

provideFluentDesignSystem().register(allComponents);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
	console.error(err),
);
