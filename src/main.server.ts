import { bootstrapApplication } from "@angular/platform-browser";
import { config } from "./app.config.server";
import { ExchangeComponent } from "./exchange.component";

const bootstrap = () => bootstrapApplication(ExchangeComponent, config);

export default bootstrap;
