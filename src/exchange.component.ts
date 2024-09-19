import { isPlatformServer } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import type { OnInit } from "@angular/core";
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
export class ExchangeComponent implements OnInit {
	public platformId = inject(PLATFORM_ID);

	public ngOnInit(): void {
		console.log("ExchangeComponent initialized");

		if (isPlatformServer(this.platformId)) {
			console.log("[ExchangeComponent:OnInit] Running on the server");
		} else {
			console.log("[Running on the cl:OnInit] Running on the client");
		}
	}
}
