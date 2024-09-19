import { isPlatformServer } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import type { InjectionToken, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StatusBarComponent } from "./components/status-bar/status-bar.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { DefaultLogger } from "./infrastructure/logging";
import type { ILogger } from "./infrastructure/logging";
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
	providers: [
		{
			provide: "ILogger<ExchangeComponent>",
			useFactory: () => new DefaultLogger<ExchangeComponent>(ExchangeComponent),
		},
	],
})
export class ExchangeComponent implements OnInit {
	private readonly logger = inject(
		"ILogger<ExchangeComponent>" as unknown as InjectionToken<
			ILogger<ExchangeComponent>
		>,
	);

	private readonly platformId = inject(PLATFORM_ID);

	public ngOnInit(): void {
		this.logger.logInformation("ExchangeComponent initialized");

		if (isPlatformServer(this.platformId)) {
			this.logger.logInformation(
				"[Exchange:OnInit:Server] Running on the server",
			);
		} else {
			this.logger.logInformation(
				"[Exchange:OnInit:Client] Running on the client",
			);
		}
	}
}
