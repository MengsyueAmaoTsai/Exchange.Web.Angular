import { bootstrapApplication } from "@angular/platform-browser";
import { config } from "./app/app.config.server";
import { TerminalComponent } from "./app/terminal.component";

const bootstrap = () => bootstrapApplication(TerminalComponent, config);

export default bootstrap;
