import { bootstrapApplication } from "@angular/platform-browser";
import {
	allComponents,
	provideFluentDesignSystem,
} from "@fluentui/web-components";
import { appConfig } from "./app.config";
import { ExchangeComponent } from "./exchange.component";

provideFluentDesignSystem().register(allComponents);

bootstrapApplication(ExchangeComponent, appConfig).catch((err) =>
	console.error(err),
);
