import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StatusBarComponent } from "./components/status-bar/status-bar.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { SvgProviderComponent } from "./svg-provider.component";

@Component({
	selector: "exchange",
	templateUrl: "./exchange.component.html",
	styleUrls: ["./exchange.component.scss"],
	standalone: true,
	imports: [
		RouterOutlet,
		SvgProviderComponent,
		TopBarComponent,
		StatusBarComponent,
	],
})
export class ExchangeComponent {}
