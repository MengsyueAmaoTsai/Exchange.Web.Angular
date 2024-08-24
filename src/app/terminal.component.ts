import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "terminal",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./terminal.component.html",
	styleUrl: "./terminal.component.scss",
})
export class AppComponent {
	title = "exchange";
}
