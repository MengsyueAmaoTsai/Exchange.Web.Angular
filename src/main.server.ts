import { bootstrapApplication } from "@angular/platform-browser";
import { config } from "./app.config.server";
import { TerminalComponent } from "./terminal.component";

const bootstrap = () => bootstrapApplication(TerminalComponent, config);

export default bootstrap;
