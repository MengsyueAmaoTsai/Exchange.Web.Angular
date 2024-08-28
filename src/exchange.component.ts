import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TopBarComponent } from "./components/top-bar/top-bar.component";

@Component({
	selector: "exchange",
	templateUrl: "./exchange.component.html",
	styleUrls: ["./exchange.component.scss"],
	standalone: true,
	imports: [RouterOutlet, TopBarComponent],
})
export class ExchangeComponent {}
