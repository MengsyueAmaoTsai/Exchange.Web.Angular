import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TopBarComponent } from "./components/top-bar/top-bar.component";

@Component({
	selector: "terminal",
	standalone: true,
	imports: [RouterOutlet, TopBarComponent],
	templateUrl: "./terminal.component.html",
	styleUrl: "./terminal.component.scss",
})
export class AppComponent {
	title = "exchange";
}
