import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "terminal",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./terminal.component.html",
	styleUrls: ["./terminal.component.scss"],
})
export class TerminalComponent {}
