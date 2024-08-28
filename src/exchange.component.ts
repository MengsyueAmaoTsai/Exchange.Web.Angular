import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "exchange",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./exchange.component.html",
	styleUrls: ["./exchange.component.scss"],
})
export class ExchangeComponent {}
